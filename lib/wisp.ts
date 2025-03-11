import { buildWispClient } from "@wisp-cms/client";

// Utilisation du BlogID fourni par l'utilisateur depuis les variables d'environnement
const BLOG_ID = process.env.NEXT_PUBLIC_WISP_BLOG_ID || "cm84a08ji000022e7mf0n8pk5";

// Création du client Wisp
export const wisp = buildWispClient({
  baseUrl: "https://www.wisp.blog",
  blogId: BLOG_ID,
}); 