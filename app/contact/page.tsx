import React from "react"
import { Metadata } from "next"
import ContactForm from "../../src/components/pages/ContactForm"
import { MotionSection } from "@/src/components/ui/motion"
import { XIcon, Linkedin, Github } from "@/src/components/icons/SafeIcons"

export const metadata: Metadata = {
  title: 'Contact | WebWizardry - Développeur Web Freelance',
  description: 'Contactez-moi pour discuter de votre projet web ou demander un devis. Je vous répondrai dans les plus brefs délais pour vous aider à concrétiser votre vision digitale.',
  keywords: ['contact développeur web', 'devis site web', 'freelance web'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | WebWizardry - Développeur Web Freelance',
    description: 'Contactez-moi pour discuter de votre projet web ou demander un devis.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Coordonnées</h2>
                <p className="text-muted-foreground mb-4">
                  N'hésitez pas à me contacter pour discuter de votre projet ou poser des questions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@webwizardry.fr" className="hover:text-primary">contact@webwizardry.fr</a>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+33652588583" className="hover:text-primary">+33 6 52 58 85 83</a>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Paris, France<br />(Disponible en télétravail)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Horaires</h2>
                <p className="text-muted-foreground mb-4">
                  Je suis généralement disponible aux horaires suivants :
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h - 18h</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Samedi - Dimanche</span>
                    <span>Sur rendez-vous</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Réseaux sociaux</h2>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/jacqueschouchani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://github.com/jackchouchani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://x.com/jackchouchani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon className="h-6 w-6" />
                    <span className="sr-only">X</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

