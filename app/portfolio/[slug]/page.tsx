import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { ProjectStructuredData } from "../../../src/components/StructuredData";

// Types pour les projets
type ProjectStatus = "completed" | "upcoming" | "archived";

interface ProjectDetails {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  url?: string;
  status: ProjectStatus;
  highlights?: string[];
}

// Données des projets
const PROJECTS: ProjectDetails[] = [
  {
    id: 1,
    slug: "comptoir-vintage",
    title: "Comptoir Vintage",
    description: "Plateforme e-commerce premium dédiée aux vêtements et accessoires vintage de luxe. Une expérience d'achat élégante associant esthétique rétro et fonctionnalités modernes.",
    category: "E-commerce",
    image: "/images/portfolio/comptoir-vintage.jpg",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    url: "https://comptoirvintage.com",
    status: "completed",
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
    slug: "atelier-moderne",
    title: "Atelier Moderne",
    description: "E-commerce spécialisé dans la vente de meubles modernes au style épuré. Une expérience d'achat immersive mettant en valeur le design et la qualité des produits.",
    category: "E-commerce",
    image: "/images/portfolio/atelier-moderne.jpg",
    tech: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    url: "https://ateliermoderne.fr",
    status: "completed",
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
    slug: "webwizardry",
    title: "WebWizardry.fr",
    description: "Site professionnel de services en développement web, présentant mon portfolio, mes compétences et mes offres. Développé avec les technologies les plus modernes pour une expérience utilisateur optimale.",
    category: "Site Professionnel",
    image: "/images/portfolio/webwizardry.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "ShadCN UI"],
    url: "https://webwizardry.fr",
    status: "completed",
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
    slug: "app-stock",
    title: "Comptoir Vintage - App Gestion de Stock",
    description: "Application mobile interne développée pour optimiser la gestion de stock de Comptoir Vintage. Permettant aux employés de suivre, localiser et gérer efficacement les produits en inventaire.",
    category: "Application Mobile",
    image: "/images/portfolio/app-stock.jpg",
    tech: ["React Native", "Expo", "Firebase", "QR Code API"],
    status: "completed",
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
    slug: "touche-pas-a-mon-periph",
    title: "Touche Pas à Mon Périph",
    description: "Site vitrine informatif créé pour sensibiliser les Parisiens et Franciliens au projet de transformation d'une voie du périphérique parisien en piste cyclable. Un outil de communication politique efficace.",
    category: "Site Vitrine",
    image: "/images/portfolio/periph.jpg",
    tech: ["WordPress", "JavaScript", "CSS", "PHP"],
    status: "archived",
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
    slug: "portfolio-photographe",
    title: "Portfolio Photographe",
    description: "Collection de sites portfolio sur mesure développés pour des photographes professionnels. Des galeries visuellement impressionnantes mettant en valeur leur travail de manière unique et captivante.",
    category: "Site Portfolio",
    image: "/images/portfolio/photographe.jpg",
    tech: ["React", "GSAP", "Framer Motion", "Cloudinary"],
    status: "completed",
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
    slug: "portfolio-architecte",
    title: "Portfolio Architecte",
    description: "Sites portfolio élégants conçus pour des architectes, présentant leurs projets avec une mise en page soignée qui met en valeur leur vision créative et leur savoir-faire technique.",
    category: "Site Portfolio",
    image: "/images/portfolio/architecte.jpg",
    tech: ["Vue.js", "Three.js", "SCSS", "Netlify CMS"],
    status: "completed",
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
    slug: "finpilot",
    title: "FinPilot.one",
    description: "Plateforme IA avancée conçue pour les gestionnaires de portefeuille financier, offrant un copilot intelligent qui améliore la prise de décision et l'analyse financière grâce à un écosystème d'agents spécialisés.",
    category: "Application FinTech",
    image: "/images/portfolio/finpilot.jpg",
    tech: ["Python", "TensorFlow", "NLP", "LangChain", "React"],
    url: "https://finpilot.one",
    status: "completed",
    highlights: [
      "Architecture multi-agents avec spécialistes en analyse documentaire, sentiment de marché et modélisation financière",
      "Optimisation de portefeuille et analyse de risques basées sur des algorithmes avancés de machine learning",
      "Interface utilisateur intuitive facilitant l'interaction avec des modèles financiers complexes",
      "Conformité réglementaire automatisée pour assurer le respect des normes du secteur financier",
      "Outils prédictifs combinant analyse technique, fondamentale et données alternatives"
    ]
  }
];

// Générer les métadonnées dynamiques pour chaque projet
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = PROJECTS.find(p => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Projet non trouvé',
      description: 'Le projet que vous recherchez n\'existe pas'
    };
  }
  
  return {
    title: `${project.title} | Projet WebWizardry`,
    description: project.description,
    keywords: ['portfolio', 'développement web', project.category, ...project.tech],
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Projet WebWizardry`,
      description: project.description,
      url: `/portfolio/${project.slug}`,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    },
  };
}

// Générer les paramètres statiques pour les routes
export async function generateStaticParams() {
  return PROJECTS.map(project => ({
    slug: project.slug
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 max-w-6xl">
      <Breadcrumbs items={[
        { label: 'Accueil', href: '/' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: project.title, href: `/portfolio/${project.slug}`, isCurrent: true }
      ]} />
      
      <ProjectStructuredData
        title={project.title}
        description={project.description}
        imageUrl={`https://webwizardry.fr${project.image}`}
        datePublished="2023-01-01"
        dateModified="2023-09-01"
        authorName="Jack WebWizardry"
        publisherName="WebWizardry"
        publisherLogo="https://webwizardry.fr/images/logo.png"
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
        
        <div className="md:col-span-5">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="secondary">{tech}</Badge>
            ))}
          </div>
          
          <p className="mt-4 text-muted-foreground">{project.description}</p>
          
          {project.url && (
            <Button asChild className="mt-6">
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                Visiter le site <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold">Points forts du projet</h2>
        <ul className="mt-6 space-y-4">
          {project.highlights?.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 bg-primary/10 rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-12">
        <Button variant="outline" asChild>
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
} 