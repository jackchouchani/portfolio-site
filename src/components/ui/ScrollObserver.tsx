"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollObserverProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  delay?: number
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"
  once?: boolean
}

export function ScrollObserver({
  children,
  className,
  threshold = 0.1,
  rootMargin = "-50px",
  delay = 0,
  animation = "fade-up",
  once = true,
}: ScrollObserverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  // Détermine les classes d'animation à appliquer
  const getAnimationClasses = () => {
    const initial = {
      "fade-up": "opacity-0 translate-y-8",
      "fade-down": "opacity-0 -translate-y-8",
      "fade-left": "opacity-0 translate-x-8",
      "fade-right": "opacity-0 -translate-x-8",
      "zoom-in": "opacity-0 scale-95",
      "zoom-out": "opacity-0 scale-105",
    }[animation]
    
    return {
      initial,
      visible: "opacity-100 translate-y-0 translate-x-0 scale-100",
    }
  }
  
  const { initial, visible } = getAnimationClasses()
  
  useEffect(() => {
    // Si l'API Intersection Observer n'est pas disponible, on affiche l'élément
    if (!window.IntersectionObserver) {
      setIsVisible(true)
      return
    }
    
    const element = ref.current
    if (!element) return
    
    // Création de l'observateur
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l'élément devient visible
        if (entry.isIntersecting) {
          // On ajoute un délai si demandé
          if (delay) {
            setTimeout(() => setIsVisible(true), delay * 1000)
          } else {
            setIsVisible(true)
          }
          
          // Si on veut observer l'élément qu'une seule fois
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          // Si l'élément sort de la vue et que 'once' est false
          setIsVisible(false)
        }
      },
      {
        threshold, // Pourcentage de l'élément qui doit être visible
        rootMargin, // Marge autour de la zone de détection
      }
    )
    
    // On commence à observer l'élément
    observer.observe(element)
    
    // Nettoyage
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold, rootMargin, delay, once])
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? visible : initial,
        className
      )}
      style={{ transitionDelay: delay ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  )
} 