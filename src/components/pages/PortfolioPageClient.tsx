"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MotionDiv, MotionH1, MotionP, MotionSpan, ScrollAnimation, fadeInUp } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import { Code, Construction, Hammer, ArrowRight, Clock, AlertCircle, LucideGithub, ExternalLink, Check } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export default function PortfolioPageClient() {
  const [progress, setProgress] = useState(0);
  
  // Animation du pourcentage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 75) {
        setProgress(prev => prev + 1);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [progress]);

  // Je vais ajouter quelques projets avec des images d'Unsplash
  const upcomingProjects = [
    {
      id: 1,
      title: "E-commerce Moderne",
      description: "Une plateforme de commerce électronique avec interface utilisateur innovante et système de paiement intégré.",
      category: "Sites Web",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"]
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description: "Une application intuitive pour organiser et suivre les tâches personnelles et professionnelles.",
      category: "Applications",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      tech: ["React", "Firebase", "Redux", "Material UI"]
    },
    {
      id: 3,
      title: "Portfolio Artistique",
      description: "Site vitrine pour un artiste, avec galerie interactive et intégration de commerce électronique pour la vente d'œuvres.",
      category: "Sites Web",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      tech: ["Gatsby", "GSAP", "Shopify", "Cloudinary"]
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Interface de tableau de bord pour la visualisation de données d'entreprise avec graphiques interactifs.",
      category: "Applications",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      tech: ["Vue.js", "D3.js", "Express", "MongoDB"]
    },
    {
      id: 5,
      title: "Site Corporatif Responsive",
      description: "Site web professionnel avec design moderne et adaptatif pour une entreprise de conseil.",
      category: "Sites Web",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      tech: ["HTML5", "CSS3", "JavaScript", "WordPress"]
    },
    {
      id: 6,
      title: "Application Mobile de Fitness",
      description: "Application mobile pour le suivi d'activité physique, avec personnalisation des entraînements et statistiques.",
      category: "Applications",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
      tech: ["React Native", "TypeScript", "GraphQL", "AWS"]
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        {/* Ajout des breadcrumbs cohérentes */}
        <Breadcrumbs 
          items={[
            { label: "Portfolio", href: "/portfolio", isCurrent: true }
          ]}
        />
        
        <ScrollAnimation className="text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-1 mx-auto"
          >
            Mes réalisations
          </Badge>
          <MotionH1 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={fadeInUp}
          >
            Mon Portfolio
          </MotionH1>
          <MotionP 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez bientôt mes projets et réalisations dans cette section en cours de développement.
          </MotionP>
        </ScrollAnimation>
        
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Alert variant="default" className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50 text-amber-800 dark:text-amber-300">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Page en cours de construction</AlertTitle>
            <AlertDescription>
              Je travaille activement sur cette section pour vous présenter mes projets de la meilleure façon possible.
            </AlertDescription>
          </Alert>

          <Card className="mt-8 border-primary/20 overflow-hidden bg-gradient-to-b from-background to-muted/30">
            <CardHeader className="text-center">
              <div className="mx-auto">
                <MotionDiv
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="p-4 rounded-full bg-primary/10 text-primary mb-4 mx-auto"
                >
                  <Construction className="h-12 w-12" />
                </MotionDiv>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                Avancement du Portfolio
              </CardTitle>
              <CardDescription className="max-w-lg mx-auto">
                Je travaille actuellement à la création d'un portfolio captivant pour vous présenter mes projets les plus récents et les plus impressionnants.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-full max-w-lg">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progression</span>
                    <span className="font-medium text-primary">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mb-2">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium">Design</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mb-2">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium">Structure</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 mb-2">
                        <Clock className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium">Contenu</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 mb-2">
                        <Clock className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium">Intégration</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>

        {/* Tabs pour filtrer les projets */}
        <Tabs defaultValue="tous" className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Mes Projets</h2>
            <TabsList>
              <TabsTrigger value="tous">Tous</TabsTrigger>
              <TabsTrigger value="sites">Sites Web</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="tous" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
                  <div className="h-48 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge variant="outline" className="cursor-default">
                                {tech}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Technologie utilisée</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" disabled className="text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4" />
                            Bientôt disponible
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ce projet est en cours de développement</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sites" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects
                .filter((project) => project.category === "Sites Web")
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
                    <div className="h-48 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" disabled className="text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Bientôt disponible
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects
                .filter((project) => project.category === "Applications")
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
                    <div className="h-48 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" disabled className="text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Bientôt disponible
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="my-16"
        >
          <Card className="border-primary/20 overflow-hidden bg-muted/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Vous avez un projet en tête ?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                En attendant que cette section soit complétée, n'hésitez pas à me contacter pour discuter de votre projet et voir comment je peux vous aider.
              </p>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button size="lg" asChild>
                  <Link href="/contact" className="flex items-center">
                    Me contacter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MotionDiv>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </PageTransition>
  );
} 