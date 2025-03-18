"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronRight, InfoIcon, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MotionDiv, fadeInUp, StaggerContainer } from "../../components/ui/motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { PricingGrid } from "../../components/PricingGrid";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useForm, ValidationError } from "@formspree/react";

// Import dynamique pour le calculateur de prix (client-side)
const PriceCalculator = dynamic(() => import("../PriceCalculator").then(mod => mod.PriceCalculator), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center">Chargement du calculateur...</div>
});

export default function PricingPageClient() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  
  const [priceEstimate, setPriceEstimate] = useState<{min: number; max: number} | null>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  // Empêcher le scroll automatique au chargement initial
  useEffect(() => {
    if (window.location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, []);

  // Fonction pour gérer le prix calculé - mémorisée avec useCallback
  const handlePriceCalculated = useCallback((price: {min: number; max: number}) => {
    setPriceEstimate(price);
    // Mettre à jour le champ budget dans le formulaire
    setFormData(prev => ({
      ...prev,
      budget: `${price.min}€ - ${price.max}€`
    }));
  }, []);

  // Fonction pour faire défiler jusqu'au formulaire
  const scrollToForm = () => {
    if (calculatorRef.current) {
      window.scrollTo({
        top: calculatorRef.current.offsetTop + calculatorRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  // Gérer les changements de champs du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit({
      ...formData,
      _subject: `Demande de devis de ${formData.name} - WebWizardry`,
      _language: "fr",
      _source: "portfolio-site",
      _referrer: typeof window !== 'undefined' ? window.location.href : "",
      _utm_source: typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('utm_source') || "",
      _utm_medium: typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('utm_medium') || "",
      _utm_campaign: typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('utm_campaign') || "",
    });

    // Déclencher l'événement Google Analytics pour le tracking de conversion
    if (typeof window !== 'undefined' && typeof window.gtagSendEvent === 'function') {
      window.gtagSendEvent();
      console.log('Formulaire envoyé et conversion trackée');
    }
  };

  return (
    <StaggerContainer className="max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Tarifs", href: "/tarifs", isCurrent: true },
        ]}
      />
      
      {/* Un seul titre principal pour la page */}
      <MotionDiv variants={fadeInUp} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tarifs & Devis</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculez instantanément le coût de votre projet web en quelques clics. Ajustez les 
          options selon vos besoins et obtenez une estimation personnalisée. Laissez vos 
          coordonnées pour recevoir un devis détaillé.
        </p>
      </MotionDiv>

      {/* Grille des tarifs */}
      <MotionDiv variants={fadeInUp} className="mb-16">
        <PricingGrid />
      </MotionDiv>
      
      <Separator className="my-16" />
      
      <MotionDiv 
        variants={fadeInUp} 
        ref={calculatorRef}
        className="mb-16"
        id="calculateur"
      >
        <Card className="border-2 border-primary/10 shadow-lg">
          <CardHeader className="bg-muted/40">
            <CardTitle className="text-2xl">Calculateur de prix interactif</CardTitle>
            <CardDescription>
              Configurez votre projet pour obtenir une estimation de prix instantanée
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <PriceCalculator onPriceCalculated={handlePriceCalculated} />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-muted/40 border-t">
            <div className="w-full text-center my-2">
              {priceEstimate ? (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Votre estimation de prix :</p>
                  <p className="text-2xl font-bold">{priceEstimate.min}€ - {priceEstimate.max}€</p>
                  <Button
                    onClick={scrollToForm}
                    className="mt-4"
                  >
                    Demander un devis détaillé <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Ajustez les options ci-dessus pour voir une estimation de prix
                </p>
              )}
            </div>
          </CardFooter>
        </Card>
      </MotionDiv>

      <MotionDiv variants={fadeInUp} className="mt-8">
        <Separator className="my-8" />
        
        <div className="text-center mb-8">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-1"
          >
            Devis personnalisé
          </Badge>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Laissez vos coordonnées et je vous recontacterai sous 24h avec une proposition détaillée adaptée à votre projet et à votre budget.
          </p>
          
          {/* Éléments de preuve sociale et d'urgence */}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="bg-primary/5 text-xs">
              ⚡ Réponse sous 24h garantie
            </Badge>
            <Badge variant="outline" className="bg-primary/5 text-xs">
              ⭐ +30 clients satisfaits
            </Badge>
            <Badge variant="outline" className="bg-primary/5 text-xs">
              🛡️ Devis sans engagement
            </Badge>
          </div>
        </div>
        
        <Card className="border-2 border-primary/10 shadow-lg">
          <CardHeader className="bg-muted/40">
            <CardTitle>Votre projet en détail</CardTitle>
            <CardDescription>
              Plus vous donnez de détails, plus votre devis sera précis
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {state.succeeded ? (
              <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle>Message envoyé avec succès !</AlertTitle>
                <AlertDescription className="text-green-600 dark:text-green-400">
                  Merci ! Votre demande a été envoyée avec succès. Je vous recontacterai dans les plus brefs délais.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <ValidationError field="name" prefix="Nom" errors={state.errors} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="exemple@domaine.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <ValidationError field="phone" prefix="Téléphone" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget estimé</Label>
                  <Input
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Utilisez le calculateur ci-dessus pour estimer votre budget"
                    readOnly
                  />
                  <ValidationError field="budget" prefix="Budget" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Description de votre projet</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet, vos objectifs, vos besoins spécifiques..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <AlertTriangle className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Demander un devis détaillé"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Vous préférez discuter directement de votre projet ?
          </p>
          <Button variant="outline" onClick={scrollToForm}>
            Discutons ensemble
          </Button>
        </div>
      </MotionDiv>
    </StaggerContainer>
  );
} 