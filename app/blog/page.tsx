"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SearchIcon, Filter, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, StaggerContainer, ScrollAnimation, fadeInUp } from "../../src/components/ui/motion";

// Données de blog fictives
const blogPosts = [
  {
    id: "1",
    title: "Comment construire une application React performante",
    excerpt: "Apprenez les meilleures pratiques pour créer des applications React optimisées et rapides.",
    date: "10 Mai 2023",
    readTime: "6 min",
    image: "/blog/react-performance.jpg",
    categories: ["React", "Performance"],
    slug: "react-performance-guide",
  },
  {
    id: "2",
    title: "Nextjs 13 : Ce que vous devez savoir",
    excerpt: "Découvrez les nouvelles fonctionnalités et améliorations de Next.js 13 et comment les utiliser.",
    date: "2 Juin 2023", 
    readTime: "8 min",
    image: "/blog/nextjs-13.jpg",
    categories: ["Next.js", "React"],
    slug: "nextjs-13-nouveautes",
  },
  {
    id: "3",
    title: "Le guide complet de Tailwind CSS",
    excerpt: "Maîtrisez Tailwind CSS avec ce guide détaillé, des bases aux techniques avancées.",
    date: "15 Avril 2023",
    readTime: "10 min",
    image: "/blog/tailwind-guide.jpg",
    categories: ["CSS", "Tailwind"],
    slug: "guide-complet-tailwind-css",
  },
  {
    id: "4",
    title: "Tendances du développement web 2023",
    excerpt: "Découvrez les tendances de développement web qui domineront en 2023 et au-delà.",
    date: "20 Mai 2023",
    readTime: "5 min",
    image: "/blog/web-trends-2023.jpg",
    categories: ["Tendances", "Web"],
    slug: "tendances-dev-web-2023",
  },
  {
    id: "5",
    title: "TypeScript : Les fonctionnalités essentielles",
    excerpt: "Explorez les fonctionnalités essentielles de TypeScript que chaque développeur devrait connaître.",
    date: "5 Mai 2023",
    readTime: "7 min",
    image: "/blog/typescript-essentials.jpg",
    categories: ["TypeScript", "JavaScript"],
    slug: "typescript-fonctionnalites-essentielles",
  },
  {
    id: "6",
    title: "Optimiser le SEO de votre site Next.js",
    excerpt: "Techniques d'optimisation SEO spécifiques aux applications Next.js pour améliorer votre classement.",
    date: "12 Juin 2023",
    readTime: "9 min",
    image: "/blog/nextjs-seo.jpg", 
    categories: ["SEO", "Next.js"],
    slug: "optimiser-seo-nextjs",
  },
];

// Extraction de toutes les catégories uniques
const allCategories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filtrer les articles en fonction de la recherche et des catégories sélectionnées
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategories = selectedCategories.length === 0 || 
                              post.categories.some(cat => selectedCategories.includes(cat));
    
    return matchesSearch && matchesCategories;
  });

  // Gérer la sélection des catégories
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="mb-12 text-center" viewportMargin="-100px">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes derniers articles et réflexions sur le développement web, 
            les technologies modernes et les meilleures pratiques.
          </p>
        </ScrollAnimation>

        {/* Filtres et recherche */}
        <div className="mb-10 flex flex-col md:flex-row items-start gap-4">
          <div className="relative w-full md:w-1/2">
            <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher des articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-wrap gap-2 items-center">
            <Filter className="h-4 w-4 text-muted-foreground mr-1" /> 
            <span className="text-sm text-muted-foreground mr-2">Filtrer par:</span>
            {allCategories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </Badge>
            ))}
            {selectedCategories.length > 0 && (
              <Button 
                variant="ghost" 
                className="text-sm h-7"
                onClick={() => setSelectedCategories([])}
              >
                Effacer
              </Button>
            )}
          </div>
        </div>

        {/* Articles */}
        {filteredPosts.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <MotionDiv key={post.id} variants={fadeInUp} className="h-full">
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group border-muted/40 bg-card">
                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <Image
                      src="/placeholder.jpg"
                      fill
                      alt={post.title}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <Badge key={category} variant="secondary" className="font-normal">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      asChild 
                      variant="link" 
                      className="text-primary group-hover:text-primary/80 p-0 font-medium"
                    >
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Lire
                        <ChevronRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2 text-foreground">Aucun article trouvé</h3>
            <p className="text-muted-foreground">
              Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategories([]);
              }}
            >
              Afficher tous les articles
            </Button>
          </div>
        )}

        {/* Newsletter */}
        <ScrollAnimation className="mt-20 p-8 rounded-xl bg-muted/50 border border-muted">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Inscrivez-vous à ma newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Recevez mes derniers articles, guides et conseils directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Votre adresse email"
                type="email"
                className="flex-grow"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                S'inscrire
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
}