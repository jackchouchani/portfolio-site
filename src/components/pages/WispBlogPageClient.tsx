"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { MotionDiv, MotionH1, MotionP, ScrollAnimation, fadeInUp } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { wisp } from "../../../lib/wisp";

// Type pour les articles de blog
interface BlogPost {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  image: string | null;
  createdAt: string | Date;
  authorId: string;
  teamId: string;
  updatedAt: string | Date;
  publishedAt: string | Date | null;
  author: {
    name: string | null;
    image?: string | null;
  };
  tags: Array<{
    id: string;
    name: string;
  }>;
}

export default function WispBlogPageClient() {
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Récupérer les articles depuis Wisp
        const result = await wisp.getPosts({ limit: 10 });
        
        if (result && result.posts && result.posts.length > 0) {
          // Définir le premier article comme article à la une
          setFeaturedPost(result.posts[0]);
          
          // Définir les autres articles comme articles récents
          setRecentPosts(result.posts.slice(1));
        } else {
          setError("Aucun article trouvé");
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des articles:", err);
        setError("Erreur lors de la récupération des articles");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Formatage de la date pour l'affichage
  const formatDate = (dateString: string | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Estimation du temps de lecture (1 minute pour 200 mots)
  const getReadingTime = (description: string | null) => {
    if (!description) return "1 min";
    
    // Méthode basée sur une valeur fixe pour la liste
    // Au lieu d'estimer la longueur du contenu à partir de la description,
    // on utilise une moyenne fixe plus logique
    return "3-5 min"; // Valeur moyenne pour la plupart des articles
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumbs */}
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

        {/* État de chargement */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-lg text-muted-foreground">Chargement des articles...</p>
          </div>
        )}

        {/* Message d'erreur */}
        {error && (
          <div className="text-center py-10">
            <p className="text-lg text-red-500">{error}</p>
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && (
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
                      src={featuredPost.image || "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        {featuredPost.tags && featuredPost.tags.length > 0 && (
                          <Badge className="bg-primary dark:text-black text-white">{featuredPost.tags[0].name}</Badge>
                        )}
                        <div className="flex items-center text-sm">
                          <Calendar className="mr-1 h-3 w-3" />
                          {formatDate(featuredPost.createdAt)}
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-3 w-3" />
                          {getReadingTime(featuredPost.description)}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-200 mb-4 max-w-3xl">
                        {featuredPost.description}
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
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Articles récents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post, index) => (
                <MotionDiv
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={post.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"}
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
                            {formatDate(post.createdAt)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {getReadingTime(post.description)}
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {post.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="border-t pt-4 flex justify-between items-center">
                        <div className="flex gap-2">
                          {post.tags && post.tags.length > 0 && (
                            <Badge key={post.tags[0].id} variant="outline" className="bg-transparent">
                              <Tag className="h-3 w-3 mr-1" />
                              {post.tags[0].name}
                            </Badge>
                          )}
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
          </div>
        )}

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
                <Button>S'abonner</Button>
              </div>
            </CardContent>
            <div className="hidden md:block relative h-auto">
              <Image
                src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Newsletter"
                fill
                className="object-cover rounded-r-lg"
              />
            </div>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
} 