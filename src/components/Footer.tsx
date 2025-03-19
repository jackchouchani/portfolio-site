"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, Mail, ArrowUpRight, XIcon } from "./icons/SafeIcons"
import { CheckCircle2, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [bannerMessage, setBannerMessage] = useState("")
  const [bannerType, setBannerType] = useState<"success" | "error">("success")

  useEffect(() => {
    if (showBanner) {
      const timer = setTimeout(() => {
        setShowBanner(false)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [showBanner])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Une erreur est survenue")
      }

      console.log("Bannière va être affichée - success");
      setBannerType("success")
      setBannerMessage("🎉 Super ! Vous êtes maintenant inscrit à la newsletter. Vous recevrez bientôt un email de confirmation.")
      setShowBanner(true)
      setEmail("")
    } catch (error) {
      console.log("Bannière va être affichée - error");
      setBannerType("error")
      setBannerMessage("Une erreur est survenue lors de l'inscription.")
      setShowBanner(true)
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    { id: "social-x", icon: <XIcon className="h-5 w-5" />, href: "https://x.com/jackchouchani", label: "X" },
    { id: "social-linkedin", icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/jacqueschouchani/", label: "LinkedIn" },
    { id: "social-github", icon: <Github className="h-5 w-5" />, href: "https://github.com/jackchouchani/", label: "GitHub" },
  ]
  
  const footerSections = [
    {
      id: "section-links",
      title: "Liens",
      links: [
        { id: "link-home", label: "Accueil", href: "/" },
        { id: "link-services", label: "Services", href: "/services" },
        { id: "link-portfolio", label: "Portfolio", href: "/portfolio" },
        { id: "link-blog", label: "Blog", href: "/blog" },
      ]
    },
    {
      id: "section-legal",
      title: "Légal",
      links: [
        { id: "link-mentions", label: "Mentions légales", href: "/legal/mentions-legales" },
        { id: "link-privacy", label: "Politique de confidentialité", href: "/legal/politique-de-confidentialite" },
        { id: "link-cgv", label: "CGV", href: "/legal/conditions-generales-de-vente" },
      ]
    }
  ]
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <Image 
                src="/logo.svg" 
                alt="Web Wizardry Logo" 
                width={28} 
                height={28} 
                className="h-7 w-auto dark:invert"
              />
              <h3 className="text-lg font-bold text-foreground">Web Wizardry</h3>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted-foreground"
            >
              Création de sites web et d'applications modernes, rapides et adaptés à vos besoins.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <h4 className="text-sm font-medium mb-2 text-foreground">Newsletter</h4>
              
              <AnimatePresence>
                {showBanner && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mb-3 p-3 rounded-md flex items-start justify-between ${
                      bannerType === "success" 
                        ? "bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800" 
                        : "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {bannerType === "success" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${bannerType === "success" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>
                        {bannerMessage}
                      </span>
                    </div>
                    <button 
                      onClick={() => setShowBanner(false)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  className="max-w-xs border-primary/20 focus:border-primary transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  size="sm" 
                  className="shrink-0"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Envoi...' : 'S\'abonner'}
                </Button>
              </form>
            </motion.div>
          </div>
          
          {footerSections.map((section) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (footerSections.indexOf(section) + 3) }}
              className="md:col-span-2 space-y-4"
            >
              <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li
                    key={link.id}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-4 space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground">Contact</h3>
            <ul className="space-y-2">
              <motion.li 
                whileHover={{ x: 5 }}
                className="text-sm text-muted-foreground flex items-center"
              >
                <Mail className="h-4 w-4 mr-2 text-primary" />
                contact@webwizardry.fr
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="text-sm text-muted-foreground"
              >
                Téléphone: +33 6 52 58 85 83
              </motion.li>
            </ul>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.id}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + socialLinks.indexOf(social) * 0.1 }}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4"
            >
              <Button asChild variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                <Link href="/contact" className="flex items-center gap-1">
                  Contactez-moi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Web Wizardry. Tous droits réservés.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer

