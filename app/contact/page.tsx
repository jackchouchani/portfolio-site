import React from "react"
import { Metadata } from "next"
import { MotionSection } from "@/src/components/ui/motion"
import ContactPageClient from "@/src/components/pages/ContactPageClient"

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
        <ContactPageClient />
      </div>
    </main>
  )
}

