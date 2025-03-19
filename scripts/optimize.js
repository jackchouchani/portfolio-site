#!/usr/bin/env node

/**
 * Script pour optimiser les fichiers CSS et JS
 * À exécuter pendant le build
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Chemins de build
const BUILD_DIR = path.join(__dirname, '../.next');
const STATIC_DIR = path.join(BUILD_DIR, 'static');

/**
 * Trouve tous les fichiers correspondant au pattern
 * @param {string} dir - Répertoire de recherche
 * @param {RegExp} pattern - Pattern de correspondance
 * @returns {string[]} - Liste de chemins de fichiers
 */
function findFiles(dir, pattern) {
  let results = [];
  
  if (!fs.existsSync(dir)) {
    console.warn(`Le répertoire ${dir} n'existe pas.`);
    return results;
  }
  
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      results = results.concat(findFiles(fullPath, pattern));
    } else if (pattern.test(file.name)) {
      results.push(fullPath);
    }
  }
  
  return results;
}

/**
 * Optimise un fichier JS en supprimant les commentaires et espaces inutiles
 * @param {string} filePath - Chemin du fichier
 */
function optimizeJsFile(filePath) {
  try {
    // Ne pas traiter les fichiers déjà minifiés
    if (filePath.includes('.min.js')) return;
    
    console.log(`Optimisation de ${path.basename(filePath)}...`);
    
    // Exécuter terser pour minifier le JS
    execSync(`npx terser "${filePath}" --compress --mangle --output "${filePath}"`);
    
    const originalSize = fs.statSync(filePath).size;
    console.log(`${path.basename(filePath)}: ${Math.round(originalSize / 1024)}KB`);
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de ${filePath}:`, error.message);
  }
}

/**
 * Optimise un fichier CSS en supprimant les commentaires et espaces inutiles
 * @param {string} filePath - Chemin du fichier
 */
function optimizeCssFile(filePath) {
  try {
    // Ne pas traiter les fichiers déjà minifiés
    if (filePath.includes('.min.css')) return;
    
    console.log(`Optimisation de ${path.basename(filePath)}...`);
    
    // Exécuter csso pour minifier le CSS
    execSync(`npx csso "${filePath}" --output "${filePath}"`);
    
    const originalSize = fs.statSync(filePath).size;
    console.log(`${path.basename(filePath)}: ${Math.round(originalSize / 1024)}KB`);
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de ${filePath}:`, error.message);
  }
}

/**
 * Compresse un fichier avec gzip
 * @param {string} filePath - Chemin du fichier
 */
function compressWithGzip(filePath) {
  try {
    // Ne pas compresser les fichiers déjà compressés
    if (filePath.includes('.gz')) return;
    
    console.log(`Compression gzip de ${path.basename(filePath)}...`);
    
    // Exécuter la compression gzip
    execSync(`gzip -9 -c "${filePath}" > "${filePath}.gz"`);
    
    const originalSize = fs.statSync(filePath).size;
    const compressedSize = fs.statSync(`${filePath}.gz`).size;
    const ratio = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
    
    console.log(`${path.basename(filePath)}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(compressedSize / 1024)}KB (${ratio}% réduction)`);
  } catch (error) {
    console.error(`Erreur lors de la compression gzip de ${filePath}:`, error.message);
  }
}

// Fonction principale
async function main() {
  console.log('Début de l\'optimisation des fichiers statiques...');
  
  try {
    // Installation des outils d'optimisation nécessaires
    execSync('npm install --no-save terser csso-cli', { stdio: 'inherit' });
    
    // Trouver et optimiser les fichiers JS
    console.log('\nOptimisation des fichiers JavaScript...');
    const jsFiles = findFiles(STATIC_DIR, /\.js$/);
    for (const file of jsFiles) {
      optimizeJsFile(file);
    }
    
    // Trouver et optimiser les fichiers CSS
    console.log('\nOptimisation des fichiers CSS...');
    const cssFiles = findFiles(STATIC_DIR, /\.css$/);
    for (const file of cssFiles) {
      optimizeCssFile(file);
    }
    
    // Compresser les assets avec gzip
    console.log('\nCompression des assets avec Gzip...');
    const compressibleFiles = [
      ...findFiles(STATIC_DIR, /\.(js|css|svg)$/),
      ...findFiles(path.join(BUILD_DIR, 'server/app'), /\.(json|js)$/)
    ];
    
    for (const file of compressibleFiles) {
      compressWithGzip(file);
    }
    
    console.log('\nOptimisation des fichiers terminée avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'optimisation:', error);
    process.exit(1);
  }
}

// Exécuter la fonction principale
main(); 