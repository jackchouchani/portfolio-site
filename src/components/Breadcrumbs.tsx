"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Génère le schéma BreadcrumbList pour le SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://webwizardry.fr"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://webwizardry.fr${item.href}`
      }))
    ]
  }

  return (
    <>
      {/* Schema.org Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      
      {/* Interface utilisateur des breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6" aria-label="Fil d'Ariane">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center hover:text-primary transition-colors"
              aria-label="Accueil"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Accueil</span>
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3.5 w-3.5 mx-1" />
          </li>
          
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {!item.isCurrent ? (
                <Link 
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              )}
              
              {index < items.length - 1 && (
                <>
                  <ChevronRight className="h-3.5 w-3.5 mx-1" />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
} 