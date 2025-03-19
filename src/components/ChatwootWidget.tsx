'use client';

import { useEffect, useState } from 'react';

export default function ChatwootWidget() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  // Fonction pour initialiser Chatwoot à la demande
  const loadChatwootWidget = () => {
    if (isWidgetLoaded || typeof window === 'undefined') return;
    
    // Ne pas charger Chatwoot en développement
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
            customAttributes: {
              autoReconnect: false
            }
          })
        }
      })(document,"script");
    `;
    chatwootContainer.appendChild(script);
    
    // Gestion des erreurs WebSocket
    window.addEventListener('error', function(event) {
      if (event.message && event.message.includes('WebSocket')) {
        console.log('Une erreur WebSocket a été interceptée et supprimée');
        event.preventDefault();
      }
    });
    
    setIsWidgetLoaded(true);
  };

  useEffect(() => {
    // Charger le widget après un certain délai ou lors de l'interaction utilisateur
    let isMounted = true;
    
    // Charger le widget lors du scroll ou du clic
    const handleUserInteraction = () => {
      if (isMounted && !isWidgetLoaded) {
        loadChatwootWidget();
        
        // Nettoyer les écouteurs d'événements une fois chargé
        window.removeEventListener('scroll', handleUserInteraction);
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
      }
    };
    
    // Ajouter des écouteurs d'événements pour détecter l'interaction
    window.addEventListener('scroll', handleUserInteraction, { passive: true });
    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    
    // Charger après un délai si l'utilisateur n'a pas interagi
    const timeoutId = setTimeout(() => {
      if (isMounted && !isWidgetLoaded) {
        loadChatwootWidget();
      }
    }, 5000);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isWidgetLoaded]);

  return null;
} 