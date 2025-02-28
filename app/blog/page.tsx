import { Metadata } from "next";
import BlogPageClient from "../../src/components/pages/BlogPageClient";

export const metadata: Metadata = {
  title: 'Blog | Articles et Conseils sur le Développement Web',
  description: 'Enrichissez vos connaissances web grâce à des articles experts sur les dernières tendances et technologies. Conseils pratiques, tutoriels détaillés et analyses approfondies pour vous aider à améliorer votre présence en ligne et optimiser vos projets digitaux.',
  keywords: ['blog développement web', 'tutoriels web', 'conseils développeurs', 'tendances web design', 'apprentissage code'],
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogPageClient />
    </>
  );
}