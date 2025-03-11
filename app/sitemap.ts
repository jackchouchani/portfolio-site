import { MetadataRoute } from 'next'

// Interface pour les articles de blog Wisp CMS
interface WispBlogPost {
  slug: string;
  title: string;
  updatedAt?: string;
  createdAt: string;
  // Ajoutez d'autres propriétés selon les besoins
}

// Fonction pour récupérer les articles de blog depuis Wisp CMS
async function getBlogPosts(): Promise<WispBlogPost[]> {
  try {
    // URL de l'API Wisp CMS (à ajuster selon votre configuration)
    const response = await fetch('https://api.wispcms.com/v1/your-project-id/posts', {
      headers: {
        'Authorization': `Bearer ${process.env.WISP_API_KEY || ''}`
      },
      next: { revalidate: 3600 } // Revalider toutes les heures
    });
    
    if (!response.ok) {
      console.error('Erreur lors de la récupération des articles de blog');
      return [];
    }
    
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Erreur lors de la récupération des articles de blog:', error);
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

  // Récupérer les articles de blog depuis Wisp CMS
  const blogPosts = await getBlogPosts();
  const blogRoutes = blogPosts.map((post: WispBlogPost) => ({
    url: `https://webwizardry.fr/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...mainRoutes, ...portfolioRoutes, ...blogRoutes]
} 