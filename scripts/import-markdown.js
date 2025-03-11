/**
 * Script pour importer des fichiers Markdown dans Sanity
 * 
 * Utilisation:
 * node scripts/import-markdown.js
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { createClient } from '@sanity/client';
import { remark } from 'remark';
import html from 'remark-html';
import slugify from 'slugify';

// Obtention du chemin du répertoire courant (équivalent à __dirname en CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration du client Sanity
const client = createClient({
  projectId: '491dpauu',
  dataset: 'production',
  apiVersion: '2023-10-01',
  token: process.env.SANITY_API_TOKEN, // Vous devrez définir ce token
  useCdn: false,
});

// Dossier contenant les fichiers Markdown
const CONTENT_DIR = path.join(path.dirname(__dirname), 'content', 'blog');

// Fonction pour convertir le Markdown en HTML
async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Fonction pour convertir le HTML en blocs Portable Text
function htmlToPortableText(html) {
  // Cette conversion est très simplifiée
  // Dans un cas réel, vous auriez besoin d'un parser HTML plus avancé
  return [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: html,
          marks: [],
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ];
}

// Fonction pour traiter un fichier Markdown et le convertir en document Sanity
async function processMarkdownFile(filePath) {
  try {
    // Lire le contenu du fichier
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    // Parser le frontmatter
    const { data, content } = matter(fileContent);
    
    // Générer le slug si nécessaire
    const slug = data.slug || slugify(data.title, { lower: true, strict: true });
    
    // Convertir le contenu Markdown en HTML
    const htmlContent = await markdownToHtml(content);
    
    // Convertir le HTML en Portable Text (simplifié)
    const portableText = htmlToPortableText(htmlContent);
    
    // Préparer le document Sanity
    const sanityDocument = {
      _type: 'post',
      title: data.title,
      slug: {
        _type: 'slug',
        current: slug,
      },
      excerpt: data.excerpt,
      publishedAt: data.date,
      author: data.author,
      readingTime: data.readingTime,
      categories: Array.isArray(data.categories) 
        ? data.categories.map(category => ({
            _type: 'category',
            title: category
          }))
        : [{ _type: 'category', title: data.categories }],
      mainImage: data.coverImage ? {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: data.coverImage, // Vous devrez gérer le téléchargement des images séparément
        },
      } : undefined,
      featured: data.featured || false,
      content: portableText,
    };
    
    console.log(`Importation de l'article: ${data.title}`);
    
    // Créer le document dans Sanity
    // Décommentez la ligne suivante pour effectuer l'importation réelle
    // await client.create(sanityDocument);
    
    console.log('Document préparé:', JSON.stringify(sanityDocument, null, 2));
    console.log('Pour importer réellement ce document, décommentez la ligne "await client.create(sanityDocument)" dans le script');
    
    return sanityDocument;
  } catch (error) {
    console.error(`Erreur lors du traitement du fichier ${filePath}:`, error);
    return null;
  }
}

// Fonction principale
async function importMarkdownFiles() {
  try {
    // Vérifier si le dossier de contenu existe
    if (!await fs.pathExists(CONTENT_DIR)) {
      console.error(`Le dossier ${CONTENT_DIR} n'existe pas.`);
      return;
    }
    
    // Lister tous les fichiers Markdown
    const files = await fs.readdir(CONTENT_DIR);
    const markdownFiles = files.filter(file => file.endsWith('.md') && file !== 'README.md');
    
    console.log(`Trouvé ${markdownFiles.length} fichiers Markdown à importer.`);
    
    // Traiter chaque fichier
    for (const file of markdownFiles) {
      const filePath = path.join(CONTENT_DIR, file);
      await processMarkdownFile(filePath);
    }
    
    console.log('Importation terminée!');
  } catch (error) {
    console.error('Erreur lors de l\'importation:', error);
  }
}

// Exécuter la fonction principale
importMarkdownFiles(); 