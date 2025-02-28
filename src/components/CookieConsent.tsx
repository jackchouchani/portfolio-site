"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  
  // Vérifier si l'utilisateur a déjà accepté les cookies
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Attendre un peu avant d'afficher la bannière
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  // Fonction utilitaire pour gérer le consentement et recharger la page
  const handleConsent = (value: string) => {
    localStorage.setItem("cookie-consent", value)
    setShowConsent(false)
    
    // Recharge la page pour appliquer les changements d'analytics
    // On utilise un délai court pour permettre à l'animation de se terminer
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }

  // Accepter tous les cookies
  const acceptAll = () => {
    handleConsent("true")
  }

  // Accepter uniquement les cookies essentiels
  const acceptEssential = () => {
    handleConsent("essential")
  }

  // Fermer la bannière sans prendre de décision
  const dismiss = () => {
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          className="fixed bottom-4 left-4 z-50 max-w-[280px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-3 text-xs">
            <div className="flex items-start justify-between mb-2">
              <p className="font-medium">🍪 Cookies</p>
              <Button variant="ghost" size="icon" onClick={dismiss} className="h-5 w-5 -mt-1 -mr-1" aria-label="Fermer">
                <X className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-muted-foreground mb-3">
              Ce site utilise des cookies pour améliorer votre navigation.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={acceptEssential} className="text-xs h-7 px-2">
                Essentiels
              </Button>
              <Button variant="default" size="sm" onClick={acceptAll} className="text-xs h-7 px-2">
                Accepter tous
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 