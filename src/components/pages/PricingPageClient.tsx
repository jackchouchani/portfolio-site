"use client";

import React, { useState, useRef, useCallback } from "react";
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

// Import dynamique pour le calculateur de prix (client-side)
const PriceCalculator = dynamic(() => import("../PriceCalculator").then(mod => mod.PriceCalculator), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center">Chargement du calculateur...</div>
});

export default function PricingPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  
  const [priceEstimate, setPriceEstimate] = useState<{min: number; max: number} | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  // Fonction pour gérer le prix calculé - mémorisée avec useCallback
  const handlePriceCalculated = useCallback((price: {min: number; max: number}) => {
    setPriceEstimate(price);
    // Mettre à jour le champ budget dans le formulaire
    setFormState(prev => ({
      ...prev,
      budget: `${price.min}€ - ${price.max}€`
    }));
  }, []);  // Tableau de dépendances vide car la fonction ne dépend d'aucun état qui change

  // Validation du formulaire
  const validateForm = (): boolean => {
    const newErrors: {name?: string; email?: string; message?: string} = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Veuillez entrer votre nom";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Veuillez entrer votre adresse email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Veuillez entrer votre message";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valider le formulaire avant l'envoi
    if (!validateForm()) {
      return;
    }
    
    console.log("Formulaire soumis avec les données:", formState);
    
    // Déclencher l'événement Google Analytics pour le tracking de conversion
    if (typeof window !== 'undefined' && typeof window.gtagSendEvent === 'function') {
      window.gtagSendEvent();
      console.log('Formulaire envoyé et conversion trackée');
    }
    
    // Soumettre le formulaire via Formspree (se produit naturellement grâce à l'action du formulaire)
    setFormSubmitted(true);
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });
      setErrors({});
    }, 5000);
  };

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
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur lorsque l'utilisateur modifie le champ
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <StaggerContainer className="max-w-5xl mx-auto">
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
            {formSubmitted ? (
              <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-green-600 dark:text-green-400">
                  Merci ! Votre demande a été envoyée avec succès. Je vous recontacterai dans les plus brefs délais.
                </AlertDescription>
              </Alert>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6 devis-form"
                action="https://formspree.io/f/mvgkobkw"
                method="POST"
              >
                <input type="hidden" name="form-name" value="devis-tarifs" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom et prénom"
                      required
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@exemple.com"
                      required
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone (optionnel)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="budget">Budget estimé</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-64">Ce champ est pré-rempli avec l'estimation du calculateur, mais vous pouvez le modifier selon votre budget réel</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Input
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleInputChange}
                      placeholder="Budget approximatif"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Détails du projet</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet, vos besoins et vos attentes..."
                    className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Button type="submit" size="lg">
                    Recevoir mon devis personnalisé
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Disponibilité limitée - Début des projets sous 2 à 4 semaines
                  </p>
                </div>
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