"use client";

import React, { useEffect, useState } from "react";
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
import { getAllPosts, getFeaturedPost, getRecentPosts, adaptSanityPost } from "../../lib/sanity/queries";
import { urlFor } from "../../lib/sanity";

// Import du type BlogPost
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: any;
  date: string;
  author: string;
  authorImage?: string;
  readingTime: string;
  category: string[];
  image: string;
  featured?: boolean;
}

export default function BlogPageClient() {
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        setIsLoading(true);
        
        // Récupération de l'article à la une
        const featuredPostData = await getFeaturedPost();
        const featured = featuredPostData ? adaptSanityPost(featuredPostData) : null;
        
        // Récupération des articles récents
        const recentPostsData = await getRecentPosts(6);
        const recent = recentPostsData.map((post: any) => adaptSanityPost(post));
        
        // Récupération de tous les articles
        const allPostsData = await getAllPosts();
        const all = allPostsData.map((post: any) => adaptSanityPost(post));
        
        setFeaturedPost(featured);
        setRecentPosts(recent);
        setAllPosts(all);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchBlogData();
  }, []);

  const categories = Array.from(new Set(allPosts.flatMap(post => post.category)));

  // Fallback pour l'article à la une si aucun n'est marqué comme tel
  const displayedFeaturedPost = featuredPost || (recentPosts.length > 0 ? recentPosts[0] : null);

  if (isLoading) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Chargement des articles...</h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <PageTransition>
        <div className="container py-12">
          <div className="mb-8">
            <MotionH1 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="text-4xl font-bold mb-2"
            >
              Blog
            </MotionH1>
            <MotionP 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="text-muted-foreground max-w-2xl mb-8"
            >
              Découvrez mes articles sur le développement web, l'UX/UI design et les dernières tendances technologiques.
            </MotionP>
            <Breadcrumbs 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Blog", href: "/blog", isCurrent: true },
              ]} 
            />
          </div>

          {/* Recherche et catégories */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 mb-12">
            <div>
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Rechercher un article..." 
                  className="w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Catégories</h3>
              <ScrollArea className="h-[200px] lg:h-[120px]">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Link href={`/blog/category/${category}`}>
                        <Badge variant="outline" className="hover:bg-secondary transition-colors cursor-pointer">
                          <Tag className="mr-1 h-3 w-3" /> {category}
                        </Badge>
                      </Link>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Article à la une */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">À la une</h2>
            <MotionDiv 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="animate-card"
            >
              {displayedFeaturedPost && (
                <Link href={`/blog/${displayedFeaturedPost.slug}`}>
                  <Card className="overflow-hidden group">
                    <div className="relative h-[400px]">
                      <Image
                        src={urlFor(displayedFeaturedPost.image).url()}
                        alt={displayedFeaturedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                        <div className="flex items-center gap-3 mb-3">
                          {displayedFeaturedPost.category && displayedFeaturedPost.category.length > 0 && (
                            <Badge className="bg-primary text-white dark:text-black">{displayedFeaturedPost.category[0]}</Badge>
                          )}
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-1 h-3 w-3" />
                            {displayedFeaturedPost.date}
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="mr-1 h-3 w-3" />
                            {displayedFeaturedPost.readingTime}
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary/90 transition-colors">
                          {displayedFeaturedPost.title}
                        </h3>
                        <p className="text-gray-200 mb-4 max-w-3xl">
                          {displayedFeaturedPost.excerpt}
                        </p>
                        <Button variant="secondary" className="w-fit">
                          Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              )}
            </MotionDiv>
          </div>

          {/* Recent Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Articles récents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <MotionDiv
                  key={post.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="animate-card"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={urlFor(post.image).url()}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.category && post.category.length > 0 && (
                            <Badge variant="outline">{post.category[0]}</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="py-2 flex-grow">
                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter className="pt-0 flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {post.readingTime}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </MotionDiv>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="w-fit mx-auto">
                Voir tous les articles
              </Button>
            </div>
          </div>

          {/* Abonnez-vous */}
          <div className="bg-muted p-8 rounded-lg border border-border mb-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
              <p className="text-muted-foreground mb-6">
                Abonnez-vous à ma newsletter pour recevoir mes derniers articles et conseils directement dans votre boîte de réception.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="whitespace-nowrap">S'abonner</Button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
} 