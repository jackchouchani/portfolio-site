import React from "react"
import { Metadata } from "next"
import { MotionSection } from "@/src/components/ui/motion"
import ContactPageClient from "@/src/components/ContactPageClient"

export const metadata: Metadata = {
  title: 'Contact | Web Wizardry - Développeur Web Freelance',
  description: 'Contactez-moi pour discuter de votre projet web ou demander un devis. Je vous répondrai dans les plus brefs délais pour vous aider à concrétiser votre vision digitale.',
  keywords: ['contact développeur web', 'devis site web', 'freelance web'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Web Wizardry - Développeur Web Freelance',
    description: 'Contactez-moi pour discuter de votre projet web ou demander un devis.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-6">Contact</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Discutons de votre projet ! Utilisez notre calculateur interactif pour estimer le coût ou contactez-moi directement pour un devis personnalisé.
        </p>
        
        <ContactPageClient />
      </div>
    </main>
  )
}

