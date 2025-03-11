export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: any; // Le contenu Sanity est un tableau d'objets pour le rich text
  date: string;
  author: string;
  authorImage?: string;
  readingTime: string;
  category: string[];
  image: string;
  featured?: boolean;
} 