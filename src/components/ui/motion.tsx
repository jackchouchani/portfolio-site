"use client";

import React from "react";
import { motion, Variant, Variants } from "framer-motion";

// Variantes d'animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export const zoom: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const bounce: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

export const flip: Variants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const rotate: Variants = {
  hidden: { opacity: 0, rotate: -15 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideIn: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // Custom ease curve
    }
  }
};

// Composants Motion
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionSpan = motion.span;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionA = motion.a;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;
export const MotionArticle = motion.article;
export const MotionButton = motion.button;
export const MotionImg = motion.img;

// Composant pour animer les enfants avec un effet de cascade
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  viewportMargin?: string;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  className = "",
  delay = 0.3,
  staggerDelay = 0.15,
  viewportMargin = "-50px",
  once = true,
}: StaggerProps) => {
  // Créer une copie des variants pour éviter de modifier les originaux
  const customVariants = {
    ...staggerContainer,
    visible: {
      ...(staggerContainer.visible as Record<string, any>),
      transition: {
        ...(staggerContainer.visible as any).transition,
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <MotionDiv
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

// Composant pour animer un élément au survol
interface HoverProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  y?: number;
  x?: number;
  rotate?: number;
  duration?: number;
  whileHover?: any;
}

export const HoverMotion = ({
  children,
  className = "",
  scale = 1.05,
  y = 0,
  x = 0,
  rotate = 0,
  duration = 0.3,
  whileHover,
}: HoverProps) => {
  const defaultWhileHover = {
    scale,
    y,
    x,
    rotate,
    transition: { duration }
  };

  return (
    <MotionDiv
      className={className}
      whileHover={whileHover || defaultWhileHover}
    >
      {children}
    </MotionDiv>
  );
};

// Composant pour animer un élément au défilement
interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  viewportMargin?: string;
}

export const ScrollAnimation = ({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  duration = 0.5,
  once = true,
  viewportMargin = "-50px",
}: ScrollAnimationProps) => {
  // Créer une copie des variants pour éviter de modifier les originaux
  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any).transition,
        delay,
        duration,
      },
    },
  };

  return (
    <MotionDiv
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

// Effet de parallax au défilement
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Facteur de vitesse du parallax
}

export const ParallaxMotion = ({
  children,
  className = "",
  speed = 0.2, // Plus petit = plus lent
}: ParallaxProps) => {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        y: [-20 * speed, 20 * speed],
        transition: { 
          opacity: { duration: 0.5 },
          y: { 
            repeat: 0, 
            duration: 1,
            type: "keyframes",
            ease: "linear",
            from: -20 * speed,
            to: 20 * speed
          }
        }
      }}
      viewport={{ once: false, amount: "some" }}
    >
      {children}
    </MotionDiv>
  );
};

// Animation de texte par caractère
interface TextAnimationProps {
  text: string;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

export const AnimatedText = ({
  text,
  className = "",
  staggerChildren = 0.03,
  delayChildren = 0,
}: TextAnimationProps) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };
  
  return (
    <MotionDiv
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <MotionSpan
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </MotionSpan>
      ))}
    </MotionDiv>
  );
}; 