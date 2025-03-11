import { Metadata } from "next";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import WispBlogPostPage from "@/src/components/pages/WispBlogPostPage";

// Génération des métadonnées dynamiques pour chaque article
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const result = await wisp.getPost(params.slug);
    const post = result.post;
    
    if (!post) {
      return {
        title: 'Article non trouvé | Blog',
        description: 'Cet article de blog n\'existe pas ou a été supprimé.'
      };
    }

    return {
      title: `${post.title} | Blog`,
      description: post.description || 'Article de blog',
      openGraph: {
        title: post.title,
        description: post.description || '',
        images: post.image ? [{ url: post.image }] : [],
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des métadonnées:", error);
    return {
      title: 'Erreur | Blog',
      description: 'Une erreur est survenue lors du chargement de cet article.'
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
    const result = await wisp.getPost(params.slug);
    const post = result.post;
    
    if (!post) {
      notFound();
    }
    
    // Récupération des articles liés
    // Utilisons la requête de base pour obtenir d'autres posts
    const relatedPostsResult = await wisp.getPosts({ 
      limit: 3, 
      // Filtrer pour exclure l'article actuel dans le code client
    });
    
    // Conversion des posts pour ajouter les propriétés manquantes et filtrer l'article actuel
    const relatedPosts: BlogPost[] = (relatedPostsResult.posts || [])
      .filter(p => p.id !== post.id) // Exclure l'article actuel
      .map(p => ({
        ...p,
        author: {
          id: p.authorId,
          name: 'Auteur', // Valeur par défaut
        },
        tags: [] // Tableau vide par défaut
      }));

    return <WispBlogPostPage post={post} relatedPosts={relatedPosts} />;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article:", error);
    notFound();
  }
} 