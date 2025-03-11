import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { ProjectStructuredData } from "../../../src/components/StructuredData";
import { PROJECT_DATA, getProjectBySlug } from "@/src/data/portfolioData";

// Générer les métadonnées dynamiques pour chaque projet
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
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
  return PROJECT_DATA.map(project => ({
    slug: project.slug
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
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
          
          <div className="mt-4">
            <Badge className="mr-2">{project.category}</Badge>
            {project.status === "completed" && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-900">Complété</Badge>
            )}
            {project.status === "upcoming" && (
              <Badge variant="secondary">Bientôt disponible</Badge>
            )}
            {project.status === "archived" && (
              <Badge variant="outline">Archivé</Badge>
            )}
          </div>
          
          <p className="mt-4 text-muted-foreground">{project.description}</p>
          
          <h2 className="mt-6 text-xl font-semibold">Technologies utilisées</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="outline">{tech}</Badge>
            ))}
          </div>
          
          <div className="mt-6 space-y-4">
            {project.url && (
              <Button asChild className="w-full">
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Visiter le site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            
            <Button variant="outline" asChild className="w-full">
              <Link href="/portfolio" className="flex items-center justify-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {project.highlights && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Points clés du projet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-base text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-16 py-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Projets similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECT_DATA
            .filter(p => p.id !== project.id && p.category === project.category)
            .slice(0, 3)
            .map(relatedProject => (
              <div key={relatedProject.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image 
                    src={relatedProject.image} 
                    alt={relatedProject.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{relatedProject.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{relatedProject.description}</p>
                  <Button variant="ghost" size="sm" asChild className="mt-3 p-0">
                    <Link href={`/portfolio/${relatedProject.slug}`} className="flex items-center">
                      Voir le projet <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 