import React from "react";
import BlogPageClient from "../../src/components/pages/BlogPageClient";

export const metadata = {
  title: "Blog | Développeur Web Freelance | Articles et Conseils",
  description: "Découvrez mes articles sur le développement web, les technologies modernes, les meilleures pratiques et les tendances actuelles.",
  keywords: ["blog développement web", "articles développeur", "conseils développement", "technologies web"],
  openGraph: {
    title: "Blog | Articles sur le Développement Web",
    description: "Découvrez mes articles sur le développement web, les technologies modernes et les tendances actuelles.",
    url: "https://www.votre-portfolio.fr/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}