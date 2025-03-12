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
    name: "Marlène S.",
    role: "Fondatrice, Comptoir Vintage",
    content:
      "Nous sommes ravis de notre boutique en ligne. L'interface est élégante, rapide et nos clients adorent l'expérience d'achat. Nos ventes ont augmenté de 35% depuis le lancement du nouveau site!",
    avatar: "/testimonials/avatar-1.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Mohamed B.",
    role: "Co-fondateur, Atelier Moderne",
    content:
      "Un travail remarquable pour notre site e-commerce de meubles. La mise en valeur de nos produits est parfaite et le processus d'achat simplifié a considérablement amélioré notre taux de conversion.",
    avatar: "/testimonials/avatar-2.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Greg A.",
    role: "Photographe professionnel",
    content:
      "Mon portfolio en ligne a complètement transformé ma présence sur le web. Les animations fluides et l'interface élégante mettent parfaitement en valeur mon travail. Un investissement qui a vraiment porté ses fruits.",
    avatar: "/testimonials/avatar-3.webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Joe K.",
    role: "Architecte DPLG",
    content:
      "La présentation de mes projets architecturaux est impeccable. L'intégration de vues 3D et la mise en page minimaliste correspondent parfaitement à mon esthétique. Un site qui me permet de me démarquer dans mon secteur.",
    avatar: "/testimonials/avatar-4.webp",
    rating: 5,
  },
  {
    id: 5,
    name: "Jacques C.",
    role: "Fondateur, FinPilot.one",
    content:
      "Notre plateforme FinTech est exactement ce que nous recherchions - performante, sécurisée et intuitive. Le développement a été rapide et le résultat final dépasse nos attentes initiales.",
    avatar: "/testimonials/avatar-5.webp",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
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