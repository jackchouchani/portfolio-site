"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SearchIcon, Filter, ChevronRight, Clock, Calendar, User, Tag, SlidersHorizontal, Info, Heart, MessageCircle, Bookmark, Share2, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, StaggerContainer, ScrollAnimation, fadeInUp } from "../../src/components/ui/motion";
import PageTransition from "../../src/components/PageTransition";

// Ajoutez les données d'images Unsplash pour les articles de blog
const blogPosts = [
  {
    id: "1",
    title: "10 Tendances de Conception Web pour 2023",
    excerpt: "Découvrez les dernières tendances en matière de conception web qui domineront le paysage numérique cette année.",
    date: "15 Mai 2023",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
    categories: ["Design", "Tendances"],
    slug: "tendances-conception-web-2023",
    author: {
      name: "Sophie Martin",
      role: "Designer UX/UI",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    featured: true
  },
  {
    id: "2",
    title: "Comment Optimiser les Performances de Votre Site Web",
    excerpt: "Guide pratique pour améliorer la vitesse de chargement et les performances globales de votre site web.",
    date: "3 Juin 2023",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
    categories: ["Performance", "Développement"],
    slug: "optimiser-performances-site-web",
    author: {
      name: "Thomas Bernard",
      role: "Développeur Full Stack",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    featured: true
  },
  {
    id: "3",
    title: "Le Guide Complet du Responsive Design en 2023",
    excerpt: "Tout ce que vous devez savoir pour créer des sites web qui s'adaptent parfaitement à tous les appareils.",
    date: "20 Juin 2023",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
    categories: ["Responsive", "Mobile"],
    slug: "guide-responsive-design-2023",
    author: {
      name: "Julie Dubois",
      role: "Intégratrice Web",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    }
  },
  {
    id: "4",
    title: "Les Frameworks JavaScript à Surveiller en 2023",
    excerpt: "Un aperçu des frameworks JavaScript les plus prometteurs qui façonnent le développement web moderne.",
    date: "7 Juillet 2023",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
    categories: ["JavaScript", "Développement"],
    slug: "frameworks-javascript-2023",
    author: {
      name: "Marc Lefèvre",
      role: "Développeur Frontend",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    }
  },
  {
    id: "5",
    title: "L'Importance de l'Accessibilité Web",
    excerpt: "Pourquoi l'accessibilité web est cruciale et comment rendre votre site accessible à tous les utilisateurs.",
    date: "25 Juillet 2023",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
    categories: ["Accessibilité", "UX"],
    slug: "importance-accessibilite-web",
    author: {
      name: "Léa Martin",
      role: "Spécialiste Accessibilité",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    }
  },
  {
    id: "6",
    title: "Comment Créer une Stratégie de Contenu Efficace",
    excerpt: "Les étapes essentielles pour développer une stratégie de contenu qui engage votre audience cible.",
    date: "10 Août 2023",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80",
    categories: ["Contenu", "Marketing"],
    slug: "strategie-contenu-efficace",
    author: {
      name: "Claire Dupont",
      role: "Stratège de Contenu",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    featured: true
  }
];

// Extraction de toutes les catégories uniques
const allCategories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  // Filtrer les articles en fonction de la recherche et des catégories sélectionnées
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategories = selectedCategories.length === 0 || 
                              post.categories.some(cat => selectedCategories.includes(cat));
    
    const matchesTab = activeTab === "all" || 
                       (activeTab === "featured" && post.featured);
    
    return matchesSearch && matchesCategories && matchesTab;
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
    <PageTransition>
      <main className="min-h-screen py-12 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="mb-12 text-center" viewportMargin="-100px">
            <Badge 
              variant="secondary" 
              className="mb-4 text-sm font-medium px-4 py-1 mx-auto"
            >
              Actualités & Conseils
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes derniers articles et réflexions sur le développement web, 
              les technologies modernes et les meilleures pratiques.
            </p>
          </ScrollAnimation>

          {/* Tabs navigation */}
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="mb-8"
          >
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">Tous les articles</TabsTrigger>
                <TabsTrigger value="featured">Articles à la une</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          {/* Filtres et recherche */}
          <Card className="mb-10 border-primary/10">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="relative w-full md:w-1/2">
                  <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Rechercher des articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="w-full md:w-1/2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full md:w-auto flex items-center">
                        <Filter className="h-4 w-4 mr-2" /> 
                        <span>Filtrer par catégorie{selectedCategories.length > 0 ? ` (${selectedCategories.length})` : ""}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      {allCategories.map((category) => (
                        <DropdownMenuItem 
                          key={category}
                          className="cursor-pointer flex items-center justify-between"
                          onClick={() => toggleCategory(category)}
                        >
                          <span>{category}</span>
                          {selectedCategories.includes(category) && (
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          )}
                        </DropdownMenuItem>
                      ))}
                      {selectedCategories.length > 0 && (
                        <>
                          <Separator className="my-2" />
                          <DropdownMenuItem 
                            className="cursor-pointer text-primary"
                            onClick={() => setSelectedCategories([])}
                          >
                            Effacer les filtres
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              {/* Tags sélectionnés */}
              {selectedCategories.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">Filtres actifs:</span>
                  {selectedCategories.map((category) => (
                    <Badge 
                      key={category} 
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => toggleCategory(category)}
                    >
                      {category} ×
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Articles en vedette */}
          {activeTab === "featured" && filteredPosts.some(post => post.featured) && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Articles à la une</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Articles sélectionnés pour leur pertinence</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts
                  .filter(post => post.featured)
                  .slice(0, 2)
                  .map((post) => (
                    <Card key={post.id} className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-muted/40 bg-card">
                      <div className="relative w-full h-60 overflow-hidden bg-muted">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                            <span className="text-muted-foreground">Image de l'article</span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">À la une</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{post.author.name}</span>
                        </div>
                        <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <time dateTime={post.date}>{post.date}</time>
                          <span>•</span>
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button 
                          asChild 
                          variant="ghost" 
                          size="sm"
                          className="text-primary p-0 font-medium"
                        >
                          <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                            Lire
                            <ChevronRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {/* Liste des articles */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Tous les articles{searchQuery ? ` contenant "${searchQuery}"` : ""}</h2>
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2">{filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Plus récents</DropdownMenuItem>
                    <DropdownMenuItem>Plus anciens</DropdownMenuItem>
                    <DropdownMenuItem>Populaires</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <MotionDiv key={post.id} variants={fadeInUp} className="h-full">
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group border-muted/40 bg-card">
                      <div className="relative w-full h-48 overflow-hidden bg-muted">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20"></div>
                        )}
                        {post.categories[0] && (
                          <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                            {post.categories[0]}
                          </Badge>
                        )}
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
                        <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                          <CardTitle className="text-xl font-bold line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </Link>
                        <CardDescription className="mt-2 text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 pb-2">
                        <div className="flex flex-wrap gap-2">
                          {post.categories.map((category) => (
                            <Badge key={category} variant="secondary" className="font-normal">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2 flex justify-between items-center">
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <div className="flex items-center gap-2 cursor-pointer">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-muted-foreground">{post.author.name}</span>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="flex space-x-4">
                              <Avatar>
                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold">{post.author.name}</h4>
                                <p className="text-sm text-muted-foreground">{post.author.role}</p>
                                <div className="flex items-center pt-2">
                                  <span className="text-xs text-muted-foreground">
                                    Auteur de plusieurs articles sur le développement web
                                  </span>
                                </div>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                        
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </MotionDiv>
                ))}
              </StaggerContainer>
            ) : (
              <div className="text-center py-12">
                <Alert variant="default" className="max-w-md mx-auto">
                  <AlertTitle className="text-xl font-medium mb-2 text-foreground">Aucun article trouvé</AlertTitle>
                  <AlertDescription className="text-muted-foreground">
                    Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
                  </AlertDescription>
                </Alert>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setActiveTab("all");
                  }}
                >
                  Afficher tous les articles
                </Button>
              </div>
            )}
          </div>

          {/* Newsletter */}
          <ScrollAnimation className="mb-16">
            <Card className="border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Inscrivez-vous à ma newsletter
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Recevez mes derniers articles, guides et conseils directement dans votre boîte mail. Je ne spamme jamais !
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
                  <p className="text-xs text-muted-foreground mt-4">
                    En vous inscrivant, vous acceptez de recevoir des emails de ma part et vous confirmez avoir lu ma politique de confidentialité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
          
          {/* Liens rapides vers d'autres sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">À propos de moi</h3>
                  <p className="text-sm text-muted-foreground mb-2">En savoir plus sur mon parcours</p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href="/a-propos" className="flex items-center gap-1">
                      Voir ma page <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Une question ?</h3>
                  <p className="text-sm text-muted-foreground mb-2">N'hésitez pas à me contacter</p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href="/contact" className="flex items-center gap-1">
                      Me contacter <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Mes services</h3>
                  <p className="text-sm text-muted-foreground mb-2">Découvrez mes offres</p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href="/services" className="flex items-center gap-1">
                      Voir les services <ChevronRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}