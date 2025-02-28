"use client"

import { useState, useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"

export default function AnalyticsWrapper() {
  const [showAnalytics, setShowAnalytics] = useState(false)
  
  useEffect(() => {
    // Vérifie le consentement stocké dans localStorage
    const consent = localStorage.getItem("cookie-consent")
    // Affiche Analytics uniquement si l'utilisateur a explicitement accepté tous les cookies
    if (consent === "true") {
      setShowAnalytics(true)
    }
  }, [])
  
  // Rendu conditionnel d'Analytics
  return showAnalytics ? <Analytics /> : null
} 