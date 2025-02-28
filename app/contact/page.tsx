import React from "react"
import { Metadata } from "next"
import ContactPageClient from "../../src/components/pages/ContactPageClient"

export const metadata: Metadata = {
  title: 'Contact | Demandez un Devis pour Votre Site Web',
  description: 'Prêt à concrétiser votre projet web ? Contactez-moi pour un devis personnalisé gratuit et sans engagement. Une réponse rapide et des conseils adaptés vous attendent pour transformer votre vision en réalité digitale au meilleur rapport qualité-prix.',
  keywords: ['contact développeur web', 'devis site web', 'développement web abordable'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Demandez un Devis pour Votre Site Web',
    description: 'Contactez-moi pour obtenir un devis gratuit pour votre projet web.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

