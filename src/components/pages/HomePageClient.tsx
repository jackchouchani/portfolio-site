"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, Code, Layout, Smartphone, ArrowRight, Calendar, Mail, User, ShoppingCart, Clock } from "lucide-react"
import { MotionDiv, MotionH1, MotionP, MotionSection, MotionSpan, fadeInLeft, fadeInRight, fadeInUp, staggerContainer, StaggerContainer } from "../../components/ui/motion"
import PageTransition from "../../components/PageTransition"
import { ServicePreview } from "../../components/ServicePreview"
import { ScrollObserver } from "../../components/ui/ScrollObserver"
import { getRecentProjects } from "@/src/data/portfolioData"
import { wisp } from "../../../lib/wisp"

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

export default function HomePageClient() {
  // Obtenir les 3 projets les plus récents
  const recentProjects = getRecentProjects(3);
  
  // État pour les articles de blog
  const [recentBlogPosts, setRecentBlogPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  // Formatage de la date pour l'affichage
  const formatDate = (dateString: string | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Estimation du temps de lecture
  const getReadingTime = (description: string | null) => {
    if (!description) return "1 min";
    return "3-5 min"; // Valeur moyenne
  };
  
  // Récupérer les articles de blog récents
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const result = await wisp.getPosts({ limit: 3 });
        if (result && 'posts' in result && result.posts) {
          setRecentBlogPosts(result.posts);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchPosts();
  }, []);
  
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <MotionSection 
          className="py-20 md:py-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <MotionDiv
                className="flex-1 text-center md:text-left"
                variants={fadeInLeft}
              >
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-sm font-medium px-4 py-1"
                >
                  Développeur Web Freelance
                </Badge>
                <MotionH1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  Développement web et <MotionSpan className="text-primary" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>mobile</MotionSpan> pour votre entreprise
                </MotionH1>
                <MotionP 
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
                  variants={fadeInUp}
                >
                  Des sites web rapides et des applications mobiles iOS/Android qui convertissent vos visiteurs en clients. Solutions sur mesure adaptées à votre budget avec un développement rapide.
                </MotionP>
                <MotionDiv 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  variants={fadeInUp}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="lg" asChild>
                          <Link href="/tarifs">Voir les tarifs</Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Consultez nos tarifs et calculez le coût de votre projet</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="lg" asChild>
                          <Link href="/contact">Me contacter</Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Envoyez-moi un message pour discuter de votre projet</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="lg" asChild>
                          <Link href="/services">Voir mes services</Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Découvrez mon offre complète de services</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </MotionDiv>
              </MotionDiv>
              
              <MotionDiv 
                className="flex-1 relative"
                variants={fadeInLeft}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Badge de statut - visible uniquement sur desktop, positionné au-dessus de l'image */}
                <MotionDiv
                  className="hidden md:flex absolute -top-10 right-0 bg-primary dark:bg-primary text-white dark:text-black border border-primary/20 shadow-xl rounded-full px-4 py-2 text-sm font-medium items-center z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-black"></span>
                  </span>
                  Disponible pour nouveaux projets
                </MotionDiv>
                
                <Card className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  {/* Image d'héro */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  
                  <Image
                    src="/images/portfolio/hero-dev.webp"
                    alt="Développeur web travaillant sur un projet"
                    fill
                    className="object-cover opacity-90"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    fetchPriority="high"
                    style={{
                      contentVisibility: "auto",
                      transform: "translateZ(0)"
                    }}
                  />
                </Card>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>

        {/* Bannière "Disponible" fixe en bas sur mobile */}
        <MotionDiv 
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary dark:bg-primary shadow-lg py-2 px-4 flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-black"></span>
            </span>
            <span className="text-white dark:text-black font-semibold">Disponible pour nouveaux projets</span>
          </div>
        </MotionDiv>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <ScrollObserver animation="fade-up" delay={0.05}>
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-sm font-medium px-4 py-1"
                >
                  Mes Services
                </Badge>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.1}>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Solutions Web Rapides et Abordables
                </h1>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.15}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Des services de développement web complets à prix compétitifs pour propulser votre entreprise sur le web avec des délais courts garantis.
                </p>
              </ScrollObserver>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollObserver animation="fade-up" delay={0.2}>
                <ServicePreview
                  title="Création de Sites Web"
                  description="Des sites web modernes, réactifs et optimisés pour tous les appareils."
                  href="/services#websites"
                  icon={<Layout className="h-6 w-6" />}
                />
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.25}>
                <ServicePreview
                  title="Applications Mobiles"
                  description="Applications iOS et Android sur mesure pour étendre votre présence digitale."
                  href="/services#mobile-apps"
                  icon={<Smartphone className="h-6 w-6" />}
                />
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.3}>
                <ServicePreview
                  title="E-Commerce"
                  description="Solutions e-commerce complètes pour vendre vos produits en ligne."
                  href="/services#ecommerce"
                  icon={<ShoppingCart className="h-6 w-6" />}
                />
              </ScrollObserver>
            </div>
            
            <ScrollObserver animation="fade-up" delay={0.7}>
              <div className="text-center mt-12">
                <Button asChild>
                  <Link href="/services">Tous les services</Link>
                </Button>
              </div>
            </ScrollObserver>
          </div>
        </section>
        
        {/* Pourquoi Me Choisir Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <ScrollObserver animation="fade-up" delay={0.05}>
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-sm font-medium px-4 py-1"
                >
                  Pourquoi Me Choisir
                </Badge>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.1}>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Une Approche Différente du Développement Web
                </h1>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.15}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Contrairement aux agences traditionnelles, je propose une collaboration directe, 
                  des tarifs transparents et une communication constante tout au long de votre projet.
                </p>
              </ScrollObserver>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollObserver animation="fade-up" delay={0.2}>
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-md h-[220px] flex flex-col">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Livraison Rapide</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <p className="text-muted-foreground">Site web livré en <span className="font-semibold text-foreground">1 à 2 semaines</span> contre 1 à 2 mois en agence traditionnelle.</p>
                  </CardContent>
                </Card>
              </ScrollObserver>

              <ScrollObserver animation="fade-up" delay={0.3}>
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-md h-[220px] flex flex-col">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Tarifs Compétitifs</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <p className="text-muted-foreground">Économisez jusqu'à <span className="font-semibold text-foreground">40%</span> par rapport aux tarifs pratiqués par les agences web pour une qualité équivalente.</p>
                  </CardContent>
                </Card>
              </ScrollObserver>

              <ScrollObserver animation="fade-up" delay={0.4}>
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-md h-[220px] flex flex-col">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Garantie Satisfaction</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <p className="text-muted-foreground">Revisions illimitées et support de <span className="font-semibold text-foreground">30 jours</span> après livraison pour garantir votre entière satisfaction.</p>
                  </CardContent>
                </Card>
              </ScrollObserver>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              <ScrollObserver animation="fade-up" delay={0.5}>
                <div className="bg-muted/60 p-6 rounded-lg border border-border h-[320px] flex flex-col">
                  <h3 className="text-xl font-semibold mb-4">Web Wizardry vs Agences Web</h3>
                  <div className="flex flex-col justify-between flex-grow space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">Communication directe avec le développeur</h3>
                        <p className="text-sm text-muted-foreground">vs intermédiaires multiples en agence</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">Prix fixe sans surprises</h3>
                        <p className="text-sm text-muted-foreground">vs dépassements de budget fréquents</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">Modification rapide et réactive</h3>
                        <p className="text-sm text-muted-foreground">vs procédure lourde et délais allongés</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">Livraison plus rapide</h3>
                        <p className="text-sm text-muted-foreground">vs processus ralenti par la hiérarchie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.6}>
                <div className="bg-muted/60 p-6 rounded-lg border border-border h-[320px] flex flex-col">
                  <h3 className="text-xl font-semibold mb-4">Statistiques & Chiffres Clés</h3>
                  <div className="grid grid-cols-2 gap-4 flex-grow">
                    <div className="text-center p-4 bg-background rounded-lg border border-border flex flex-col justify-center">
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <p className="text-sm text-muted-foreground mt-1">Taux de satisfaction client</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border border-border flex flex-col justify-center">
                      <div className="text-3xl font-bold text-primary">+50</div>
                      <p className="text-sm text-muted-foreground mt-1">Projets réalisés</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border border-border flex flex-col justify-center">
                      <div className="text-3xl font-bold text-primary">1-2</div>
                      <p className="text-sm text-muted-foreground mt-1">Semaines de développement</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border border-border flex flex-col justify-center">
                      <div className="text-3xl font-bold text-primary">24h</div>
                      <p className="text-sm text-muted-foreground mt-1">Délai de réponse pour un devis détaillé</p>
                    </div>
                  </div>
                </div>
              </ScrollObserver>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <Badge 
                variant="secondary" 
                className="mb-4 text-sm font-medium px-4 py-1"
              >
                Témoignages
              </Badge>
              <MotionH1 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={fadeInUp}
              >
                Ce Que Disent Mes Clients
              </MotionH1>
              <MotionP 
                className="text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Découvrez l'expérience de collaboration avec Web Wizardry à travers les retours de clients satisfaits.
              </MotionP>
            </div>
            
            {/* Grille de témoignages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <ScrollObserver animation="fade-up" delay={0.1}>
                <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/testimonials/avatar-1.webp" alt="Marlène S." />
                        <AvatarFallback className="bg-primary/80">MS</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Marlène S.</CardTitle>
                        <CardDescription>Fondatrice, Comptoir Vintage</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic">
                      "Nous sommes ravis de notre boutique en ligne. L'interface est élégante, rapide et nos clients adorent l'expérience d'achat. Nos ventes ont augmenté de 35% depuis le lancement du nouveau site!"
                    </p>
                  </CardContent>
                </Card>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.15}>
                <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/testimonials/avatar-2.webp" alt="Mohamed B." />
                        <AvatarFallback className="bg-blue-500">MB</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Mohamed B.</CardTitle>
                        <CardDescription>Co-fondateur, Atelier Moderne</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic">
                      "Un travail remarquable pour notre site e-commerce de meubles. La mise en valeur de nos produits est parfaite et le processus d'achat simplifié a considérablement amélioré notre taux de conversion."
                    </p>
                  </CardContent>
                </Card>
              </ScrollObserver>
              
              <ScrollObserver animation="fade-up" delay={0.2}>
                <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/testimonials/avatar-3.webp" alt="Greg A." />
                        <AvatarFallback className="bg-green-500">GA</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Greg A.</CardTitle>
                        <CardDescription>Photographe professionnel</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic">
                      "Mon portfolio en ligne a complètement transformé ma présence sur le web. Les animations fluides et l'interface élégante mettent parfaitement en valeur mon travail. Un investissement qui a vraiment porté ses fruits."
                    </p>
                  </CardContent>
                </Card>
              </ScrollObserver>
            </div>
            
            {/* Étude de cas courte */}
            <ScrollObserver animation="fade-up" delay={0.3}>
              <Card className="border-2 border-primary/10 shadow-lg mb-16">
                <CardHeader className="bg-muted/40">
                  <Badge className="w-fit mb-2">Étude de cas</Badge>
                  <CardTitle>Comptoir Vintage : +45% de ventes en ligne</CardTitle>
                  <CardDescription>Comment une refonte complète a transformé les résultats commerciaux</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <p className="text-sm text-muted-foreground mb-4">
                        Comptoir Vintage avait besoin d'une plateforme e-commerce qui allie esthétique vintage et fonctionnalités modernes pour présenter leur collection de vêtements et accessoires de luxe d'occasion.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm">Design élégant inspiré par l'esthétique vintage avec une touche contemporaine</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm">Système e-commerce complet avec paiement sécurisé et gestion des stocks</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm">Application mobile interne pour la gestion des produits en magasin</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary">+45%</p>
                          <p className="text-xs text-muted-foreground">Ventes</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary">-30%</p>
                          <p className="text-xs text-muted-foreground">Temps de gestion</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary">+65%</p>
                          <p className="text-xs text-muted-foreground">Trafic organique</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3 flex items-center justify-center">
                      <Button asChild>
                        <Link href="/portfolio/comptoir-vintage">
                          Voir l'étude de cas complète
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollObserver>
            
            {/* Logos clients */}
            <ScrollObserver animation="fade-up" delay={0.35}>
              <div className="bg-muted/50 rounded-xl border border-border/50 p-6 md:p-8 backdrop-blur-sm">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl font-semibold mb-2">Ils nous font confiance</h3>
                  <p className="text-sm text-muted-foreground">Des entreprises innovantes qui ont choisi Web Wizardry pour leur présence en ligne</p>
                </div>
                <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-8 md:gap-16">
                  <div className="h-16 md:h-20 w-full md:w-48 relative hover:scale-105 transition-transform duration-300 flex justify-center">
                    <Image
                      src="/images/clients/comptoirvintage.webp"
                      alt="Logo Comptoir Vintage"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-contain dark:hidden"
                    />
                    <Image
                      src="/images/clients/comptoirvintage-dark.webp"
                      alt="Logo Comptoir Vintage"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-contain hidden dark:block"
                    />
                  </div>
                  <div className="h-16 md:h-20 w-full md:w-48 relative hover:scale-105 transition-transform duration-300 flex justify-center">
                    <Image
                      src="/images/clients/ateliermoderne.webp"
                      alt="Logo Atelier Moderne"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-contain"
                    />
                  </div>
                  <div className="h-16 md:h-20 w-full md:w-48 relative hover:scale-105 transition-transform duration-300 flex justify-center">
                    <Image
                      src="/images/clients/finpilot.webp"
                      alt="Logo Finpilot"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-contain"
                    />
                  </div>
                  <div className="h-16 md:h-20 w-full md:w-48 relative hover:scale-105 transition-transform duration-300 flex justify-center">
                    <Image
                      src="/images/clients/linabrax.webp"
                      alt="Logo Lina Brax"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-contain"
                    />
                  </div>
                  <div className="h-16 md:h-20 w-full md:w-48 col-span-2 md:col-span-1 relative hover:scale-105 transition-transform duration-300 flex justify-center mx-auto md:mx-0">
                    <Image
                      src="/images/clients/tpmp.webp"
                      alt="Logo TPMP"
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </ScrollObserver>
          </div>
        </section>

        {/* About Section - Quick intro */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <StaggerContainer className="flex flex-col md:flex-row items-center gap-12">
              <MotionDiv
                className="flex-1 order-2 md:order-1"
                variants={fadeInLeft}
              >
                <Card className="relative aspect-square w-full max-w-lg mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg bg-muted">
                  {/* Image de profil */}
                  <Image
                    src="/images/portfolio/web-design-showcase.webp"
                    alt="Création de sites web pour PME et TPE"
                    fill
                    className="object-cover"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fetchPriority="high"
                  />
                </Card>
              </MotionDiv>
              
              <div className="flex-1 order-1 md:order-2">
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-sm font-medium px-4 py-1"
                >
                  À Propos
                </Badge>
                <MotionH1 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  variants={fadeInUp}
                >
                  Des sites web efficaces pour PME et TPE
                </MotionH1>
                <MotionP 
                  className="text-muted-foreground mb-6"
                  variants={fadeInUp}
                >
                  Je crée des sites internet modernes et efficaces spécialement conçus pour les petites et moyennes entreprises. Vous obtenez un site professionnel qui attire des clients, à un prix adapté à votre budget, sans compromis sur la qualité.
                </MotionP>
                <MotionP 
                  className="text-muted-foreground mb-8"
                  variants={fadeInUp}
                >
                  Mon expertise s'étend également au développement d'applications mobiles iOS et Android qui permettent à votre entreprise de toucher vos clients sur tous leurs appareils. Mon objectif : vous fournir des outils performants pour développer votre activité en ligne et mobile, avec un processus simple et un accompagnement personnalisé.
                </MotionP>
                <MotionDiv variants={fadeInUp}>
                  <Button asChild>
                    <Link href="/a-propos">Découvrir mes services</Link>
                  </Button>
                </MotionDiv>
              </div>
            </StaggerContainer>
            
            {/* Profile Info Tabs */}
            <div className="mt-20 max-w-4xl mx-auto">
              <Tabs defaultValue="competences" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="competences">Mes services</TabsTrigger>
                  <TabsTrigger value="experience">Avantages</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="competences" className="mt-6 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ce que je vous propose</CardTitle>
                      <CardDescription>Des solutions adaptées à tous les besoins</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Sites vitrines professionnels</p>
                            <p className="text-sm text-muted-foreground">Pour présenter votre activité et attirer de nouveaux clients</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">E-commerce et boutiques en ligne</p>
                            <p className="text-sm text-muted-foreground">Pour vendre vos produits 24h/24 et 7j/7</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Applications mobiles iOS et Android</p>
                            <p className="text-sm text-muted-foreground">Pour rester connecté avec vos clients sur tous leurs appareils</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="experience" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pourquoi travailler avec moi</CardTitle>
                      <CardDescription>Une approche différente des agences traditionnelles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px] rounded-md">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="font-semibold">Tarifs transparents et abordables</h3>
                            <p className="text-sm text-muted-foreground">Des prix clairs et adaptés aux budgets des petites entreprises, sans mauvaises surprises.</p>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h3 className="font-semibold">Délais de livraison courts</h3>
                            <p className="text-sm text-muted-foreground">Votre site web prêt en quelques semaines seulement, pas en plusieurs mois.</p>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h3 className="font-semibold">Résultats concrets pour votre business</h3>
                            <p className="text-sm text-muted-foreground">Des sites optimisés pour attirer des clients et augmenter vos ventes.</p>
                          </div>
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="contact" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Discutons de votre projet</CardTitle>
                      <CardDescription>Je réponds rapidement à toutes vos questions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Link href="/contact" className="text-primary hover:underline">
                              contact@webwizardry.fr
                            </Link>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                              <Avatar>
                                <AvatarFallback>WW</AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold">Contactez-moi</h4>
                                <p className="text-sm">
                                  N'hésitez pas à m'envoyer un message pour discuter de votre projet ou obtenir un devis gratuit.
                                </p>
                                <div className="flex items-center pt-2">
                                  <Button size="sm" asChild>
                                    <Link href="/contact">Formulaire de contact</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <StaggerContainer className="text-center mb-16">
              <Badge 
                variant="secondary" 
                className="mb-4 text-sm font-medium px-4 py-1"
              >
                Portfolio
              </Badge>
              <MotionH1 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={fadeInUp}
              >
                Projets Récents
              </MotionH1>
              <MotionP 
                className="text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Découvrez quelques-uns de mes projets récents qui montrent mon expertise et ma créativité.
              </MotionP>
            </StaggerContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description.length > 100 ? 
                      `${project.description.substring(0, 100)}...` : 
                      project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={`/portfolio/${project.slug}`}>Voir le projet <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/portfolio">Voir tous les projets</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Mini Calculateur */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-1">
                Tarification
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculez votre projet</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Obtenez une estimation rapide du coût de votre projet web ou mobile et des délais de réalisation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/10 shadow-xl overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex justify-between items-center">
                    <span>Estimation rapide</span>
                    <Badge variant="secondary">Délais flexibles</Badge>
                  </CardTitle>
                  <CardDescription>
                    Choisissez le type de projet et obtenez un aperçu des tarifs et délais
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-6">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Type de projet</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="border hover:border-primary transition-colors cursor-pointer">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">Site Vitrine</CardTitle>
                          </CardHeader>
                          <CardContent className="py-3 px-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-semibold">600€+</span>
                              <Badge variant="outline">1-2 semaines</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border border-primary bg-primary/5 transition-colors cursor-pointer">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">E-commerce</CardTitle>
                          </CardHeader>
                          <CardContent className="py-3 px-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-semibold">800€+</span>
                              <Badge variant="outline">2-3 semaines</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border hover:border-primary transition-colors cursor-pointer">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">Application Mobile</CardTitle>
                          </CardHeader>
                          <CardContent className="py-3 px-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-semibold">2000€+</span>
                              <Badge variant="outline">4-6 semaines</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                      <Button asChild size="lg" className="sm:flex-1 md:max-w-[300px]">
                        <Link href="/tarifs#calculateur">
                          Estimation personnalisée
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="sm:flex-1 md:max-w-[300px]">
                        <Link href="/contact">
                          Demander un devis gratuit
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                          <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Option livraison urgente</span> : Pour les projets pressés, possibilité de réduire les délais moyennant un supplément. Calculez votre estimation détaillée pour cette option.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Blog Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <Badge 
                variant="secondary" 
                className="mb-4 text-sm font-medium px-4 py-1"
              >
                Ressources & Conseils
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Articles Récents</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez mes derniers articles sur le développement web, les tendances et les meilleures pratiques.
              </p>
            </div>
            
            {loadingPosts ? (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Chargement des articles...</p>
              </div>
            ) : recentBlogPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentBlogPosts.map((post, index) => (
                  <ScrollObserver key={post.id} animation="fade-up" delay={0.1 * index}>
                    <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden group">
                      <div className="relative h-48">
                        <Image 
                          src={post.image || "/images/blog/recent-post.webp"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <Badge className="bg-primary">{formatDate(post.createdAt)}</Badge>
                        </div>
                      </div>
                      <CardHeader className="flex-grow">
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3 mt-2">{post.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="border-t pt-4 flex justify-between items-center">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{getReadingTime(post.description)}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild className="text-primary">
                          <Link href={`/blog/${post.slug}`}>
                            Lire <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </ScrollObserver>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <CardTitle className="mb-2">Aucun article disponible</CardTitle>
                <CardDescription>Les articles du blog seront bientôt disponibles.</CardDescription>
              </Card>
            )}
            
            <div className="text-center mt-10">
              <Button asChild>
                <Link href="/blog">
                  Voir tous les articles
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Section Forfaits simplifiée */}
        <section className="py-16 pt-24 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <Badge 
                variant="secondary" 
                className="mb-4 text-sm font-medium px-4 py-1"
              >
                Tarifs Transparents
              </Badge>
              <MotionH1 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={fadeInUp}
              >
                Solutions adaptées à votre budget
              </MotionH1>
              <MotionP 
                className="text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Des forfaits compétitifs pour tous vos projets web, e-commerce et applications mobiles.
                Consultez tous nos forfaits détaillés ou utilisez notre calculateur interactif.
              </MotionP>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Forfait Site Web */}
              <MotionDiv
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden rounded-lg border bg-background shadow-md"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold">Site Vitrine</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">À partir de 600€</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Idéal pour présenter votre activité</p>
                    
                    <div className="mt-6">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Design responsive</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Jusqu'à 5 pages</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span><strong>1-2 semaines</strong> de développement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full">
                      <Link href="/tarifs">Voir les détails</Link>
                    </Button>
                  </div>
                </div>
              </MotionDiv>
              
              {/* Forfait E-commerce */}
              <MotionDiv
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden rounded-lg border border-primary bg-background shadow-lg"
              >
                <div className="absolute top-0 inset-x-0 bg-black text-white text-center text-sm font-bold py-2 px-3 z-30 dark:bg-white dark:text-black">
                  Populaire
                </div>
                <div className="flex flex-col h-full">
                  <div className="p-6 pt-14 flex-grow">
                    <h3 className="text-xl font-bold">Boutique en ligne</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">À partir de 800€</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Solution e-commerce complète</p>
                    
                    <div className="mt-6">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Gestion des produits</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Paiement sécurisé</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span><strong>2-3 semaines</strong> de développement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/tarifs">Voir les détails</Link>
                    </Button>
                  </div>
                </div>
              </MotionDiv>
              
              {/* Forfait App Mobile */}
              <MotionDiv
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-lg border bg-background shadow-md"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold">Application Mobile</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">À partir de 2000€</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Apps iOS/Android sur mesure</p>
                    
                    <div className="mt-6">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Interface intuitive</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Publication sur les stores</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span><strong>4-6 semaines</strong> de développement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full">
                      <Link href="/tarifs">Voir les détails</Link>
                    </Button>
                  </div>
                </div>
              </MotionDiv>
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/tarifs#calculateur">Calculer le prix de votre projet</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/images/portfolio/cta-background.webp" 
                alt="Contactez-moi pour votre projet web"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <MotionH1
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                Besoin d'un site web ou d'une application mobile?
              </MotionH1>
              <MotionP
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1 }}
              >
                Consultez mes tarifs ou contactez-moi pour un devis personnalisé. Sites web à partir de 500€, applications mobiles sur devis, développement rapide et tarifs compétitifs garantis.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button 
                    variant="default" 
                    className="bg-primary hover:bg-primary/90 text-white dark:text-black font-bold min-w-[200px] text-base py-6 shadow-lg"
                    asChild
                  >
                    <Link href="/tarifs">Voir les tarifs</Link>
                  </Button>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-white hover:bg-white/10 dark:text-white hover:text-white dark:text-white dark:hover:text-white dark:border-white font-semibold min-w-[200px] text-base py-6"
                    asChild
                  >
                    <Link href="/services">Voir mes services</Link>
                  </Button>
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>
        </section>
      </main>
    </PageTransition>
  )
} 