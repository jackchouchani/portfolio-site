"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MotionDiv, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, MotionH1, MotionP, MotionH2, MotionSection } from "../../components/ui/motion"
import PageTransition from "../../components/PageTransition"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { FileText, Check, Clock, Zap, Shield, Award, Smartphone, Globe, CreditCard, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Interface pour les éléments de FAQ
interface FaqItem {
  question: string;
  answer: string;
}

export default function AboutPageClient() {
  // Les avantages pour les PME/TPE
  const benefits = [
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Qualité professionnelle",
      description: "Des sites web d'aspect professionnel qui inspirent confiance à vos clients et valorisent votre image."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Rapidité d'exécution",
      description: "Des délais courts pour mettre votre entreprise en ligne rapidement et commencer à générer des résultats."
    },
    {
      icon: <CreditCard className="h-5 w-5 text-primary" />,
      title: "Tarifs accessibles",
      description: "Des solutions web adaptées aux budgets des petites entreprises, sans compromis sur la qualité."
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "Accompagnement personnalisé",
      description: "Un suivi attentif et des conseils adaptés à votre secteur d'activité et vos objectifs."
    }
  ]

  // Les services offerts
  const services = [
    {
      category: "Sites web",
      items: ["Sites vitrines pour entreprises", "Boutiques en ligne", "Sites de réservation", "Landing pages", "Sites événementiels"]
    },
    {
      category: "Fonctionnalités",
      items: ["Formulaires de contact", "Système de réservation", "Paiement en ligne", "Galeries photos/vidéos", "Chatbot pour vos clients"]
    },
    {
      category: "Support",
      items: ["Formation à l'utilisation", "Maintenance mensuelle", "Mises à jour régulières", "Assistance technique", "Modification de contenu"]
    }
  ]

  // Données FAQ
  const faqItems: FaqItem[] = [
    {
      question: "Quelles technologies utilisez-vous pour développer des sites web ?",
      answer: "J'utilise principalement React, Next.js, TypeScript et Tailwind CSS pour les sites modernes. Pour les sites e-commerce, je travaille avec Shopify, WooCommerce ou des solutions headless. Je m'adapte aux besoins spécifiques de chaque projet."
    },
    {
      question: "Combien coûte la création d'un site web ?",
      answer: "Le coût varie selon la complexité du projet. Un site vitrine simple commence autour de 500€, tandis qu'un e-commerce ou une application web personnalisée peut aller de 2000€ à 10000€ ou plus. Je propose des devis détaillés et transparents adaptés à votre budget."
    },
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer: "Un site vitrine peut être réalisé en 1-2 semaines, un e-commerce en 2-4 semaines, et une application web personnalisée en 4-6 semaines ou plus. Le délai dépend de la complexité, des fonctionnalités requises et de votre réactivité pendant le processus."
    },
    {
      question: "Proposez-vous des services de maintenance après la mise en ligne ?",
      answer: "Oui, je propose des forfaits de maintenance mensuelle qui incluent les mises à jour de sécurité, les corrections de bugs, les sauvegardes régulières et un support technique. Ces forfaits garantissent que votre site reste sécurisé, rapide et à jour."
    },
    {
      question: "Comment se déroule le processus de création d'un site web ?",
      answer: "Le processus comprend une phase de découverte (besoins, objectifs), la conception (wireframes, maquettes), le développement, les tests, et enfin la mise en ligne. Je vous implique à chaque étape pour garantir que le résultat final correspond parfaitement à vos attentes."
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: "À propos", href: "/a-propos", isCurrent: true }
          ]}
        />
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto py-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">À propos de Web Wizardry</h1>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Des sites web modernes et efficaces pour les PME et TPE à des tarifs adaptés à votre budget.
            </p>
          </ScrollAnimation>

          {/* Notre Histoire Section */}
          <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
            <MotionDiv 
              variants={fadeInLeft}
              className="md:col-span-2"
            >
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image 
                  src="/images/portfolio/small-business-meeting.jpg" 
                  alt="Conseil personnalisé aux petites entreprises" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </MotionDiv>
            <MotionDiv 
              variants={fadeInRight}
              className="md:col-span-3"
            >
              <h2 className="text-2xl font-bold mb-4">Mon approche</h2>
              <p className="text-muted-foreground mb-4">
                J'ai fondé Web Wizardry en 2020 avec une vision claire : rendre le développement 
                web professionnel accessible à toutes les entreprises, quelle que soit leur taille. 
                Face à un marché où les agences traditionnelles proposent des tarifs prohibitifs 
                et des délais interminables, j'ai choisi une approche différente.
              </p>
              <p className="text-muted-foreground mb-6">
                En tant que professionnel du web passionné, je me spécialise dans la création de sites 
                internet et d'applications qui sont à la fois beaux, rapides et faciles à utiliser. 
                Ma philosophie : allier simplicité, efficacité et tarification transparente pour 
                vous offrir un service de qualité adapté à vos moyens.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="/portfolio">Voir mes réalisations</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>
            </MotionDiv>
          </div>

          {/* Avantages PME/TPE Section */}
          <div className="mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Avantages pour votre entreprise</h2>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col border-muted/40 hover:border-primary/40 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Approche Section */}
          <div className="mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Comment je travaille</h2>
            </ScrollAnimation>
            
            <div className="space-y-8">
              <Card className="overflow-hidden border-muted/40">
                <div className="grid md:grid-cols-2 gap-6">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-2 rounded-full w-fit">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Processus simple et rapide</h3>
                      <p className="text-muted-foreground">
                        Je comprends que votre temps est précieux. C'est pourquoi j'ai développé un processus efficace qui vous garantit un site web opérationnel en un temps record.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Consultation initiale pour comprendre vos besoins</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Proposition claire avec délais et tarifs fixes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Développement rapide avec points d'étape réguliers</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="relative min-h-[200px] md:min-h-full bg-muted">
                    <Image 
                      src="/images/portfolio/website-computer.jpg"
                      alt="Processus de développement web efficace"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-muted/40">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative min-h-[200px] md:min-h-full bg-muted md:order-1 order-2">
                    <Image 
                      src="/images/portfolio/local-business.jpg"
                      alt="Design moderne adapté aux PME"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 order-1 md:order-2">
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-2 rounded-full w-fit">
                        <Smartphone className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Design adapté à tous les écrans</h3>
                      <p className="text-muted-foreground">
                        Vos clients consultent votre site depuis leur téléphone, tablette ou ordinateur. Je crée des sites qui s'adaptent parfaitement à tous ces appareils.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Navigation fluide sur mobile, tablette et ordinateur</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Chargement rapide pour éviter de perdre des clients</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Design élégant qui valorise votre image de marque</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-muted/40">
                <div className="grid md:grid-cols-2 gap-6">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-2 rounded-full w-fit">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Visibilité et résultats concrets</h3>
                      <p className="text-muted-foreground">
                        Un beau site ne sert à rien s'il n'est pas visible. J'optimise votre site pour qu'il attire des visiteurs et les transforme en clients.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Optimisation pour les moteurs de recherche (Google)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Formulaires de contact efficaces pour générer des leads</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Suivi des performances et statistiques de visite</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="relative min-h-[200px] md:min-h-full bg-muted">
                    <Image 
                      src="/images/portfolio/seo-analytics.jpg"
                      alt="Visibilité en ligne pour votre entreprise"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Technologies Section simplifiée */}
          <div className="mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Ce que je vous propose</h2>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border border-muted/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      {service.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center bg-muted/30 border border-primary/10 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Prêt à booster votre présence en ligne ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discutons ensemble de votre projet et voyons comment je peux vous aider à développer 
              votre activité grâce à un site web professionnel, sans vous ruiner.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact" className="inline-flex items-center">
                Me contacter <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionDiv>
        </div>

        {/* Section FAQ - Ajouter à la fin du contenu existant */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-20 mb-12"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionH2
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-12"
            >
              Questions Fréquentes
            </MotionH2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-1 shadow-sm">
                    <AccordionTrigger className="px-4 py-3 text-left font-medium hover:text-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </MotionSection>
      </div>
    </PageTransition>
  )
} 