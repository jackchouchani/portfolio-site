// Définition des types
export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  technologies: string[];
  projectUrl?: string;
  featured?: boolean;
}

// Données des projets
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Rapide et Performant",
    slug: "e-commerce-rapide-performant",
    category: "E-Commerce",
    image: "/portfolio/ecommerce-site.jpg",
    description: "Boutique en ligne optimisée pour les conversions avec des temps de chargement ultrarapides et une expérience d'achat fluide.",
    client: "ModaBoutique",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Framer Motion"],
    projectUrl: "https://modaboutique-example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Site Vitrine Abordable pour Restaurant",
    slug: "site-vitrine-restaurant-abordable",
    category: "Site Vitrine",
    image: "/portfolio/restaurant-site.jpg",
    description: "Site web moderne et responsive pour un restaurant, réalisé avec un budget limité sans compromettre la qualité.",
    client: "Le Gourmet Français",
    technologies: ["React", "Tailwind CSS", "Netlify"],
    projectUrl: "https://legourmetfrancais-example.com",
  },
  {
    id: 3,
    title: "Application Web pour Studio de Yoga",
    slug: "application-web-studio-yoga",
    category: "Application Web",
    image: "/portfolio/yoga-app.jpg",
    description: "Application permettant la réservation de cours et la gestion des abonnements pour un studio de yoga.",
    client: "Zen Yoga",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    projectUrl: "https://zenyoga-example.com",
  },
  {
    id: 4,
    title: "Site web Immobilier avec Recherche Avancée",
    slug: "site-web-immobilier-recherche-avancee",
    category: "Immobilier",
    image: "/portfolio/realestate-site.jpg",
    description: "Plateforme immobilière avec fonctionnalités de recherche avancée et visualisation des propriétés.",
    client: "ImmoExpert",
    technologies: ["React", "Next.js", "Google Maps API", "Tailwind CSS"],
    projectUrl: "https://immoexpert-example.com",
  },
  {
    id: 5,
    title: "Blog Performant pour Magazine en Ligne",
    slug: "blog-performant-magazine-ligne",
    category: "Blog",
    image: "/portfolio/magazine-blog.jpg",
    description: "Système de blog optimisé SEO avec temps de chargement rapides et expérience utilisateur fluide.",
    client: "TrendMag",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    projectUrl: "https://trendmag-example.com",
  },
  {
    id: 6,
    title: "Dashboard Admin pour Gestion d'Entreprise",
    slug: "dashboard-admin-gestion-entreprise",
    category: "Application Web",
    image: "/portfolio/admin-dashboard.jpg",
    description: "Interface d'administration complète pour la gestion des utilisateurs, produits et analyses.",
    client: "BusinessPlus",
    technologies: ["React", "Next.js", "Recharts", "Tailwind CSS", "NextAuth"],
    projectUrl: "https://businessplus-example.com",
  },
]; 