# Guide d'utilisation : Markdown vers Sanity

Ce dossier est destiné à stocker vos articles de blog au format Markdown. Ces articles seront ensuite importés dans Sanity via nos scripts d'importation.

## Structure d'un fichier Markdown

Chaque fichier Markdown doit contenir un en-tête avec des métadonnées (frontmatter) au format YAML, suivi du contenu de l'article. Voici un exemple :

```markdown
---
title: Titre de l'article
excerpt: Un court résumé de l'article
date: '2024-05-18'
author: Nom de l'auteur
readingTime: 8 min
categories: [Catégorie1, Catégorie2]
coverImage: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=2532&auto=format&fit=crop"
featured: true
---

## Introduction

Contenu de l'article...
```

### Métadonnées obligatoires

- `title` : Titre de l'article
- `excerpt` : Court résumé de l'article
- `date` : Date de publication au format 'YYYY-MM-DD'

### Métadonnées facultatives

- `author` : Nom de l'auteur
- `readingTime` : Temps de lecture estimé
- `categories` : Liste des catégories (peut être une seule chaîne ou un tableau)
- `coverImage` : URL de l'image de couverture (de préférence d'Unsplash ou autre service similaire)
- `featured` : Article mis en avant (true/false)
- `slug` : Identifiant URL personnalisé (si non spécifié, sera généré à partir du titre)

## Formatage Markdown

Vous pouvez utiliser tous les éléments standard de la syntaxe Markdown :

- Titres (`#`, `##`, etc.)
- Formatage de texte (`**gras**`, `*italique*`)
- Listes (`- item` ou `1. item`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Citations (`> citation`)
- Code (`code` ou ````codeblock````)

## Importation dans Sanity

Pour importer vos articles dans Sanity, suivez ces étapes :

1. Placez vos fichiers Markdown dans ce dossier (`content/blog/`)
2. Obtenez un token API Sanity avec les permissions suffisantes (voir section "Token Sanity" ci-dessous)
3. Exécutez le script d'importation :

```bash
cd scripts
./import-articles.sh votre_token_api_ici
```

Pour une conversion plus avancée du Markdown vers Portable Text (format de Sanity), le script utilise automatiquement la version avancée.

## Token Sanity

Pour que l'importation fonctionne correctement, votre token Sanity doit avoir les permissions suffisantes :

### Obtenir un token avec les bonnes permissions

1. Connectez-vous à [Sanity Manage](https://www.sanity.io/manage)
2. Sélectionnez votre projet
3. Allez dans **API** > **Tokens**
4. Créez un nouveau token avec le rôle **Editor** ou **Admin**
5. Copiez le token généré et utilisez-le avec le script d'importation

### Problèmes courants

Si vous rencontrez une erreur "Insufficient permissions", cela signifie que votre token :
- N'a pas les droits "Editor" ou "Admin"
- A expiré (vérifiez la date d'expiration dans le tableau des tokens)
- A été révoqué

### Sécurité

Gardez votre token en sécurité :
- Ne le partagez pas publiquement
- Ne le commitez pas dans votre code source
- Considérez définir une date d'expiration appropriée

## Gestion des images

Il y a deux façons de gérer les images :

### 1. Utiliser des URLs externes (recommandé)

Utilisez des URLs directes vers des images hébergées sur des services comme Unsplash, Cloudinary, etc. Dans votre frontmatter :

```yaml
coverImage: "https://images.unsplash.com/photo-XXXXX"
```

Le script reconnaîtra automatiquement qu'il s'agit d'une URL externe.

### 2. Importer manuellement des images dans Sanity

Pour les images locales, vous devez d'abord les téléverser dans Sanity Studio, puis utiliser leur ID de référence.

## Activation de l'importation réelle

Par défaut, le script ne fait que préparer les documents sans les importer réellement dans Sanity. Pour activer l'importation :

1. Ouvrez le fichier `scripts/import-markdown-advanced.js`
2. Recherchez la ligne `// await client.create(sanityDocument);` (vers la ligne 240)
3. Décommentez-la en supprimant les `//` au début

## Limitations connues

- Le script ne met pas à jour les documents existants, il crée de nouveaux documents à chaque exécution
- Les tableaux Markdown ne sont pas parfaitement convertis en Portable Text
- Les références aux catégories sont créées comme de nouveaux documents, sans vérifier si elles existent déjà

## Support et contribution

N'hésitez pas à améliorer ces scripts selon vos besoins. La conversion Markdown vers Portable Text est un défi complexe, et il existe des bibliothèques plus avancées comme `sanity-plugin-markdown` qui pourraient offrir des fonctionnalités supplémentaires. 