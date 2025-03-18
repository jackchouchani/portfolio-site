import { Metadata } from "next";
import HomePageClient from "../src/components/pages/HomePageClient";
import { WebsiteStructuredData, ServiceStructuredData } from "../src/components/StructuredData";

export const metadata: Metadata = {
  title: 'Web Wizardry | Création de Sites Web & Applications',
  description: 'Développeur web freelance spécialisé dans la création de sites web modernes, applications web et e-commerce. Expertise en React, Next.js et WordPress pour des solutions digitales sur mesure.',
  keywords: ['développeur web freelance', 'création site web', 'développement web', 'applications web', 'e-commerce'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web Wizardry | Développeur Web Freelance',
    description: 'Création de sites web modernes et applications sur mesure',
    url: '/',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <WebsiteStructuredData 
        websiteName="Web Wizardry - Développeur Web Freelance"
        websiteUrl="https://webwizardry.fr"
      />
      <ServiceStructuredData
        serviceName="Développement Web Professionnel"
        description="Création de sites web modernes, applications web et solutions e-commerce sur mesure pour les entreprises et particuliers."
        provider="Web Wizardry"
        providerUrl="https://webwizardry.fr"
        imageUrl="https://webwizardry.fr/images/portfolio/hero-dev.webp"
      />
      <HomePageClient />
    </>
  );
} 