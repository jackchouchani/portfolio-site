import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity";
import { getPostsByCategory, adaptSanityPost } from "../../../../lib/sanity/queries";
import { Breadcrumbs } from "../../../../components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Définir l'interface BlogPost ici
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: any;
  date: string;
  author: string;
  authorImage?: string;
  readingTime: string;
  category: string[];
  image: string;
  featured?: boolean;
}

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = decodeURIComponent(params.category);
  
  return {
    title: `${category} | Blog`,
    description: `Découvrez tous nos articles sur la thématique ${category}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.category);
  const postsData = await getPostsByCategory(category);
  const posts = postsData.map((post: any) => adaptSanityPost(post));
  
  return (
    <div className="bg-background">
      <div className="container py-12">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: category, href: `/blog/category/${params.category}`, isCurrent: true },
          ]}
        />
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className="mb-8">
            <Badge variant="outline" className="mb-3">Catégorie</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{category}</h1>
            <p className="text-muted-foreground">
              Tous les articles sur la thématique {category}
            </p>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Aucun article trouvé dans cette catégorie.</p>
              <Button asChild variant="outline">
                <Link href="/blog">Voir tous les articles</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {posts.map((post: BlogPost) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="md:grid md:grid-cols-[250px_1fr] h-full">
                    <div className="relative h-[200px] md:h-full">
                      <Image
                        src={urlFor(post.image).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 250px"
                      />
                    </div>
                    <div className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.category.map((cat: string) => (
                            <Badge key={cat} variant="outline">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.readingTime}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button asChild variant="ghost" className="text-primary">
                          <Link href={`/blog/${post.slug}`}>
                            Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 