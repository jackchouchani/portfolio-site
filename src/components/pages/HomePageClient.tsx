"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, Code, Layout, Smartphone, ArrowRight, Calendar, Mail, User, ShoppingCart } from "lucide-react"
import { MotionDiv, MotionH1, MotionP, MotionSection, MotionSpan, fadeInLeft, fadeInRight, fadeInUp, staggerContainer, StaggerContainer } from "../../components/ui/motion"
import PageTransition from "../../components/PageTransition"
import Testimonials from "../../components/Testimonials"
import { ServicePreview } from "../../components/ServicePreview"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { ScrollObserver } from "../../components/ui/ScrollObserver"
import { getRecentProjects } from "@/src/data/portfolioData"

export default function HomePageClient() {
  // Obtenir les 3 projets les plus récents
  const recentProjects = getRecentProjects(3);
  
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
            <div className="flex flex-col md:flex-row items-center">
              <MotionDiv
                className="flex-1 text-center md:text-left"
                variants={fadeInLeft}
              >
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-sm font-medium px-4 py-1"
                >
                  Développeur Web Freelance
                </Badge>
                <MotionH1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  Développement web et <MotionSpan className="text-primary" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>mobile</MotionSpan> pour votre entreprise
                </MotionH1>
                <MotionP 
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
                  variants={fadeInUp}
                >
                  Des sites web rapides et des applications mobiles iOS/Android qui convertissent vos visiteurs en clients. Solutions sur mesure adaptées à votre budget avec un développement rapide.
                </MotionP>
                <MotionDiv 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  variants={fadeInUp}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="lg" asChild>
                          <Link href="/tarifs">Voir les tarifs</Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Consultez nos tarifs et calculez le coût de votre projet</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="lg" asChild>
                          <Link href="/contact">Me contacter</Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Envoyez-moi un message pour discuter de votre projet</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="lg" asChild>
                          <Link href="/services">Voir mes services</Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Découvrez mon offre complète de services</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </MotionDiv>
              </MotionDiv>
              
              <MotionDiv 
                className="flex-1 relative"
                variants={fadeInLeft}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Badge de statut - visible uniquement sur desktop, positionné au-dessus de l'image */}
                <MotionDiv
                  className="hidden md:flex absolute -top-10 right-0 bg-primary dark:bg-primary text-white dark:text-black border border-primary/20 shadow-xl rounded-full px-4 py-2 text-sm font-medium items-center z-20"
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
                
                <Card className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  {/* Image d'héro */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  
                  <Image
                    src="/images/portfolio/hero-dev.webp"
                    alt="Développeur web travaillant sur un projet"
                    fill
                    className="object-cover opacity-90"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    fetchPriority="high"
                    style={{
                      contentVisibility: "auto",
                      transform: "translateZ(0)"
                    }}
                  />
                </Card>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>

        {/* Bannière "Disponible" fixe en bas sur mobile */}
        <MotionDiv 
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary dark:bg-primary shadow-lg py-2 px-4 flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-black"></span>
            </span>
            <span className="text-white dark:text-black font-semibold">Disponible pour nouveaux projets</span>
          </div>
        </MotionDiv>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <ScrollObserver animation="fade-up" delay={0.05}>
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-sm font-medium px-4 py-1"
                >
                  Mes Services
                </Badge>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.1}>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Solutions Web Rapides et Abordables
                </h1>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.15}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Des services de développement web complets à prix compétitifs pour propulser votre entreprise sur le web avec des délais courts garantis.
                </p>
              </ScrollObserver>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollObserver animation="fade-up" delay={0.2}>
                <ServicePreview
                  title="Création de Sites Web"
                  description="Des sites web modernes, réactifs et optimisés pour tous les appareils."
                  href="/services#websites"
                  icon={<Layout className="h-6 w-6" />}
                />
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.25}>
                <ServicePreview
                  title="Applications Mobiles"
                  description="Applications iOS et Android sur mesure pour étendre votre présence digitale."
                  href="/services#mobile-apps"
                  icon={<Smartphone className="h-6 w-6" />}
                />
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.3}>
                <ServicePreview
                  title="E-Commerce"
                  description="Solutions e-commerce complètes pour vendre vos produits en ligne."
                  href="/services#ecommerce"
                  icon={<ShoppingCart className="h-6 w-6" />}
                />
              </ScrollObserver>
            </div>
            
            <ScrollObserver animation="fade-up" delay={0.7}>
              <div className="text-center mt-12">
                <Button asChild>
                  <Link href="/services">Tous les services</Link>
                </Button>
              </div>
            </ScrollObserver>
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
                <Card className="relative aspect-square w-full max-w-lg mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg bg-muted">
                  {/* Image de profil */}
                  <Image
                    src="/images/portfolio/web-design-showcase.webp"
                    alt="Création de sites web pour PME et TPE"
                    fill
                    className="object-cover"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fetchPriority="high"
                  />
                </Card>
              </MotionDiv>
              
              <div className="flex-1 order-1 md:order-2">
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-sm font-medium px-4 py-1"
                >
                  À Propos
                </Badge>
                <MotionH1 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  variants={fadeInUp}
                >
                  Des sites web efficaces pour PME et TPE
                </MotionH1>
                <MotionP 
                  className="text-muted-foreground mb-6"
                  variants={fadeInUp}
                >
                  Je crée des sites internet modernes et efficaces spécialement conçus pour les petites et moyennes entreprises. Vous obtenez un site professionnel qui attire des clients, à un prix adapté à votre budget, sans compromis sur la qualité.
                </MotionP>
                <MotionP 
                  className="text-muted-foreground mb-8"
                  variants={fadeInUp}
                >
                  Mon expertise s'étend également au développement d'applications mobiles iOS et Android qui permettent à votre entreprise de toucher vos clients sur tous leurs appareils. Mon objectif : vous fournir des outils performants pour développer votre activité en ligne et mobile, avec un processus simple et un accompagnement personnalisé.
                </MotionP>
                <MotionDiv variants={fadeInUp}>
                  <Button asChild>
                    <Link href="/a-propos">Découvrir mes services</Link>
                  </Button>
                </MotionDiv>
              </div>
            </StaggerContainer>
            
            {/* Profile Info Tabs */}
            <div className="mt-20 max-w-4xl mx-auto">
              <Tabs defaultValue="competences" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="competences">Mes services</TabsTrigger>
                  <TabsTrigger value="experience">Avantages</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="competences" className="mt-6 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ce que je vous propose</CardTitle>
                      <CardDescription>Des solutions adaptées à tous les besoins</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Sites vitrines professionnels</p>
                            <p className="text-sm text-muted-foreground">Pour présenter votre activité et attirer de nouveaux clients</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">E-commerce et boutiques en ligne</p>
                            <p className="text-sm text-muted-foreground">Pour vendre vos produits 24h/24 et 7j/7</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Applications mobiles iOS et Android</p>
                            <p className="text-sm text-muted-foreground">Pour rester connecté avec vos clients sur tous leurs appareils</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="experience" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pourquoi travailler avec moi</CardTitle>
                      <CardDescription>Une approche différente des agences traditionnelles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px] rounded-md">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="font-semibold">Tarifs transparents et abordables</h3>
                            <p className="text-sm text-muted-foreground">Des prix clairs et adaptés aux budgets des petites entreprises, sans mauvaises surprises.</p>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h3 className="font-semibold">Délais de livraison courts</h3>
                            <p className="text-sm text-muted-foreground">Votre site web prêt en quelques semaines seulement, pas en plusieurs mois.</p>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h3 className="font-semibold">Résultats concrets pour votre business</h3>
                            <p className="text-sm text-muted-foreground">Des sites optimisés pour attirer des clients et augmenter vos ventes.</p>
                          </div>
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="contact" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Discutons de votre projet</CardTitle>
                      <CardDescription>Je réponds rapidement à toutes vos questions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Link href="/contact" className="text-primary hover:underline">
                              contact@webwizardry.fr
                            </Link>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                              <Avatar>
                                <AvatarFallback>WW</AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold">Contactez-moi</h4>
                                <p className="text-sm">
                                  N'hésitez pas à m'envoyer un message pour discuter de votre projet ou obtenir un devis gratuit.
                                </p>
                                <div className="flex items-center pt-2">
                                  <Button size="sm" asChild>
                                    <Link href="/contact">Formulaire de contact</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <StaggerContainer className="text-center mb-16">
              <Badge 
                variant="secondary" 
                className="mb-4 text-sm font-medium px-4 py-1"
              >
                Portfolio
              </Badge>
              <MotionH1 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={fadeInUp}
              >
                Projets Récents
              </MotionH1>
              <MotionP 
                className="text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Découvrez quelques-uns de mes projets récents qui montrent mon expertise et ma créativité.
              </MotionP>
            </StaggerContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description.length > 100 ? 
                      `${project.description.substring(0, 100)}...` : 
                      project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={`/portfolio/${project.slug}`}>Voir le projet <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/portfolio">Voir tous les projets</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Section Forfaits simplifiée */}
        <section className="py-16 pt-24 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <Badge 
                variant="secondary" 
                className="mb-4 text-sm font-medium px-4 py-1"
              >
                Tarifs Transparents
              </Badge>
              <MotionH1 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={fadeInUp}
              >
                Solutions adaptées à votre budget
              </MotionH1>
              <MotionP 
                className="text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Des forfaits compétitifs pour tous vos projets web, e-commerce et applications mobiles.
                Consultez tous nos forfaits détaillés ou utilisez notre calculateur interactif.
              </MotionP>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Forfait Site Web */}
              <MotionDiv
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden rounded-lg border bg-background shadow-md"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold">Site Vitrine</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">À partir de 600€</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Idéal pour présenter votre activité</p>
                    
                    <div className="mt-6">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Design responsive</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Jusqu'à 5 pages</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Optimisation SEO de base</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full">
                      <Link href="/tarifs">Voir les détails</Link>
                    </Button>
                  </div>
                </div>
              </MotionDiv>
              
              {/* Forfait E-commerce */}
              <MotionDiv
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden rounded-lg border border-primary bg-background shadow-lg"
              >
                <div className="absolute top-0 inset-x-0 bg-black text-white text-center text-sm font-bold py-2 px-3 z-30 dark:bg-white dark:text-black">
                  Populaire
                </div>
                <div className="flex flex-col h-full">
                  <div className="p-6 pt-14 flex-grow">
                    <h3 className="text-xl font-bold">Boutique en ligne</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">À partir de 800€</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Solution e-commerce complète</p>
                    
                    <div className="mt-6">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Gestion des produits</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Paiement sécurisé</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Dashboard d'administration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/tarifs">Voir les détails</Link>
                    </Button>
                  </div>
                </div>
              </MotionDiv>
              
              {/* Forfait App Mobile */}
              <MotionDiv
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-lg border bg-background shadow-md"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold">Application Mobile</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">À partir de 2000€</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Apps iOS/Android sur mesure</p>
                    
                    <div className="mt-6">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Interface intuitive</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Publication sur les stores</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Support après livraison</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full">
                      <Link href="/tarifs">Voir les détails</Link>
                    </Button>
                  </div>
                </div>
              </MotionDiv>
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/tarifs#calculateur">Calculer le prix de votre projet</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/images/portfolio/cta-background.webp" 
                alt="Contactez-moi pour votre projet web"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <MotionH1
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                Besoin d'un site web ou d'une application mobile?
              </MotionH1>
              <MotionP
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1 }}
              >
                Consultez mes tarifs ou contactez-moi pour un devis personnalisé. Sites web à partir de 500€, applications mobiles sur devis, développement rapide et tarifs compétitifs garantis.
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
                    <Link href="/tarifs">Voir les tarifs</Link>
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
                    className="border-white hover:bg-white/10 dark:text-white hover:text-white dark:text-white dark:hover:text-white dark:border-white font-semibold min-w-[200px] text-base py-6"
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