'use client';

import { useEffect } from 'react';

export default function ChatwootWidget() {
  useEffect(() => {
    // S'assurer que nous sommes côté client
    if (typeof window !== 'undefined') {
      let isMounted = true;
      
      // Créer un conteneur pour le widget avec un délai pour éviter les tentatives répétées
      const initChatwoot = () => {
        // Ne pas charger Chatwoot en développement (pour éviter les erreurs WebSocket)
        if (process.env.NODE_ENV === 'development') {
          console.log('Chatwoot désactivé en environnement de développement');
          return;
        }
        
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
                launcherTitle: 'Discuter avec nous',
                // Ajouter des événements pour gérer les erreurs de WebSocket
                customAttributes: {
                  // Désactiver la reconnexion automatique pour éviter les erreurs en rafale
                  autoReconnect: false
                }
              })
            }
          })(document,"script");
        `;
        chatwootContainer.appendChild(script);
        
        // Ajouter un gestionnaire global d'erreurs pour les WebSockets
        window.addEventListener('error', function(event) {
          if (event.message && event.message.includes('WebSocket')) {
            console.log('Une erreur WebSocket a été interceptée et supprimée');
            event.preventDefault();
          }
        });
        
        // Nettoyage lors du démontage du composant
        return () => {
          if (isMounted) {
            if (chatwootContainer.parentNode) {
              chatwootContainer.parentNode.removeChild(chatwootContainer);
            }
            styleEl.parentNode?.removeChild(styleEl);
          }
        };
      };
      
      // Délai avant d'initialiser Chatwoot pour éviter les tentatives répétées
      const timeoutId = setTimeout(initChatwoot, 2000);
      
      return () => {
        isMounted = false;
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return null;
} 