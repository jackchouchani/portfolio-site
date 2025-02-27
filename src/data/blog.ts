// Définition des types
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  authorImage?: string;
  readingTime: string;
  category: string[];
  image: string;
  featured?: boolean;
}

// Données des articles de blog
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Comment créer un site web rapide et économique en 2024",
    slug: "creer-site-web-rapide-economique-2024",
    excerpt: "Découvrez les meilleures pratiques pour développer un site web performant et abordable sans compromettre la qualité.",
    date: "2024-02-01",
    author: "Web Wizardry",
    readingTime: "6 min",
    category: ["Développement Web", "Performance"],
    image: "/blog/fast-website.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Les avantages de Next.js pour votre site d'entreprise",
    slug: "avantages-nextjs-site-entreprise",
    excerpt: "Pourquoi Next.js est le framework idéal pour créer un site professionnel moderne, rapide et optimisé pour le SEO.",
    date: "2024-01-15",
    author: "Web Wizardry",
    readingTime: "8 min",
    category: ["Next.js", "Framework"],
    image: "/blog/nextjs.jpg",
  },
  {
    id: 3,
    title: "Optimiser le SEO de votre site web : guide complet",
    slug: "optimiser-seo-site-web-guide-complet",
    excerpt: "Toutes les techniques pour améliorer votre référencement naturel et atteindre les premières positions sur Google.",
    date: "2024-01-05",
    author: "Web Wizardry",
    readingTime: "10 min",
    category: ["SEO", "Marketing"],
    image: "/blog/seo-optimization.jpg",
  },
  {
    id: 4,
    title: "Sites web abordables vs. sites bon marché : quelle différence ?",
    slug: "sites-web-abordables-vs-bon-marche",
    excerpt: "Comment trouver le juste équilibre entre coût raisonnable et qualité professionnelle pour votre site web.",
    date: "2023-12-20",
    author: "Web Wizardry",
    readingTime: "7 min",
    category: ["Business", "Conseils"],
    image: "/blog/affordable-website.jpg",
  },
  {
    id: 5,
    title: "Les tendances du développement web moderne en 2024",
    slug: "tendances-developpement-web-moderne-2024",
    excerpt: "Les technologies et pratiques qui définiront le développement web cette année et pourquoi elles sont importantes.",
    date: "2023-12-10",
    author: "Web Wizardry",
    readingTime: "9 min",
    category: ["Tendances", "Développement Web"],
    image: "/blog/web-trends.jpg",
  },
  {
    id: 6,
    title: "Comment augmenter la vitesse de chargement de votre site web",
    slug: "augmenter-vitesse-chargement-site-web",
    excerpt: "Des astuces pratiques pour optimiser la performance de votre site et offrir une expérience utilisateur exceptionnelle.",
    date: "2023-11-25",
    author: "Web Wizardry",
    readingTime: "8 min",
    category: ["Performance", "Optimisation"],
    image: "/blog/loading-speed.jpg",
  }
]; 