'use client';

import { useEffect, useState } from 'react';

export default function FreshworksWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // S'assurer que nous sommes côté client
    if (typeof window !== 'undefined') {
      // Créer et injecter le script Freshworks
      const script = document.createElement('script');
      script.src = '//eu.fw-cdn.com/13054672/1006272.js';
      script.setAttribute('chat', 'true');
      script.async = true;
      
      document.body.appendChild(script);
      
      // Nettoyage lors du démontage du composant
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  // Pas besoin de rendu visible, juste d'injecter le script
  return null;
} 