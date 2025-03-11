import { Metadata } from "next";
import PortfolioPageClient from "../../src/components/pages/PortfolioPageClient";
import { WebsiteStructuredData } from "../../src/components/StructuredData";

export const metadata: Metadata = {
  title: 'Portfolio | Projets de Développement Web',
  description: 'Explorez mon portfolio de réalisations web qui démontrent excellence technique et créativité. Chaque projet témoigne de ma capacité à transformer des idées en expériences digitales performantes et esthétiques, adaptées aux besoins de chaque client.',
  keywords: ['portfolio développeur', 'projets web', 'réalisations développement', 'sites internet'],
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio | Projets de Développement Web',
    description: 'Découvrez mes réalisations en développement web et mobile.',
    url: '/portfolio',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <WebsiteStructuredData 
        websiteName="WebWizardry - Portfolio de développement web"
        websiteUrl="https://webwizardry.fr"
      />
      <PortfolioPageClient />
    </>
  );
}