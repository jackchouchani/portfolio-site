"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MotionDiv, MotionH1, MotionP, MotionSection, MotionSpan, fadeInLeft, fadeInRight, fadeInUp, staggerContainer, StaggerContainer } from "../../components/ui/motion"
import PageTransition from "../../components/PageTransition"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Mail, Phone, MapPin, Calendar, Briefcase, Book, Award, Code, Laptop, Star, Check, Github, Linkedin, ExternalLink, ArrowRight, Heart } from "lucide-react"

export default function AboutPageClient() {
  // Gestion de l'état des onglets
  const [activeTab, setActiveTab] = useState("competences");
  
  const contactInfo = {
    email: "contact@webwizardry.fr",
    phone: "01 23 45 67 89",
    location: "Paris, France",
    github: "https://github.com/jackchouchani/",
    linkedin: "https://www.linkedin.com/in/jacqueschouchani/"
  }

  return (
    <>
      {/* Schema.org Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jacques Chouchani",
            "jobTitle": "Développeur Web Freelance",
            "description": "Développeur web spécialisé en sites web modernes, rapides et abordables pour entreprises et particuliers.",
            "image": "https://webwizardry.fr/img/profile.jpg",
            "email": "contact@webwizardry.fr",
            "telephone": "0123456789",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "addressCountry": "FR"
            },
            "url": "https://webwizardry.fr",
            "sameAs": [
              "https://github.com/jackchouchani",
              "https://www.linkedin.com/in/jacqueschouchani"
            ],
            "knowsAbout": [
              "Développement Web",
              "Next.js",
              "React",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
              "Web Performance",
              "SEO"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Web Wizardry",
              "url": "https://webwizardry.fr"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Université de Technologie"
            }
          })
        }}
      />
      
      <PageTransition>
        <div className="container mx-auto px-4 py-12">
          {/* Section Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <MotionDiv
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <Badge variant="secondary" className="mb-2">À propos de moi</Badge>
              <h1 className="text-4xl font-bold">
                Expert en <span className="text-primary">développement web</span> abordable et rapide
              </h1>
              <p className="text-muted-foreground text-lg">
                Je suis Jacques Chouchani, développeur freelance passionné par la création de sites web performants, 
                élégants et accessibles. Mon objectif est de rendre le web meilleur, un site à la fois.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild>
                  <Link href="/contact">Me contacter</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">Voir mes projets</Link>
                </Button>
              </div>
            </MotionDiv>
            
            <MotionDiv
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="relative aspect-square max-w-md mx-auto lg:mx-0"
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src="/img/profile.jpg" 
                  alt="Jacques Chouchani - Développeur Web Freelance"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              
              {/* Badges flottants */}
              <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
                <span className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="font-semibold">5+ ans d&apos;expérience</span>
                </span>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-background border border-border px-4 py-2 rounded-full shadow-lg">
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">Sites rapides et abordables</span>
                </span>
              </div>
            </MotionDiv>
          </section>
          
          {/* Section "Mon Parcours" */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-3">Mon parcours</Badge>
              <h2 className="text-3xl font-bold mb-4">De la passion à l&apos;expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mon chemin vers le développement web a été guidé par ma passion pour la technologie et la création de solutions adaptées aux besoins des clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Expérience professionnelle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> 2020 - Présent
                    </p>
                    <h3 className="font-medium text-lg">Développeur Web Freelance</h3>
                    <p className="text-muted-foreground">
                      Création de sites web modernes et applications pour clients variés. Spécialisation en solutions performantes et abordables.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> 2018 - 2020
                    </p>
                    <h3 className="font-medium text-lg">Développeur Front-end Senior</h3>
                    <p className="text-muted-foreground">
                      Développement d&apos;interfaces utilisateur réactives et accessibles pour applications web complexes.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> 2016 - 2018
                    </p>
                    <h3 className="font-medium text-lg">Développeur Web Junior</h3>
                    <p className="text-muted-foreground">
                      Premiers pas dans le développement web professionnel, travail en équipe sur des projets variés.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary" />
                    Formation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> 2019
                    </p>
                    <h3 className="font-medium text-lg">Certification Next.js Advanced</h3>
                    <p className="text-muted-foreground">
                      Spécialisation en développement d&apos;applications complexes avec Next.js et React.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> 2013 - 2016
                    </p>
                    <h3 className="font-medium text-lg">Master en Développement Web</h3>
                    <p className="text-muted-foreground">
                      Formation complète en développement front-end et back-end, avec spécialisation en UX/UI.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> 2011 - 2013
                    </p>
                    <h3 className="font-medium text-lg">BTS Informatique</h3>
                    <p className="text-muted-foreground">
                      Fondamentaux de la programmation et des systèmes d&apos;information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Section compétences, services et valeurs */}
          <Tabs 
            defaultValue="competences" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Ce que je peux vous apporter</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Découvrez mes compétences, services et valeurs qui font la différence dans chaque projet
              </p>
              
              <TabsList className="mx-auto">
                <TabsTrigger value="competences">Compétences</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="valeurs">Valeurs</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="competences" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Technologies Front-end
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>React & Next.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>HTML5 & CSS3</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>JavaScript & TypeScript</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Tailwind CSS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Framer Motion & GSAP</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Laptop className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Back-end & DevOps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Node.js & Express</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>MongoDB & PostgreSQL</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Firebase & Supabase</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Vercel & Netlify</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>API REST & GraphQL</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Optimisation & SEO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Performance Web & Core Web Vitals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Référencement naturel (SEO)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Accessibilité (WCAG)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Analytics & Mesure de performance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Optimisation des médias</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Création de Sites Web
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Développement de sites web sur mesure, modernes et optimisés pour tous les appareils.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Sites vitrines professionnels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Boutiques e-commerce</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Applications web personnalisées</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Laptop className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Refonte & Optimisation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Amélioration de sites existants pour de meilleures performances et une expérience utilisateur optimale.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Refonte graphique et technique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Optimisation des performances</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Migration vers des technologies modernes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Référencement & SEO
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Optimisation du référencement pour améliorer la visibilité de votre site sur les moteurs de recherche.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Audit SEO complet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Optimisation technique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Stratégie de contenu</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="valeurs" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Qualité & Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Je m'engage à fournir un travail d'une qualité irréprochable, en respectant les standards de l'industrie et en veillant à chaque détail.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Code propre et maintenable</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Design soigné et moderne</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Tests rigoureux</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Transparence & Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Je crois en une communication claire et transparente avec mes clients, pour établir une relation de confiance durable.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Tarifs clairs et sans surprise</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Suivi régulier des projets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Disponibilité et réactivité</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Contact and Social Section */}
          <Card className="mb-16 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Me contacter</CardTitle>
              <CardDescription className="text-center">
                Vous pouvez me joindre via les coordonnées ci-dessous ou les réseaux sociaux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-medium text-lg mb-2">Coordonnées</h3>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Localisation</p>
                      <p>{contactInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-lg mb-2">Réseaux sociaux</h3>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href="https://github.com/jackchouchani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/jackchouchani
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                        linkedin.com/in/jacqueschouchani
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Envoyez-moi un message</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* CTA Section */}
          <div 
            className="relative rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-background border border-primary/20 p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Prêt à créer votre projet web ?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Discutons de votre idée et transformons-la en réalité avec une solution web abordable, rapide et adaptée à vos besoins.
                </p>
                <Button variant="secondary" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
                  <Link href="/contact">Contactez-moi</Link>
                </Button>
              </MotionDiv>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  )
} 