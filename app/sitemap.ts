import { MetadataRoute } from 'next'
import { wisp } from '@/lib/wisp'; // Importer le client Wisp configuré

// Utiliser les types provenant directement du client Wisp
// Au lieu de définir notre propre interface
type WispPost = Awaited<ReturnType<typeof wisp.getPosts>>['posts'][number];

// Fonction pour récupérer les articles de blog depuis Wisp CMS
async function getBlogPosts(): Promise<WispPost[]> {
  try {
    // Utiliser directement le client wisp importé au lieu de faire un appel fetch
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // Timeout de 3s
    
    try {
      const result = await Promise.race([
        wisp.getPosts({ limit: 10 }),
        new Promise<null>((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 3000)
        )
      ]);
      
      clearTimeout(timeoutId);
      
      if (!result) return [];
      return result.posts || [];
    } catch (fetchError) {
      console.warn('Erreur ou timeout lors de la récupération des posts:', 
        fetchError instanceof Error ? fetchError.message : 'Erreur inconnue');
      return [];
    }
  } catch (error) {
    console.warn('Erreur lors de la récupération des articles de blog pour le sitemap:', 
      error instanceof Error ? error.message : 'Erreur inconnue');
    // En cas d'erreur, retourner un tableau vide mais ne pas faire échouer le build
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Routes principales du site
  const mainRoutes = [
    {
      url: 'https://webwizardry.fr',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://webwizardry.fr/a-propos',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://webwizardry.fr/services',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://webwizardry.fr/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://webwizardry.fr/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Routes pour les projets du portfolio
  const portfolioRoutes = [
    {
      url: 'https://webwizardry.fr/portfolio/comptoir-vintage',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/portfolio/atelier-moderne',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/portfolio/webwizardry',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/portfolio/app-stock',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/portfolio/touche-pas-a-mon-periph',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/portfolio/portfolio-photographe',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/portfolio/portfolio-architecte',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://webwizardry.fr/portfolio/finpilot',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Définir le type pour les routes de blog
  type BlogRoute = {
    url: string;
    lastModified: Date;
    changeFrequency: 'monthly';
    priority: number;
  };

  // Récupérer les articles de blog depuis Wisp CMS avec une gestion d'erreur robuste
  let blogRoutes: BlogRoute[] = [];
  try {
    const blogPosts = await getBlogPosts();
    blogRoutes = blogPosts.map((post) => ({
      url: `https://webwizardry.fr/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.warn('Impossible de récupérer les articles pour le sitemap:', error);
    // Continuer avec un tableau vide pour les routes de blog
  }

  return [...mainRoutes, ...portfolioRoutes, ...blogRoutes]
} 