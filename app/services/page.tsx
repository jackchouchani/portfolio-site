"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { Check, Code, Layout, Smartphone, Headphones, RefreshCw, Search, ShoppingCart, PlusCircle, Star, Clock, FileCheck } from "lucide-react"
import { MotionDiv, MotionH1, MotionP, MotionSection, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../src/components/ui/motion"
import PageTransition from "../../src/components/PageTransition"

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <ScrollAnimation className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-1 mx-auto"
          >
            Développement Web
          </Badge>
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

        {/* Services Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="web">Sites Web</TabsTrigger>
              <TabsTrigger value="apps">Applications</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="web" className="space-y-8">
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
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
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full transition-all hover:scale-105">
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Technologies utilisées</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <Badge variant="outline" className="justify-center">React</Badge>
                      <Badge variant="outline" className="justify-center">Next.js</Badge>
                      <Badge variant="outline" className="justify-center">Tailwind CSS</Badge>
                      <Badge variant="outline" className="justify-center">TypeScript</Badge>
                      <Badge variant="outline" className="justify-center">Node.js</Badge>
                      <Badge variant="outline" className="justify-center">Vercel/Netlify</Badge>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Processus de création</AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li className="text-foreground">Analyse des besoins et cahier des charges</li>
                      <li className="text-foreground">Conception UX/UI et maquettes</li>
                      <li className="text-foreground">Développement et intégration</li>
                      <li className="text-foreground">Tests et optimisations</li>
                      <li className="text-foreground">Mise en ligne et formation</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Délais et tarifs</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      Les délais et tarifs varient selon la complexité du projet. Un site vitrine simple peut être développé en 2-3 semaines, tandis qu'un projet plus complexe peut prendre plusieurs mois.
                    </p>
                    <p className="text-muted-foreground">
                      Contactez-moi pour obtenir un devis personnalisé adapté à vos besoins spécifiques.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="apps">
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
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
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full transition-all hover:scale-105">
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            </TabsContent>
            
            <TabsContent value="mobile">
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
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
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full transition-all hover:scale-105">
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            </TabsContent>
          </Tabs>
        </div>

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
          <HoverCard>
            <HoverCardTrigger asChild>
              <MotionDiv 
                variants={fadeInLeft}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md cursor-pointer"
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
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">Référencement SEO</h4>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Amélioration moyenne de 40% du trafic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Résultats visibles sous 3-6 mois</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Rapport d'analyse détaillé inclus</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <MotionDiv 
                variants={fadeInRight}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md cursor-pointer"
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
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">Solutions E-commerce</h4>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Intégration de passerelles de paiement sécurisées</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Gestion automatisée des stocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Paniers d'achat optimisés pour la conversion</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <MotionDiv 
                variants={fadeInLeft}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md cursor-pointer"
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
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">Maintenance et Support</h4>
                <p className="text-sm">Des formules adaptées à vos besoins :</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-1">
                    <PlusCircle className="h-3 w-3" />
                    <span>Maintenance préventive mensuelle</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <PlusCircle className="h-3 w-3" />
                    <span>Mises à jour de sécurité</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <PlusCircle className="h-3 w-3" />
                    <span>Support technique réactif</span>
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <MotionDiv 
                variants={fadeInRight}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex p-6 bg-muted/30 rounded-lg hover:shadow-md cursor-pointer"
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
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">Refonte de Site Web</h4>
                <p className="text-sm">Donnez une nouvelle vie à votre présence en ligne :</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-1">
                    <PlusCircle className="h-3 w-3" />
                    <span>Audit complet de l'existant</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <PlusCircle className="h-3 w-3" />
                    <span>Design moderne et responsive</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <PlusCircle className="h-3 w-3" />
                    <span>Migration de contenu optimisée</span>
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
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

