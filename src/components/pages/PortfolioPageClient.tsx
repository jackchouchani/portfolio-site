"use client";

import React, { memo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MotionDiv, MotionH1, MotionP, ScrollAnimation, fadeInUp } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import { ArrowRight, Clock, AlertCircle, LucideGithub, ExternalLink, Check } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "../../components/Breadcrumbs";

// Types pour les projets
type ProjectStatus = "completed" | "upcoming" | "archived";

interface ProjectHighlight {
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

// Constantes pour les images (en dehors du composant pour éviter les re-rendus)
const PROJECT_IMAGES = {
  comptoirVintage: "/images/portfolio/comptoir-vintage.jpg",
  atelierModerne: "/images/portfolio/atelier-moderne.jpg",
  webWizardry: "/images/portfolio/webwizardry.jpg",
  appStock: "/images/portfolio/app-stock.jpg",
  periph: "/images/portfolio/periph.jpg",
  photographe: "/images/portfolio/photographe.jpg",
  architecte: "/images/portfolio/architecte.jpg",
  finpilot: "/images/portfolio/finpilot.jpg",
};

// Définition des slugs fixes pour garantir la cohérence
const PROJECT_SLUGS = {
  comptoirVintage: "comptoir-vintage",
  atelierModerne: "atelier-moderne",
  webWizardry: "webwizardry",
  appStock: "app-stock",
  periph: "touche-pas-a-mon-periph",
  photographe: "portfolio-photographe",
  architecte: "portfolio-architecte",
  finpilot: "finpilot"
};

// Données des projets (définies en dehors du composant)
const PROJECT_DATA: ProjectHighlight[] = [
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

// Composant pour afficher une carte de projet
const ProjectCard = memo(({ project }: { project: ProjectHighlight }) => {
  return (
    <MotionDiv
      variants={fadeInUp}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group border-border/40 hover:border-primary/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.status === "upcoming" && (
            <div className="absolute top-2 right-2 bg-yellow-500/90 text-white text-xs px-2 py-1 rounded-md font-medium">
              Bientôt disponible
            </div>
          )}
          {project.status === "archived" && (
            <div className="absolute top-2 right-2 bg-gray-500/90 text-white text-xs px-2 py-1 rounded-md font-medium">
              Archivé
            </div>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{project.title}</CardTitle>
          </div>
          <CardDescription className="text-sm">{project.category}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tech.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    {project.tech.slice(3).join(', ')}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <div className="w-full flex justify-between items-center">
            <Link href={`/portfolio/${project.slug}`} passHref>
              <Button variant="ghost" size="sm" className="text-xs gap-1 hover:text-primary hover:bg-primary/5">
                Voir le projet <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            
            {project.url && (
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
});

ProjectCard.displayName = "ProjectCard";

// Composant réutilisable pour afficher une grille de projets
const ProjectGrid = memo(({ projects }: { projects: ProjectHighlight[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
));

ProjectGrid.displayName = 'ProjectGrid';

export default function PortfolioPageClient() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs 
          items={[
            { label: "Portfolio", href: "/portfolio", isCurrent: true }
          ]}
        />
        
        <ScrollAnimation className="text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-1 mx-auto"
          >
            Mes réalisations
          </Badge>
          <MotionH1 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={fadeInUp}
          >
            Mon Portfolio
          </MotionH1>
          <MotionP 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez mes projets récents et explorez comment mes compétences en développement web peuvent transformer votre vision en réalité numérique.
          </MotionP>
        </ScrollAnimation>

        <Tabs defaultValue="tous" className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Mes Projets</h2>
            <TabsList>
              <TabsTrigger value="tous">Tous</TabsTrigger>
              <TabsTrigger value="e-commerce">E-commerce</TabsTrigger>
              <TabsTrigger value="site-vitrine">Sites Vitrine</TabsTrigger>
              <TabsTrigger value="site-portfolio">Portfolios</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="fintech">FinTech</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="tous" className="mt-0">
            <ProjectGrid projects={PROJECT_DATA} />
          </TabsContent>
          
          <TabsContent value="e-commerce" className="mt-0">
            <ProjectGrid projects={PROJECT_DATA.filter(project => project.category === "E-commerce")} />
          </TabsContent>
          
          <TabsContent value="site-vitrine" className="mt-0">
            <ProjectGrid projects={PROJECT_DATA.filter(project => 
              project.category === "Site Vitrine" || project.category === "Site Professionnel"
            )} />
          </TabsContent>
          
          <TabsContent value="site-portfolio" className="mt-0">
            <ProjectGrid projects={PROJECT_DATA.filter(project => project.category === "Site Portfolio")} />
          </TabsContent>
          
          <TabsContent value="applications" className="mt-0">
            <ProjectGrid projects={PROJECT_DATA.filter(project => project.category === "Application Mobile")} />
          </TabsContent>

          <TabsContent value="fintech" className="mt-0">
            <ProjectGrid projects={PROJECT_DATA.filter(project => project.category === "Application FinTech")} />
          </TabsContent>
        </Tabs>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="my-16"
        >
          <Card className="border-primary/20 overflow-hidden bg-muted/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Vous avez un projet en tête ?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Discutons ensemble de votre vision et voyons comment mes compétences peuvent vous aider à la concrétiser.
              </p>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button size="lg" asChild>
                  <Link href="/contact" className="flex items-center">
                    Me contacter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MotionDiv>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </PageTransition>
  );
} 