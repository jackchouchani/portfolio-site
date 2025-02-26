"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MotionDiv, MotionH2, MotionP, fadeIn, fadeInUp, zoom } from "./ui/motion";
import { AnimatePresence } from "framer-motion";

// Ajout d'une fonction pour générer des couleurs pour les avatars
const getAvatarColor = (name: string) => {
  const colors = [
    "bg-red-500", "bg-blue-500", "bg-green-500", 
    "bg-yellow-500", "bg-purple-500", "bg-pink-500", 
    "bg-indigo-500", "bg-orange-500", "bg-teal-500"
  ];
  
  // Créer un hash simple à partir du nom
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Utiliser le hash pour sélectionner une couleur
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

// Données de témoignages
const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Directrice Marketing, Entreprise XYZ",
    content: "J'ai travaillé avec ce développeur pour refaire notre site e-commerce. Le résultat est extraordinaire - notre taux de conversion a augmenté de 35% en seulement deux mois. Sa capacité à comprendre nos besoins tout en proposant des améliorations que nous n'avions pas envisagées a fait toute la différence.",
    avatar: "/testimonials/avatar-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas Lefevre",
    role: "Fondateur, Startup Tech",
    content: "Notre collaboration a été un véritable succès. Non seulement notre nouveau site est magnifique et fonctionne parfaitement, mais le processus de développement était transparent et professionnel. Je recommande vivement ses services pour quiconque cherche un développeur web de qualité.",
    avatar: "/testimonials/avatar-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Indépendante, Photographe",
    content: "En tant que photographe, j'avais besoin d'un portfolio qui mette vraiment en valeur mon travail. Le site créé dépasse toutes mes attentes. Il est rapide, intuitif et présente mes photos avec une qualité exceptionnelle. Mes clients sont impressionnés et mon carnet de commandes n'a jamais été aussi rempli.",
    avatar: "/testimonials/avatar-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Alexandre Bernard",
    role: "PDG, Entreprise de Conseil",
    content: "Notre site web est devenu un véritable outil de génération de leads grâce à ce développeur. Son approche stratégique combinée à ses compétences techniques nous a permis d'obtenir un site qui non seulement a l'air professionnel, mais qui convertit également les visiteurs en clients.",
    avatar: "/testimonials/avatar-4.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Clara Dubois",
    role: "Responsable E-commerce",
    content: "La refonte de notre boutique en ligne a transformé notre entreprise. Le site est maintenant ultra-rapide, l'expérience d'achat est fluide, et nos clients adorent le nouveau design. Sans parler de l'augmentation de 40% de notre chiffre d'affaires en ligne depuis le lancement.",
    avatar: "/testimonials/avatar-5.jpg",
    rating: 5,
  },
];

// Composant d'étoiles pour les notations
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <MotionDiv 
      className="flex space-x-1"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }}
    >
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          } transition-all duration-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </MotionDiv>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Navigation des témoignages
  const showNextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // Réinitialiser le mode automatique lorsque l'utilisateur clique
    setIsAutoPlaying(false);
  };

  const showPrevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    // Réinitialiser le mode automatique lorsque l'utilisateur clique
    setIsAutoPlaying(false);
  };

  // Défilement automatique
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Variants pour les animations de transition
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container px-4 mx-auto">
        <MotionH2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ce que disent <span className="text-primary">nos clients</span>
        </MotionH2>

        <div className="relative">
          {/* Contrôles de navigation avec animations */}
          <MotionDiv 
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-background shadow-lg hover:bg-primary hover:text-white transition-all duration-300 w-10 h-10 p-0"
              onClick={showPrevTestimonial}
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </MotionDiv>
          
          <MotionDiv 
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-background shadow-lg hover:bg-primary hover:text-white transition-all duration-300 w-10 h-10 p-0"
              onClick={showNextTestimonial}
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </MotionDiv>

          {/* Slider des témoignages */}
          <div className="overflow-hidden py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <MotionDiv
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary opacity-20" />
                      <MotionP
                        className="text-lg md:text-xl leading-relaxed mb-6"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                      >
                        "{testimonials[activeIndex].content}"
                      </MotionP>
                    </div>
                    
                    <StarRating rating={testimonials[activeIndex].rating} />
                    
                    <MotionDiv 
                      className="mt-6 flex flex-col items-center"
                      variants={zoom}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 }}
                    >
                      <Avatar className="h-16 w-16 border-2 border-primary">
                        {/* Utilisation d'une couleur de fond aléatoire au lieu d'une image */}
                        <AvatarFallback className={getAvatarColor(testimonials[activeIndex].name)}>
                          {testimonials[activeIndex].name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="mt-4 text-center">
                        <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                        <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                      </div>
                    </MotionDiv>
                  </div>
                </Card>
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors duration-300 transform ${
                index === activeIndex 
                  ? "bg-primary scale-125" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              aria-label={`Voir témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 