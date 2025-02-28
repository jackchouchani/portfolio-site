import { Metadata } from "next";
import ServicesPageClient from "../../src/components/pages/ServicesPageClient";

export const metadata = {
  title: 'Services Web Professionnels | Développement Moderne et Abordable',
  description: 'Découvrez des services web sur mesure qui combinent innovation et accessibilité financière. Du site vitrine au e-commerce, je conçois des solutions adaptées à vos objectifs avec un excellent rapport qualité-prix et des délais optimisés.',
  keywords: ['services web', 'développement pas cher', 'création site web', 'développement rapide', 'applications web modernes', 'site web professionnel', 'site internet abordable'],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Développement de Sites Web",
                "description": "Création de sites web modernes, responsives et performants, optimisés pour le référencement.",
                "provider": {
                  "@type": "ProfessionalService",
                  "name": "Web Wizardry",
                  "url": "https://webwizardry.fr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "à partir de 500€",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Applications Web",
                "description": "Développement d'applications web sur mesure avec des interfaces utilisateur intuitives.",
                "provider": {
                  "@type": "ProfessionalService",
                  "name": "Web Wizardry",
                  "url": "https://webwizardry.fr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "à partir de 1000€",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Solutions E-Commerce",
                "description": "Création de boutiques en ligne complètes avec gestion des paiements et des stocks.",
                "provider": {
                  "@type": "ProfessionalService",
                  "name": "Web Wizardry",
                  "url": "https://webwizardry.fr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "à partir de 1500€",
                  "priceCurrency": "EUR"
                }
              }
            ]
          })
        }}
      />
      
      <ServicesPageClient />
    </>
  );
}

