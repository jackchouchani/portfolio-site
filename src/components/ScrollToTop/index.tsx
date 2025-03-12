"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  }, [pathname, searchParams]); // Se déclenche à chaque changement de route ou de paramètres

  return null; // Ce composant ne rend rien visuellement
} 