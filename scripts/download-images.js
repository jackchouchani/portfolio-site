const fs = require('fs');
const path = require('path');
const https = require('https');

const imageUrls = [
  { 
    url: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb',
    filename: 'comptoir-vintage.jpg' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    filename: 'atelier-moderne.jpg' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5',
    filename: 'webwizardry.jpg' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1512075135822-67cdd9dd7314',
    filename: 'app-stock.jpg' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282',
    filename: 'periph.jpg' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81',
    filename: 'photographe.jpg' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2',
    filename: 'architecte.jpg' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1642543348745-03b1219733d9',
    filename: 'finpilot.jpg' 
  },
  // Images utilisées dans HomePageClient.tsx
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    filename: 'hero-dev.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2',
    filename: 'cta-background.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1603575448878-868a20723f5d',
    filename: 'profile-photo.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    filename: 'about-profile.jpg'
  },
  // Nouvelles images plus adaptées pour PME/TPE
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    filename: 'small-business-meeting.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460794418188-1bb7dba2720d',
    filename: 'web-design-showcase.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
    filename: 'website-computer.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    filename: 'digital-strategy.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec',
    filename: 'local-business.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    filename: 'seo-analytics.jpg'
  },
  // Ajout des avatars pour les témoignages
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    filename: 'testimonials/avatar-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    filename: 'testimonials/avatar-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    filename: 'testimonials/avatar-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    filename: 'testimonials/avatar-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909',
    filename: 'testimonials/avatar-5.jpg'
  }
];

// Définir le chemin du répertoire où seront enregistrées les images
const downloadDir = path.join(__dirname, '../public/images/portfolio');
const testimonialDir = path.join(__dirname, '../public/testimonials');

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

// Fonction pour télécharger une image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    // Déterminer le chemin complet où sauvegarder le fichier
    let savePath;
    if (filename.startsWith('testimonials/')) {
      // Pour les avatars, enlever le préfixe "testimonials/" du nom de fichier
      const actualFilename = filename.replace('testimonials/', '');
      savePath = path.join(testimonialDir, actualFilename);
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