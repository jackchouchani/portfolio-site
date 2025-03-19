"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Tag, 
  MessageSquare, 
  Bookmark, 
  ThumbsUp, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Copy, 
  AlertCircle, 
  Info,
  User
} from "lucide-react";
import { MotionDiv, MotionH1, MotionP, fadeInUp, StaggerContainer } from "../../components/ui/motion";
import PageTransition from "../../components/PageTransition";

// Types pour les articles de blog
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
  content?: string; // Le contenu de l'article est retourné sous forme de string HTML
  author: {
    name: string | null;
    image?: string | null;
  };
  tags: Array<{
    id: string;
    name: string;
  }>;
}

interface WispBlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function WispBlogPostPage({ post, relatedPosts }: WispBlogPostPageProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("article");
  const [copySuccess, setCopySuccess] = useState(false);

  // Formatage de la date pour l'affichage
  const formatDate = (dateString: string | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Estimation du temps de lecture (1 minute pour 200 mots)
  const getReadingTime = (description: string | null, content?: string) => {
    // Si on a le contenu complet (dans la page d'article)
    if (content) {
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);
      return `${readingTime} min`;
    }
    
    // Pour les cartes d'articles similaires (pas de contenu complet)
    // Utiliser une estimation standard
    return "3-5 min";
  };

  // Fonction pour copier l'URL de l'article
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Extrait des tags de l'article ou crée un tableau vide
  const tags = post.tags || [];

  return (
    <PageTransition>
      <article className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Fil d'Ariane */}
          <div className="mb-4 sm:mb-6 text-xs sm:text-sm breadcrumbs flex items-center text-muted-foreground overflow-x-auto pb-1">
            <Link href="/" className="hover:text-primary transition-colors whitespace-nowrap">Accueil</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors whitespace-nowrap">Blog</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-foreground truncate">{post.title}</span>
          </div>
          
          {/* En-tête de l'article */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-3 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag.id} variant="secondary" className="text-xs">
                  {tag.name}
                </Badge>
              ))}
            </div>
            
            <MotionH1
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground leading-tight"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {post.title}
            </MotionH1>
            
            <MotionDiv
              className="flex flex-col sm:flex-row sm:gap-6 mb-4 sm:mb-8 items-start sm:items-center"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center mb-3 sm:mb-0">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 border-2 border-primary/30">
                  <AvatarImage src={post.author?.image || ''} alt={post.author?.name || 'Auteur'} />
                  <AvatarFallback>{post.author?.name?.charAt(0) || 'A'}</AvatarFallback>
                </Avatar>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="font-medium hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">
                        {post.author?.name || 'Auteur'}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={post.author?.image || ''} alt={post.author?.name || 'Auteur'} />
                          <AvatarFallback>{post.author?.name?.charAt(0) || 'A'}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{post.author?.name || 'Auteur'}</h4>
                          <p className="text-sm text-muted-foreground">Auteur du blog</p>
                          <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                              Auteur de plusieurs articles spécialisés
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div className="flex flex-wrap gap-2 items-center text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{getReadingTime(post.description, post.content)} de lecture</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 sm:ml-auto mt-3 sm:mt-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className={`h-8 w-8 sm:h-9 sm:w-9 ${liked ? "text-red-500 border-red-200" : ""}`}
                        onClick={() => setLiked(!liked)}
                      >
                        <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{liked ? "Retirer le like" : "J'aime cet article"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className={`h-8 w-8 sm:h-9 sm:w-9 ${bookmarked ? "text-blue-500 border-blue-200" : ""}`}
                        onClick={() => setBookmarked(!bookmarked)}
                      >
                        <Bookmark className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{bookmarked ? "Retirer des favoris" : "Enregistrer l'article"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </MotionDiv>
            
            <MotionDiv
              className="aspect-[16/9] rounded-xl overflow-hidden border border-muted mb-6 sm:mb-10 bg-muted/30"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {post.image ? (
                <Image 
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Image de couverture de l'article</span>
                </div>
              )}
            </MotionDiv>
          </div>
          
          {/* Tabs pour naviguer entre l'article et les commentaires */}
          <Tabs defaultValue="article" value={activeTab} onValueChange={setActiveTab} className="mb-6 sm:mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="article" className="text-sm">Article</TabsTrigger>
              <TabsTrigger value="comments" className="text-sm">Commentaires</TabsTrigger>
            </TabsList>
            
            <TabsContent value="article" className="mt-4 sm:mt-6 p-0">
              {/* Alerte d'information en haut de l'article */}
              <Alert className="mb-6 sm:mb-8 text-xs sm:text-sm bg-primary/5 border-primary/20">
                <Info className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <AlertTitle className="text-sm">Information</AlertTitle>
                <AlertDescription className="text-xs sm:text-sm">
                  Cet article a été mis à jour le {formatDate(post.updatedAt)}. Si vous avez des questions, n'hésitez pas à me contacter.
                </AlertDescription>
              </Alert>
            
              {/* Contenu de l'article */}
              <div className="max-w-4xl mx-auto">
                {post.content ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none text-foreground dark:text-foreground space-y-4 sm:space-y-6 leading-6 sm:leading-7"
                  />
                ) : (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">Le contenu de cet article n'est pas disponible.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="comments" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Commentaires</CardTitle>
                  <CardDescription>
                    Partagez votre avis sur cet article
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Commentaires désactivés</h3>
                    <p className="text-muted-foreground mb-4">
                      Les commentaires sont temporairement désactivés sur ce blog.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/contact">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Me contacter pour discuter de cet article
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Information sur l'auteur */}
          <Card className="mt-8 sm:mt-12 mb-6 sm:mb-8 bg-muted/10 border-primary/10">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-primary/30">
                  <AvatarImage src={post.author?.image || ''} alt={post.author?.name || 'Auteur'} />
                  <AvatarFallback className="text-lg sm:text-xl">{post.author?.name?.charAt(0) || 'A'}</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{post.author?.name || 'Auteur'}</h3>
                  <p className="text-sm text-muted-foreground mb-3 sm:mb-4">Auteur du blog</p>
                  <p className="text-sm sm:text-base mb-4">
                    Passionné par le développement web et les technologies modernes. 
                    J'écris régulièrement sur les tendances du web, les bonnes pratiques 
                    et les nouvelles technologies.
                  </p>
                  <div className="flex gap-2 justify-center sm:justify-start">
                    <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm">
                      <User className="h-3 w-3 sm:h-4 sm:w-4" />
                      Voir le profil
                    </Button>
                    <Button size="sm" asChild className="text-xs sm:text-sm">
                      <Link href="/contact">Me contacter</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Partage et actions */}
          <div className="border-t border-border mt-6 sm:mt-10 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="w-full sm:w-auto">
                <h3 className="font-medium mb-3 text-sm sm:text-base text-center sm:text-left">Partager cet article :</h3>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" aria-label="Partager sur Twitter">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Partager sur Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" aria-label="Partager sur Facebook">
                          <Facebook className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Partager sur Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" aria-label="Partager sur LinkedIn">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Partager sur LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          aria-label="Copier le lien"
                          onClick={copyToClipboard}
                          className={copySuccess ? "border-green-500 text-green-500" : ""}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copySuccess ? "Lien copié !" : "Copier le lien"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour au blog
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Articles similaires */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                    <Card className="hover:shadow-md transition-all duration-300 border-muted/40 overflow-hidden h-full">
                      <div className="h-48 relative bg-muted">
                        {relatedPost.image ? (
                          <Image 
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20"></div>
                        )}
                        {relatedPost.tags && relatedPost.tags.length > 0 && (
                          <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                            {relatedPost.tags[0].name}
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{relatedPost.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="pt-0 flex justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{getReadingTime(relatedPost.description)}</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary p-0 font-medium text-sm">
                          Lire
                          <ArrowLeft className="h-3 w-3 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </PageTransition>
  );
} 