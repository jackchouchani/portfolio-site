"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Check, Download } from "lucide-react"
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

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <MotionDiv
            className="relative"
            variants={fadeInLeft}
          >
            <div className="relative aspect-square max-w-md mx-auto md:mr-0">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image 
                  src="/placeholder-user.jpg" 
                  alt="Mon portrait" 
                  width={400} 
                  height={400} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
            </div>
          </MotionDiv>
          <MotionDiv
            className="space-y-6"
            variants={fadeInRight}
          >
            <div>
              <MotionSpan 
                className="text-primary font-medium mb-2 inline-block"
                variants={fadeInUp}
              >
                À propos de moi
              </MotionSpan>
              <MotionH1 
                className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                variants={fadeInUp}
              >
                Développeur Web Passionné & Créatif
              </MotionH1>
            </div>
            <MotionP 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Bonjour, je suis [Votre Nom], développeur web avec plus de 5 ans d'expérience dans la création de sites web et d'applications modernes. Je suis passionné par la création d'expériences numériques élégantes et fonctionnelles qui répondent aux besoins des utilisateurs.
            </MotionP>
            <MotionP 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Mon approche combine une esthétique soignée avec des fonctionnalités robustes pour créer des solutions web qui aident mes clients à atteindre leurs objectifs. Je m'efforce de rester à jour avec les dernières technologies et tendances du secteur.
            </MotionP>
            <MotionDiv 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button asChild>
                <Link href="/contact">Contactez-moi</Link>
              </Button>
              <Button variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Télécharger mon CV
              </Button>
            </MotionDiv>
          </MotionDiv>
        </StaggerContainer>

        {/* Tech Skills Section */}
        <ScrollAnimation className="mb-16">
          <div className="text-center mb-10">
            <MotionH2 
              className="text-3xl font-bold mb-4 text-foreground"
              variants={fadeInUp}
            >
              Mes Compétences Techniques
            </MotionH2>
            <MotionP 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Je maîtrise un large éventail de technologies web modernes pour créer des expériences web exceptionnelles.
            </MotionP>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <MotionDiv key={index} className="space-y-2" variants={fadeInUp}>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </MotionDiv>
            ))}
          </StaggerContainer>
        </ScrollAnimation>

        {/* Experience Section */}
        <ScrollAnimation className="mb-16">
          <div className="text-center mb-10">
            <MotionH2 
              className="text-3xl font-bold mb-4 text-foreground"
              variants={fadeInUp}
            >
              Mon Parcours
            </MotionH2>
            <MotionP 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Mon expérience professionnelle dans le domaine du développement web.
            </MotionP>
          </div>

          <StaggerContainer className="space-y-8">
            <MotionDiv variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/3">
                      <div className="p-3 bg-primary/10 rounded-lg inline-block">
                        <p className="text-primary font-medium">2020 - Présent</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Développeur Web Freelance</h3>
                      <p className="text-muted-foreground mb-4">
                        Création de sites web et d'applications sur mesure pour divers clients, de la conception à la mise en production. Spécialisé dans les technologies modernes comme React, Next.js et Node.js.
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">Développement de sites vitrines et e-commerce</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">Création d'applications web sur mesure</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">Optimisation SEO et performances web</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/3">
                      <div className="p-3 bg-primary/10 rounded-lg inline-block">
                        <p className="text-primary font-medium">2018 - 2020</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Développeur Front-end</h3>
                      <p className="text-muted-foreground mb-4">
                        Agence XYZ, Paris. Développement d'interfaces utilisateur modernes et interactives pour des clients de divers secteurs, en utilisant React et les technologies frontend associées.
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">Développement d'interfaces utilisateur responsive</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">Collaboration avec des designers UX/UI</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mt-1 mr-2 h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">Optimisation de performances frontend</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </StaggerContainer>
        </ScrollAnimation>

        {/* Education Section */}
        <ScrollAnimation className="mb-16">
          <div className="text-center mb-10">
            <MotionH2 
              className="text-3xl font-bold mb-4 text-foreground"
              variants={fadeInUp}
            >
              Formation
            </MotionH2>
          </div>

          <MotionDiv variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/3">
                    <div className="p-3 bg-primary/10 rounded-lg inline-block">
                      <p className="text-primary font-medium">2015 - 2018</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Master en Développement Web</h3>
                    <p className="text-muted-foreground">
                      Université de Paris, Paris. Spécialisation en développement web et applications mobiles. Cursus axé sur les technologies modernes et les bonnes pratiques de développement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </ScrollAnimation>

        {/* CTA Section */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-primary text-primary-foreground p-8 rounded-lg text-center"
        >
          <MotionH2 
            className="text-2xl font-bold mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Intéressé par mes services ?
          </MotionH2>
          <MotionP 
            className="mb-6 opacity-90 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            Si mon profil correspond à vos besoins, n'hésitez pas à me contacter pour discuter de votre projet.
          </MotionP>
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <Button variant="secondary" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <Link href="/contact">Contactez-moi</Link>
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </PageTransition>
  )
}

