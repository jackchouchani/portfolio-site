'use client';

import { useEffect } from 'react';

export default function ChatwootWidget() {
  useEffect(() => {
    // S'assurer que nous sommes côté client
    if (typeof window !== 'undefined') {
      // Créer et injecter le script Chatwoot
      const script = document.createElement('script');
      
      // Définir le contenu du script
      script.innerHTML = `
        (function(d,t) {
          var BASE_URL="https://app.chatwoot.com";
          var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
          g.src=BASE_URL+"/packs/js/sdk.js";
          g.defer = true;
          g.async = true;
          s.parentNode.insertBefore(g,s);
          g.onload=function(){
            window.chatwootSDK.run({
              websiteToken: 'hWoxrd4ZsBxDs34SQDY7xZrK',
              baseUrl: BASE_URL
            })
          }
        })(document,"script");
      `;
      
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