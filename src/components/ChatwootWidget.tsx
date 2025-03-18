'use client';

import { useEffect } from 'react';

export default function ChatwootWidget() {
  useEffect(() => {
    // S'assurer que nous sommes côté client
    if (typeof window !== 'undefined') {
      // Créer un conteneur pour le widget
      const chatwootContainer = document.createElement('div');
      chatwootContainer.className = 'chatwoot-container';
      document.body.appendChild(chatwootContainer);
      
      // Injecter les styles CSS directement
      const styleEl = document.createElement('style');
      styleEl.innerHTML = `
        /* Styles pour repositionner Chatwoot uniquement sur mobile */
        @media (max-width: 768px) {
          .woot-widget-bubble {
            bottom: 45px !important;
            right: 20px !important;
            z-index: 1000 !important;
          }
        }
      `;
      document.head.appendChild(styleEl);
      
      // Créer et injecter le script Chatwoot dans le conteneur
      const script = document.createElement('script');
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
              baseUrl: BASE_URL,
              position: 'right',
              locale: 'fr',
              type: 'expanded_bubble', 
              launcherTitle: 'Discuter avec nous'
            })
          }
        })(document,"script");
      `;
      chatwootContainer.appendChild(script);
      
      // Nettoyage lors du démontage du composant
      return () => {
        if (chatwootContainer.parentNode) {
          chatwootContainer.parentNode.removeChild(chatwootContainer);
        }
        styleEl.parentNode?.removeChild(styleEl);
      };
    }
  }, []);

  return null;
} 