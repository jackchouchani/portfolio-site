"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionDiv, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../components/ui/motion"
import PageTransition from "../../components/PageTransition"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { FileText, Calendar, Briefcase, GraduationCap, ArrowRight } from "lucide-react"

export default function AboutPageClient() {
  const experienceData = [
    {
      id: 1,
      title: "Développeur Web Freelance",
      company: "Web Wizardry",
      period: "2020 - Présent",
      description: "Conception et développement de sites web et d'applications web pour divers clients. Spécialisation en solutions React et Next.js performantes et accessibles.",
    },
    {
      id: 2,
      title: "Développeur Frontend",
      company: "Agence Digitale XYZ",
      period: "2018 - 2020",
      description: "Création d'interfaces utilisateur réactives et dynamiques pour des clients de grande envergure. Travail en équipe avec des designers et des développeurs backend.",
    },
    {
      id: 3,
      title: "Développeur Web Junior",
      company: "StartupTech",
      period: "2016 - 2018",
      description: "Développement et maintenance de sites web e-commerce. Intégration de maquettes et développement de fonctionnalités frontend.",
    },
  ]

  const educationData = [
    {
      id: 1,
      title: "Master en Développement Web",
      institution: "École Supérieure du Numérique",
      period: "2014 - 2016",
      description: "Spécialisation en technologies web avancées et expérience utilisateur",
    },
    {
      id: 2,
      title: "Licence Informatique",
      institution: "Université des Sciences",
      period: "2011 - 2014",
      description: "Fondamentaux de la programmation, algorithmique et structures de données",
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">À propos de moi</h1>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Développeur web passionné par la création d'expériences digitales modernes, 
              intuitives et accessibles.
            </p>
          </ScrollAnimation>

          {/* Bio Section */}
          <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
            <MotionDiv 
              variants={fadeInLeft}
              className="md:col-span-2"
            >
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Photo de profil" 
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
              <h2 className="text-2xl font-bold mb-4">Qui suis-je ?</h2>
              <p className="text-muted-foreground mb-4">
                Bonjour, je suis un développeur web freelance passionné par la création 
                d'expériences digitales modernes et performantes. Avec plus de 7 ans d'expérience 
                dans le domaine, je me spécialise dans le développement frontend avec React, Next.js 
                et les technologies web modernes.
              </p>
              <p className="text-muted-foreground mb-6">
                Ma mission est d'aider les entrepreneurs, startups et PME à concrétiser leurs projets 
                web avec des solutions sur mesure, rapides à développer et faciles à maintenir. Je crois 
                fermement que chaque projet mérite une attention particulière et un travail de qualité, 
                peu importe sa taille.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="/portfolio">Voir mon portfolio</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>
            </MotionDiv>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Mon parcours professionnel</h2>
            </ScrollAnimation>
            
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <MotionDiv
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-muted/40 hover:border-primary/40 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                          <CardDescription className="text-base font-medium">{item.company}</CardDescription>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full">
                          <Calendar className="h-3.5 w-3.5 mr-2" />
                          {item.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Formation</h2>
            </ScrollAnimation>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <MotionDiv
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-muted/40 hover:border-primary/40 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                          <CardDescription className="text-base font-medium">{item.institution}</CardDescription>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full">
                          <Calendar className="h-3.5 w-3.5 mr-2" />
                          {item.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Skills Section - sans badges comme demandé */}
          <div className="mb-16">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Mes compétences</h2>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-muted/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>React, Next.js, TypeScript</li>
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>Tailwind CSS, Styled Components</li>
                    <li>Responsive Design, Animations</li>
                    <li>Performance & Accessibilité</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-muted/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Node.js, Express</li>
                    <li>API REST, GraphQL</li>
                    <li>MongoDB, PostgreSQL</li>
                    <li>Firebase, Supabase</li>
                    <li>Authentication & Sécurité</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-muted/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    Autres
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Git, GitHub, CI/CD</li>
                    <li>Vercel, Netlify, Heroku</li>
                    <li>SEO, Web Analytics</li>
                    <li>Figma, UI/UX Design</li>
                    <li>Testing, Documentation</li>
                  </ul>
                </CardContent>
              </Card>
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
            <h2 className="text-2xl font-bold mb-4">Intéressé par une collaboration ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si vous cherchez un développeur web pour votre prochain projet, je serais 
              ravi d'en discuter avec vous et de voir comment je pourrais vous aider.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact" className="inline-flex items-center">
                Me contacter <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </PageTransition>
  )
} 