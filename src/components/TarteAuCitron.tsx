"use client"

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    tarteaucitron: any;
    gtag: any;
    dataLayer: any[];
    tarteaucitronForceLanguage: string;
  }
}

export default function TarteAuCitron() {
  const [showCustomizePanel, setShowCustomizePanel] = useState(false);
  
  useEffect(() => {
    // Supprimer tout élément tarteaucitron existant pour repartir de zéro
    const cleanup = () => {
      // Supprimer les éléments créés manuellement précédemment
      const existingElements = [
        'tarteaucitronRoot', 
        'tac_banner', 
        'tac_customize_panel',
        'tarteaucitron-manual-css'
      ];
      
      existingElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.remove();
      });
      
      // Vérifier si c'est la première visite en vérifiant les cookies
      const hasCookieConsent = document.cookie.indexOf('webwizardry_consent=') >= 0;
      
      // Supprimer les cookies tarteaucitron pour forcer la réapparition de la bannière
      // seulement si on veut tester, sinon on les conserve
      if (!hasCookieConsent || window.location.href.indexOf('reset_cookies=1') >= 0) {
        document.cookie = "webwizardry_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "tarteaucitron=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
      
      return hasCookieConsent;
    };
    
    const hasCookieConsent = cleanup();
    
    // Fonction pour créer directement la bannière style Axeptio
    const createBanner = () => {
      console.log("Création d'une bannière style Axeptio");
      
      // 1. Ajouter les styles nécessaires
      if (!document.getElementById('tarteaucitron-manual-css')) {
        const style = document.createElement('style');
        style.id = 'tarteaucitron-manual-css';
        style.innerHTML = `
          #tac_banner {
            position: fixed;
            z-index: 999999;
            bottom: 20px;
            left: 20px;
            width: 330px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            font-family: 'Arial', sans-serif;
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
            animation: tacFadeIn 0.5s forwards;
          }
          
          @keyframes tacFadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          #tac_banner_content {
            padding: 16px;
          }
          
          #tac_banner_title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
            color: #333;
          }
          
          #tac_banner_text {
            font-size: 13px;
            line-height: 1.4;
            margin-bottom: 16px;
            color: #666;
          }
          
          .tac_buttons {
            display: flex;
            gap: 8px;
          }
          
          .tac_btn {
            flex: 1;
            padding: 8px 12px;
            border-radius: 4px;
            border: none;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
          }
          
          .tac_btn:hover {
            opacity: 0.9;
          }
          
          .tac_btn_deny {
            background: #f1f1f1;
            color: #666;
          }
          
          .tac_btn_customize {
            background: #f1f1f1;
            color: #666;
          }
          
          .tac_btn_allow {
            background: #3281ff;
            color: white;
            flex: 2;
          }
          
          .tac_policy_link {
            text-align: center;
            margin-top: 12px;
            font-size: 11px;
          }
          
          .tac_policy_link a {
            color: #3281ff;
            text-decoration: none;
          }
          
          .tac_policy_link a:hover {
            text-decoration: underline;
          }
          
          /* Panel de personnalisation */
          #tac_customize_panel {
            position: fixed;
            z-index: 999999;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            display: none;
            overflow-y: auto;
          }
          
          #tac_customize_panel.tac_panel_open {
            display: block;
          }
          
          #tac_overlay {
            position: fixed;
            z-index: 999998;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          
          #tac_overlay.tac_overlay_visible {
            opacity: 1;
            pointer-events: auto;
          }
          
          .tac_panel_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            border-bottom: 1px solid #eee;
          }
          
          .tac_panel_title {
            font-size: 22px;
            font-weight: bold;
            color: #333;
          }
          
          .tac_panel_close {
            background: none;
            border: none;
            font-size: 24px;
            color: #999;
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
          }
          
          .tac_panel_body {
            padding: 20px 25px;
          }
          
          .tac_panel_description {
            font-size: 14px;
            line-height: 1.6;
            color: #555;
            margin-bottom: 25px;
          }
          
          .tac_panel_description a {
            color: #3281ff;
            text-decoration: none;
          }
          
          .tac_services {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          
          .tac_service_category {
            border: 1px solid #eee;
            border-radius: 5px;
            overflow: hidden;
          }
          
          .tac_category_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: #f9f9f9;
            cursor: pointer;
          }
          
          .tac_category_name {
            font-weight: 600;
            font-size: 16px;
            color: #333;
          }
          
          .tac_category_status {
            font-size: 14px;
            color: #4CAF50;
            font-weight: 500;
          }
          
          .tac_category_body {
            padding: 15px 20px;
            border-top: 1px solid #eee;
            font-size: 14px;
            line-height: 1.5;
            color: #666;
            display: none;
          }
          
          .tac_category_body p {
            margin: 0;
          }
          
          .tac_service_category[data-expanded="true"] .tac_category_body {
            display: block;
          }
          
          /* Toggle switch */
          .tac_toggle {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
          }
          
          .tac_toggle input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .tac_slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .3s;
            border-radius: 34px;
          }
          
          .tac_slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .3s;
            border-radius: 50%;
          }
          
          input:checked + .tac_slider {
            background-color: #4CAF50;
          }
          
          input:checked + .tac_slider:before {
            transform: translateX(26px);
          }
          
          .tac_panel_footer {
            padding: 20px 25px;
            background: #f9f9f9;
            display: flex;
            justify-content: space-between;
            gap: 15px;
            border-top: 1px solid #eee;
            position: sticky;
            bottom: 0;
          }
          
          .tac_panel_btn {
            padding: 12px 16px;
            border-radius: 4px;
            border: none;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
          
          .tac_panel_btn_deny {
            background: #f1f1f1;
            color: #666;
            min-width: 140px;
          }
          
          .tac_panel_btn_save {
            background: #3281ff;
            color: white;
            min-width: 200px;
          }
          
          .tac_panel_btn_allow {
            background: #4CAF50;
            color: white;
            min-width: 140px;
          }
          
          .tac_cookies_list {
            margin-top: 12px;
            border-top: 1px dashed #eee;
            padding-top: 12px;
          }
          
          .tac_cookie_item {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px dashed #eee;
          }
          
          .tac_cookie_item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
          }
          
          .tac_cookie_name {
            font-weight: 600;
            font-size: 13px;
            color: #333;
            margin-bottom: 2px;
          }
          
          .tac_cookie_description {
            font-size: 12px;
            color: #666;
            margin-bottom: 2px;
          }
          
          .tac_cookie_duration {
            font-size: 11px;
            color: #999;
            font-style: italic;
          }
        `;
        document.head.appendChild(style);
      }
      
      // 2. Créer la bannière compacte
      const banner = document.createElement('div');
      banner.id = 'tac_banner';
      
      const content = document.createElement('div');
      content.id = 'tac_banner_content';
      
      // 3. Ajouter le contenu
      content.innerHTML = `
        <div id="tac_banner_title">Gestion de vos préférences sur les cookies</div>
        <div id="tac_banner_text">
          Nous utilisons des cookies pour personnaliser votre expérience et analyser notre trafic.
        </div>
        
        <div class="tac_buttons">
          <button id="tac_deny_all" class="tac_btn tac_btn_deny">Refuser</button>
          <button id="tac_customize" class="tac_btn tac_btn_customize">Personnaliser</button>
          <button id="tac_allow_all" class="tac_btn tac_btn_allow">Accepter</button>
        </div>
        
        <div class="tac_policy_link">
          <a href="/legal/politique-de-confidentialite" target="_blank">Politique de confidentialité</a>
        </div>
      `;
      
      banner.appendChild(content);
      document.body.appendChild(banner);
      
      // 4. Créer le panneau de personnalisation
      const overlay = document.createElement('div');
      overlay.id = 'tac_overlay';
      
      const customizePanel = document.createElement('div');
      customizePanel.id = 'tac_customize_panel';
      
      customizePanel.innerHTML = `
        <div class="tac_panel_header">
          <div class="tac_panel_title">Paramètres de confidentialité</div>
          <button class="tac_panel_close" id="tac_panel_close">&times;</button>
        </div>
        
        <div class="tac_panel_body">
          <div class="tac_panel_description">
            Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
            Vous pouvez en savoir plus sur les cookies que nous utilisons ou les désactiver en cliquant sur les différentes catégories ci-dessous.
            <a href="#" id="tac_show_more">En savoir plus</a>
          </div>
          
          <div class="tac_services">
            <div class="tac_service_category" data-category="necessary">
              <div class="tac_category_header">
                <span class="tac_category_name">Nécessaire</span>
                <span class="tac_category_status">Toujours actif</span>
              </div>
              <div class="tac_category_body">
                <p>Les cookies nécessaires sont requis pour permettre les fonctionnalités de base de ce site, telles que la sécurité, la gestion du réseau, et la mémorisation de vos préférences de consentement. Ces cookies ne contiennent pas d'informations personnelles identifiables.</p>
                <div class="tac_cookies_list">
                  <div class="tac_cookie_item">
                    <div class="tac_cookie_name">webwizardry_consent</div>
                    <div class="tac_cookie_description">Stocke vos préférences de consentement aux cookies</div>
                    <div class="tac_cookie_duration">13 mois</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="tac_service_category" data-category="analytics">
              <div class="tac_category_header">
                <span class="tac_category_name">Analyse</span>
                <label class="tac_toggle">
                  <input type="checkbox" id="tac_analytics_panel">
                  <span class="tac_slider"></span>
                </label>
              </div>
              <div class="tac_category_body">
                <p>Les cookies d'analyse sont utilisés pour comprendre comment les visiteurs interagissent avec le site. Ces cookies aident à fournir des informations sur les métriques telles que le nombre de visiteurs, le taux de rebond, la source de trafic, etc.</p>
                <div class="tac_cookies_list">
                  <div class="tac_cookie_item">
                    <div class="tac_cookie_name">_ga</div>
                    <div class="tac_cookie_description">Utilisé par Google Analytics pour distinguer les utilisateurs uniques</div>
                    <div class="tac_cookie_duration">2 ans</div>
                  </div>
                  <div class="tac_cookie_item">
                    <div class="tac_cookie_name">_ga_3LLBL993Q4</div>
                    <div class="tac_cookie_description">Utilisé par Google Analytics pour identifier une session de visite</div>
                    <div class="tac_cookie_duration">2 ans</div>
                  </div>
                  <div class="tac_cookie_item">
                    <div class="tac_cookie_name">_gid</div>
                    <div class="tac_cookie_description">Utilisé par Google Analytics pour distinguer les utilisateurs</div>
                    <div class="tac_cookie_duration">24 heures</div>
                  </div>
                  <div class="tac_cookie_item">
                    <div class="tac_cookie_name">_gat</div>
                    <div class="tac_cookie_description">Utilisé par Google Analytics pour limiter le taux de requêtes</div>
                    <div class="tac_cookie_duration">1 minute</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tac_panel_footer">
          <button id="tac_panel_deny_all" class="tac_panel_btn tac_panel_btn_deny">Tout refuser</button>
          <button id="tac_panel_save" class="tac_panel_btn tac_panel_btn_save">Enregistrer mes préférences</button>
          <button id="tac_panel_allow_all" class="tac_panel_btn tac_panel_btn_allow">Tout accepter</button>
        </div>
      `;
      
      document.body.appendChild(overlay);
      document.body.appendChild(customizePanel);
      
      // 5. Ajouter les événements
      
      // Fonction pour envoyer les statistiques de consentement à Google Analytics
      const trackConsentToAnalytics = (action: 'accept_all' | 'deny_all' | 'customize', preferences?: any) => {
        if (window.gtag) {
          // Envoyer l'événement de consentement
          window.gtag('event', action, {
            'event_category': 'Cookie Consent',
            'event_label': preferences ? JSON.stringify(preferences) : 'User choice',
            'non_interaction': false
          });
          
          console.log(`Statistique de consentement envoyée à Google Analytics: ${action}`);
        }
      };

      // Fonction pour sauvegarder les préférences
      const savePreferences = (acceptAll = false, denyAll = false) => {
        // Créer un cookie qui expire dans 13 mois (en accord avec la réglementation RGPD)
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 13);
        
        if (acceptAll) {
          // Tout accepter
          document.cookie = `webwizardry_consent=all; expires=${expiryDate.toUTCString()}; path=/;`;
          if (window.tarteaucitron) {
            try {
              window.tarteaucitron.userInterface.respondAll(true);
            } catch (error) {
              console.log('Erreur lors de l\'appel à respondAll, utilisation de la méthode alternative');
              // Méthode alternative pour activer tous les services
              if (window.tarteaucitron.job && Array.isArray(window.tarteaucitron.job)) {
                window.tarteaucitron.job.forEach((service: string) => {
                  try {
                    window.tarteaucitron.userInterface.respond(document.getElementById(service), true);
                  } catch (e) {
                    // Si le service n'est pas trouvé, on l'ajoute manuellement
                    window.tarteaucitron.cookie.create('tarteaucitron_' + service, 'true');
                  }
                });
              }
              
              // Définir le consentement global manuellement
              window.tarteaucitron.cookie.create('tarteaucitron', 'true');
              
              // Activation du service Google Tag Manager
              window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'true');
              
              // Mettre à jour le consentement Google si disponible
              if (window.gtag) {
                window.gtag('consent', 'update', {
                  'ad_storage': 'granted',
                  'analytics_storage': 'granted',
                  'personalization_storage': 'granted',
                  'functionality_storage': 'granted'
                });
              }
            }
            
            // Suivre l'action dans Google Analytics
            trackConsentToAnalytics('accept_all');
          }
        } else if (denyAll) {
          // Tout refuser
          document.cookie = `webwizardry_consent=none; expires=${expiryDate.toUTCString()}; path=/;`;
          if (window.tarteaucitron) {
            try {
              window.tarteaucitron.userInterface.respondAll(false);
            } catch (error) {
              console.log('Erreur lors de l\'appel à respondAll, utilisation de la méthode alternative');
              // Méthode alternative pour désactiver tous les services
              if (window.tarteaucitron.job && Array.isArray(window.tarteaucitron.job)) {
                window.tarteaucitron.job.forEach((service: string) => {
                  try {
                    window.tarteaucitron.userInterface.respond(document.getElementById(service), false);
                  } catch (e) {
                    // Si le service n'est pas trouvé, on ajoute manuellement un cookie de refus
                    window.tarteaucitron.cookie.create('tarteaucitron_' + service, 'false');
                  }
                });
              }
              
              // Définir le consentement global manuellement
              window.tarteaucitron.cookie.create('tarteaucitron', 'false');
              
              // Désactivation du service Google Tag Manager
              window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'false');
              
              // Mettre à jour le consentement Google si disponible
              if (window.gtag) {
                window.gtag('consent', 'update', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                  'personalization_storage': 'denied',
                  'functionality_storage': 'denied',
                  'security_storage': 'granted'
                });
              }
            }
            
            // Suivre l'action dans Google Analytics
            trackConsentToAnalytics('deny_all');
          }
        } else {
          // Personnaliser
          const analytics = document.getElementById('tac_analytics_panel') as HTMLInputElement;
          
          const preferences = {
            analytics: analytics && analytics.checked
          };
          
          document.cookie = `webwizardry_consent=${JSON.stringify(preferences)}; expires=${expiryDate.toUTCString()}; path=/;`;
          
          if (window.tarteaucitron) {
            try {
              // Essayer d'utiliser l'API tarteaucitron
              if (analytics && analytics.checked) {
                window.tarteaucitron.userInterface.respond(document.getElementById('googletagmanager'), true);
              } else {
                window.tarteaucitron.userInterface.respond(document.getElementById('googletagmanager'), false);
              }
              
            } catch (error) {
              console.log('Erreur lors de la personnalisation, utilisation de la méthode alternative');
              
              // Méthode alternative pour définir les préférences
              if (analytics && analytics.checked) {
                window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'true');
              } else {
                window.tarteaucitron.cookie.create('tarteaucitron_googletagmanager', 'false');
              }
              
              // Mettre à jour le consentement Google si disponible
              if (window.gtag) {
                window.gtag('consent', 'update', {
                  'analytics_storage': analytics && analytics.checked ? 'granted' : 'denied',
                  'functionality_storage': 'denied',
                  'personalization_storage': 'denied',
                  'ad_storage': 'denied',
                  'security_storage': 'granted'
                });
              }
            }
          }
          
          // Suivre l'action dans Google Analytics
          trackConsentToAnalytics('customize', preferences);
        }
        
        // Fermer bannière et panneau
        hideBannerAndPanel();
        
        // Recharger la page après un court délai pour appliquer les préférences
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };
      
      // Fonction pour ouvrir le panneau de personnalisation
      const openCustomizePanel = () => {
        customizePanel.classList.add('tac_panel_open');
        overlay.classList.add('tac_overlay_visible');
      };
      
      // Fonction pour fermer le panneau de personnalisation
      const closeCustomizePanel = () => {
        customizePanel.classList.remove('tac_panel_open');
        overlay.classList.remove('tac_overlay_visible');
      };
      
      // Fonction pour masquer bannière et panneau
      const hideBannerAndPanel = () => {
        banner.style.display = 'none';
        closeCustomizePanel();
      };
      
      // Événements de la bannière
      document.getElementById('tac_deny_all')?.addEventListener('click', () => {
        savePreferences(false, true);
      });
      
      document.getElementById('tac_allow_all')?.addEventListener('click', () => {
        savePreferences(true, false);
      });
      
      document.getElementById('tac_customize')?.addEventListener('click', () => {
        openCustomizePanel();
      });
      
      // Événements du panneau
      document.getElementById('tac_panel_close')?.addEventListener('click', () => {
        closeCustomizePanel();
      });
      
      document.getElementById('tac_panel_deny_all')?.addEventListener('click', () => {
        savePreferences(false, true);
      });
      
      document.getElementById('tac_panel_save')?.addEventListener('click', () => {
        savePreferences(false, false);
      });
      
      // Ajouter gestionnaire pour le nouveau bouton Tout accepter dans le panneau
      document.getElementById('tac_panel_allow_all')?.addEventListener('click', () => {
        savePreferences(true, false);
      });
      
      // Ajouter gestionnaires pour l'expansion/contraction des catégories
      document.querySelectorAll('.tac_category_header').forEach(header => {
        header.addEventListener('click', (e) => {
          // Ne pas déclencher l'expansion si on clique sur le toggle
          if ((e.target as HTMLElement).closest('.tac_toggle')) return;
          
          const category = header.closest('.tac_service_category');
          if (category) {
            const isExpanded = category.getAttribute('data-expanded') === 'true';
            category.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
          }
        });
      });
      
      // Gestionnaire pour le lien "En savoir plus"
      document.getElementById('tac_show_more')?.addEventListener('click', (e) => {
        e.preventDefault();
        // Développer toutes les catégories
        document.querySelectorAll('.tac_service_category').forEach(category => {
          category.setAttribute('data-expanded', 'true');
        });
      });
      
      // Si des préférences existent déjà, les appliquer aux toggles
      try {
        const cookieValue = document.cookie.split('; ')
          .find(row => row.startsWith('webwizardry_consent='))
          ?.split('=')[1];
        
        if (cookieValue && cookieValue !== 'all' && cookieValue !== 'none') {
          const preferences = JSON.parse(cookieValue);
          
          const analyticsToggle = document.getElementById('tac_analytics_panel') as HTMLInputElement;
          
          if (analyticsToggle && preferences.analytics) analyticsToggle.checked = true;
        } else if (cookieValue === 'all') {
          // Si toutes les options ont été acceptées précédemment
          document.querySelectorAll('.tac_toggle input[type="checkbox"]').forEach((checkbox) => {
            // Convertir explicitement l'élément en HTMLInputElement
            (checkbox as HTMLInputElement).checked = true;
          });
        }
      } catch (e) {
        console.error("Erreur lors de la lecture des préférences:", e);
      }
      
      // Rétablir le gestionnaire d'overlay
      overlay.addEventListener('click', () => {
        closeCustomizePanel();
      });
    };
    
    // Fonction pour charger un script
    const loadScript = (src: string, id: string, callback?: () => void) => {
      // Vérifier si le script existe déjà
      if (document.getElementById(id)) {
        if (callback) callback();
        return;
      }
      
      console.log(`Chargement du script ${src}...`);
      
      // Créer le script
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = true;
      
      // Fonction de callback quand le script est chargé
      script.onload = () => {
        console.log(`Script ${src} chargé avec succès`);
        if (callback) callback();
      };
      
      script.onerror = (e) => {
        console.error(`Erreur lors du chargement du script ${src}`, e);
      };
      
      // Ajouter le script au document
      document.head.appendChild(script);
    };
    
    // Charger les styles
    const loadCSS = (href: string, id: string) => {
      if (document.getElementById(id)) return;
      
      console.log(`Chargement du CSS ${href}...`);
      
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => {
        console.log(`CSS ${href} chargé avec succès`);
      };
      link.onerror = (e) => {
        console.error(`Erreur lors du chargement du CSS ${href}`, e);
      };
      document.head.appendChild(link);
    };
    
    // Si l'utilisateur a déjà donné son consentement, ne pas afficher la bannière
    if (hasCookieConsent) {
      console.log("L'utilisateur a déjà donné son consentement, chargement de tarteaucitron sans bannière");
      
      // Charger tarteaucitron quand même pour gérer les services
      loadCSS('/css/tarteaucitron.css', 'tarteaucitron-css');
      loadScript('/tarteaucitron.js', 'tarteaucitron-js', () => {
        loadScript('/tarteaucitron/lang/tarteaucitron.fr.js', 'tarteaucitron-lang-fr', () => {
          loadScript('/tarteaucitron.services.js', 'tarteaucitron-services', () => {
            // Initialiser tarteaucitron sans afficher la bannière
            if (window.tarteaucitron) {
              // Configurer
              window.tarteaucitron.init({
                "showAlertSmall": false,
                "cookieName": "webwizardry_consent",
                "highPrivacy": false,
                "orientation": "bottom",
                "removeCredit": true,
                "showIcon": false
              });
              
              // Ajouter les services
              (window.tarteaucitron.job = window.tarteaucitron.job || []).push('googletagmanager');
            }
          });
        });
      });
      
      return;
    }
    
    // Forcer la langue française dès le début
    window.tarteaucitronForceLanguage = 'fr';
    
    // 1. Charger le CSS
    loadCSS('/css/tarteaucitron.css', 'tarteaucitron-css');
    
    // 2. Charger le script principal tarteaucitron.js
    loadScript('/tarteaucitron.js', 'tarteaucitron-js', () => {
      console.log('Script tarteaucitron.js chargé');
      
      // 3. Ensuite charger le fichier de langue
      loadScript('/tarteaucitron/lang/tarteaucitron.fr.js', 'tarteaucitron-lang-fr', () => {
        console.log('Script de langue tarteaucitron.fr.js chargé');
        
        // 4. Ensuite charger les services
        loadScript('/tarteaucitron.services.js', 'tarteaucitron-services', () => {
          console.log('Script tarteaucitron.services.js chargé');
          
          // 5. Initialiser tarteaucitron sans afficher sa bannière
          if (typeof window !== 'undefined' && window.tarteaucitron) {
            try {
              // Définir l'utilisateur Google Tag Manager
              window.tarteaucitron.user = window.tarteaucitron.user || {};
              window.tarteaucitron.user.gtmId = 'G-3LLBL993Q4';
              
              // Configuration silencieuse de tarteaucitron (sans afficher sa bannière)
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
              
              console.log('Tarteaucitron initialisé silencieusement');
              
              // Ajouter les services
              (window.tarteaucitron.job = window.tarteaucitron.job || []).push('googletagmanager');
              
              // Créer notre propre bannière
              createBanner();
              
            } catch (error) {
              console.error('Erreur lors de l\'initialisation de tarteaucitron:', error);
              createBanner();
            }
          } else {
            console.error('window.tarteaucitron n\'est pas disponible après le chargement des scripts');
            createBanner();
          }
        });
      });
    });
    
    // Nettoyage au démontage du composant
    return () => {
      // Pas de nettoyage spécifique nécessaire
    };
  }, []);
  
  return null; // Ce composant ne rend rien visuellement
}