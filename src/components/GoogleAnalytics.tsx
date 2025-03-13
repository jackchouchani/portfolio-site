"use client"

import { useState, useEffect } from 'react'
import Script from 'next/script'

// Déclaration TypeScript pour l'accès global
declare global {
  interface Window {
    gtag: any;
    gtagSendEvent: (url?: string) => boolean;
  }
}

export default function GoogleAnalytics() {
  const [showAnalytics, setShowAnalytics] = useState(false)
  
  useEffect(() => {
    // Vérifie le consentement stocké dans localStorage
    const consent = localStorage.getItem("cookie-consent")
    // Affiche Analytics uniquement si l'utilisateur a explicitement accepté tous les cookies
    if (consent === "true") {
      setShowAnalytics(true)
      
      // Helper function pour le tracking de conversion
      window.gtagSendEvent = (url) => {
        const callback = function () {
          if (typeof url === 'string') {
            window.location.href = url;
          }
        };
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion_event_submit_lead_form', {
            'event_callback': callback,
            'event_timeout': 2000,
          });
          console.log('Événement de conversion envoyé');
        } else {
          console.warn("gtag n'est pas disponible");
        }
        return false;
      };
    }
  }, [])
  
  if (!showAnalytics) {
    return null
  }
  
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3LLBL993Q4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3LLBL993Q4');
        `}
      </Script>
    </>
  )
} 