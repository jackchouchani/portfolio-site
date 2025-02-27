import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webwizardry.fr'
  
  // Date de dernière modification
  const today = new Date().toISOString()
  
  // Pages principales
  const routes = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Si vous avez des pages de blog dynamiques, vous pouvez les ajouter ici
  // const blogPosts = await getBlogPosts()
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt || post.createdAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  // Si vous avez des projets dynamiques, vous pouvez les ajouter ici
  // const projects = await getProjects()
  // const projectRoutes = projects.map((project) => ({
  //   url: `${baseUrl}/portfolio/${project.slug}`,
  //   lastModified: project.updatedAt || project.createdAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  // Combiner toutes les routes
  // return [...routes, ...blogRoutes, ...projectRoutes]
  return routes
} 