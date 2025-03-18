"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock,
  Calendar,
  ExternalLink,
  Github,
  Linkedin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MotionDiv, MotionH1, MotionP, MotionSpan, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import ContactForm from "../pages/ContactForm";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { getCalApi } from "@calcom/embed-react";
import CalComBooking from "../../components/CalComBooking";

export default function ContactPageClient() {
  // Effet pour gérer le défilement vers le formulaire si l'URL contient #devis-form
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Vérifier si l'URL contient #devis-form
      if (window.location.hash === '#devis-form') {
        // Attendre un peu que la page soit complètement chargée
        setTimeout(() => {
          const devisForm = document.querySelector('#devis-form');
          if (devisForm) {
            const rect = devisForm.getBoundingClientRect();
            window.scrollTo({
              top: rect.top + window.scrollY - 100, // Offset de 100px 
              behavior: 'smooth'
            });
          }
        }, 500); // Délai de 500ms pour s'assurer que tout est chargé
      }
    }
  }, []);

  return (
    <PageTransition>
      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-5xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: "Contact", href: "/contact", isCurrent: true }
          ]}
        />
        
        <h1 className="text-3xl font-bold tracking-tight mb-8">Contactez-nous pour vos projets web</h1>
        
        <Tabs defaultValue="contact" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="contact" className="text-sm md:text-base flex flex-col items-center justify-center gap-1 h-auto py-2">
              <span>Formulaire</span>
              <span>de Contact</span>
            </TabsTrigger>
            <TabsTrigger value="info" className="text-sm md:text-base flex flex-col items-center justify-center gap-1 h-auto py-2">
              <span>Mes</span>
              <span>Coordonnées</span>
            </TabsTrigger>
            <TabsTrigger value="consultation" className="text-sm md:text-base flex flex-col items-center justify-center gap-1 h-auto py-2">
              <span>Réserver une</span>
              <span>Consultation</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Formulaire de contact</CardTitle>
                    <CardDescription>
                      Besoin d&apos;un devis ou d&apos;informations sur nos services ? Remplissez ce formulaire et nous vous répondrons sous 24h.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-1 space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Réponse rapide</CardTitle>
                    <CardDescription>Nous vous répondons dans les 24h</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-primary/10 mr-4">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">Service personnalisé</h3>
                          <p className="text-muted-foreground">Des solutions adaptées à vos besoins spécifiques.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-primary/10 mr-4">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">Devis gratuit</h3>
                          <p className="text-muted-foreground">Recevez une estimation détaillée sans engagement.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Informations de contact</CardTitle>
                  <CardDescription>Plusieurs façons de me joindre</CardDescription>
                </CardHeader>
                <CardContent>
                  <StaggerContainer className="space-y-4">
                    <MotionDiv variants={fadeInUp} className="flex items-start">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Email</h3>
                        <p className="text-primary hover:underline">
                          <a href="mailto:contact@webwizardry.fr">contact@webwizardry.fr</a>
                        </p>
                      </div>
                    </MotionDiv>

                    <MotionDiv variants={fadeInUp} className="flex items-start">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Téléphone</h3>
                        <p className="text-primary hover:underline">
                          <a href="tel:+33652588583">+33 6 52 58 85 83</a>
                        </p>
                      </div>
                    </MotionDiv>

                    <MotionDiv variants={fadeInUp} className="flex items-start">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Adresse</h3>
                        <p className="text-muted-foreground">
                          Paris, France
                        </p>
                      </div>
                    </MotionDiv>

                    <MotionDiv variants={fadeInUp} className="flex items-start">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">GitHub</h3>
                        <p className="text-primary hover:underline">
                          <a href="https://github.com/jackchouchani" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            github.com/jackchouchani
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </p>
                      </div>
                    </MotionDiv>

                    <MotionDiv variants={fadeInUp} className="flex items-start">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">LinkedIn</h3>
                        <p className="text-primary hover:underline">
                          <a href="https://linkedin.com/in/jacqueschouchani" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            linkedin.com/in/jacqueschouchani
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </p>
                      </div>
                    </MotionDiv>
                  </StaggerContainer>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Heures d&apos;ouverture</CardTitle>
                  <CardDescription>Disponibilité pour vous répondre</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-medium text-foreground">Jours ouvrables</h3>
                      <p className="text-muted-foreground">Lundi - Vendredi</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-medium text-foreground">Heures de bureau</h3>
                      <p className="text-muted-foreground">9h - 18h</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-sm text-muted-foreground">
                    <p>Pour les urgences, vous pouvez nous contacter en dehors des heures de bureau par email.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="consultation">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">Réservez une Consultation</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Discutons de votre projet lors d'une consultation gratuite. Choisissez la durée qui vous convient.
                </p>
              </div>
              
              <div className="block md:hidden">
                <Tabs defaultValue="rapide" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="rapide" className="text-sm flex flex-col items-center justify-center gap-1 h-auto py-2">
                      <span>Consultation</span>
                      <span>Rapide</span>
                    </TabsTrigger>
                    <TabsTrigger value="approfondie" className="text-sm flex flex-col items-center justify-center gap-1 h-auto py-2">
                      <span>Consultation</span>
                      <span>Approfondie</span>
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
                        <CalComBooking calLink="webwizardry/15min" />
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
                        <CalComBooking calLink="webwizardry/30min" />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Consultation Rapide</CardTitle>
                    <CardDescription>
                      Une session de 15 minutes pour discuter rapidement de votre projet ou poser des questions techniques.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CalComBooking calLink="webwizardry/15min" />
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
                    <CalComBooking calLink="webwizardry/30min" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <Card className="border-primary/10 bg-muted/30" id="forfaits-section">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="inline-block p-3 rounded-full bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Réponse rapide</h3>
                  <p className="text-muted-foreground">Nous vous répondons dans les 24 heures suivant votre demande.</p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block p-3 rounded-full bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Assistance personnalisée</h3>
                  <p className="text-muted-foreground">Un interlocuteur dédié pour comprendre vos besoins spécifiques.</p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block p-3 rounded-full bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Devis gratuit</h3>
                  <p className="text-muted-foreground">Recevez une estimation détaillée sans engagement.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="px-4 py-1.5 text-xs rounded-full bg-background">
                  <span className="flex items-center">
                    <span className="mr-1.5">💌</span>
                    Envie de discuter de votre projet ?
                  </span>
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Nous adorons les nouveaux défis !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </PageTransition>
  );
} 