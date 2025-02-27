"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title: string
  aspectRatio?: "16:9" | "4:3" | "1:1"
  thumbnailQuality?: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault"
}

export function YouTubeEmbed({
  videoId,
  title,
  aspectRatio = "16:9",
  thumbnailQuality = "maxresdefault"
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculer le ratio d'aspect pour le conteneur
  const aspectRatioClass = 
    aspectRatio === "16:9" 
      ? "aspect-video" 
      : aspectRatio === "4:3" 
        ? "aspect-[4/3]" 
        : "aspect-square"

  // Obtenir l'URL de la miniature YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`

  // Générer l'URL embed avec paramètres d'optimisation
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`

  // Lorsque l'utilisateur clique sur la miniature
  const handlePlayClick = () => {
    setIsPlaying(true)
    
    // Focus sur l'iframe pour les utilisateurs de lecteurs d'écran
    if (iframeRef.current) {
      iframeRef.current.focus()
    }
  }

  // Données structurées Schema.org pour la vidéo
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": title,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": new Date().toISOString(),
    "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
    "embedUrl": `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <>
      {/* Données structurées pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      
      {/* Composant YouTube avec chargement différé */}
      <div 
        ref={containerRef}
        className={`relative rounded-lg overflow-hidden shadow-lg ${aspectRatioClass}`}
        itemScope
        itemType="https://schema.org/VideoObject"
      >
        {!isPlaying ? (
          <>
            {/* Thumbnail avec bouton de lecture */}
            <div className="absolute inset-0 bg-black">
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                className="object-cover hover:scale-105 transition-transform duration-300"
                itemProp="thumbnailUrl"
                loading="lazy"
              />
              
              {/* Titre de la vidéo */}
              <meta itemProp="name" content={title} />
              <link itemProp="contentUrl" href={`https://www.youtube.com/watch?v=${videoId}`} />
            </div>
            
            {/* Bouton de lecture */}
            <button
              aria-label={`Lire la vidéo : ${title}`}
              onClick={handlePlayClick}
              className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-primary/50 z-10"
            >
              <span className="sr-only">Lire la vidéo : {title}</span>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-focus:scale-110">
                <Play size={30} fill="currentColor" />
              </div>
            </button>
          </>
        ) : (
          /* Iframe YouTube (chargé uniquement après le clic) */
          <iframe
            ref={iframeRef}
            src={embedUrl}
            title={title}
            itemProp="embedUrl"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </>
  )
} 