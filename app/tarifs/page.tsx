import React from "react"
import { Metadata } from "next"
import PricingPageClient from "@/src/components/pages/PricingPageClient"

export const metadata: Metadata = {
  title: 'Tarifs | Web Wizardry - Développeur Web Freelance',
  description: 'Consultez nos tarifs pour la création de sites web, e-commerce ou applications mobiles. Calculez instantanément le coût de votre projet avec notre estimateur interactif.',
  keywords: ['tarif site web', 'prix création site internet', 'coût application mobile', 'devis développement web', 'budget site e-commerce', 'tarifs freelance'],
  alternates: {
    canonical: '/tarifs',
  },
  openGraph: {
    title: 'Tarifs | Web Wizardry - Développeur Web Freelance',
    description: 'Consultez nos tarifs pour la création de sites web, e-commerce ou applications mobiles.',
    url: '/tarifs',
    type: 'website',
  },
};

export default function PricingPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <PricingPageClient />
      </div>
    </main>
  )
} 