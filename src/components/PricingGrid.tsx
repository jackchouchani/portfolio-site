import React from "react";
import Link from "next/link";
import { Check, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MotionDiv, fadeInUp } from "@/src/components/ui/motion";

// Type pour les fonctionnalités
interface Feature {
  name: string;
  included: boolean;
  tooltip?: string;
}

// Type pour les forfaits
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: Feature[];
  cta: string;
  popular?: boolean;
}

// Plans de tarification pour les sites web
const websitePlans: PricingPlan[] = [
  {
    id: "vitrine-essentiel",
    name: "Site Vitrine Essentiel",
    price: "600€",
    description: "Idéal pour les TPE et indépendants qui démarrent",
    features: [
      { name: "5 pages", included: true },
      { name: "Design responsive", included: true },
      { name: "Formulaire de contact", included: true },
      { name: "Optimisation SEO de base", included: true },
      { name: "Intégration réseaux sociaux", included: true },
      { name: "Mise en ligne", included: true },
      { name: "Maintenance", included: false, tooltip: "Option disponible sur devis" },
      { name: "Modifications après livraison", included: false, tooltip: "Option disponible sur devis" },
    ],
    cta: "Demander un devis",
  },
  {
    id: "vitrine-pro",
    name: "Site Vitrine Pro",
    price: "900€",
    description: "Pour les PME qui veulent se démarquer",
    features: [
      { name: "10 pages", included: true },
      { name: "Design responsive premium", included: true },
      { name: "Formulaire de contact avancé", included: true },
      { name: "Optimisation SEO complète", included: true },
      { name: "Intégration réseaux sociaux", included: true },
      { name: "Mise en ligne", included: true },
      { name: "Maintenance 3 mois", included: true },
      { name: "5 modifications après livraison", included: true },
    ],
    cta: "Demander un devis",
    popular: true,
  },
  {
    id: "vitrine-premium",
    name: "Site Vitrine Premium",
    price: "À partir de 1500€",
    description: "Pour les entreprises avec des besoins spécifiques",
    features: [
      { name: "Pages illimitées", included: true },
      { name: "Design sur mesure", included: true },
      { name: "Formulaires complexes", included: true },
      { name: "SEO avancé", included: true },
      { name: "Stratégie réseaux sociaux", included: true },
      { name: "Mise en ligne et configuration", included: true },
      { name: "Maintenance 6 mois", included: true },
      { name: "Modifications illimitées (6 mois)", included: true },
    ],
    cta: "Demander un devis",
  },
];

// Plans de tarification pour l'e-commerce
const ecommercePlans: PricingPlan[] = [
  {
    id: "ecommerce-starter",
    name: "E-commerce Starter",
    price: "800€",
    description: "Pour démarrer votre boutique en ligne",
    features: [
      { name: "Jusqu'à 50 produits", included: true },
      { name: "Design responsive", included: true },
      { name: "Paiement sécurisé", included: true },
      { name: "Gestion des stocks simple", included: true },
      { name: "Optimisation SEO de base", included: true },
      { name: "Mise en ligne", included: true },
      { name: "Formation utilisation", included: true },
      { name: "Maintenance", included: false, tooltip: "Option disponible sur devis" },
    ],
    cta: "Demander un devis",
  },
  {
    id: "ecommerce-business",
    name: "E-commerce Business",
    price: "1500€",
    description: "Pour les boutiques en pleine croissance",
    features: [
      { name: "Jusqu'à 250 produits", included: true },
      { name: "Design responsive premium", included: true },
      { name: "Multiples options de paiement", included: true },
      { name: "Gestion avancée des stocks", included: true },
      { name: "SEO e-commerce optimisé", included: true },
      { name: "Mise en ligne et configuration", included: true },
      { name: "Formation complète", included: true },
      { name: "Maintenance 6 mois", included: true },
    ],
    cta: "Demander un devis",
    popular: true,
  },
  {
    id: "ecommerce-premium",
    name: "E-commerce Premium",
    price: "À partir de 3000€",
    description: "Solution complète pour boutiques complexes",
    features: [
      { name: "Produits illimités", included: true },
      { name: "Design sur mesure", included: true },
      { name: "Passerelles de paiement personnalisées", included: true },
      { name: "Gestion complète (stocks, commandes, clients)", included: true },
      { name: "SEO e-commerce avancé", included: true },
      { name: "Configuration et optimisation", included: true },
      { name: "Formation approfondie", included: true },
      { name: "Maintenance 12 mois", included: true },
    ],
    cta: "Demander un devis",
  },
];

// Plans de tarification pour les applications mobiles
const mobileAppPlans: PricingPlan[] = [
  {
    id: "app-basic",
    name: "Application Mobile Basic",
    price: "À partir de 2000€",
    description: "Application simple avec fonctions de base",
    features: [
      { name: "Une plateforme (iOS ou Android)", included: true },
      { name: "Design UI standard", included: true },
      { name: "3-5 écrans principaux", included: true },
      { name: "Authentification utilisateur", included: true },
      { name: "Backend simple", included: true },
      { name: "Publication sur les stores", included: true },
      { name: "Maintenance 3 mois", included: true },
      { name: "Support après livraison", included: false, tooltip: "Option disponible sur devis" },
    ],
    cta: "Demander un devis",
  },
  {
    id: "app-standard",
    name: "Application Mobile Standard",
    price: "À partir de 4000€",
    description: "Application complète multi-fonctions",
    features: [
      { name: "Multi-plateformes (iOS et Android)", included: true },
      { name: "Design UI personnalisé", included: true },
      { name: "8-12 écrans", included: true },
      { name: "Authentification avancée", included: true },
      { name: "Backend complet", included: true },
      { name: "Publication sur les stores", included: true },
      { name: "Maintenance 6 mois", included: true },
      { name: "Support premium", included: true },
    ],
    cta: "Demander un devis",
    popular: true,
  },
  {
    id: "app-premium",
    name: "Application Mobile Premium",
    price: "Sur devis",
    description: "Solution complexe et hautement personnalisée",
    features: [
      { name: "Multi-plateformes optimisées", included: true },
      { name: "Design UI/UX sur mesure", included: true },
      { name: "Écrans illimités", included: true },
      { name: "Fonctionnalités complexes", included: true },
      { name: "API et intégrations avancées", included: true },
      { name: "Publication et optimisation", included: true },
      { name: "Maintenance 12 mois", included: true },
      { name: "Support dédié", included: true },
    ],
    cta: "Demander un devis",
  },
];

export function PricingGrid() {
  const handleScrollToDevis = () => {
    // Liste des sélecteurs possibles pour trouver le formulaire
    const selectors = [
      '#devis-form',
      '.devis-form',
      'form.contact-form',
      'form[id*="devis"]',
      'form[class*="devis"]',
      'form',
      '.card form'
    ];
    
    // Essayer chaque sélecteur dans l'ordre
    let devisForm: Element | null = null;
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        devisForm = element;
        break;
      }
    }
    
    // Si nous n'avons pas trouvé de formulaire, chercher des titres pertinents
    if (!devisForm) {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5');
      Array.from(headings).forEach(heading => {
        if (devisForm) return; // Si déjà trouvé, sortir
        
        const text = heading.textContent?.toLowerCase() || '';
        if (text.includes('contact') || text.includes('devis') || text.includes('discutons')) {
          // Chercher un formulaire dans la même section
          let parent = heading.parentElement;
          while (parent && !devisForm) {
            // Chercher un formulaire dans ce parent
            const form = parent?.querySelector('form');
            if (form) {
              devisForm = form;
              return;
            }
            
            // Remonter au parent supérieur
            if (parent.tagName === 'SECTION' || parent.tagName === 'ARTICLE') {
              break; // Ne pas remonter au-delà de la section ou article
            }
            parent = parent.parentElement;
          }
          
          // Si on n'a pas trouvé de formulaire, utiliser la section/div parente comme cible
          if (!devisForm) {
            let section = heading.parentElement;
            while (section && section.tagName !== 'SECTION' && section.tagName !== 'DIV') {
              section = section.parentElement;
            }
            if (section) {
              devisForm = section;
            }
          }
        }
      });
    }
    
    if (devisForm) {
      // Faire défiler vers le formulaire
      const rect = devisForm.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - 100, // Offset pour la navigation fixe
        behavior: 'smooth'
      });
      return; // Sortir de la fonction si nous avons trouvé un formulaire
    }
    
    // Si nous n'avons pas trouvé de formulaire, chercher d'autres éléments qui pourraient le contenir
    const formContainers = [
      '#contact-section',
      '.contact-section',
      'section:last-child',
      'section.devis',
      '[id*="contact"]',
      '[class*="contact"]'
    ];
    
    let formContainer: Element | null = null;
    for (const selector of formContainers) {
      const element = document.querySelector(selector);
      if (element) {
        formContainer = element;
        break;
      }
    }
    
    if (formContainer) {
      // Faire défiler vers le conteneur du formulaire
      const rect = formContainer.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - 100,
        behavior: 'smooth'
      });
      return;
    }
    
    // Si nous sommes sur la page des tarifs mais que nous n'avons pas trouvé de formulaire,
    // et que nous ne sommes pas sur la page contact, rediriger vers la page contact
    if (!window.location.pathname.includes('/contact')) {
      window.location.href = '/contact#devis-form';
      return;
    }
    
    // En dernier recours, défiler vers le bas de la page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="forfaits-section" className="py-12 pt-20">
      <div className="container px-4 mx-auto pricing-container">
        <div className="text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-1"
          >
            Forfaits standards
          </Badge>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à chaque budget avec des fonctionnalités claires et sans mauvaises surprises.
            Tous les prix sont HT et peuvent être ajustés selon vos besoins spécifiques.
          </p>
        </div>

        <Tabs defaultValue="websites" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="websites" className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal text-center h-auto">Sites Web</TabsTrigger>
            <TabsTrigger value="ecommerce" className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal text-center h-auto">E-Commerce</TabsTrigger>
            <TabsTrigger value="mobile" className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal text-center h-auto">Applications Mobiles</TabsTrigger>
          </TabsList>

          {/* Sites Web */}
          <TabsContent value="websites" className="w-full">
            <div className="grid md:grid-cols-3 gap-6">
              {websitePlans.map((plan, index) => (
                <MotionDiv
                  key={plan.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={`flex flex-col w-full ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 inset-x-0 bg-black text-white text-center text-sm font-bold py-2 px-3 z-30 dark:bg-white dark:text-black">
                        Populaire
                      </div>
                    )}
                    <CardHeader className={plan.popular ? 'pt-14' : ''}>
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="flex items-baseline mt-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-primary" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className={!feature.included ? "text-muted-foreground" : ""}>
                                {feature.name}
                              </span>
                              
                              {feature.tooltip && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      {feature.tooltip}
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={handleScrollToDevis} 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </TabsContent>

          {/* E-Commerce */}
          <TabsContent value="ecommerce" className="w-full">
            <div className="grid md:grid-cols-3 gap-6">
              {ecommercePlans.map((plan, index) => (
                <MotionDiv
                  key={plan.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={`flex flex-col w-full ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 inset-x-0 bg-black text-white text-center text-sm font-bold py-2 px-3 z-30">
                        Populaire
                      </div>
                    )}
                    <CardHeader className={plan.popular ? 'pt-14' : ''}>
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="flex items-baseline mt-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-primary" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className={!feature.included ? "text-muted-foreground" : ""}>
                                {feature.name}
                              </span>
                              
                              {feature.tooltip && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      {feature.tooltip}
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={handleScrollToDevis} 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </TabsContent>

          {/* Applications Mobiles */}
          <TabsContent value="mobile" className="w-full">
            <div className="grid md:grid-cols-3 gap-6">
              {mobileAppPlans.map((plan, index) => (
                <MotionDiv
                  key={plan.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={`flex flex-col w-full ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 inset-x-0 bg-black text-white text-center text-sm font-bold py-2 px-3 z-30">
                        Populaire
                      </div>
                    )}
                    <CardHeader className={plan.popular ? 'pt-14' : ''}>
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="flex items-baseline mt-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-primary" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className={!feature.included ? "text-muted-foreground" : ""}>
                                {feature.name}
                              </span>
                              
                              {feature.tooltip && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      {feature.tooltip}
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={handleScrollToDevis} 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Note sur la tarification personnalisée */}
        <div className="mt-12 text-center">
          <p className="max-w-3xl mx-auto text-muted-foreground">
            <strong>Note :</strong> Ces forfaits sont donnés à titre indicatif. Chaque projet étant unique, 
            je vous propose un devis personnalisé gratuit adapté à vos besoins spécifiques.
          </p>
          <div className="mt-6">
            <Button size="lg" onClick={handleScrollToDevis}>
              Discutons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 