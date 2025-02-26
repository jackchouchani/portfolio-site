"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    company: "Startup Innovante",
    text: "Un travail exceptionnel ! Notre site web est non seulement magnifique mais aussi incroyablement rapide.",
  },
  {
    id: 2,
    name: "Pierre Martin",
    company: "Boutique en ligne Chic",
    text: "Notre boutique Shopify a vu ses ventes augmenter de 50% depuis le redesign. Merci pour votre expertise !",
  },
  {
    id: 3,
    name: "Sophie Lefebvre",
    company: "Agence de Voyage Évasion",
    text: "L'application que vous avez développée pour nous a révolutionné notre façon de travailler. Nos clients adorent !",
  },
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 p-8 rounded-lg shadow-lg"
        >
          <motion.p
            className="text-xl mb-4 italic text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            "{testimonials[currentIndex].text}"
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentIndex].company}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow-md z-10"
        aria-label="Témoignage précédent"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full shadow-md z-10"
        aria-label="Témoignage suivant"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      </motion.button>
    </div>
  )
}

export default TestimonialCarousel

