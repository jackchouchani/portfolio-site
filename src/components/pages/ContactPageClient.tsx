"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Clock,
  Calendar,
  Github,
  Linkedin,
  X as XIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MotionDiv, MotionH1, MotionP, ScrollAnimation, fadeInUp } from "@/src/components/ui/motion";
import PageTransition from "@/src/components/PageTransition";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import ContactForm from "./ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import dynamique de CalComBooking pour éviter les problèmes de SSR
const DynamicCalComBooking = dynamic(
  () => import("@/src/components/CalComBooking"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center">
        <p>Chargement du calendrier...</p>
      </div>
    ),
  }
);

// Interface pour les éléments de FAQ
interface FaqItem {
  question: string;
  answer: string;
}

export default function ContactPageClient() {
  const [isCalReady, setIsCalReady] = useState(false);

  useEffect(() => {
    setIsCalReady(true);
  }, []);

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

  // Données FAQ
  const faqItems: FaqItem[] = [
    {
      question: "Quels types de projets web réalisez-vous ?",
      answer: "Je développe des sites vitrines, des applications web, des e-commerces et des outils métiers personnalisés. Mon expertise s'étend des sites simples aux applications complexes, toujours avec une attention particulière à la performance et à l'expérience utilisateur."
    },
    {
      question: "Combien coûte un site web ?",
      answer: "Le prix varie en fonction de vos besoins spécifiques. Je propose des formules à partir de 500€ pour un site vitrine. Chaque projet est unique et bénéficie d'un devis personnalisé après étude de vos besoins."
    },
    {
      question: "Quels sont les délais de réalisation ?",
      answer: "Les délais dépendent de la complexité du projet. En général, comptez 1 à 2 semaines pour un site vitrine, et 3 à 4 semaines pour des projets plus complexes. Nous établissons ensemble un calendrier réaliste lors de notre première consultation."
    },
    {
      question: "Proposez-vous des services de maintenance ?",
      answer: "Oui, je propose des forfaits de maintenance pour garantir la sécurité, les mises à jour et le bon fonctionnement de votre site. Ces forfaits incluent également un support technique et des interventions rapides en cas de besoin."
    },
    {
      question: "Comment se déroule la première consultation ?",
      answer: "La première consultation dure 30 minutes et est entièrement gratuite. Nous discutons de votre projet, de vos objectifs et de vos attentes. C'est l'occasion de vous poser toutes vos questions et de commencer à esquisser les premières solutions adaptées à votre cas."
    }
  ];

  return (
    <PageTransition>
      <div className="container max-w-5xl px-4 pt-8 md:pt-12">
        <Breadcrumbs 
          items={[
            { label: "Contact", href: "/contact", isCurrent: true }
          ]} 
        />

        <div className="mb-12 mt-8 text-center">
          <MotionH1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-4"
          >
            Parlons de votre projet
          </MotionH1>
          <MotionP 
            variants={fadeInUp} 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Que vous ayez besoin d'un site web, d'une application ou d'un conseil en développement,
            je suis là pour vous accompagner à chaque étape.
          </MotionP>
          <MotionDiv 
            variants={fadeInUp}
            className="mt-6 flex flex-wrap gap-3 justify-center"
          >
            <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/5">Réponse sous 24h</Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/5">Devis gratuit</Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/5">Consultation offerte</Badge>
          </MotionDiv>
        </div>
        
        {/* Section principale: Formulaire et Coordonnées */}
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          {/* Coordonnées */}
          <div className="md:col-span-5 h-full">
            <h2 className="text-2xl font-bold mb-4">Coordonnées</h2>
            <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="space-y-5">
                  <p className="text-muted-foreground">
                    N'hésitez pas à me contacter pour discuter de votre projet ou poser des questions.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a href="mailto:contact@webwizardry.fr" className="text-primary hover:underline">
                        contact@webwizardry.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Téléphone</h3>
                      <a href="tel:+33677889900" className="text-primary hover:underline">
                        +33 6 77 88 99 00
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Adresse</h3>
                      <p className="text-muted-foreground">Paris, France</p>
                      <p className="text-muted-foreground text-sm">(Disponible en télétravail)</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Horaires */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Horaires</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-primary/10 mr-4">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div className="w-full flex justify-between">
                          <span>Lundi - Vendredi</span>
                          <span className="font-medium">9h - 18h</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-primary/10 mr-4">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div className="w-full flex justify-between">
                          <span>Samedi - Dimanche</span>
                          <span className="font-medium">Sur rendez-vous</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Réseaux sociaux */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Réseaux sociaux</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com/jackchouchani" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-primary/10 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/jacqueschouchani" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-primary/10 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://twitter.com/jackchouchani" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-primary/10 transition-colors"
                      >
                        <XIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="md:col-span-7 h-full">
            <h2 className="text-2xl font-bold mb-4">Formulaire de contact</h2>
            <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 h-full">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section de consultation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Réserver une consultation</h2>
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl md:text-2xl font-bold text-center md:text-left">
                <Calendar className="mr-2 h-5 w-5 text-primary shrink-0" />
                Consultation gratuite de 30 minutes
              </CardTitle>
              <CardDescription className="text-center md:text-left">
                Prenez 30 minutes pour discuter de votre projet avec un expert. 
                Pas d'engagement, juste des conseils personnalisés pour vous aider à avancer.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="space-y-5 lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-medium">Analyse gratuite de vos besoins et objectifs</span>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-medium">Recommandations techniques adaptées à votre budget</span>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-medium">Réponse à toutes vos questions techniques</span>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-medium">Estimation des délais et des coûts</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 w-full flex justify-center lg:justify-end">
                  {isCalReady && (
                    <div className="w-full max-w-xs">
                      <DynamicCalComBooking calLink="webwizardry/30min" buttonText="Voir les disponibilités" />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section FAQ améliorée */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquentes</h2>
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border rounded-lg p-1 shadow-sm"
                  >
                    <AccordionTrigger className="px-4 py-3 text-left font-medium hover:text-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <ScrollAnimation className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">Prêt à transformer votre vision en réalité ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Discutons de votre projet et voyons comment je peux vous aider à développer votre activité grâce à un site web professionnel adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 bg-primary hover:bg-primary/90 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  // Rechercher l'élément h2 contenant le texte "Formulaire de contact"
                  const headings = document.querySelectorAll('h2');
                  const formSection = Array.from(headings).find(
                    heading => heading.textContent?.includes("Formulaire de contact")
                  );
                  
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <MessageSquare className="h-5 w-5" />
                Envoyer un message
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary/10 font-medium shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => {
                  // Rechercher tous les éléments h2 et trouver celui contenant le texte "Réserver une consultation"
                  const headings = document.querySelectorAll('h2');
                  const consultationSection = Array.from(headings).find(
                    heading => heading.textContent?.includes("Réserver une consultation")
                  );
                  
                  if (consultationSection) {
                    consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Calendar className="h-5 w-5" />
                Réserver une consultation
              </Button>
            </div>
          </ScrollAnimation>
        </div>

        <div className="mt-10 flex justify-center">
          <Badge variant="outline" className="px-4 py-1.5 text-xs rounded-full bg-primary/5 animate-pulse">
            <span className="flex items-center">
              <span className="mr-1.5">💌</span>
              Envie de discuter de votre projet ? Contactez-moi dès aujourd'hui!
            </span>
          </Badge>
        </div>
      </div>
    </PageTransition>
  );
} 