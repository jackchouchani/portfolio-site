"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Layout, Smartphone, Headphones, RefreshCw, Search, ShoppingCart, PlusCircle, Star, Clock, FileCheck } from "lucide-react";
import { MotionDiv, MotionH1, MotionP, MotionSection, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export default function ServicesPageClient() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        {/* Ajout des breadcrumbs cohérentes */}
        <Breadcrumbs 
          items={[
            { label: "Services", href: "/services", isCurrent: true }
          ]}
        />
        
        {/* Le reste du contenu de la page services */}
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <Badge 
              variant="secondary" 
              className="mb-4 text-sm font-medium px-4 py-1"
            >
              Services Web Professionnels
            </Badge>
            <MotionH1 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Solutions Web Rapides et Abordables pour Votre Entreprise
            </MotionH1>
            <MotionP 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Des services de développement web complets à prix compétitifs pour propulser votre entreprise sur le web.
            </MotionP>
          </ScrollAnimation>

          {/* Section Services Web */}
          <div id="websites" className="mb-24 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Création de Sites Web</h2>
                <p className="text-muted-foreground mb-8">
                  Des sites web modernes, réactifs et optimisés pour tous les appareils, conçus pour convertir vos visiteurs en clients.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Sites Vitrines Professionnels</h3>
                      <p className="text-sm text-muted-foreground">Présentez votre entreprise avec élégance et efficacité. À partir de 500€.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Sites sur Mesure</h3>
                      <p className="text-sm text-muted-foreground">Fonctionnalités personnalisées selon vos besoins spécifiques.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Optimisation SEO</h3>
                      <p className="text-sm text-muted-foreground">Référencement naturel pour améliorer votre visibilité sur Google.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <MotionDiv 
                variants={fadeInRight}
                className="rounded-xl overflow-hidden bg-muted flex justify-center items-center aspect-video relative"
              >
                <Layout className="w-24 h-24 text-primary opacity-10 absolute" />
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-bold">Sites Web</h3>
                  <p className="text-muted-foreground">Responsive et optimisés</p>
                </div>
              </MotionDiv>
            </div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Pourquoi choisir nos services de création de sites web ?</CardTitle>
                <CardDescription>Des avantages concrets pour votre entreprise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Délais courts</h4>
                      <p className="text-sm text-muted-foreground">Site livré en 2 à 4 semaines selon la complexité</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Search className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">SEO optimisé</h4>
                      <p className="text-sm text-muted-foreground">Meilleur positionnement dans les moteurs de recherche</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href="/contact">Demander un devis</a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Section Applications Web */}
          <div id="web-apps" className="mb-24 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <MotionDiv 
                variants={fadeInLeft}
                className="rounded-xl overflow-hidden bg-muted flex justify-center items-center aspect-video relative order-2 md:order-1"
              >
                <Code className="w-24 h-24 text-primary opacity-10 absolute" />
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-bold">Applications Web</h3>
                  <p className="text-muted-foreground">Intuitives et performantes</p>
                </div>
              </MotionDiv>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Applications Web</h2>
                <p className="text-muted-foreground mb-8">
                  Applications web personnalisées avec des interfaces utilisateur intuitives et des fonctionnalités avancées.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Tableaux de Bord</h3>
                      <p className="text-sm text-muted-foreground">Interfaces d'administration pour gérer votre contenu facilement.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Applications Métier</h3>
                      <p className="text-sm text-muted-foreground">Solutions sur mesure adaptées à vos processus métier.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Intégrations API</h3>
                      <p className="text-sm text-muted-foreground">Connexion avec vos outils et services existants.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Les avantages de nos applications web</CardTitle>
                <CardDescription>Transformez vos processus métier</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <PlusCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Personnalisation totale</h4>
                      <p className="text-sm text-muted-foreground">Applications conçues spécifiquement pour vos besoins</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Documentation complète</h4>
                      <p className="text-sm text-muted-foreground">Formation et supports pour utiliser votre application</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href="/contact">Demander un devis</a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Section E-Commerce */}
          <div id="ecommerce" className="mb-16 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Solutions E-Commerce</h2>
                <p className="text-muted-foreground mb-8">
                  Boutiques en ligne complètes pour vendre vos produits et services, avec gestion des paiements et des stocks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Boutiques en Ligne</h3>
                      <p className="text-sm text-muted-foreground">Catalogues de produits et systèmes de paiement sécurisés.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Gestion de Stock</h3>
                      <p className="text-sm text-muted-foreground">Suivi en temps réel de vos inventaires et commandes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Optimisation des Conversions</h3>
                      <p className="text-sm text-muted-foreground">Design et parcours optimisés pour maximiser les ventes.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <MotionDiv 
                variants={fadeInRight}
                className="rounded-xl overflow-hidden bg-muted flex justify-center items-center aspect-video relative"
              >
                <ShoppingCart className="w-24 h-24 text-primary opacity-10 absolute" />
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-bold">E-Commerce</h3>
                  <p className="text-muted-foreground">Solutions de vente en ligne</p>
                </div>
              </MotionDiv>
            </div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Développez votre business en ligne</CardTitle>
                <CardDescription>Touchez de nouveaux clients et augmentez vos ventes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expérience client optimale</h4>
                      <p className="text-sm text-muted-foreground">Parcours d'achat fluide et intuitif</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Ventes 24/7</h4>
                      <p className="text-sm text-muted-foreground">Vendez vos produits et services à tout moment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href="/contact">Demander un devis</a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Contact CTA Section */}
          <div className="mt-24 text-center bg-muted/30 p-8 rounded-xl border border-primary/10">
            <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre projet web ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit. Je vous accompagne à chaque étape, de la conception au déploiement.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Contacter maintenant</a>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 