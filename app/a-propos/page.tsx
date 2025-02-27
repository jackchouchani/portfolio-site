import { Metadata } from "next"
import AboutPageClient from "../../src/components/pages/AboutPageClient"

export const metadata: Metadata = {
  title: 'À Propos | Développeur Web Freelance',
  description: 'Découvrez mon parcours, mes compétences et mon approche du développement web. Je suis un développeur web freelance spécialisé dans la création de sites web modernes, rapides et abordables.',
  keywords: ['développeur web', 'freelance', 'à propos', 'compétences', 'parcours'],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À Propos | Développeur Web Freelance',
    description: 'Découvrez mon parcours, mes compétences et mon approche du développement web.',
    url: '/a-propos',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageClient />
}

