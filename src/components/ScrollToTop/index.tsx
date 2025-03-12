"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  // Utilisons uniquement le pathname qui est safe pour le SSR, 
  // pas useSearchParams() qui nécessite Suspense

  useEffect(() => {
    // Fonction pour remettre le scroll en haut de la page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "instant" // "instant" plutôt que "smooth" pour éviter les problèmes sur certains navigateurs
      });
    };

    // Exécuter la fonction au changement de route
    scrollToTop();

    // Ajouter également un listener pour les changements d'URL côté client
    // qui pourraient inclure des changements de searchParams
    const handleRouteChange = () => {
      scrollToTop();
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [pathname]); // Dépendance uniquement sur pathname

  return null; // Ce composant ne rend rien visuellement
} 