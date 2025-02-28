"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Search, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { MotionDiv, MotionH1, MotionP, ScrollAnimation, fadeInUp } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export default function BlogPageClient() {
  const featuredPost = {
    title: "Comment créer un site web moderne et performant en 2023",
    slug: "site-web-moderne-performant-2023",
    excerpt: "Découvrez les meilleures pratiques et technologies pour créer un site web rapide, accessible et optimisé pour le SEO.",
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    date: "2023-10-15",
    readingTime: "8 min",
    tags: ["Développement Web", "Performance", "SEO"]
  };

  const recentPosts = [
    {
      title: "Les avantages de Next.js pour votre projet web",
      slug: "avantages-nextjs-projet-web",
      excerpt: "Pourquoi choisir Next.js pour votre prochain projet et comment en tirer le meilleur parti.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "2023-10-01",
      readingTime: "6 min",
      tags: ["Next.js", "React", "Développement"]
    },
    {
      title: "Optimiser les performances de votre site web",
      slug: "optimiser-performances-site-web",
      excerpt: "Techniques et outils pour améliorer la vitesse de chargement et l'expérience utilisateur de votre site.",
      coverImage: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "2023-09-20",
      readingTime: "7 min",
      tags: ["Performance", "Optimisation", "UX"]
    },
    {
      title: "L'importance du design responsive en 2023",
      slug: "importance-design-responsive-2023",
      excerpt: "Pourquoi il est crucial d'adopter une approche mobile-first et comment mettre en œuvre un design responsive efficace.",
      coverImage: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "2023-09-10",
      readingTime: "5 min",
      tags: ["Design", "Responsive", "Mobile"]
    },
    {
      title: "Introduction à l'accessibilité web (a11y)",
      slug: "introduction-accessibilite-web-a11y",
      excerpt: "Comment rendre votre site web accessible à tous les utilisateurs, y compris ceux ayant des handicaps.",
      coverImage: "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "2023-08-28",
      readingTime: "9 min",
      tags: ["Accessibilité", "A11y", "Inclusion"]
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        {/* Ajout des breadcrumbs cohérentes */}
        <Breadcrumbs 
          items={[
            { label: "Blog", href: "/blog", isCurrent: true }
          ]}
        />
        
        <ScrollAnimation className="text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-4 text-sm font-medium px-4 py-1 mx-auto"
          >
            Ressources et conseils
          </Badge>
          <MotionH1 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={fadeInUp}
          >
            Blog
          </MotionH1>
          <MotionP 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Articles, tutoriels et astuces sur le développement web, le design et les tendances du numérique.
          </MotionP>
        </ScrollAnimation>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full bg-muted/50 border-none shadow-sm rounded-md py-3 pl-10 pr-4 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Rechercher un article..."
          />
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">À la une</h2>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-[400px]">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-primary text-white">{featuredPost.tags[0]}</Badge>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-1 h-3 w-3" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-1 h-3 w-3" />
                        {featuredPost.readingTime}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary/90 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-200 mb-4 max-w-3xl">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="secondary" className="w-fit">
                      Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </MotionDiv>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Articles récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <MotionDiv
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-3 mb-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {post.readingTime}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t pt-4 flex justify-between items-center">
                      <div className="flex gap-2">
                        {post.tags.slice(0, 1).map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-transparent">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Lire <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </MotionDiv>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              Voir tous les articles
            </Button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Développement", "Design", "SEO", "Performance", "UX/UI", "Tendances", "Tutoriels", "Ressources"].map((category) => (
              <Card key={category} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardContent className="p-4 text-center group-hover:bg-muted/50">
                  <h3 className="font-medium group-hover:text-primary">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <Card className="mb-16 border-primary/20 overflow-hidden bg-muted/30">
          <div className="grid md:grid-cols-2 gap-6">
            <CardContent className="p-8">
              <CardTitle className="text-2xl font-bold mb-3">Restez informé</CardTitle>
              <CardDescription className="mb-6">
                Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités du développement web directement dans votre boîte mail.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="whitespace-nowrap">S'abonner</Button>
              </div>
            </CardContent>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/30 rounded-r-lg"></div>
            </div>
          </div>
        </Card>

        {/* Popular Tags */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Tags populaires</h2>
          <ScrollArea className="whitespace-nowrap pb-4">
            <div className="flex space-x-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Performance", "Responsive", "SEO", "API", "Accessibilité", "UX Design", "UI Design", "JavaScript"].map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
            <Separator className="mt-4" />
          </ScrollArea>
        </div>
      </div>
    </PageTransition>
  );
} 