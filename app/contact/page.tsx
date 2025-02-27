import React from "react"
import { Metadata } from "next"
import ContactPageClient from "../../src/components/pages/ContactPageClient"

export const metadata: Metadata = {
  title: 'Contact | Demandez un Devis pour Votre Site Web',
  description: 'Contactez-moi pour obtenir un devis gratuit pour votre projet web. Création de sites web professionnels, rapides et abordables.',
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

