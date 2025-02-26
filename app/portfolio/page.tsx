"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, MotionH1, MotionP, MotionSpan, ScrollAnimation, fadeInUp } from "../../src/components/ui/motion";
import PageTransition from "../../src/components/PageTransition";
import { Code, Construction, Hammer, ArrowRight, Clock } from "lucide-react";

export default function PortfolioPage() {
  const [progress, setProgress] = useState(0);
  
  // Animation du pourcentage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 75) {
        setProgress(prev => prev + 1);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <ScrollAnimation className="text-center mb-12">
          <MotionH1 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            variants={fadeInUp}
          >
            Mon Portfolio
          </MotionH1>
          <MotionP 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez bientôt mes projets et réalisations dans cette section en cours de développement.
          </MotionP>
        </ScrollAnimation>
        
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-primary/20 overflow-hidden bg-gradient-to-b from-background to-muted/30">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <MotionDiv
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="p-4 rounded-full bg-primary/10 text-primary"
                >
                  <Construction className="h-12 w-12" />
                </MotionDiv>
                
                <MotionH1 
                  className="text-2xl md:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Page en cours de construction
                </MotionH1>
                
                <MotionP
                  className="text-muted-foreground max-w-lg mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Je travaille actuellement à la création d'un portfolio captivant pour vous présenter mes projets les plus récents et les plus impressionnants.
                </MotionP>
                
                <div className="w-full bg-muted rounded-full h-4 mt-6 overflow-hidden">
                  <MotionDiv 
                    className="bg-primary h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <MotionSpan 
                  className="text-primary font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {progress}% Complété
                </MotionSpan>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="p-4 bg-muted/50 rounded-lg text-center"
                  >
                    <Code className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-foreground">Projets web</h3>
                    <p className="text-sm text-muted-foreground">Bientôt disponible</p>
                  </MotionDiv>
                  
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 bg-muted/50 rounded-lg text-center"
                  >
                    <Hammer className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-foreground">Applications</h3>
                    <p className="text-sm text-muted-foreground">Bientôt disponible</p>
                  </MotionDiv>
                  
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="p-4 bg-muted/50 rounded-lg text-center"
                  >
                    <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-foreground">Temps restant</h3>
                    <p className="text-sm text-muted-foreground">Quelques jours</p>
                  </MotionDiv>
                </div>
                
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-4"
                >
                  <Button asChild>
                    <Link href="/contact" className="flex items-center">
                      Me contacter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MotionDiv>
                
                <MotionP
                  className="text-sm text-muted-foreground italic mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  En attendant, n'hésitez pas à me contacter pour discuter de vos projets !
                </MotionP>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </PageTransition>
  );
} 