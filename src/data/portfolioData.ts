// Types pour les projets
export type ProjectStatus = "completed" | "upcoming" | "archived";

export interface ProjectHighlight {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  url?: string;
  status: ProjectStatus;
  slug: string;
  highlights?: string[];
}

// Constantes pour les images
export const PROJECT_IMAGES = {
  comptoirVintage: "/images/portfolio/comptoir-vintage.webp",
  atelierModerne: "/images/portfolio/atelier-moderne.webp",
  webWizardry: "/images/portfolio/webwizardry.webp",
  appStock: "/images/portfolio/app-stock.webp",
  periph: "/images/portfolio/periph.webp",
  photographe: "/images/portfolio/photographe.webp",
  architecte: "/images/portfolio/architecte.webp",
  finpilot: "/images/portfolio/finpilot.webp",
};

// Définition des slugs fixes pour garantir la cohérence
export const PROJECT_SLUGS = {
  comptoirVintage: "comptoir-vintage",
  atelierModerne: "atelier-moderne",
  webWizardry: "webwizardry",
  appStock: "app-stock",
  periph: "touche-pas-a-mon-periph",
  photographe: "portfolio-photographe",
  architecte: "portfolio-architecte",
  finpilot: "finpilot"
};

// Données des projets
export const PROJECT_DATA: ProjectHighlight[] = [
  {
    id: 1,
    title: "Comptoir Vintage",
    description: "Plateforme e-commerce premium dédiée aux vêtements et accessoires vintage de luxe. Une expérience d'achat élégante associant esthétique rétro et fonctionnalités modernes.",
    category: "E-commerce",
    image: PROJECT_IMAGES.comptoirVintage,
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    url: "https://comptoirvintage.com",
    status: "completed",
    slug: PROJECT_SLUGS.comptoirVintage,
    highlights: [
      "Design élégant inspiré par l'esthétique vintage avec une touche contemporaine",
      "Interface utilisateur intuitive pour une navigation fluide entre les collections",
      "Système de paiement sécurisé avec intégration de multiples options de transaction",
      "Optimisation SEO avancée pour une visibilité accrue sur les moteurs de recherche",
      "Espace client personnalisé avec suivi des commandes et historique d'achats"
    ]
  },
  {
    id: 2,
    title: "Atelier Moderne",
    description: "E-commerce spécialisé dans la vente de meubles modernes au style épuré. Une expérience d'achat immersive mettant en valeur le design et la qualité des produits.",
    category: "E-commerce",
    image: PROJECT_IMAGES.atelierModerne,
    tech: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    url: "https://ateliermoderne.fr",
    status: "completed",
    slug: PROJECT_SLUGS.atelierModerne,
    highlights: [
      "Design minimaliste mettant en valeur les produits et l'esthétique épurée",
      "Galerie interactive présentant les meubles avec vues détaillées et options de personnalisation",
      "Interface responsive offrant une expérience optimale sur tous les appareils",
      "Système de filtrage avancé pour faciliter la recherche de produits spécifiques",
      "Processus de commande simplifié pour améliorer le taux de conversion"
    ]
  },
  {
    id: 3,
    title: "WebWizardry.fr",
    description: "Site professionnel de services en développement web, présentant mon portfolio, mes compétences et mes offres. Développé avec les technologies les plus modernes pour une expérience utilisateur optimale.",
    category: "Site Professionnel",
    image: PROJECT_IMAGES.webWizardry,
    tech: ["Next.js", "React", "Tailwind CSS", "ShadCN UI"],
    url: "https://webwizardry.fr",
    status: "completed",
    slug: PROJECT_SLUGS.webWizardry,
    highlights: [
      "Architecture moderne avec Next.js pour des performances optimales et un référencement efficace",
      "Interface utilisateur élégante et réactive grâce à ShadCN UI et Tailwind CSS",
      "Animations subtiles et transitions fluides enrichissant l'expérience utilisateur",
      "Mode sombre/clair pour une expérience de navigation personnalisée",
      "Formulaire de contact intelligent facilitant la prise de contact avec les clients potentiels"
    ]
  },
  {
    id: 4,
    title: "Comptoir Vintage - App Gestion de Stock",
    description: "Application mobile interne développée pour optimiser la gestion de stock de Comptoir Vintage. Permettant aux employés de suivre, localiser et gérer efficacement les produits en inventaire.",
    category: "Application Mobile",
    image: PROJECT_IMAGES.appStock,
    tech: ["React Native", "Expo", "Firebase", "QR Code API"],
    status: "completed",
    slug: PROJECT_SLUGS.appStock,
    highlights: [
      "Système de suivi en temps réel de l'état et de l'emplacement du stock",
      "Générateur et lecteur de QR codes pour l'étiquetage et le scan rapide des produits",
      "Interface intuitive optimisant l'efficacité des employés dans la gestion quotidienne",
      "Synchronisation avec le système de vente en ligne pour une gestion unifiée",
      "Rapports et analyses détaillés sur les mouvements de stock et les tendances"
    ]
  },
  {
    id: 5,
    title: "Touche Pas à Mon Périph",
    description: "Site vitrine informatif créé pour sensibiliser les Parisiens et Franciliens au projet de transformation d'une voie du périphérique parisien en piste cyclable. Un outil de communication politique efficace.",
    category: "Site Vitrine",
    image: PROJECT_IMAGES.periph,
    tech: ["WordPress", "JavaScript", "CSS", "PHP"],
    status: "archived",
    slug: PROJECT_SLUGS.periph,
    highlights: [
      "Design impactant mettant en avant les enjeux de la transformation du périphérique",
      "Interface interactive avec cartes et infographies pour illustrer les conséquences du projet",
      "Formulaire d'adhésion pour mobiliser les citoyens concernés",
      "Optimisation pour un temps de chargement rapide et une accessibilité maximale",
      "Intégration de contenu multimédia pour renforcer l'impact du message"
    ]
  },
  {
    id: 6,
    title: "Portfolio Photographe",
    description: "Collection de sites portfolio sur mesure développés pour des photographes professionnels. Des galeries visuellement impressionnantes mettant en valeur leur travail de manière unique et captivante.",
    category: "Site Portfolio",
    image: PROJECT_IMAGES.photographe,
    tech: ["React", "GSAP", "Framer Motion", "Cloudinary"],
    status: "completed",
    slug: PROJECT_SLUGS.photographe,
    highlights: [
      "Galeries interactives avec transitions fluides mettant en valeur les photographies",
      "Design épuré concentrant l'attention sur le travail visuel du photographe",
      "Optimisation des images pour un chargement rapide sans compromettre la qualité",
      "Interface responsive adaptée aux différents appareils pour une expérience cohérente",
      "Système de filtrage par catégories pour une navigation intuitive dans les collections"
    ]
  },
  {
    id: 7,
    title: "Portfolio Architecte",
    description: "Sites portfolio élégants conçus pour des architectes, présentant leurs projets avec une mise en page soignée qui met en valeur leur vision créative et leur savoir-faire technique.",
    category: "Site Portfolio",
    image: PROJECT_IMAGES.architecte,
    tech: ["Vue.js", "Three.js", "SCSS", "Netlify CMS"],
    status: "completed",
    slug: PROJECT_SLUGS.architecte,
    highlights: [
      "Présentation immersive des projets architecturaux avec vues 3D interactives",
      "Mise en page minimaliste et sophistiquée reflétant l'esthétique des architectes",
      "Intégration de plans, rendus et photographies dans une expérience cohérente",
      "Système de gestion de contenu intuitif permettant aux clients de mettre à jour leur portfolio",
      "Optimisation des performances pour charger rapidement des images haute résolution"
    ]
  },
  {
    id: 8,
    title: "FinPilot.one",
    description: "Plateforme IA avancée conçue pour les gestionnaires de portefeuille financier, offrant un copilot intelligent qui améliore la prise de décision et l'analyse financière grâce à un écosystème d'agents spécialisés.",
    category: "Application FinTech",
    image: PROJECT_IMAGES.finpilot,
    tech: ["Python", "TensorFlow", "NLP", "LangChain", "React"],
    url: "https://finpilot.one",
    status: "completed",
    slug: PROJECT_SLUGS.finpilot,
    highlights: [
      "Architecture multi-agents avec spécialistes en analyse documentaire, sentiment de marché et modélisation financière",
      "Optimisation de portefeuille et analyse de risques basées sur des algorithmes avancés de machine learning",
      "Interface utilisateur intuitive facilitant l'interaction avec des modèles financiers complexes",
      "Conformité réglementaire automatisée pour assurer le respect des normes du secteur financier",
      "Outils prédictifs combinant analyse technique, fondamentale et données alternatives"
    ]
  }
];

/**
 * Fonction pour obtenir les projets les plus récents
 * @param count Nombre de projets à retourner
 * @returns Les projets les plus récents, triés par ID décroissant
 */
export const getRecentProjects = (count = 3): ProjectHighlight[] => {
  // Tri des projets par ID décroissant (les IDs plus élevés sont considérés comme plus récents)
  return [...PROJECT_DATA]
    .sort((a, b) => b.id - a.id)
    .slice(0, count);
};

/**
 * Fonction pour obtenir un projet par son slug
 * @param slug Le slug du projet à trouver
 * @returns Le projet correspondant ou undefined si non trouvé
 */
export const getProjectBySlug = (slug: string): ProjectHighlight | undefined => {
  return PROJECT_DATA.find(project => project.slug === slug);
};

/**
 * Fonction pour filtrer les projets par catégorie
 * @param category La catégorie de projets à filtrer
 * @returns Les projets correspondant à la catégorie spécifiée
 */
export const getProjectsByCategory = (category: string): ProjectHighlight[] => {
  return PROJECT_DATA.filter(project => project.category === category);
}; 