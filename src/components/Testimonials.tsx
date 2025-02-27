"use client";

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Star, Pause, Play } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"

// Fonction pour générer une couleur basée sur le nom
function getAvatarColor(name: string) {
  const colors = ["bg-primary/80", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500"];
  let hash = 0;
  
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  hash = Math.abs(hash);
  return colors[hash % colors.length];
}

// Composant pour afficher les étoiles
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
        >
          <Star
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Liste des testimonials
const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Directrice Marketing",
    content:
      "Un travail exceptionnel! Le site web est non seulement magnifique mais aussi facile à utiliser. Les animations sont fluides et l'expérience utilisateur est parfaite.",
    avatar: "/testimonials/avatar-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas Bernard",
    role: "Entrepreneur",
    content:
      "Collaboration parfaite du début à la fin. J'ai particulièrement apprécié la réactivité et les conseils avisés tout au long du projet.",
    avatar: "/testimonials/avatar-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Émilie Dubois",
    role: "Designer UX/UI",
    content:
      "Un développeur front-end talentueux qui comprend les nuances du design. Le respect des maquettes était impeccable tout en apportant des améliorations pertinentes.",
    avatar: "/testimonials/avatar-3.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Alexandre Petit",
    role: "CEO, TechStart",
    content:
      "Notre application web est maintenant performante et évolutive. Les délais ont été respectés et la qualité du code est impressionnante.",
    avatar: "/testimonials/avatar-4.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Marie Leclerc",
    role: "E-commerce Manager",
    content:
      "Notre boutique en ligne a vu ses conversions augmenter de 40% depuis le redesign. Un investissement qui en valait vraiment la peine!",
    avatar: "/testimonials/avatar-5.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Fonction pour passer au témoignage suivant
  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  // Fonction pour passer au témoignage précédent
  const handlePrev = () => {
    setDirection("prev");
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Gérer l'autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };
  
  // Effet pour l'autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection("next");
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);
  
  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ce que disent mes clients
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Découvrez les retours de ceux qui m'ont fait confiance pour leurs projets.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full relative">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative p-6 md:p-10 backdrop-blur-lg bg-background/50 border rounded-xl shadow-lg"
                  >
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    
                    <blockquote className="text-lg md:text-xl font-medium italic mb-6 text-foreground">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className={getAvatarColor(testimonial.name)}>
                          {testimonial.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8 space-x-2">
              <CarouselPrevious 
                className="relative inset-auto mx-2" 
                variant="outline"
                size="icon"
              />
              <CarouselNext 
                className="relative inset-auto mx-2" 
                variant="outline"
                size="icon"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
} 