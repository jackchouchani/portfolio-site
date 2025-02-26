"use client"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"
import ServicePreview from "../components/ServicePreview"
import TestimonialCarousel from "../components/TestimonialCarousel"
import AnimatedBackground from "../components/AnimatedBackground"
import ThemeToggle from "../components/ThemeToggle"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), { stiffness: 400, damping: 90 })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useSpring(mousePosition.x)
  const mouseY = useSpring(mousePosition.y)

  const backgroundGradient = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(29, 78, 216, 0.15),
    transparent 80%
  )`

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ background: backgroundGradient }} />
      <AnimatedBackground />
      <ThemeToggle />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.section
          className="h-screen flex flex-col justify-center items-center text-center px-4"
          style={{ opacity, scale, y }}
        >
          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Solutions Web Modernes et Accessibles
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-gray-600 dark:text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Votre Vision, Réalisée Rapidement
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-primary/80 hover:to-purple-600/80 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              <Link href="/contact">Obtenez un devis</Link>
            </Button>
          </motion.div>
        </motion.section>

        <section className="py-20">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Mes Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            <ServicePreview
              title="Création de Sites Web"
              description="Sites web sur mesure, rapides et responsive"
              icon="web"
              href="/services#web"
            />
            <ServicePreview
              title="Développement d'Applications"
              description="Applications mobiles performantes et intuitives"
              icon="mobile"
              href="/services#apps"
            />
            <ServicePreview
              title="Boutiques Shopify"
              description="E-commerce optimisé pour les ventes"
              icon="shop"
              href="/services#shopify"
            />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <motion.h2
            className="text-4xl font-semibold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ce que disent mes clients
          </motion.h2>
          <TestimonialCarousel />
        </section>

        <motion.section
          className="py-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-primary/80 hover:to-purple-600/80 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
          >
            <Link href="/contact">Démarrons votre projet</Link>
          </Button>
        </motion.section>
      </motion.div>
    </div>
  )
}

