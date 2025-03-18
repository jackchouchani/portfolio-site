"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Layout, Smartphone, Headphones, RefreshCw, Search, ShoppingCart, PlusCircle, Star, Clock, FileCheck, Calendar } from "lucide-react";
import { MotionDiv, MotionH1, MotionP, MotionSection, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { getCalApi } from "@calcom/embed-react";

export default function ServicesPageClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openCalModal = async (calLink: string) => {
    if (typeof window !== 'undefined') {
      const cal = await getCalApi();
      if (cal) {
        cal("ui", {
          styles: {
            branding: { brandColor: "#4f46e5" },
          },
        });
        
        cal("modal", {
          calLink: calLink,
          config: {
            layout: "month_view",
          },
        });
      }
    }
  };

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
              Services Web et Mobile Professionnels
            </Badge>
            <MotionH1 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Solutions Web et Mobile pour Votre Entreprise
            </MotionH1>
            <MotionP 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Des services de développement web et d'applications mobiles iOS/Android à prix compétitifs pour propulser votre entreprise dans l'ère numérique.
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
                <Button asChild className="mr-2">
                  <a href="/contact">Demander un devis</a>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => openCalModal("webwizardry/30min")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Consultation gratuite
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
                <CardTitle>Les avantages de mes applications web</CardTitle>
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
                <Button asChild className="mr-2">
                  <a href="/contact">Demander un devis</a>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => openCalModal("webwizardry/30min")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Consultation gratuite
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Section Applications Mobiles */}
          <div id="mobile-apps" className="mb-24 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Applications Mobiles</h2>
                <p className="text-muted-foreground mb-8">
                  Applications mobiles natives et hybrides pour iOS et Android, conçues pour offrir une expérience utilisateur exceptionnelle.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Applications iOS (iPhone et iPad)</h3>
                      <p className="text-sm text-muted-foreground">Applications performantes et élégantes pour l'écosystème Apple.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Applications Android</h3>
                      <p className="text-sm text-muted-foreground">Solutions mobiles adaptées à la diversité des appareils Android.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Applications Hybrides</h3>
                      <p className="text-sm text-muted-foreground">Applications multi-plateformes développées avec React Native ou Flutter.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <MotionDiv 
                variants={fadeInRight}
                className="rounded-xl overflow-hidden bg-muted flex justify-center items-center aspect-video relative"
              >
                <Smartphone className="w-24 h-24 text-primary opacity-10 absolute" />
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-bold">Apps Mobiles</h3>
                  <p className="text-muted-foreground">iOS et Android</p>
                </div>
              </MotionDiv>
            </div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Les avantages de mes applications mobiles</CardTitle>
                <CardDescription>Étendez votre présence digitale sur tous les appareils</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expérience utilisateur native</h4>
                      <p className="text-sm text-muted-foreground">Interfaces fluides et intuitives adaptées à chaque plateforme</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Maintenance et mises à jour</h4>
                      <p className="text-sm text-muted-foreground">Support continu et évolutions de votre application</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="mr-2">
                  <a href="/contact">Demander un devis</a>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => openCalModal("webwizardry/30min")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Consultation gratuite
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Section E-Commerce */}
          <div id="ecommerce" className="mb-24 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <MotionDiv 
                variants={fadeInLeft}
                className="rounded-xl overflow-hidden bg-muted flex justify-center items-center aspect-video relative order-2 md:order-1"
              >
                <ShoppingCart className="w-24 h-24 text-primary opacity-10 absolute" />
                <div className="z-10 text-center">
                  <h3 className="text-2xl font-bold">E-Commerce</h3>
                  <p className="text-muted-foreground">Boutiques en ligne</p>
                </div>
              </MotionDiv>
              <div className="order-1 md:order-2">
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
            </div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Les avantages de mes solutions e-commerce</CardTitle>
                <CardDescription>Transformez vos ventes en ligne</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expérience d'achat optimisée</h4>
                      <p className="text-sm text-muted-foreground">Interfaces conçues pour maximiser les conversions</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Mises à jour régulières</h4>
                      <p className="text-sm text-muted-foreground">Évolutions et corrections au fil du temps</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="mr-2">
                  <a href="/contact">Demander un devis</a>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => openCalModal("webwizardry/30min")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Consultation gratuite
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Section Tarifs - Remplacée par un CTA vers la page Tarifs */}
          <div className="py-16 my-8 bg-muted/30 rounded-lg text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">Tarifs et Forfaits</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Consultez ma grille tarifaire complète et utilisez le calculateur interactif pour obtenir une estimation précise de votre projet.
              </p>
              <Button size="lg" asChild>
                <a href="/tarifs">Voir tous les tarifs</a>
              </Button>
            </div>
          </div>

          {/* Section CTA finale */}
          <div className="text-center py-12 mt-8">
            <h2 className="text-2xl font-bold mb-4">Prêt à lancer votre projet ?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Discutons de votre projet</a>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 