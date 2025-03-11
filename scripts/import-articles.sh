#!/bin/bash

# Script pour faciliter l'importation des articles Markdown vers Sanity
# Usage: ./import-articles.sh <token>

# Vérifie si un token Sanity a été fourni
if [ -z "$1" ]; then
  echo "⚠️  Erreur: Aucun token Sanity fourni"
  echo ""
  echo "Usage: ./import-articles.sh VOTRE_TOKEN_SANITY"
  echo ""
  echo "Le token doit avoir les permissions 'Editor' ou 'Admin'."
  echo "Pour créer un nouveau token:"
  echo "1. Connectez-vous à https://www.sanity.io/manage"
  echo "2. Sélectionnez votre projet"
  echo "3. Allez dans API > Tokens"
  echo "4. Créez un nouveau token avec les permissions nécessaires"
  echo ""
  exit 1
fi

# Définit le token Sanity comme variable d'environnement
export SANITY_API_TOKEN=$1

echo "🔑 Token Sanity défini"
echo "🚀 Lancement de l'importation des articles Markdown..."

# Exécute le script d'importation
node import-markdown-advanced.js

# Vérifie si le script s'est exécuté avec succès
if [ $? -eq 0 ]; then
  echo "✅ Importation terminée avec succès."
  echo "Note: Si vous voulez que l'importation crée réellement les documents,"
  echo "      décommentez la ligne 'await client.create(sanityDocument)' dans le script."
else
  echo "❌ Une erreur s'est produite lors de l'importation."
  echo "Vérifiez que :"
  echo "- Votre token Sanity a les permissions suffisantes (Editor ou Admin)"
  echo "- Votre projet Sanity est correctement configuré"
  echo "- Votre connexion internet est active"
  echo ""
  echo "Pour plus d'informations, consultez l'erreur ci-dessus."
fi 