"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Code, Layout, Smartphone, ArrowRight } from "lucide-react"
import { MotionDiv, MotionH1, MotionP, MotionSection, MotionSpan, fadeInLeft, fadeInRight, fadeInUp, staggerContainer, StaggerContainer } from "../src/components/ui/motion"
import PageTransition from "../src/components/PageTransition"
import Testimonials from "../src/components/Testimonials"
import { ServicePreview } from "../src/components/ServicePreview"

export default function Home() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <MotionSection 
          className="py-20 md:py-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <MotionDiv
                className="flex-1 text-center md:text-left"
                variants={fadeInLeft}
              >
                <MotionSpan 
                  className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
                  variants={fadeInUp}
                >
                  Développeur Web Freelance
                </MotionSpan>
                <MotionH1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  variants={fadeInUp}
                >
                  Transformez votre <MotionSpan className="text-primary" variants={fadeInUp}>présence en ligne</MotionSpan> avec des sites web modernes
                </MotionH1>
                <MotionP 
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
                  variants={fadeInUp}
                >
                  Je conçois et développe des sites web et applications qui aident les entreprises à atteindre leurs objectifs et à connecter avec leur audience.
                </MotionP>
                <MotionDiv 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  variants={fadeInUp}
                >
                  <Button size="lg" asChild>
                    <Link href="/contact">Discutons de votre projet</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">Voir mes services</Link>
                  </Button>
                </MotionDiv>
              </MotionDiv>
              
              <MotionDiv 
                className="flex-1 relative"
                variants={fadeInRight}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  {/* Image placeholder - remplacer par votre propre image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  
                  {/* Uncomment and replace with your actual image
                  <Image
                    src="/hero-image.jpg"
                    alt="Développeur web travaillant sur un projet"
                    fill
                    className="object-cover"
                    priority
                  />
                  */}
                </div>
                
                {/* Flottant "badge" de statut */}
                <MotionDiv
                  className="absolute md:-top-4 md:-right-4 bottom-4 right-4 md:bottom-auto bg-primary dark:bg-primary text-white dark:text-black border border-primary/20 shadow-lg rounded-full px-4 py-2 text-sm font-medium flex items-center z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-black"></span>
                  </span>
                  Disponible pour nouveaux projets
                </MotionDiv>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <StaggerContainer className="text-center mb-16">
              <MotionSpan 
                className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
                variants={fadeInUp}
              >
                Mes Services
              </MotionSpan>
              <MotionH1 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={fadeInUp}
              >
                Solutions Web Complètes
              </MotionH1>
              <MotionP 
                className="text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                J'offre une gamme complète de services pour aider votre entreprise à prospérer dans l'environnement numérique.
              </MotionP>
            </StaggerContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServicePreview
                title="Création de Sites Web"
                description="Des sites web modernes, réactifs et optimisés pour tous les appareils."
                href="/services#websites"
                icon={<Layout className="h-6 w-6" />}
              />
              <ServicePreview
                title="Applications Web"
                description="Applications web personnalisées avec des interfaces utilisateur intuitives."
                href="/services#web-apps"
                icon={<Code className="h-6 w-6" />}
              />
              <ServicePreview
                title="E-Commerce"
                description="Solutions e-commerce complètes pour vendre vos produits en ligne."
                href="/services#ecommerce"
                icon={<Smartphone className="h-6 w-6" />}
              />
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/services">Tous les services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />

        {/* About Section - Quick intro */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <StaggerContainer className="flex flex-col md:flex-row items-center gap-12">
              <MotionDiv
                className="flex-1 order-2 md:order-1"
                variants={fadeInLeft}
              >
                <div className="relative aspect-square w-full max-w-lg mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg bg-muted">
                  {/* Image placeholder - remplacer par votre propre image */}
                  {/* 
                  <Image
                    src="/about-image.jpg"
                    alt="Photo de profil"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </MotionDiv>
              
              <div className="flex-1 order-1 md:order-2">
                <MotionSpan 
                  className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
                  variants={fadeInUp}
                >
                  À Propos
                </MotionSpan>
                <MotionH1 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  variants={fadeInUp}
                >
                  Une passion pour le développement web
                </MotionH1>
                <MotionP 
                  className="text-muted-foreground mb-6"
                  variants={fadeInUp}
                >
                  Avec plus de 5 ans d'expérience dans le développement web, je me spécialise dans la création de solutions digitales modernes, performantes et accessibles. Ma passion pour les technologies web me pousse constamment à apprendre et à rester à jour avec les dernières tendances et meilleures pratiques.
                </MotionP>
                <MotionP 
                  className="text-muted-foreground mb-8"
                  variants={fadeInUp}
                >
                  Je crois fermement que chaque projet doit non seulement être esthétiquement plaisant, mais aussi répondre aux objectifs commerciaux spécifiques de mes clients.
                </MotionP>
                <MotionDiv variants={fadeInUp}>
                  <Button asChild>
                    <Link href="/a-propos">En savoir plus sur moi</Link>
                  </Button>
                </MotionDiv>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-20 bg-background dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <MotionH1
                className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                Prêt à démarrer votre prochain projet ?
              </MotionH1>
              <MotionP
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1 }}
              >
                Contactez-moi dès aujourd&apos;hui pour discuter de votre projet et voir comment
                je peux vous aider à créer une présence en ligne exceptionnelle.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button 
                    variant="default" 
                    className="bg-primary hover:bg-primary/90 text-white dark:text-black font-bold min-w-[200px] text-base py-6 shadow-lg"
                    asChild
                  >
                    <Link href="/contact">Me contacter</Link>
                  </Button>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-primary hover:bg-primary/10 text-primary hover:text-primary dark:text-primary dark:hover:text-primary dark:border-primary font-semibold min-w-[200px] text-base py-6"
                    asChild
                  >
                    <Link href="/services">Voir mes services</Link>
                  </Button>
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}