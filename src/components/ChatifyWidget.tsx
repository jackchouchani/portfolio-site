'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function ChatifyWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rendre que côté client pour éviter les problèmes d'hydratation
  if (!mounted) return null;

  return (
    <>
      <div className="pubble-app" data-app-id="129929" data-app-identifier="129929"></div>
      <Script strategy="lazyOnload" src="https://cdn.chatify.com/javascript/loader.js" />
    </>
  );
} 