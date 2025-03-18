"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "./pages/ContactForm";
import { Linkedin, Github } from "./icons/SafeIcons";
import { XIcon } from "./icons/SafeIcons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Cal, { getCalApi } from "@calcom/embed-react";

// Import dynamique pour le calculateur de prix (client-side)
const PriceCalculator = dynamic(() => import("./PriceCalculator").then(mod => mod.PriceCalculator), {
  ssr: false,
  loading: () => <div className="w-full h-[200px] flex items-center justify-center">Chargement du calculateur...</div>
});

// Composant Cal.com avec intégration directe
function CalComponent({ calLink }: { calLink: string }) {
  const namespace = calLink.replace("/", "-");
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace": namespace});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [namespace]);
  
  return (
    <div className="w-full h-[600px]">
      <Cal 
        namespace={namespace}
        calLink={calLink}
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
}

export default function ContactPageClient() {
  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="contact" className="mb-12">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="contact" className="md:text-sm whitespace-pre-line min-h-[60px] flex flex-col items-center justify-center p-1">
            Formulaire{'\n'}de Contact
          </TabsTrigger>
          <TabsTrigger value="calculator" className="md:text-sm whitespace-pre-line min-h-[60px] flex flex-col items-center justify-center p-1">
            Calculateur{'\n'}de Prix
          </TabsTrigger>
          <TabsTrigger value="consultation" className="md:text-sm whitespace-pre-line min-h-[60px] flex flex-col items-center justify-center p-1">
            Réserver{'\n'}Consultation
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Coordonnées</h2>
                <p className="text-muted-foreground mb-4">
                  N'hésitez pas à me contacter pour discuter de votre projet ou poser des questions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@webwizardry.fr" className="hover:text-primary">contact@webwizardry.fr</a>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+33652588583" className="hover:text-primary">+33 6 52 58 85 83</a>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Paris, France<br />(Disponible en télétravail)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Horaires</h2>
                <p className="text-muted-foreground mb-4">
                  Je suis généralement disponible aux horaires suivants :
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h - 18h</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Samedi - Dimanche</span>
                    <span>Sur rendez-vous</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Réseaux sociaux</h2>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/jacqueschouchani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://github.com/jackchouchani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://x.com/jackchouchani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon className="h-6 w-6" />
                    <span className="sr-only">X</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="calculator">
          <PriceCalculator />
        </TabsContent>
        
        <TabsContent value="consultation">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-3">Réservez une Consultation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Discutons de votre projet lors d'une consultation gratuite. Choisissez la durée qui vous convient.
              </p>
            </div>
            
            <Tabs defaultValue="rapide" className="block md:hidden mb-6">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="rapide" className="md:text-sm whitespace-pre-line min-h-[50px] flex flex-col items-center justify-center p-1">
                  Consultation Rapide
                </TabsTrigger>
                <TabsTrigger value="approfondie" className="md:text-sm whitespace-pre-line min-h-[50px] flex flex-col items-center justify-center p-1">
                  Consultation Approfondie
                </TabsTrigger>
              </TabsList>
              <TabsContent value="rapide">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Consultation Rapide</CardTitle>
                    <CardDescription>
                      Une session de 15 minutes pour discuter rapidement de votre projet ou poser des questions techniques.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CalComponent calLink="webwizardry/15min" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="approfondie">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Consultation Approfondie</CardTitle>
                    <CardDescription>
                      Une session de 30 minutes pour explorer en détail votre projet et discuter des solutions possibles.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CalComponent calLink="webwizardry/30min" />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Consultation Rapide</CardTitle>
                  <CardDescription>
                    Une session de 15 minutes pour discuter rapidement de votre projet ou poser des questions techniques.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CalComponent calLink="webwizardry/15min" />
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Consultation Approfondie</CardTitle>
                  <CardDescription>
                    Une session de 30 minutes pour explorer en détail votre projet et discuter des solutions possibles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CalComponent calLink="webwizardry/30min" />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 