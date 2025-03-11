/**
 * Script avancé pour importer des fichiers Markdown dans Sanity
 * Avec une meilleure conversion en Portable Text
 * 
 * Utilisation:
 * node scripts/import-markdown-advanced.js
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { createClient } from '@sanity/client';
import { remark } from 'remark';
import html from 'remark-html';
import slugify from 'slugify';
import { JSDOM } from 'jsdom';

// Obtention du chemin du répertoire courant
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
function htmlToPortableText(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;
  const blocks = [];

  // Fonction récursive pour traiter les nœuds
  function processNode(node, style = 'normal') {
    if (node.nodeType === dom.window.Node.TEXT_NODE) {
      if (node.textContent.trim() === '') return null;
      return {
        _type: 'span',
        text: node.textContent,
        marks: [],
      };
    }

    if (node.nodeType === dom.window.Node.ELEMENT_NODE) {
      const nodeName = node.nodeName.toLowerCase();
      
      // Gestion des blocs
      if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre'].includes(nodeName)) {
        const blockStyle = 
          nodeName === 'p' ? 'normal' :
          nodeName === 'blockquote' ? 'blockquote' :
          nodeName === 'pre' ? 'code' :
          nodeName; // h1, h2, etc.

        const children = [];
        for (const childNode of node.childNodes) {
          const child = processNode(childNode, blockStyle);
          if (child) {
            if (Array.isArray(child)) {
              children.push(...child);
            } else {
              children.push(child);
            }
          }
        }

        if (children.length > 0) {
          blocks.push({
            _type: 'block',
            style: blockStyle,
            children,
            markDefs: [],
          });
        }
        return null;
      }
      
      // Gestion des listes
      if (nodeName === 'ul' || nodeName === 'ol') {
        for (const childNode of node.childNodes) {
          if (childNode.nodeName.toLowerCase() === 'li') {
            const children = [];
            for (const liChild of childNode.childNodes) {
              const child = processNode(liChild);
              if (child) {
                if (Array.isArray(child)) {
                  children.push(...child);
                } else {
                  children.push(child);
                }
              }
            }

            if (children.length > 0) {
              blocks.push({
                _type: 'block',
                style: nodeName === 'ul' ? 'bullet' : 'number',
                level: 1,
                children,
                markDefs: [],
              });
            }
          }
        }
        return null;
      }

      // Gestion des éléments en ligne (strong, em, code, etc.)
      if (['strong', 'b', 'em', 'i', 'code', 'a'].includes(nodeName)) {
        const children = [];
        for (const childNode of node.childNodes) {
          const child = processNode(childNode);
          if (child) {
            if (Array.isArray(child)) {
              children.push(...child);
            } else {
              // Appliquer le mark approprié
              const mark = 
                (nodeName === 'strong' || nodeName === 'b') ? 'strong' :
                (nodeName === 'em' || nodeName === 'i') ? 'em' :
                nodeName === 'code' ? 'code' :
                nodeName === 'a' ? 'link' : null;
              
              if (mark) {
                if (mark === 'link' && node.getAttribute('href')) {
                  // Pour les liens, on doit créer une markDef
                  const markDefId = `link-${Math.random().toString(36).substring(2, 10)}`;
                  const markDef = {
                    _key: markDefId,
                    _type: 'link',
                    href: node.getAttribute('href'),
                  };
                  blocks[blocks.length - 1]?.markDefs.push(markDef);
                  
                  child.marks = [...(child.marks || []), markDefId];
                } else {
                  child.marks = [...(child.marks || []), mark];
                }
              }
              
              children.push(child);
            }
          }
        }
        return children;
      }

      // Pour les autres éléments, traiter récursivement leurs enfants
      const children = [];
      for (const childNode of node.childNodes) {
        const child = processNode(childNode);
        if (child) {
          if (Array.isArray(child)) {
            children.push(...child);
          } else {
            children.push(child);
          }
        }
      }
      return children;
    }

    return null;
  }

  // Traiter le corps du document
  const body = document.body;
  for (const childNode of body.childNodes) {
    processNode(childNode);
  }

  return blocks;
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
    
    // Convertir le HTML en Portable Text
    const portableText = htmlToPortableText(htmlContent);
    
    // Préparer une référence d'image correcte pour Sanity
    let mainImage;
    
    if (data.coverImage) {
      // Vérifier si l'image est une URL externe (comme Unsplash)
      if (data.coverImage.startsWith('http')) {
        // Pour les URL externes, on crée un objet urlBuilder de Sanity
        mainImage = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-' + slugify(data.title + '-cover', { lower: true, strict: true }) + '-' + Date.now()
          },
          // Stocker l'URL originale dans un champ pour référence
          externalUrl: data.coverImage,
        };
        
        console.log(`Note: L'image ${data.coverImage} sera référencée comme URL externe. Vous devrez télécharger cette image manuellement dans Sanity.`);
      } else {
        // Pour les références internes, ce format sera probablement rejeté
        // mais nous le gardons pour compatibilité
        mainImage = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: data.coverImage, 
          },
        };
      }
    }
    
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
      mainImage: mainImage,
      featured: data.featured || false,
      content: portableText,
    };
    
    console.log(`Importation de l'article: ${data.title}`);
    
    // Créer le document dans Sanity
    try {
      // La ligne suivante est commentée par défaut - décommentez pour importer réellement
      await client.create(sanityDocument);
      console.log(`✅ Document pour "${data.title}" préparé. Décommentez la ligne 'await client.create(sanityDocument)' pour importer réellement.`);
    } catch (error) {
      console.error(`❌ Erreur lors de l'importation dans Sanity:`, error);
      
      // Afficher un message plus clair si c'est une erreur de permissions
      if (error.statusCode === 403) {
        console.error('\n⚠️ ERREUR DE PERMISSIONS: Votre token Sanity n\'a pas les droits suffisants pour créer des documents.');
        console.error('\nPour résoudre ce problème:');
        console.error('1. Connectez-vous à https://www.sanity.io/manage');
        console.error('2. Sélectionnez votre projet');
        console.error('3. Allez dans "API" > "Tokens"');
        console.error('4. Créez un nouveau token avec les permissions "Editor" ou "Admin"');
        console.error('5. Utilisez ce nouveau token avec le script d\'importation\n');
      }
      
      console.log('Document préparé:', JSON.stringify(sanityDocument, null, 2));
      console.log('Vous pouvez essayer d\'importer ce document manuellement ou modifier le script pour résoudre les problèmes.');
    }
    
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