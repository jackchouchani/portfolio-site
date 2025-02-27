"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, 
  CalendarIcon, 
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
import { MotionDiv, MotionH1, MotionP, fadeInUp, StaggerContainer } from "@/src/components/ui/motion";
import PageTransition from "@/src/components/PageTransition";

// Données des articles de blog (les mêmes que sur la page blog principale)
const blogPosts = [
  {
    id: "7",
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
    content: `
      <p>La conception web est un domaine en constante évolution, avec de nouvelles tendances qui émergent chaque année. En 2023, nous assistons à une transformation significative de la façon dont les sites web sont conçus et développés. Voici les 10 tendances de conception web qui dominent cette année :</p>
      
      <h2>1. Design Minimaliste</h2>
      <p>Le minimalisme continue de régner en maître dans la conception web. Les designs épurés avec beaucoup d'espace blanc, des éléments visuels simplifiés et une typographie claire sont très prisés. Cette approche améliore non seulement l'esthétique du site, mais aussi son temps de chargement et son expérience utilisateur.</p>
      
      <h2>2. Mode Sombre</h2>
      <p>Le mode sombre est devenu un incontournable. Il réduit la fatigue oculaire, économise la batterie sur les appareils mobiles et donne à votre site un aspect moderne et sophistiqué. De plus en plus de sites offrent désormais la possibilité de basculer entre les modes clair et sombre.</p>
      
      <h2>3. Animations et Interactions</h2>
      <p>Les micro-interactions et les animations subtiles enrichissent l'expérience utilisateur en fournissant un retour visuel et en rendant l'interface plus intuitive. Les animations déclenchées par le défilement sont particulièrement populaires pour révéler progressivement le contenu.</p>
      
      <h2>4. Typographie Audacieuse</h2>
      <p>La typographie devient un élément de design à part entière. Les grandes polices, les combinaisons audacieuses et les dispositions créatives de texte sont utilisées pour capter l'attention et transmettre la personnalité de la marque.</p>
      
      <h2>5. Conception 3D</h2>
      <p>Avec l'amélioration des performances des navigateurs, les éléments 3D et les rendus réalistes sont de plus en plus intégrés aux sites web. Ils créent une profondeur visuelle et offrent une expérience immersive.</p>
      
      <h2>6. Scrollytelling</h2>
      <p>Le "scrollytelling" consiste à raconter une histoire à mesure que l'utilisateur fait défiler la page. Cette technique combine animations, transitions et contenu pour créer une narration interactive et engageante.</p>
      
      <h2>7. Néomorphisme</h2>
      <p>Le néomorphisme est un style de design qui combine le skeuomorphisme et le design plat. Il crée des éléments d'interface qui semblent pressés ou extrudés de l'arrière-plan, donnant une impression de profondeur subtile sans être trop réaliste.</p>
      
      <h2>8. Glassmorphisme</h2>
      <p>Inspiré par l'interface de macOS Big Sur et Windows 11, le glassmorphisme utilise des effets de flou et de transparence pour créer une impression de verre givré. Cela ajoute une dimension et une légèreté visuelles à l'interface.</p>
      
      <h2>9. Personnalisation et Expériences Adaptatives</h2>
      <p>Les sites web deviennent de plus en plus personnalisés, offrant des expériences sur mesure basées sur les préférences, le comportement et la localisation de l'utilisateur. Cela améliore l'engagement et la satisfaction des utilisateurs.</p>
      
      <h2>10. Accessibilité</h2>
      <p>L'accessibilité n'est plus une option mais une nécessité. Les concepteurs accordent plus d'attention à la création de sites utilisables par tous, y compris les personnes handicapées, en suivant les directives WCAG et en mettant en œuvre des pratiques inclusives.</p>
      
      <p>Ces tendances reflètent l'évolution continue de la conception web vers des expériences plus engageantes, accessibles et centrées sur l'utilisateur. En intégrant ces éléments dans vos projets, vous pouvez créer des sites web modernes qui se démarquent dans un paysage numérique de plus en plus concurrentiel.</p>
    `
  },
  {
    id: "8",
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
    content: `
      <p>La vitesse de chargement d'un site web est un facteur crucial tant pour l'expérience utilisateur que pour le référencement. Un site lent peut augmenter le taux de rebond, réduire les conversions et affecter négativement votre classement dans les moteurs de recherche. Voici un guide complet pour optimiser les performances de votre site web.</p>
      
      <h2>Optimisation des images</h2>
      <p>Les images sont souvent responsables de la majeure partie du poids d'une page web. Pour les optimiser :</p>
      <ul>
        <li>Utilisez les formats modernes comme WebP qui offrent une meilleure compression que JPEG ou PNG</li>
        <li>Redimensionnez les images à la taille d'affichage appropriée</li>
        <li>Utilisez le chargement paresseux (lazy loading) pour charger les images uniquement lorsqu'elles sont visibles</li>
        <li>Compressez les images sans perte de qualité perceptible à l'aide d'outils comme ImageOptim ou TinyPNG</li>
      </ul>
      
      <h2>Minimisation et compression des fichiers</h2>
      <p>Réduisez la taille de vos fichiers CSS, JavaScript et HTML en :</p>
      <ul>
        <li>Minifiant votre code pour éliminer les espaces, commentaires et caractères inutiles</li>
        <li>Utilisant la compression GZIP ou Brotli sur votre serveur</li>
        <li>Combinant les fichiers CSS et JavaScript pour réduire le nombre de requêtes HTTP</li>
      </ul>
      
      <h2>Exploitation du cache navigateur</h2>
      <p>Configurez correctement le cache du navigateur pour permettre le stockage local des fichiers statiques :</p>
      <ul>
        <li>Définissez des en-têtes d'expiration appropriés pour les différents types de ressources</li>
        <li>Utilisez l'étiquetage des entités (ETag) pour valider les ressources mises en cache</li>
        <li>Mettez en œuvre un système de versionnage des fichiers pour forcer le rechargement lors des mises à jour</li>
      </ul>
      
      <h2>Chargement asynchrone des ressources</h2>
      <p>Utilisez les attributs async et defer pour les scripts JavaScript non essentiels au chargement initial :</p>
      <ul>
        <li>async permet au script de se charger en parallèle et de s'exécuter dès qu'il est disponible</li>
        <li>defer charge le script en parallèle mais l'exécute seulement après l'analyse du document</li>
      </ul>
      
      <h2>Optimisation des polices web</h2>
      <p>Les polices web peuvent ralentir considérablement le chargement d'une page :</p>
      <ul>
        <li>Limitez le nombre de variantes de polices utilisées</li>
        <li>Utilisez le format WOFF2 qui offre la meilleure compression</li>
        <li>Spécifiez display: swap dans @font-face pour afficher d'abord une police de substitution</li>
        <li>Privilégiez les polices système quand c'est possible</li>
      </ul>
      
      <h2>Utilisation d'un CDN</h2>
      <p>Un réseau de distribution de contenu (CDN) met en cache votre contenu sur plusieurs serveurs à travers le monde, réduisant ainsi la latence pour les utilisateurs internationaux.</p>
      
      <h2>Optimisation des ressources tierces</h2>
      <p>Les scripts tiers (analytics, publicités, widgets sociaux) peuvent considérablement ralentir votre site :</p>
      <ul>
        <li>Évaluez la nécessité de chaque script tiers</li>
        <li>Chargez ces ressources de manière asynchrone</li>
        <li>Utilisez des techniques comme l'intersection observer pour charger ces éléments uniquement lorsqu'ils sont nécessaires</li>
      </ul>
      
      <h2>Mise en œuvre de la préconnexion et du préchargement</h2>
      <p>Utilisez les indications de ressources pour optimiser le chargement :</p>
      <ul>
        <li>dns-prefetch pour résoudre les noms de domaine à l'avance</li>
        <li>preconnect pour établir des connexions anticipées</li>
        <li>preload pour les ressources critiques nécessaires immédiatement</li>
        <li>prefetch pour les ressources qui seront nécessaires pour la navigation future</li>
      </ul>
      
      <h2>Optimisation du rendu critique</h2>
      <p>Identifiez et optimisez le chemin de rendu critique en :</p>
      <ul>
        <li>Réduisant la taille du HTML, CSS et JavaScript critiques</li>
        <li>Inlinant le CSS critique directement dans le HTML</li>
        <li>Différant le chargement des styles non critiques</li>
      </ul>
      
      <h2>Outils de mesure des performances</h2>
      <p>Utilisez ces outils pour analyser et surveiller les performances de votre site :</p>
      <ul>
        <li>Google PageSpeed Insights</li>
        <li>Lighthouse</li>
        <li>WebPageTest</li>
        <li>GTmetrix</li>
        <li>Chrome DevTools Performance panel</li>
      </ul>
      
      <p>L'optimisation des performances web est un processus continu qui nécessite des tests réguliers et des ajustements. En mettant en œuvre ces techniques, vous pouvez considérablement améliorer la vitesse de chargement de votre site, offrir une meilleure expérience utilisateur et potentiellement améliorer votre classement dans les moteurs de recherche.</p>
    `
  },
  // Autres articles avec structure similaire
];

// Composant pour rendre du HTML en toute sécurité
const HtmlContent = ({ html }: { html: string }) => {
  return <div 
    dangerouslySetInnerHTML={{ __html: html }} 
    className="prose prose-lg dark:prose-invert max-w-none text-foreground dark:text-foreground space-y-6 leading-7" 
  />;
};

// Trouver un article par son slug
const findPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("article");
  const [copySuccess, setCopySuccess] = useState(false);

  // Fonction pour copier l'URL de l'article
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Si l'article n'existe pas
  if (!post) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-16 text-center">
          <Alert variant="destructive" className="max-w-md mx-auto mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Article non trouvé</AlertTitle>
            <AlertDescription>
              L'article que vous recherchez n'existe pas ou a été déplacé.
            </AlertDescription>
          </Alert>
          <Button asChild>
            <Link href="/blog">Retour au blog</Link>
          </Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Fil d'Ariane */}
          <div className="mb-6 text-sm breadcrumbs flex items-center text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </div>
          
          {/* En-tête de l'article */}
          <div className="mb-12">
            <div className="mb-4">
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary" className="mr-2 mb-2">
                  {category}
                </Badge>
              ))}
            </div>
            
            <MotionH1
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {post.title}
            </MotionH1>
            
            <MotionDiv
              className="flex flex-wrap gap-6 mb-8 items-center"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3 border-2 border-primary/30">
                  <AvatarFallback>{post.author?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="font-medium hover:text-primary cursor-pointer transition-colors">
                        {post.author?.name}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{post.author?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{post.author?.name}</h4>
                          <p className="text-sm text-muted-foreground">{post.author?.role}</p>
                          <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                              Auteur de plusieurs articles spécialisés
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{post.readTime} de lecture</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 ml-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className={liked ? "text-red-500 border-red-200" : ""}
                        onClick={() => setLiked(!liked)}
                      >
                        <ThumbsUp className="h-4 w-4" />
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
                        className={bookmarked ? "text-blue-500 border-blue-200" : ""}
                        onClick={() => setBookmarked(!bookmarked)}
                      >
                        <Bookmark className="h-4 w-4" />
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
              className="aspect-[16/9] rounded-xl overflow-hidden border border-muted mb-10 bg-muted/30"
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
          <Tabs defaultValue="article" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="article">Article</TabsTrigger>
              <TabsTrigger value="comments">Commentaires</TabsTrigger>
            </TabsList>
            
            <TabsContent value="article" className="mt-6 p-0">
              {/* Alerte d'information en haut de l'article */}
              <Alert className="mb-8 text-sm bg-primary/5 border-primary/20">
                <Info className="h-4 w-4 text-primary" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  Cet article a été mis à jour le {post.date}. Si vous avez des questions, n'hésitez pas à me contacter.
                </AlertDescription>
              </Alert>
            
              {/* Table des matières pour les articles longs */}
              <Card className="mb-8 border-muted/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Dans cet article</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ScrollArea className="h-[180px] pr-4">
                    <ul className="space-y-1">
                      {post.content.match(/<h2>(.*?)<\/h2>/g)?.map((match, index) => {
                        const title = match.replace(/<h2>(.*?)<\/h2>/, '$1');
                        // Générer le même ID que celui utilisé dans le contenu
                        const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                          <li key={index}>
                            <Button 
                              variant="ghost" 
                              className="justify-start h-auto py-1.5 px-2 w-full text-left text-muted-foreground hover:text-primary"
                              onClick={() => {
                                // Scroll to the heading on click
                                const element = document.getElementById(sectionId);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                            >
                              {index + 1}. {title}
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </CardContent>
              </Card>
            
              {/* Contenu de l'article avec ID pour chaque section */}
              <div className="max-w-4xl mx-auto">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.replace(
                      /<h2>(.*?)<\/h2>/g,
                      (match, title, index) => {
                        // Générer un ID unique basé sur le texte du titre pour éviter les doublons
                        const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`;
                        return `<h2 id="${sectionId}" class="text-2xl font-bold mt-8 mb-4 text-foreground dark:text-foreground group flex items-center">${title}<a href="#${sectionId}" class="ml-2 opacity-0 group-hover:opacity-100 text-primary">#</a></h2>`;
                      }
                    ).replace(
                      /<p>/g,
                      '<p class="text-foreground dark:text-foreground text-base mb-4">'
                    ).replace(
                      /<ul>/g,
                      '<ul class="list-disc pl-5 space-y-2 text-foreground dark:text-foreground">'
                    ).replace(
                      /<ol>/g,
                      '<ol class="list-decimal pl-5 space-y-2 text-foreground dark:text-foreground">'
                    ).replace(
                      /<li>/g,
                      '<li class="text-foreground dark:text-foreground">'
                    ).replace(
                      /<h3>(.*?)<\/h3>/g,
                      '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground dark:text-foreground">$1</h3>'
                    )
                  }}
                  className="prose prose-lg dark:prose-invert max-w-none text-foreground dark:text-foreground"
                  style={{ opacity: 1 }}
                />
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
          <Card className="mt-12 mb-8 bg-muted/10 border-primary/10">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Avatar className="h-20 w-20 border-2 border-primary/30">
                  {post.author?.avatar ? (
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  ) : (
                    <AvatarFallback className="text-xl">{post.author?.name.charAt(0)}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.author?.name}</h3>
                  <p className="text-muted-foreground mb-4">{post.author?.role}</p>
                  <p className="mb-4">
                    Passionné(e) par le développement web et les technologies modernes. 
                    J'écris régulièrement sur les tendances du web, les bonnes pratiques 
                    et les nouvelles technologies.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <User className="h-4 w-4" />
                      Voir le profil
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/contact">Me contacter</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Partage et actions */}
          <div className="border-t border-border mt-10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-medium mb-3">Partager cet article :</h3>
                <div className="flex space-x-2">
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
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && p.categories.some(cat => post.categories.includes(cat)))
                .slice(0, 3)
                .map(relatedPost => (
                  <Card key={relatedPost.id} className="hover:shadow-md transition-all duration-300 border-muted/40 overflow-hidden group">
                    <div className="h-48 relative bg-muted">
                      {relatedPost.image ? (
                        <Image 
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20"></div>
                      )}
                      {relatedPost.categories && relatedPost.categories[0] && (
                        <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">
                          {relatedPost.categories[0]}
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{relatedPost.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-0 flex justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary p-0 font-medium"
                      >
                        <Link href={`/blog/${relatedPost.slug}`} className="flex items-center gap-1">
                          Lire
                          <ArrowLeft className="h-3 w-3 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
} 