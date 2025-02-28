"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Compass, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  // Suggestions de navigation
  const suggestions = [
    { name: "Page d'accueil", href: "/", icon: <Home className="mr-2 h-4 w-4" /> },
    { name: "Services", href: "/services", icon: <Compass className="mr-2 h-4 w-4" /> },
    { name: "Portfolio", href: "/portfolio", icon: <Lightbulb className="mr-2 h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
      <div className="container max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
          
          <h2 className="mt-8 text-2xl font-bold">Page non trouvée</h2>
          
          <p className="mt-4 text-muted-foreground">
            Oups ! La page que vous recherchez semble avoir disparu dans le cyberespace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10"
        >
          <p className="font-medium mb-4">Que souhaitez-vous faire ?</p>
          
          <div className="flex flex-col gap-3 mt-6">
            <Button asChild variant="default" size="lg">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">Autres suggestions :</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {suggestions.map((suggestion) => (
                <Link
                  key={suggestion.href}
                  href={suggestion.href}
                  className="flex items-center justify-center p-3 border rounded-md hover:bg-muted transition-colors"
                >
                  {suggestion.icon}
                  {suggestion.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 