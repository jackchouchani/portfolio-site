const fs = require('fs');
const path = require('path');
const https = require('https');

const imageUrls = [
  { 
    url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
    filename: 'comptoir-vintage.webp' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    filename: 'atelier-moderne.webp' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    filename: 'webwizardry.webp' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    filename: 'app-stock.webp' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282',
    filename: 'periph.webp' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81',
    filename: 'photographe.webp' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2',
    filename: 'architecte.webp' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    filename: 'finpilot.webp' 
  },
  {
    url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    filename: 'translate-pro.webp'
  },
  // Images utilisées dans HomePageClient.tsx
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    filename: 'hero-dev.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2',
    filename: 'cta-background.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1603575448878-868a20723f5d',
    filename: 'profile-photo.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    filename: 'about-profile.webp'
  },
  // Nouvelles images plus adaptées pour PME/TPE
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    filename: 'small-business-meeting.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1460794418188-1bb7dba2720d',
    filename: 'web-design-showcase.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
    filename: 'website-computer.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    filename: 'digital-strategy.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec',
    filename: 'local-business.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    filename: 'seo-analytics.webp'
  },
  // Images pour le blog
  {
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    filename: 'blog/featured-post.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    filename: 'blog/recent-post.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810',
    filename: 'blog/newsletter.webp'
  },
  // Ajout des avatars pour les témoignages
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    filename: 'testimonials/avatar-1.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    filename: 'testimonials/avatar-2.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    filename: 'testimonials/avatar-3.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    filename: 'testimonials/avatar-4.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    filename: 'testimonials/avatar-5.webp'
  }
];

// Définir le chemin du répertoire où seront enregistrées les images
const downloadDir = path.join(__dirname, '../public/images/portfolio');
const testimonialDir = path.join(__dirname, '../public/testimonials');
const blogDir = path.join(__dirname, '../public/images/blog');

// Vérifier si le répertoire existe, sinon le créer
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
  console.log(`Répertoire créé: ${downloadDir}`);
}

// Créer le répertoire pour les avatars des témoignages
if (!fs.existsSync(testimonialDir)) {
  fs.mkdirSync(testimonialDir, { recursive: true });
  console.log(`Répertoire créé: ${testimonialDir}`);
}

// Créer le répertoire pour les images du blog
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
  console.log(`Répertoire créé: ${blogDir}`);
}

// Fonction pour télécharger une image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    // Déterminer le chemin complet où sauvegarder le fichier
    let savePath;
    if (filename.startsWith('testimonials/')) {
      // Pour les avatars, enlever le préfixe "testimonials/" du nom de fichier
      const actualFilename = filename.replace('testimonials/', '');
      savePath = path.join(testimonialDir, actualFilename);
    } else if (filename.startsWith('blog/')) {
      savePath = path.join(blogDir, filename.replace('blog/', ''));
    } else {
      savePath = path.join(downloadDir, filename);
    }

    // Optimiser l'URL pour Unsplash afin d'avoir une taille raisonnable
    const optimizedUrl = `${url}?auto=format,compress&q=80&w=800&h=800&fit=crop`;
    
    // Faire la requête HTTP pour télécharger l'image
    https.get(optimizedUrl, (response) => {
      // Vérifier que la requête a réussi
      if (response.statusCode !== 200) {
        reject(new Error(`Échec du téléchargement de ${url} avec le statut ${response.statusCode}`));
        return;
      }
      
      // Créer un stream pour écrire le fichier
      const fileStream = fs.createWriteStream(savePath);
      response.pipe(fileStream);
      
      // Gérer les événements de fin et d'erreur
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Téléchargement terminé: ${filename}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(savePath, () => {}); // Supprimer le fichier partiellement téléchargé
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Fonction pour télécharger toutes les images
async function downloadAllImages() {
  console.log('Début du téléchargement des images...');
  
  for (const { url, filename } of imageUrls) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Erreur lors du téléchargement de ${filename}:`, error.message);
    }
  }
  
  console.log('Tous les téléchargements sont terminés.');
}

// Exécuter la fonction de téléchargement
downloadAllImages(); 