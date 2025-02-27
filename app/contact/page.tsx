"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock,
  Calendar,
  ExternalLink,
  Github,
  Linkedin
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip"
import { MotionDiv, MotionH1, MotionP, MotionSpan, StaggerContainer, ScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "../../src/components/ui/motion"
import PageTransition from "../../src/components/PageTransition"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler un envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      }, 3000)
    }, 1500)
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <ScrollAnimation className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-1 mx-auto"
          >
            Discutons de votre projet
          </Badge>
          <MotionH1 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={fadeInUp}
          >
            Contactez-moi
          </MotionH1>
          <MotionP 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter et obtenir un devis personnalisé.
          </MotionP>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <MotionDiv 
            className="md:col-span-1 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Informations de contact</CardTitle>
                <CardDescription>Plusieurs façons de me joindre</CardDescription>
              </CardHeader>
              <CardContent>
                <StaggerContainer className="space-y-4">
                  <MotionDiv variants={fadeInUp} className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="text-primary hover:underline">
                        <a href="mailto:contact@example.com">contact@example.com</a>
                      </p>
                    </div>
                  </MotionDiv>

                  <MotionDiv variants={fadeInUp} className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Téléphone</h3>
                      <p className="text-primary hover:underline">
                        <a href="tel:+33612345678">+33 6 52 58 85 83</a>
                      </p>
                    </div>
                  </MotionDiv>

                  <MotionDiv variants={fadeInUp} className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Localisation</h3>
                      <p className="text-muted-foreground">Paris, France</p>
                    </div>
                  </MotionDiv>

                  <MotionDiv variants={fadeInUp} className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Réponse</h3>
                      <p className="text-muted-foreground">Sous 24-48h</p>
                    </div>
                  </MotionDiv>
                </StaggerContainer>
                
                <Separator className="my-6" />
                
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">Disponibilité</h3>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Lun-Ven, 9h-18h
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Réponse en 24-48h
                    </span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">Réseaux sociaux</h3>
                  <div className="flex space-x-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" asChild className="rounded-full">
                            <a href="https://github.com/jackchouchani/" target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" asChild className="rounded-full">
                            <a href="https://www.linkedin.com/in/jacqueschouchani/" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" asChild className="rounded-full">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Site Web</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Disponible pour nouveaux projets</AlertTitle>
              <AlertDescription>
                Je suis actuellement disponible pour des projets freelance. Contactez-moi pour discuter de vos besoins.
              </AlertDescription>
            </Alert>
          </MotionDiv>

          <MotionDiv 
            className="md:col-span-2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Envoyez-moi un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous pour me contacter directement
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <MotionDiv 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Alert className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-900 text-center py-6">
                      <MotionSpan 
                        className="flex justify-center mb-3 text-green-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </MotionSpan>
                      <AlertTitle className="font-medium text-green-800 dark:text-green-300 mb-1 text-xl">Message envoyé !</AlertTitle>
                      <AlertDescription className="text-green-700 dark:text-green-400">
                        Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                      </AlertDescription>
                    </Alert>
                  </MotionDiv>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <StaggerContainer className="grid md:grid-cols-2 gap-4">
                      <MotionDiv variants={fadeInUp} className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground">
                          Nom complet
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          required
                          className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </MotionDiv>
                      <MotionDiv variants={fadeInUp} className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre.email@example.com"
                          required
                          className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </MotionDiv>
                    </StaggerContainer>
                    
                    <MotionDiv variants={fadeInUp} className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Le sujet de votre message"
                        required
                        className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </MotionDiv>
                    
                    <MotionDiv variants={fadeInUp} className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Détaillez votre projet ou votre demande..."
                        rows={6}
                        required
                        className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </MotionDiv>
                    
                    <MotionDiv 
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full py-6 font-semibold text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Envoyer le message
                            <Send className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </MotionDiv>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <p className="text-center text-sm text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez d'être contacté concernant votre projet.
                </p>
              </CardFooter>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </PageTransition>
  )
}

