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
import { PROJECT_DATA } from "@/src/data/portfolioData";

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