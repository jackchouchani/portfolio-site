# Documentation Tarteaucitron

Ce document explique comment mettre à jour et gérer la solution de consentement de cookies tarteaucitron.js dans ce projet.

## Architecture

L'implémentation actuelle utilise :
- Le package npm `tarteaucitronjs` installé via npm
- Les fichiers JS et CSS copiés dans le dossier `public` pour être accessibles directement
- Un composant React `src/components/TarteAuCitron.tsx` qui initialise et configure tarteaucitron

## Mise à jour de Tarteaucitron

Pour mettre à jour tarteaucitron vers une nouvelle version :

1. Mettez à jour le package npm :
   ```bash
   npm update tarteaucitronjs
   ```

2. Mettez à jour les fichiers CSS et JS dans le dossier public :
   ```bash
   npm run update-tarteaucitron
   ```

3. Reconstruisez l'application :
   ```bash
   npm run build
   ```

## Ajouter de nouveaux services

Pour ajouter un nouveau service (YouTube, Facebook Pixel, etc.), ajoutez le service dans le useEffect approprié dans `src/components/TarteAuCitron.tsx` :

```javascript
// Exemple pour ajouter YouTube
(window.tarteaucitron.job = window.tarteaucitron.job || []).push('youtube');
```

## Personnalisation

Pour personnaliser davantage l'apparence, modifiez le fichier CSS dans `public/css/tarteaucitron.css`.

## Fichiers importants
- `public/tarteaucitron.js` - Script principal
- `public/tarteaucitron.services.js` - Définitions des services
- `public/css/tarteaucitron.css` - Styles
- `src/components/TarteAuCitron.tsx` - Composant d'initialisation

## Ressources
- [Documentation officielle de tarteaucitron.js](https://tarteaucitron.io/fr/install/)
- [Page NPM du package](https://www.npmjs.com/package/tarteaucitronjs) 