"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionH1, MotionP, fadeInUp } from "@/src/components/ui/motion";
import PageTransition from "@/src/components/PageTransition";
import { ArrowLeft, CalendarIcon, Clock, Share2, Tag } from "lucide-react";

// Données des articles de blog (les mêmes que sur la page blog principale)
const blogPosts = [
  {
    id: 1,
    title: "10 Tendances de Conception Web pour 2023",
    excerpt: "Découvrez les dernières tendances en matière de conception web qui domineront le paysage numérique cette année.",
    date: "15 Mai 2023",
    readTime: "8 min",
    image: "/blog/web-design-trends.jpg",
    categories: ["Design", "Tendances"],
    slug: "tendances-conception-web-2023",
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
    id: 2,
    title: "Comment Optimiser les Performances de Votre Site Web",
    excerpt: "Guide pratique pour améliorer la vitesse de chargement et les performances globales de votre site web.",
    date: "3 Juin 2023",
    readTime: "12 min",
    image: "/blog/web-performance.jpg",
    categories: ["Performance", "Développement"],
    slug: "optimiser-performances-site-web",
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

// Fonction pour trouver un article par son slug
const findPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

// Composant pour rendre du HTML en toute sécurité
const HtmlContent = ({ html }: { html: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} className="prose prose-lg dark:prose-invert max-w-none" />;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);

  // Si l'article n'existe pas
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Article non trouvé</h1>
        <p className="mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <Button asChild>
          <Link href="/blog">Retour au blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <article className="container mx-auto px-4 py-16">
        {/* En-tête de l'article */}
        <div className="mb-12">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Link>
          </div>
          
          <MotionH1
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={fadeInUp}
          >
            {post.title}
          </MotionH1>
          
          <MotionDiv
            className="flex flex-wrap gap-4 mb-6"
            variants={fadeInUp}
          >
            <div className="flex items-center text-muted-foreground">
              <CalendarIcon className="mr-2 h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-5 w-5" />
              <span>{post.readTime} de lecture</span>
            </div>
            <div className="flex items-center">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center mr-2 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                >
                  <Tag className="mr-1 h-4 w-4" />
                  {category}
                </span>
              ))}
            </div>
          </MotionDiv>
          
          <MotionDiv
            className="aspect-[16/9] rounded-lg overflow-hidden bg-muted mb-8"
            variants={fadeInUp}
          >
            {/* L'image sera remplacée par une vraie image quand elles seront disponibles */}
            <div className="w-full h-full bg-muted"></div>
            {/* <Image 
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="object-cover w-full h-full"
            /> */}
          </MotionDiv>
        </div>
        
        {/* Contenu de l'article */}
        <MotionDiv
          className="max-w-4xl mx-auto article-content"
          variants={fadeInUp}
        >
          <HtmlContent html={post.content} />
        </MotionDiv>
        
        {/* Partage et actions */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <span className="mr-3 font-medium">Partager :</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" aria-label="Partager sur Twitter">
                  <Share2 className="h-4 w-4" />
                </Button>
                {/* Ajoutez d'autres boutons de partage ici */}
              </div>
            </div>
            <Button asChild>
              <Link href="/contact">Me contacter</Link>
            </Button>
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
                <MotionDiv
                  key={relatedPost.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block h-full">
                    <div className="bg-muted/30 rounded-lg p-6 h-full border border-border hover:border-primary transition-colors">
                      <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{relatedPost.excerpt}</p>
                      <div className="text-primary text-sm font-medium">Lire l'article →</div>
                    </div>
                  </Link>
                </MotionDiv>
              ))}
          </div>
        </div>
      </article>
    </PageTransition>
  );
} 