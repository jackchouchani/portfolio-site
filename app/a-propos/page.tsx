import { Metadata } from "next"
import AboutPageClient from "../../src/components/pages/AboutPageClient"

export const metadata: Metadata = {
  title: 'À propos | Développeur Web Freelance | Mon Parcours',
  description: "Découvrez l'histoire et l'expertise derrière Web Wizardry. Passionné par le développement web depuis plus de 10 ans, je combine compétences techniques, créativité et approche centrée client pour offrir des solutions web qui se démarquent par leur qualité et leur efficacité.",
  keywords: ['à propos développeur web', 'parcours professionnel', 'compétences développement', 'Jacques Chouchani', 'freelance'],
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
  return (
    <>
      {/* Schema.org JSON-LD pour le développeur */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jacques Chouchani",
            "jobTitle": "Développeur Web Freelance",
            "description": "Développeur web freelance spécialisé dans la création de sites web modernes et abordables",
            "url": "https://webwizardry.fr",
            "telephone": "+33652588583",
            "email": "contact@webwizardry.fr",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "addressCountry": "FR"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Web Wizardry"
            },
            "sameAs": [
              "https://x.com/jackchouchani",
              "https://linkedin.com/in/jacqueschouchani",
              "https://github.com/jackchouchani"
            ],
            "knowsAbout": [
              "Développement Web",
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "SEO"
            ]
          })
        }}
      />
      
      <AboutPageClient />
    </>
  );
}

