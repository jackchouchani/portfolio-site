import { buildWispClient } from "@wisp-cms/client";

// Utilisation du BlogID fourni par l'utilisateur depuis les variables d'environnement
const BLOG_ID = process.env.NEXT_PUBLIC_WISP_BLOG_ID || "cm84a08ji000022e7mf0n8pk5";

// Wrapper avec gestion d'erreur améliorée
const createRobustWispClient = () => {
  const baseClient = buildWispClient({
    baseUrl: "https://www.wisp.blog",
    blogId: BLOG_ID,
  });
  
  // Wrapper pour ajouter une gestion d'erreurs et de timeout
  return {
    ...baseClient,
    
    // Surcharger getPosts avec une gestion d'erreur améliorée
    getPosts: async (options = {}) => {
      try {
        const result = await baseClient.getPosts(options);
        return result;
      } catch (error) {
        console.warn("Erreur lors de la récupération des posts wisp:", 
          error instanceof Error ? error.message : "Erreur inconnue");
        // Retourner un objet valide mais vide en cas d'erreur pour éviter les crashes
        return { posts: [] };
      }
    },
    
    // Surcharger getPost avec une gestion d'erreur améliorée
    getPost: async (slug: string) => {
      try {
        const result = await baseClient.getPost(slug);
        return result;
      } catch (error) {
        console.warn(`Erreur lors de la récupération du post wisp [${slug}]:`, 
          error instanceof Error ? error.message : "Erreur inconnue");
        // Retourner un objet valide mais vide en cas d'erreur
        return { post: null };
      }
    }
  };
};

// Créer le client avec la gestion d'erreur améliorée
export const wisp = createRobustWispClient(); 