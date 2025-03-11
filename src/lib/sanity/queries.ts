import { sanityClient } from '../sanity';

const postFields = `
  _id,
  title,
  'slug': slug.current,
  excerpt,
  'date': publishedAt,
  author,
  'categories': categories,
  readingTime,
  'coverImage': mainImage,
  featured
`;

// Récupère tous les articles
export async function getAllPosts() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`
  );
  return posts;
}

// Récupère un article à la une
export async function getFeaturedPost() {
  const posts = await sanityClient.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc)[0] {
      ${postFields}
    }`
  );
  return posts;
}

// Récupère les articles récents
export async function getRecentPosts(limit = 6) {
  const posts = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      ${postFields}
    }`
  );
  return posts;
}

// Récupère un article par son slug
export async function getPostBySlug(slug: string) {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ${postFields},
      content
    }`,
    { slug }
  );
  return post;
}

// Récupère des articles par catégorie
export async function getPostsByCategory(category: string) {
  const posts = await sanityClient.fetch(
    `*[_type == "post" && $category in categories] | order(publishedAt desc) {
      ${postFields}
    }`,
    { category }
  );
  return posts;
}

// Adapte le format des données Sanity pour correspondre à votre interface BlogPost
export function adaptSanityPost(post: any) {
  return {
    id: post._id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    date: new Date(post.date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    author: post.author,
    readingTime: post.readingTime,
    category: post.categories || [],
    image: post.coverImage ? post.coverImage : '',
    featured: post.featured
  };
} 