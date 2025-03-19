/**
 * Utilitaire pour charger les scripts externes de manière optimisée
 */

/**
 * Charge un script externe de manière asynchrone
 * @param src URL du script
 * @param async Charger le script de manière asynchrone
 * @param defer Différer l'exécution du script
 * @param id ID du script
 * @returns Promise qui se résout lorsque le script est chargé
 */
export const loadScript = (
  src: string,
  { async = true, defer = true, id = '' } = {}
): Promise<HTMLScriptElement> => {
  return new Promise((resolve, reject) => {
    // Vérifier si le script existe déjà
    if (id && document.getElementById(id)) {
      resolve(document.getElementById(id) as HTMLScriptElement);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    if (id) script.id = id;

    script.onload = () => resolve(script);
    script.onerror = (error) => reject(error);

    document.head.appendChild(script);
  });
};

/**
 * Charge un script uniquement après interaction utilisateur
 * @param src URL du script
 * @param options Options du script
 */
export const loadScriptOnInteraction = (
  src: string,
  options: { async?: boolean; defer?: boolean; id?: string; delay?: number } = {}
): void => {
  if (typeof window === 'undefined') return;

  const { delay = 5000, ...scriptOptions } = options;
  let loaded = false;

  const loadHandler = () => {
    if (loaded) return;
    loaded = true;
    
    loadScript(src, scriptOptions).catch(console.error);
    
    // Supprimer les écouteurs d'événements
    window.removeEventListener('scroll', loadHandler, { capture: true });
    window.removeEventListener('click', loadHandler, { capture: true });
    window.removeEventListener('touchstart', loadHandler, { capture: true });
  };

  // Charger sur interaction utilisateur
  window.addEventListener('scroll', loadHandler, { passive: true, capture: true, once: true });
  window.addEventListener('click', loadHandler, { passive: true, capture: true, once: true });
  window.addEventListener('touchstart', loadHandler, { passive: true, capture: true, once: true });

  // Charger après un délai même sans interaction
  setTimeout(loadHandler, delay);
}; 