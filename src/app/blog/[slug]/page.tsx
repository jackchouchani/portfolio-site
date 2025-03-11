'use client';

import { getPostBySlug } from "../../../lib/sanity/queries";
import { urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2, User } from "lucide-react";
import { Metadata } from "next";
import { useState, useEffect } from "react";
import Prism from 'prismjs';

// Importation des langages et plugins Prism
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';

// Import du style CSS de Prism
import 'prismjs/themes/prism-tomorrow.css';

// Composant pour le bloc de code
const CodeBlock = ({ value }: { value: any }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="bg-muted p-4 rounded-md my-6 overflow-x-auto">
      {value.filename && (
        <div className="text-sm text-muted-foreground mb-2">{value.filename}</div>
      )}
      <code className={`language-${value.language || 'text'}`}>
        {value.code}
      </code>
    </pre>
  );
};

// Composants pour le rendu du contenu Portable Text
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-[400px] my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            fill
            className="object-cover rounded-lg"
          />
          {value.caption && (
            <p className="text-center text-sm text-muted-foreground mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
    codeBlock: CodeBlock,
  },
};

// Générer des métadonnées pour le SEO (côté serveur)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Article non trouvé | Blog",
    };
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: urlFor(post.coverImage).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Composant BlogPostPage
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostContent slug={params.slug} />;
}

// Composant côté client pour le contenu du blog
function BlogPostContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const postData = await getPostBySlug(slug);
        setPost(postData);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-12 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/3 mx-auto mb-8"></div>
          <div className="h-64 bg-muted rounded mb-6"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
        <p className="text-muted-foreground">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
      </div>
    );
  }
  
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  return (
    <div className="bg-background">
      <div className="container py-12">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}`, isCurrent: true },
          ]}
        />
        
        <article className="max-w-3xl mx-auto mt-8">
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories && post.categories.map((category: string) => (
                <Badge key={category} variant="outline">{category}</Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readingTime}
              </div>
            </div>
            
            <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.coverImage).url()}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={post.content} components={ptComponents} />
          </div>
          
          <div className="mt-12 pt-6 border-t flex justify-between items-center">
            <div>
              <h3 className="font-medium mb-1">Partagez cet article</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                {/* Ajoutez d'autres boutons de partage ici */}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 