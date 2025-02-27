"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Check, Download, Calendar, MapPin, Briefcase, GraduationCap, Mail, Phone, ExternalLink, Github, Linkedin, Code, Layout, FileDown } from "lucide-react"
import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSpan, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../src/components/ui/motion"
import PageTransition from "../../src/components/PageTransition"

export default function AboutPage() {
  // Liste des compétences techniques
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 92 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ]

  // Liste des compétences additionnelles
  const additionalSkills = [
    "Git/GitHub", "Responsive Design", "API REST", "GraphQL", 
    "SEO", "Accessibilité", "Performance Web", "Testing"
  ]

  // Informations de contact
  const contactInfo = {
    email: "contact@example.com",
    phone: "+33 6 52 58 85 83",
    location: "Paris, France",
    github: "https://github.com/jackchouchani/",
    linkedin: "https://www.linkedin.com/in/jacqueschouchani/"
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        {/* Section Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <MotionDiv
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Moi</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Développeur web passionné, spécialisé dans la création d'expériences web modernes et performantes.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="/contact">Me contacter</Link>
              </Button>
              <Button variant="outline" size="lg">
                <FileDown className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </Button>
            </div>
            
            {/* Contact Quick Info */}
            <div className="flex flex-wrap gap-4 mt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{contactInfo.location}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Basé à {contactInfo.location}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Contactez-moi</h4>
                      <p className="text-sm">
                        Envoyez-moi un email pour discuter de votre projet ou simplement pour dire bonjour.
                      </p>
                      <div className="flex items-center pt-2">
                        <Button size="sm" asChild>
                          <Link href="/contact">Envoyer un message</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-8 border-background/80 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Portrait professionnel"
                fill
                className="object-cover"
              />
            </div>
          </MotionDiv>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="skills" className="mb-16 max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="experience">Expérience</TabsTrigger>
            <TabsTrigger value="education">Formation</TabsTrigger>
          </TabsList>

          {/* Tab 1: Compétences */}
          <TabsContent value="skills" className="space-y-8">
            <div className="text-center mb-10">
              <MotionH2 
                className="text-3xl font-bold mb-4 text-foreground"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Mes Compétences Techniques
              </MotionH2>
              <MotionP 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Je maîtrise un large éventail de technologies web modernes pour créer des expériences web exceptionnelles.
              </MotionP>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Expertise principale</CardTitle>
                <CardDescription>
                  Mes compétences principales mesurées par mon expérience et mon niveau de maîtrise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <MotionDiv key={index} className="space-y-2" variants={fadeInUp} initial="hidden" animate="visible">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-foreground">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </MotionDiv>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Compétences additionnelles</CardTitle>
                <CardDescription>
                  Autres technologies et méthodologies que je maîtrise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Expérience */}
          <TabsContent value="experience" className="space-y-8">
            <div className="text-center mb-10">
              <MotionH2 
                className="text-3xl font-bold mb-4 text-foreground"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Mon Parcours Professionnel
              </MotionH2>
              <MotionP 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Mon expérience professionnelle dans le domaine du développement web.
              </MotionP>
            </div>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Mon Expérience</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <MotionDiv variants={fadeInUp} initial="hidden" animate="visible" className="mb-10">
                    <Card className="hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="h-48 relative">
                        <Image
                          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
                          alt="Développeur Web Senior"
                          fill
                          className="object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm font-medium">
                            2020 - Aujourd'hui
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Code className="mr-2 h-5 w-5 text-primary" />
                          Développeur Web Senior
                        </CardTitle>
                        <CardDescription>Agence Web Digitale</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Conception et développement d'applications web complexes, direction technique de projets, mentorat d'équipe.
                        </p>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                  
                  <MotionDiv variants={fadeInUp} initial="hidden" animate="visible">
                    <Card className="hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="h-48 relative">
                        <Image
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
                          alt="Développeur Frontend"
                          fill
                          className="object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm font-medium">
                            2017 - 2020
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Layout className="mr-2 h-5 w-5 text-primary" />
                          Développeur Frontend
                        </CardTitle>
                        <CardDescription>Studio de Design Web</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Intégration de maquettes, développement d'interfaces réactives, optimisation des performances.
                        </p>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                </div>
                
                <div className="space-y-10">
                  <MotionDiv variants={fadeInUp} initial="hidden" animate="visible">
                    <Card className="hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="h-48 relative">
                        <Image
                          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
                          alt="Master en Développement Web"
                          fill
                          className="object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm font-medium">
                            2015 - 2017
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                          Master en Développement Web
                        </CardTitle>
                        <CardDescription>Université de Paris</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Diplôme d'étude supérieure spécialisé en développement web et applications mobiles.
                        </p>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                  
                  <MotionDiv variants={fadeInUp} initial="hidden" animate="visible">
                    <Card className="hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="h-48 relative">
                        <Image
                          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
                          alt="Stage développement web"
                          fill
                          className="object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm font-medium">
                            2015
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Briefcase className="mr-2 h-5 w-5 text-primary" />
                          Stage en Développement Web
                        </CardTitle>
                        <CardDescription>StartUp Innovante</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Contribution au développement de fonctionnalités frontend pour une application web SaaS.
                        </p>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Tab 3: Formation */}
          <TabsContent value="education" className="space-y-8">
            <div className="text-center mb-10">
              <MotionH2 
                className="text-3xl font-bold mb-4 text-foreground"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Formation et Diplômes
              </MotionH2>
            </div>

            <MotionDiv variants={fadeInUp} initial="hidden" animate="visible">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <GraduationCap className="h-5 w-5" />
                    <span className="font-medium">2015 - 2018</span>
                  </div>
                  <CardTitle>Master en Développement Web</CardTitle>
                  <CardDescription>Université de Paris, Paris</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Spécialisation en développement web et applications mobiles. Cursus axé sur les technologies modernes et les bonnes pratiques de développement.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
            
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>
                  Formations complémentaires et certifications professionnelles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Certification React Advanced</h3>
                      <p className="text-sm text-muted-foreground">2022 - Frontend Masters</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Web Accessibility</h3>
                      <p className="text-sm text-muted-foreground">2021 - Google</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                      https://github.com/jackchouchani/
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
                      https://www.linkedin.com/in/jacqueschouchani/
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
          className="bg-primary text-primary-foreground p-8 rounded-lg text-center"
          style={{ opacity: 1, transform: 'none' }}
        >
          <MotionH2 
            className="text-2xl font-bold mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Intéressé par mes services ?
          </MotionH2>
          <MotionP 
            className="mb-6 opacity-90 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Si mon profil correspond à vos besoins, n'hésitez pas à me contacter pour discuter de votre projet.
          </MotionP>
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Button variant="secondary" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <Link href="/contact">Contactez-moi</Link>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </PageTransition>
  )
}

