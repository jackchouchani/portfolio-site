"use client"

import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function GoogleAnalytics() {
  const [showAnalytics, setShowAnalytics] = useState(false)
  
  useEffect(() => {
    // Vérifie le consentement stocké dans localStorage
    const consent = localStorage.getItem("cookie-consent")
    // Affiche Analytics uniquement si l'utilisateur a explicitement accepté tous les cookies
    if (consent === "true") {
      setShowAnalytics(true)
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