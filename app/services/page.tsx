"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Code, Layout, Smartphone, Headphones, RefreshCw, Search, ShoppingCart } from "lucide-react"
import { MotionDiv, MotionH1, MotionP, MotionSection, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../src/components/ui/motion"
import PageTransition from "../../src/components/PageTransition"

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <ScrollAnimation className="text-center mb-16">
          <MotionH1 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={fadeInUp}
          >
            Mes Services
          </MotionH1>
          <MotionP 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Des solutions web sur mesure pour répondre à tous vos besoins digitaux. Découvrez mes services spécialisés.
          </MotionP>
        </ScrollAnimation>

        {/* Main Services */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <MotionDiv variants={fadeInUp}>
            <Card className="flex flex-col h-full hover:shadow-md transition-all duration-300 border-primary/20 hover:border-primary/50">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-2">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Création de Sites Web</CardTitle>
                <CardDescription>Sites web modernes, rapides et optimisés</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Sites vitrines professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Portfolio créatif et interactif</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Blogs et sites de contenu</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Optimisation mobile et responsive</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button asChild className="w-full transition-all hover:scale-105">
                    <Link href="/contact">Demander un devis</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <Card className="flex flex-col h-full hover:shadow-md transition-all duration-300 border-primary/20 hover:border-primary/50">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Développement Web</CardTitle>
                <CardDescription>Applications web performantes et robustes</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Applications React et Next.js</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">API REST et GraphQL</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Intégration avec des CMS</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Optimisation des performances</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button asChild className="w-full transition-all hover:scale-105">
                    <Link href="/contact">Demander un devis</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <Card className="flex flex-col h-full hover:shadow-md transition-all duration-300 border-primary/20 hover:border-primary/50">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-2">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Applications Mobiles</CardTitle>
                <CardDescription>Apps mobiles natives et hybrides</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Applications React Native</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">PWA (Progressive Web Apps)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Interface utilisateur intuitive</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground">Publication sur App Store et Play Store</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button asChild className="w-full transition-all hover:scale-105">
                    <Link href="/contact">Demander un devis</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </StaggerContainer>

        {/* Secondary Services */}
        <ScrollAnimation>
          <MotionH1 
            className="text-3xl font-bold mb-8 text-center text-foreground"
            variants={fadeInUp}
          >
            Services additionnels
          </MotionH1>
        </ScrollAnimation>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <MotionDiv 
            variants={fadeInLeft}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md"
          >
            <div className="mr-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Search className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Référencement SEO</h3>
              <p className="text-muted-foreground">
                Optimisation pour les moteurs de recherche, amélioration du classement et stratégie de mots-clés.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv 
            variants={fadeInRight}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md"
          >
            <div className="mr-4">
              <div className="p-3 rounded-full bg-primary/10">
                <ShoppingCart className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">E-commerce</h3>
              <p className="text-muted-foreground">
                Création de boutiques en ligne avec paiement sécurisé, gestion des stocks et expérience d'achat optimisée.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv 
            variants={fadeInLeft}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md"
          >
            <div className="mr-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Headphones className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Maintenance et Support</h3>
              <p className="text-muted-foreground">
                Maintenance régulière, mises à jour de sécurité et support technique pour garder votre site fonctionnel.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv 
            variants={fadeInRight}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md"
          >
            <div className="mr-4">
              <div className="p-3 rounded-full bg-primary/10">
                <RefreshCw className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Refonte de Site</h3>
              <p className="text-muted-foreground">
                Modernisation de sites existants, amélioration des performances et mise à jour du design.
              </p>
            </div>
          </MotionDiv>
        </StaggerContainer>

        {/* CTA Section */}
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground p-8 rounded-lg text-center"
        >
          <MotionH1 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-4"
          >
            Prêt à démarrer votre projet ?
          </MotionH1>
          <MotionP 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 opacity-90 max-w-2xl mx-auto"
          >
            Discutons de vos besoins et créons ensemble la solution digitale parfaite pour votre entreprise.
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button variant="secondary" size="lg" asChild className="font-semibold text-primary">
              <Link href="/contact">Contactez-moi</Link>
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </PageTransition>
  )
}

