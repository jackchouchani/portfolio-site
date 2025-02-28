"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

// Composant d'effet de typing
const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Vitesse de frappe
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      {!isTypingComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Ce useEffect permet d'éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  // Detecter le scroll pour ajouter une ombre au header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Accueil", href: "/", ariaLabel: "Aller à la page d'accueil" },
    { name: "Services", href: "/services", ariaLabel: "Découvrir nos services de développement web" },
    { name: "Portfolio", href: "/portfolio", ariaLabel: "Voir nos réalisations et projets" },
    { name: "Blog", href: "/blog", ariaLabel: "Lire nos articles sur le développement web" },
    { name: "À Propos", href: "/a-propos", ariaLabel: "En savoir plus sur Web Wizardry" },
  ]

  return (
    <header className={`bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`} role="banner" aria-label="En-tête principal du site Web Wizardry">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors" aria-label="Web Wizardry - Retour à l'accueil">
              <Image 
                src="/logo.svg" 
                alt="Web Wizardry Logo - Développement web moderne et abordable" 
                width={32} 
                height={32} 
                className="h-8 w-auto"
                priority 
              />
              <span itemProp="name">
                {isHomePage ? <TypingEffect text="Web Wizardry" /> : "Web Wizardry"}
              </span>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex space-x-1 items-center" aria-label="Navigation principale">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link 
                  href={link.href} 
                  className="px-3 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                  aria-label={link.ariaLabel}
                  prefetch={true}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button asChild variant="default" className="ml-2">
                <Link href="/contact" aria-label="Contactez-nous pour un devis gratuit">Contact</Link>
              </Button>
            </motion.div>
            {mounted && (
              <motion.div 
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="ml-2"
              >
                <ThemeToggle />
              </motion.div>
            )}
          </nav>
          
          <div className="flex items-center md:hidden">
            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mr-2"
              >
                <ThemeToggle />
              </motion.div>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-1"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'open' : 'closed'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu"
            role="navigation"
            aria-label="Menu mobile"
          >
            <nav className="flex flex-col items-center py-6 bg-background/90 backdrop-blur-md">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link 
                    href={link.href} 
                    className="block py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors w-full" 
                    onClick={() => setIsOpen(false)}
                    aria-label={link.ariaLabel}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-4 w-56"
              >
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/contact" aria-label="Contactez-nous pour un devis gratuit">Contact</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Optimisation pour éviter les re-renders inutiles
export default React.memo(Header)

