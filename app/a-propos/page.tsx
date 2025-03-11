import { Metadata } from "next"
import AboutPageClient from "../../src/components/pages/AboutPageClient"
import { FAQStructuredData } from "../../src/components/StructuredData"

export const metadata: Metadata = {
  title: 'À Propos | WebWizardry - Développeur Web Freelance',
  description: 'Découvrez mon parcours, mes compétences et ma philosophie en tant que développeur web freelance. Je crée des solutions web modernes, performantes et accessibles pour répondre aux besoins spécifiques de chaque client.',
  keywords: ['à propos', 'développeur web', 'freelance', 'parcours', 'compétences', 'philosophie'],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À Propos | WebWizardry - Développeur Web Freelance',
    description: 'Découvrez mon parcours, mes compétences et ma philosophie en tant que développeur web freelance.',
    url: '/a-propos',
    type: 'website',
  },
};

export default function AboutPage() {
  const faqQuestions = [
    {
      question: "Quelles technologies utilisez-vous pour développer des sites web ?",
      answer: "J'utilise principalement React, Next.js, TypeScript et Tailwind CSS pour les sites modernes. Pour les sites e-commerce, je travaille avec Shopify, WooCommerce ou des solutions headless. Je m'adapte aux besoins spécifiques de chaque projet."
    },
    {
      question: "Combien coûte la création d'un site web ?",
      answer: "Le coût varie selon la complexité du projet. Un site vitrine simple commence autour de 1500€, tandis qu'un e-commerce ou une application web personnalisée peut aller de 3000€ à 10000€ ou plus. Je propose des devis détaillés et transparents adaptés à votre budget."
    },
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer: "Un site vitrine peut être réalisé en 2-4 semaines, un e-commerce en 4-8 semaines, et une application web personnalisée en 8-12 semaines ou plus. Le délai dépend de la complexité, des fonctionnalités requises et de votre réactivité pendant le processus."
    },
    {
      question: "Proposez-vous des services de maintenance après la mise en ligne ?",
      answer: "Oui, je propose des forfaits de maintenance mensuelle qui incluent les mises à jour de sécurité, les corrections de bugs, les sauvegardes régulières et un support technique. Ces forfaits garantissent que votre site reste sécurisé, rapide et à jour."
    },
    {
      question: "Comment se déroule le processus de création d'un site web ?",
      answer: "Le processus comprend une phase de découverte (besoins, objectifs), la conception (wireframes, maquettes), le développement, les tests, et enfin la mise en ligne. Je vous implique à chaque étape pour garantir que le résultat final correspond parfaitement à vos attentes."
    }
  ];

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
      
      <FAQStructuredData questions={faqQuestions} />
      <AboutPageClient />
    </>
  );
}

