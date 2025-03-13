"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, InfoIcon } from "lucide-react";
import { MotionDiv, fadeInUp } from "@/src/components/ui/motion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

// Options de base pour les sites web
interface WebsiteOptions {
  type: string;
  pages: number;
  design: string;
  features: string[];
  responsive: boolean;
  seo: string;
}

// Options pour l'e-commerce
interface EcommerceOptions {
  products: number;
  payment: string[];
  stock: boolean;
  multilingual: boolean;
}

// Options pour les applications mobiles
interface MobileAppOptions {
  platforms: string[];
  screens: number;
  auth: boolean;
  notifications: boolean;
  offline: boolean;
}

// Options pour la maintenance
interface MaintenanceOptions {
  included: boolean;
  duration: number;
}

// Interface pour les props du calculateur
interface PriceCalculatorProps {
  onPriceCalculated?: (price: {min: number; max: number}) => void;
}

export function PriceCalculator({ onPriceCalculated }: PriceCalculatorProps = {}) {
  // État actif du calculateur
  const [activeTab, setActiveTab] = useState("website");
  
  // Options pour les sites web
  const [websiteOptions, setWebsiteOptions] = useState<WebsiteOptions>({
    type: "vitrine",
    pages: 5,
    design: "template",
    features: [],
    responsive: true,
    seo: "basic",
  });
  
  // Options pour l'e-commerce
  const [ecommerceOptions, setEcommerceOptions] = useState<EcommerceOptions>({
    products: 50,
    payment: ["card"],
    stock: false,
    multilingual: false,
  });
  
  // Options pour les applications mobiles
  const [mobileOptions, setMobileAppOptions] = useState<MobileAppOptions>({
    platforms: ["android"],
    screens: 5,
    auth: false,
    notifications: false,
    offline: false,
  });
  
  // Options de maintenance
  const [maintenanceOptions, setMaintenanceOptions] = useState<MaintenanceOptions>({
    included: false,
    duration: 3,
  });
  
  // Prix calculé
  const [price, setPrice] = useState({
    base: 0,
    maintenance: 0,
    total: 0,
    min: 0,
    max: 0,
  });

  // Calcul du prix du site web
  const calculateWebsitePrice = (): number => {
    let basePrice = 0;
    
    // Prix de base selon le type
    switch(websiteOptions.type) {
      case "vitrine":
        basePrice = 600;
        break;
      case "blog":
        basePrice = 650;
        break;
      case "portfolio":
        basePrice = 600;
        break;
      default:
        basePrice = 600;
    }
    
    // Ajustement selon le nombre de pages
    if (websiteOptions.pages > 5) {
      basePrice += (websiteOptions.pages - 5) * 75;
    }
    
    // Ajustement selon le design
    if (websiteOptions.design === "custom") {
      basePrice += 450;
    } else if (websiteOptions.design === "premium") {
      basePrice += 150;
    }
    
    // Ajout des fonctionnalités
    websiteOptions.features.forEach(feature => {
      switch(feature) {
        case "contact":
          basePrice += 50;
          break;
        case "newsletter":
          basePrice += 80;
          break;
        case "blog":
          basePrice += 150;
          break;
        case "social":
          basePrice += 70;
          break;
        case "analytics":
          basePrice += 60;
          break;
      }
    });
    
    // SEO
    if (websiteOptions.seo === "advanced") {
      basePrice += 200;
    } else if (websiteOptions.seo === "premium") {
      basePrice += 300;
    }
    
    return basePrice;
  };

  // Calcul du prix e-commerce
  const calculateEcommercePrice = (): number => {
    let basePrice = 800; // Configuration de base Shopify
    
    // Ajustement selon le nombre de produits
    if (ecommerceOptions.products > 10) {
      basePrice += Math.min((ecommerceOptions.products - 10) / 10, 9) * 20; // Max 100 produits
    }
    
    // Options de paiement
    if (ecommerceOptions.payment.length > 1) {
      basePrice += (ecommerceOptions.payment.length - 1) * 50;
    }
    
    // Gestion des stocks
    if (ecommerceOptions.stock) {
      basePrice += 200;
    }
    
    // Multilinguisme
    if (ecommerceOptions.multilingual) {
      basePrice += 150;
    }
    
    return basePrice;
  };

  // Calcul du prix d'application mobile
  const calculateMobileAppPrice = (): number => {
    let basePrice = 2000; // Prix de départ pour 1 plateforme
    
    // Plusieurs plateformes
    if (mobileOptions.platforms.length > 1) {
      basePrice += (mobileOptions.platforms.length - 1) * 1000;
    }
    
    // Nombre d'écrans
    if (mobileOptions.screens > 5) {
      basePrice += (mobileOptions.screens - 5) * 150;
    }
    
    // Authentification
    if (mobileOptions.auth) {
      basePrice += 500;
    }
    
    // Notifications push
    if (mobileOptions.notifications) {
      basePrice += 400;
    }
    
    // Mode hors ligne
    if (mobileOptions.offline) {
      basePrice += 400;
    }
    
    return basePrice;
  };

  // Calcul du prix de maintenance
  const calculateMaintenancePrice = (basePrice: number): number => {
    if (!maintenanceOptions.included) return 0;
    
    // Prix mensuel fixe selon le type de projet
    const monthlyRate = activeTab === "mobile" ? 50 : 30;
    return monthlyRate * maintenanceOptions.duration;
  };

  // Mise à jour du prix
  useEffect(() => {
    let basePrice = 0;
    
    // Calcul du prix selon le type de projet
    switch(activeTab) {
      case "website":
        basePrice = calculateWebsitePrice();
        break;
      case "ecommerce":
        basePrice = calculateEcommercePrice();
        break;
      case "mobile":
        basePrice = calculateMobileAppPrice();
        break;
    }
    
    const maintenancePrice = calculateMaintenancePrice(basePrice);
    const totalPrice = basePrice + maintenancePrice;
    
    // Ajouter une variation pour donner une fourchette de prix
    const minPrice = Math.round(totalPrice * 0.85);
    const maxPrice = Math.round(totalPrice * 1.15);
    
    const newPrice = {
      base: basePrice,
      maintenance: maintenancePrice,
      total: totalPrice,
      min: minPrice,
      max: maxPrice
    };
    
    setPrice(newPrice);
    
    // Notifier le composant parent du changement de prix
    if (onPriceCalculated) {
      onPriceCalculated({ min: minPrice, max: maxPrice });
    }
  }, [activeTab, websiteOptions, ecommerceOptions, mobileOptions, maintenanceOptions]);

  // Gestion des changements d'options pour les sites web
  const handleWebsiteOptionChange = (option: keyof WebsiteOptions, value: any) => {
    setWebsiteOptions(prev => ({ ...prev, [option]: value }));
  };

  // Gestion des features pour sites web (checkbox)
  const handleFeatureToggle = (feature: string) => {
    setWebsiteOptions(prev => {
      const features = prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features };
    });
  };

  // Gestion des plateformes pour applications mobiles
  const handlePlatformToggle = (platform: string) => {
    setMobileAppOptions(prev => {
      const platforms = prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform];
      return { ...prev, platforms };
    });
  };

  // Gestion des méthodes de paiement pour e-commerce
  const handlePaymentToggle = (method: string) => {
    setEcommerceOptions(prev => {
      const payment = prev.payment.includes(method)
        ? prev.payment.filter(p => p !== method)
        : [...prev.payment, method];
      return { ...prev, payment };
    });
  };

  // Fonction pour faire défiler vers le formulaire de devis
  const scrollToDevisForm = () => {
    // Trouver le formulaire de devis
    const devisForm = document.querySelector('.devis-form');
    if (devisForm) {
      const offset = devisForm.getBoundingClientRect().top + window.scrollY - 100; // -100 pour ajouter une marge
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    } else {
      // Si on ne trouve pas le formulaire, on défile vers le bas de la page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Calculateur de Prix</CardTitle>
        <CardDescription>
          Configurez votre projet pour obtenir une estimation tarifaire indicative. 
          Le prix final sera établi sur devis après évaluation précise de vos besoins.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="website">Site Web</TabsTrigger>
            <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
            <TabsTrigger value="mobile">Application Mobile</TabsTrigger>
          </TabsList>
          
          {/* Options pour les sites web */}
          <TabsContent value="website" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Type de site</Label>
                <RadioGroup 
                  value={websiteOptions.type} 
                  onValueChange={value => handleWebsiteOptionChange("type", value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vitrine" id="vitrine" />
                    <Label htmlFor="vitrine" className="font-normal cursor-pointer">Site vitrine</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="portfolio" id="portfolio" />
                    <Label htmlFor="portfolio" className="font-normal cursor-pointer">Portfolio</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="blog" id="blog" />
                    <Label htmlFor="blog" className="font-normal cursor-pointer">Blog</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <Label>Nombre de pages : {websiteOptions.pages}</Label>
                </div>
                <Slider 
                  value={[websiteOptions.pages]} 
                  min={1} 
                  max={20}
                  step={1}
                  onValueChange={value => handleWebsiteOptionChange("pages", value[0])}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label className="mb-2 block">Design</Label>
                <RadioGroup 
                  value={websiteOptions.design} 
                  onValueChange={value => handleWebsiteOptionChange("design", value)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`flex flex-col items-start p-4 border rounded-md cursor-pointer hover:border-primary ${websiteOptions.design === "template" ? "border-primary bg-primary/5" : ""}`} 
                      onClick={() => handleWebsiteOptionChange("design", "template")}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="template" id="template" />
                        <Label htmlFor="template" className="font-medium">Template</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Design à partir d'un template existant, adapté à votre charte graphique.</p>
                    </div>
                    <div 
                      className={`flex flex-col items-start p-4 border rounded-md cursor-pointer hover:border-primary ${websiteOptions.design === "premium" ? "border-primary bg-primary/5" : ""}`}
                      onClick={() => handleWebsiteOptionChange("design", "premium")}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="premium" id="premium" />
                        <Label htmlFor="premium" className="font-medium">Premium</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Design personnalisé basé sur un template premium avec plus d'options.</p>
                    </div>
                    <div 
                      className={`flex flex-col items-start p-4 border rounded-md cursor-pointer hover:border-primary ${websiteOptions.design === "custom" ? "border-primary bg-primary/5" : ""}`}
                      onClick={() => handleWebsiteOptionChange("design", "custom")}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="custom" id="custom" />
                        <Label htmlFor="custom" className="font-medium">Sur mesure</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Design entièrement créé sur mesure, unique pour votre projet.</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="mb-2 block">Fonctionnalités additionnelles</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="contact" 
                      checked={websiteOptions.features.includes("contact")}
                      onCheckedChange={() => handleFeatureToggle("contact")}
                    />
                    <Label htmlFor="contact" className="font-normal cursor-pointer">Formulaire de contact avancé</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="newsletter" 
                      checked={websiteOptions.features.includes("newsletter")}
                      onCheckedChange={() => handleFeatureToggle("newsletter")}
                    />
                    <Label htmlFor="newsletter" className="font-normal cursor-pointer">Inscription newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="blog-feature" 
                      checked={websiteOptions.features.includes("blog")}
                      onCheckedChange={() => handleFeatureToggle("blog")}
                    />
                    <Label htmlFor="blog-feature" className="font-normal cursor-pointer">Section blog</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="social" 
                      checked={websiteOptions.features.includes("social")}
                      onCheckedChange={() => handleFeatureToggle("social")}
                    />
                    <Label htmlFor="social" className="font-normal cursor-pointer">Intégration réseaux sociaux</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="analytics" 
                      checked={websiteOptions.features.includes("analytics")}
                      onCheckedChange={() => handleFeatureToggle("analytics")}
                    />
                    <Label htmlFor="analytics" className="font-normal cursor-pointer">Analytics avancés</Label>
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="mb-2 block">Optimisation SEO</Label>
                <RadioGroup 
                  value={websiteOptions.seo} 
                  onValueChange={value => handleWebsiteOptionChange("seo", value)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`flex flex-col items-start p-4 border rounded-md cursor-pointer hover:border-primary ${websiteOptions.seo === "basic" ? "border-primary bg-primary/5" : ""}`}
                      onClick={() => handleWebsiteOptionChange("seo", "basic")}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="basic" id="seo-basic" />
                        <Label htmlFor="seo-basic" className="font-medium">Basique</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Configuration des balises meta et structure SEO de base.</p>
                    </div>
                    <div 
                      className={`flex flex-col items-start p-4 border rounded-md cursor-pointer hover:border-primary ${websiteOptions.seo === "advanced" ? "border-primary bg-primary/5" : ""}`}
                      onClick={() => handleWebsiteOptionChange("seo", "advanced")}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="advanced" id="seo-advanced" />
                        <Label htmlFor="seo-advanced" className="font-medium">Avancé</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Optimisation complète, sitemap, Schema.org, et optimisation de la vitesse.</p>
                    </div>
                    <div 
                      className={`flex flex-col items-start p-4 border rounded-md cursor-pointer hover:border-primary ${websiteOptions.seo === "premium" ? "border-primary bg-primary/5" : ""}`}
                      onClick={() => handleWebsiteOptionChange("seo", "premium")}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="premium" id="seo-premium" />
                        <Label htmlFor="seo-premium" className="font-medium">Premium</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Optimisation SEO avancée avec stratégie de mots-clés, suivi des performances et ajustements continus.</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
          
          {/* Options pour l'e-commerce */}
          <TabsContent value="ecommerce" className="space-y-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <Label>Nombre de produits : {ecommerceOptions.products}</Label>
                </div>
                <Slider 
                  value={[ecommerceOptions.products]} 
                  min={10} 
                  max={500}
                  step={10}
                  onValueChange={value => setEcommerceOptions(prev => ({ ...prev, products: value[0] }))}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label className="mb-2 block">Méthodes de paiement</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="card" 
                      checked={ecommerceOptions.payment.includes("card")}
                      onCheckedChange={() => handlePaymentToggle("card")}
                    />
                    <Label htmlFor="card" className="font-normal cursor-pointer">Carte bancaire</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="paypal" 
                      checked={ecommerceOptions.payment.includes("paypal")}
                      onCheckedChange={() => handlePaymentToggle("paypal")}
                    />
                    <Label htmlFor="paypal" className="font-normal cursor-pointer">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="apple-pay" 
                      checked={ecommerceOptions.payment.includes("apple-pay")}
                      onCheckedChange={() => handlePaymentToggle("apple-pay")}
                    />
                    <Label htmlFor="apple-pay" className="font-normal cursor-pointer">Apple Pay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bank-transfer" 
                      checked={ecommerceOptions.payment.includes("bank-transfer")}
                      onCheckedChange={() => handlePaymentToggle("bank-transfer")}
                    />
                    <Label htmlFor="bank-transfer" className="font-normal cursor-pointer">Virement bancaire</Label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="stock" 
                      checked={ecommerceOptions.stock}
                      onCheckedChange={checked => setEcommerceOptions(prev => ({ ...prev, stock: !!checked }))}
                    />
                    <Label htmlFor="stock" className="font-normal cursor-pointer">Gestion avancée des stocks</Label>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Gestion automatisée des stocks, alertes et synchronisation avec votre inventaire
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="multilingual" 
                      checked={ecommerceOptions.multilingual}
                      onCheckedChange={checked => setEcommerceOptions(prev => ({ ...prev, multilingual: !!checked }))}
                    />
                    <Label htmlFor="multilingual" className="font-normal cursor-pointer">Site multilingue</Label>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Support de plusieurs langues pour vos clients internationaux
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Options pour les applications mobiles */}
          <TabsContent value="mobile" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Plateformes</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="android" 
                      checked={mobileOptions.platforms.includes("android")}
                      onCheckedChange={() => handlePlatformToggle("android")}
                    />
                    <Label htmlFor="android" className="font-normal cursor-pointer">Android</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="ios" 
                      checked={mobileOptions.platforms.includes("ios")}
                      onCheckedChange={() => handlePlatformToggle("ios")}
                    />
                    <Label htmlFor="ios" className="font-normal cursor-pointer">iOS (iPhone/iPad)</Label>
                  </div>
                </div>
                
                {mobileOptions.platforms.length === 0 && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Veuillez sélectionner au moins une plateforme
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <Label>Nombre d'écrans : {mobileOptions.screens}</Label>
                </div>
                <Slider 
                  value={[mobileOptions.screens]} 
                  min={3} 
                  max={20}
                  step={1}
                  onValueChange={value => setMobileAppOptions(prev => ({ ...prev, screens: value[0] }))}
                  className="mt-2"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="auth" 
                      checked={mobileOptions.auth}
                      onCheckedChange={checked => setMobileAppOptions(prev => ({ ...prev, auth: !!checked }))}
                    />
                    <Label htmlFor="auth" className="font-normal cursor-pointer">Authentification utilisateurs</Label>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Système de création de compte et connexion
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="notifications" 
                      checked={mobileOptions.notifications}
                      onCheckedChange={checked => setMobileAppOptions(prev => ({ ...prev, notifications: !!checked }))}
                    />
                    <Label htmlFor="notifications" className="font-normal cursor-pointer">Notifications push</Label>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Envoi de notifications aux utilisateurs
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="offline" 
                      checked={mobileOptions.offline}
                      onCheckedChange={checked => setMobileAppOptions(prev => ({ ...prev, offline: !!checked }))}
                    />
                    <Label htmlFor="offline" className="font-normal cursor-pointer">Mode hors ligne</Label>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Fonctionnement sans connexion internet
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator />
        
        {/* Options de maintenance */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-lg font-medium">Maintenance</Label>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="maintenance-included" 
              checked={maintenanceOptions.included}
              onCheckedChange={checked => setMaintenanceOptions(prev => ({ ...prev, included: !!checked }))}
            />
            <div>
              <Label htmlFor="maintenance-included" className="font-normal cursor-pointer">
                Inclure la maintenance
              </Label>
              <p className="text-sm text-muted-foreground">
                Mises à jour, corrections de bugs, sauvegardes et support technique
              </p>
            </div>
          </div>
          
          {maintenanceOptions.included && (
            <div>
              <Label className="mb-2 block">Durée de maintenance : {maintenanceOptions.duration} mois</Label>
              <Select
                value={maintenanceOptions.duration.toString()}
                onValueChange={value => setMaintenanceOptions(prev => ({ ...prev, duration: parseInt(value) }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez une durée" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 mois</SelectItem>
                  <SelectItem value="6">6 mois</SelectItem>
                  <SelectItem value="12">12 mois</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col items-stretch">
        <div className="bg-muted p-4 rounded-lg border mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">Prix de base:</span>
            <span className="font-medium">{price.base}€</span>
          </div>
          
          {maintenanceOptions.included && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Maintenance ({maintenanceOptions.duration} mois):</span>
              <span className="font-medium">{price.maintenance}€</span>
            </div>
          )}
          
          <Separator className="my-2" />
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Estimation:</span>
            <MotionDiv
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              key={price.total} // Force l'animation à chaque changement de prix
              className="text-xl font-bold"
            >
              {price.min}€ - {price.max}€
            </MotionDiv>
          </div>
        </div>
        
        <Alert className="mb-4 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-900">
          <InfoIcon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-sm">
            Cette estimation est donnée à titre indicatif. Le prix final sera établi sur devis après étude approfondie de votre projet.
          </AlertDescription>
        </Alert>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button onClick={scrollToDevisForm} className="w-full sm:w-auto sm:flex-1">
            Demander un devis précis
          </Button>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto sm:flex-1" 
                  onClick={() => {
                    // Navigation simple vers la page tarifs
                    window.location.href = '/tarifs';
                  }}
                >
                  Voir les forfaits
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Consultez mes forfaits standards</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
} 