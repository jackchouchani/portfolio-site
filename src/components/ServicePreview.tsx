"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { HoverMotion, ScrollAnimation, fadeInUp } from "./ui/motion"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ServicePreviewProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  imageSrc?: string
}

export function ServicePreview({ title, description, icon, href, imageSrc }: ServicePreviewProps) {
  return (
    <ScrollAnimation
      variants={fadeInUp}
      className="w-full h-full"
      viewportMargin="-20px"
      duration={0.15}
    >
      <HoverMotion scale={1.01} className="h-full">
        <Card className="relative overflow-hidden h-full border-primary/20 shadow-lg bg-background dark:bg-zinc-900/50 transition-all duration-200">
          <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-xl" />
          
          <CardHeader className="relative pb-0">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              {icon}
            </div>
            <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
              {title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative pt-4 text-muted-foreground">
            <p itemProp="description">{description}</p>
            
            {imageSrc && (
              <div className="mt-4">
                <Image 
                  src={imageSrc}
                  alt={`${title} - Service de développement web abordable et rapide`}
                  width={400}
                  height={225}
                  className="rounded-md"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            )}
          </CardContent>
          
          <CardFooter className="relative pt-2">
            <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 font-medium group">
              <Link href={href} className="flex items-center gap-2" itemProp="url">
                En savoir plus
                <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </HoverMotion>
    </ScrollAnimation>
  )
}

