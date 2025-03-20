"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

declare global {
  interface Window {
    tarteaucitron: any;
    gtag: any;
    dataLayer: any[];
    tarteaucitronForceLanguage: string;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const hasCookieConsent = document.cookie.indexOf('webwizardry_consent=') >= 0;
    
    if (!hasCookieConsent) {
      loadTarteaucitronScripts(() => {
        setScriptsLoaded(true);
        setShowBanner(true);
      });
    } else {
      loadTarteaucitronScripts(() => {
        setScriptsLoaded(true);
        initializeTarteaucitronSilently();
      });
      
      // Restaurer les préférences si elles existent
      restorePreferences();
    }
  }, []);

  // Fonction pour charger tarteaucitron et ses dépendances
  const loadTarteaucitronScripts = (callback: () => void) => {
    // Forcer la langue française
    window.tarteaucitronForceLanguage = 'fr';
    
    // Charger CSS
    const loadCSS = (href: string, id: string) => {
      if (document.getElementById(id)) return;
      
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };
    
    // Charger scripts
    const loadScript = (src: string, id: string, callback?: () => void) => {
      if (document.getElementById(id)) {
        if (callback) callback();
        return;
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = true;
      
      script.onload = () => {
        if (callback) callback();
      };
      
      document.head.appendChild(script);
    };
    
    // Séquence de chargement
    loadCSS('/css/tarteaucitron.css', 'tarteaucitron-css');
    
    loadScript('/tarteaucitron.js', 'tarteaucitron-js', () => {
      loadScript('/tarteaucitron/lang/tarteaucitron.fr.js', 'tarteaucitron-lang-fr', () => {
        loadScript('/tarteaucitron.services.js', 'tarteaucitron-services', () => {
          if (callback) callback();
        });
      });
    });
  };
  
  // Initialiser tarteaucitron silencieusement (sans afficher sa bannière)
  const initializeTarteaucitronSilently = () => {
    if (typeof window !== 'undefined' && window.tarteaucitron) {
      try {
        // Configurer l'utilisateur Google Tag Manager
        window.tarteaucitron.user = window.tarteaucitron.user || {};
        window.tarteaucitron.user.gtmId = 'GTM-TXBFCDCG';
        
        // Initialiser avec les options silencieuses
        window.tarteaucitron.init({
          "privacyUrl": "/legal/politique-de-confidentialite",
          "cookieName": "webwizardry_consent",
          "orientation": "bottom",
          "showAlertSmall": false,
          "cookieslist": false, 
          "showIcon": false,
          "removeCredit": true,
          "highPrivacy": false
        });
        
        // Ajouter les services
        (window.tarteaucitron.job = window.tarteaucitron.job || []).push('googletagmanager');
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de tarteaucitron:', error);
      }
    }
  };
  
  // Restaurer les préférences utilisateur depuis les cookies
  const restorePreferences = () => {
    try {
      const cookieValue = document.cookie.split('; ')
        .find(row => row.startsWith('webwizardry_consent='))
        ?.split('=')[1];
      
      if (cookieValue && cookieValue !== 'all' && cookieValue !== 'none') {
        const preferences = JSON.parse(cookieValue);
        setAnalyticsEnabled(preferences.analytics || false);
      } else if (cookieValue === 'all') {
        setAnalyticsEnabled(true);
      }
    } catch (e) {
      console.error("Erreur lors de la lecture des préférences:", e);
    }
  };
  
  // Fonction pour envoyer les statistiques de consentement à Google Analytics
  const trackConsentToAnalytics = (action: 'accept_all' | 'deny_all' | 'customize', preferences?: any) => {
    if (window.gtag) {
      window.gtag('event', action, {
        'event_category': 'Cookie Consent',
        'event_label': preferences ? JSON.stringify(preferences) : 'User choice',
        'non_interaction': false
      });
    }
  };
  
  // Handlers pour les différentes actions
  const handleAcceptAll = () => {
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 13);
    
    document.cookie = `webwizardry_consent=all; expires=${expiryDate.toUTCString()}; path=/;`;
    
    if (window.tarteaucitron) {
      try {
        window.tarteaucitron.userInterface.respondAll(true);
      } catch (error) {
        // Utilisation de la méthode alternative
        if (window.tarteaucitron.job && Array.isArray(window.tarteaucitron.job)) {
          window.tarteaucitron.job.forEach((service: string) => {
            try {
              window.tarteaucitron.userInterface.respond(document.getElementById(service), true);
            } catch (e) {
              window.tarteaucitron.cookie.create('tarteaucitron_' + service, 'true');
            }
          });
        }
        
        window.tarteaucitron.cookie.create('tarteaucitron', 'true');
        window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'true');
        
        if (window.gtag) {
          window.gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'granted'
          });
        }
      }
    }
    
    trackConsentToAnalytics('accept_all');
    setAnalyticsEnabled(true);
    setShowBanner(false);
    setShowDialog(false);
    
    // Recharger la page après un court délai
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  
  const handleDenyAll = () => {
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 13);
    
    document.cookie = `webwizardry_consent=none; expires=${expiryDate.toUTCString()}; path=/;`;
    
    if (window.tarteaucitron) {
      try {
        window.tarteaucitron.userInterface.respondAll(false);
      } catch (error) {
        // Utilisation de la méthode alternative
        if (window.tarteaucitron.job && Array.isArray(window.tarteaucitron.job)) {
          window.tarteaucitron.job.forEach((service: string) => {
            try {
              window.tarteaucitron.userInterface.respond(document.getElementById(service), false);
            } catch (e) {
              window.tarteaucitron.cookie.create('tarteaucitron_' + service, 'false');
            }
          });
        }
        
        window.tarteaucitron.cookie.create('tarteaucitron', 'false');
        window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'false');
        
        if (window.gtag) {
          window.gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });
        }
      }
    }
    
    trackConsentToAnalytics('deny_all');
    setAnalyticsEnabled(false);
    setShowBanner(false);
    setShowDialog(false);
    
    // Recharger la page après un court délai
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  
  const handleSavePreferences = () => {
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 13);
    
    const preferences = {
      analytics: analyticsEnabled
    };
    
    document.cookie = `webwizardry_consent=${JSON.stringify(preferences)}; expires=${expiryDate.toUTCString()}; path=/;`;
    
    if (window.tarteaucitron) {
      try {
        if (analyticsEnabled) {
          window.tarteaucitron.userInterface.respond(document.getElementById('googletagmanager'), true);
        } else {
          window.tarteaucitron.userInterface.respond(document.getElementById('googletagmanager'), false);
        }
      } catch (error) {
        console.log('Erreur lors de la personnalisation, utilisation de la méthode alternative');
        
        if (analyticsEnabled) {
          window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'true');
        } else {
          window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'false');
        }
        
        if (window.gtag) {
          window.gtag('consent', 'update', {
            'analytics_storage': analyticsEnabled ? 'granted' : 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'ad_storage': 'denied',
            'security_storage': 'granted'
          });
        }
      }
    }
    
    trackConsentToAnalytics('customize', preferences);
    setShowBanner(false);
    setShowDialog(false);
    
    // Recharger la page après un court délai
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // Si les scripts ne sont pas chargés ou l'utilisateur a déjà consenti, ne rien afficher
  if (!scriptsLoaded || (!showBanner && !showDialog)) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <Card className="fixed bottom-4 left-4 w-[350px] z-50 shadow-lg border-slate-200 dark:border-slate-800">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-base">Gestion des cookies</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Web Wizardry utilise des cookies pour améliorer votre expérience et analyser notre trafic.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={handleDenyAll}>
              Refuser
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowDialog(true)}>
              Personnaliser
              </Button>
            <Button size="sm" onClick={handleAcceptAll}>
              Accepter
              </Button>
          </CardFooter>
        </Card>
      )}
      
      <Dialog open={showDialog} onOpenChange={(open) => {
        if (!open) setShowBanner(true);
        setShowDialog(open);
      }}>
        <DialogContent className="max-w-3xl" aria-describedby="privacy-description">
          <DialogHeader>
            <DialogTitle>Paramètres de confidentialité</DialogTitle>
            <DialogDescription id="privacy-description" className="text-sm text-muted-foreground">
              Web Wizardry utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
              Vous pouvez en savoir plus sur les cookies que nous utilisons ou les désactiver en cliquant sur les différentes catégories ci-dessous.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-2">
            <Accordion type="multiple" defaultValue={[]} className="w-full">
              <AccordionItem value="necessary" className="border-b">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <div className="font-medium text-base">Nécessaire</div>
                    <div className="text-sm text-emerald-600 ml-auto mr-4">Toujours actif</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-sm text-muted-foreground mb-4">
                    Les cookies nécessaires sont requis pour permettre les fonctionnalités de base de ce site, 
                    telles que la sécurité, la gestion du réseau, et la mémorisation de vos préférences de consentement. 
                    Ces cookies ne contiennent pas d'informations personnelles identifiables.
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[25%]">Nom</TableHead>
                        <TableHead className="w-[55%]">Finalité</TableHead>
                        <TableHead className="w-[20%]">Durée</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">webwizardry_consent</TableCell>
                        <TableCell>Stocke vos préférences de consentement aux cookies</TableCell>
                        <TableCell>13 mois</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="analytics" className="border-b">
                <div className="flex items-center justify-between w-full py-4 cursor-pointer" onClick={() => {
                  const button = document.querySelector('[data-accordion-trigger="analytics"]');
                  if (button instanceof HTMLElement) {
                    button.click();
                  }
                }}>
                  <div className="font-medium text-base">Analyse</div>
                  <div className="flex items-center">
                    <div className="mr-4" onClick={(e) => e.stopPropagation()}>
                      <Switch 
                        checked={analyticsEnabled} 
                        onCheckedChange={setAnalyticsEnabled}
                      />
                    </div>
                    <AccordionTrigger data-accordion-trigger="analytics" className="w-4 h-4 p-0 relative left-0 translate-x-0" />
                  </div>
                </div>
                <AccordionContent>
                  <div className="text-sm text-muted-foreground mb-4">
                    Les cookies d'analyse sont utilisés pour comprendre comment les visiteurs interagissent avec le site. 
                    Ces cookies aident à fournir des informations sur les métriques telles que le nombre de visiteurs, 
                    le taux de rebond, la source de trafic, etc.
            </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[25%]">Nom</TableHead>
                        <TableHead className="w-[55%]">Finalité</TableHead>
                        <TableHead className="w-[20%]">Durée</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">_ga</TableCell>
                        <TableCell>Utilisé par Google Analytics pour distinguer les utilisateurs uniques</TableCell>
                        <TableCell>2 ans</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">_ga_3LLBL993Q4</TableCell>
                        <TableCell>Utilisé par Google Analytics pour identifier une session de visite sur Web Wizardry</TableCell>
                        <TableCell>2 ans</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">_gid</TableCell>
                        <TableCell>Utilisé par Google Analytics pour distinguer les utilisateurs</TableCell>
                        <TableCell>24 heures</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">_gat</TableCell>
                        <TableCell>Utilisé par Google Analytics pour limiter le taux de requêtes</TableCell>
                        <TableCell>1 minute</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="outline" onClick={handleDenyAll}>
              Tout refuser
            </Button>
            <Button variant="default" onClick={handleSavePreferences}>
              Enregistrer mes préférences
            </Button>
            <Button onClick={handleAcceptAll}>
              Tout accepter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
} 