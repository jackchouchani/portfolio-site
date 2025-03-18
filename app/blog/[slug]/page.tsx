import { Metadata } from "next";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import WispBlogPostPage from "@/src/components/pages/WispBlogPostPage";

// Génération des métadonnées dynamiques pour chaque article
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const result = await wisp.getPost(resolvedParams.slug);
    const post = result.post;
    
    if (!post) {
      return {
        title: 'Article non trouvé',
        description: "L'article que vous recherchez n'existe pas"
      };
    }
    
    return {
      title: `${post.title} | Blog Web Wizardry`,
      description: post.description || '',
      keywords: ['blog', 'développement web', ...post.tags.map(tag => tag.name)],
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description || '',
        url: `/blog/${post.slug}`,
        type: 'article',
        images: [
          {
            url: post.image || `https://webwizardry.fr/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description || '')}&mode=blog`,
            width: 1200,
            height: 630,
            alt: post.title
          }
        ]
      },
    };
  } catch (error) {
    console.error("Erreur lors de la génération des métadonnées:", error);
    return {
      title: 'Article non trouvé',
      description: "L'article que vous recherchez n'existe pas"
    };
  }
}

// Types pour BlogPost
interface Author {
  id: string;
  name: string;
  avatar?: string | null;
}

interface Tag {
  id: string;
  name: string;
}

interface BlogPost {
  id: string;
  createdAt: Date;
  teamId: string;
  description: string | null;
  title: string;
  slug: string;
  image: string | null;
  authorId: string;
  updatedAt: Date;
  publishedAt: Date | null;
  author: Author;
  tags: Tag[];
  distance?: number;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const resolvedParams = await params;
    const result = await wisp.getPost(resolvedParams.slug);
    const post = result.post;
    
    if (!post) {
      notFound();
    }
    
    // Récupération des articles liés
    const relatedPostsResult = await wisp.getPosts({ 
      limit: 3,
    });
    
    const relatedPosts: BlogPost[] = (relatedPostsResult.posts || [])
      .filter(p => p.id !== post.id)
      .map(p => ({
        ...p,
        author: {
          id: p.authorId,
          name: 'Auteur',
        },
        tags: []
      }));

    return <WispBlogPostPage post={post} relatedPosts={relatedPosts} />;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article:", error);
    notFound();
  }
} 