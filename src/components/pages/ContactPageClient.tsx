"use client";

import React from "react";
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
import { MotionDiv, MotionH1, MotionP, MotionSpan, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import ContactForm from "../pages/ContactForm";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export default function ContactPageClient() {
  return (
    <PageTransition>
      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-5xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: "Contact", href: "/contact", isCurrent: true }
          ]}
        />
        
        <h1 className="text-3xl font-bold tracking-tight mb-8">Contactez-nous pour vos projets web</h1>
        
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
                        <a href="tel:+33612345678">+33 6 52 58 85 83</a>
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
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          github.com/yourusername
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
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          linkedin.com/in/yourprofile
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
        </div>

        <div className="mt-16">
          <Card className="border-primary/10 bg-muted/30">
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