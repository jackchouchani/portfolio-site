import { Metadata } from "next";
import HomePageClient from "../src/components/pages/HomePageClient";

export const metadata: Metadata = {
  title: 'Développeur Web Freelance | Solutions Web Modernes',
  description: "Transformez votre présence en ligne avec des sites web rapides, élégants et abordables. Je crée des solutions web personnalisées qui convertissent les visiteurs en clients tout en respectant votre budget et vos délais.",
  keywords: ['développeur web', 'freelance', 'création site web', 'responsive', 'abordable', 'rapide'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Développeur Web Freelance | Solutions Web Modernes',
    description: "Développeur web freelance spécialisé dans la création de sites web rapides et abordables.",
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return <HomePageClient />;
} 