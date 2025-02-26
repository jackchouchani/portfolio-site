import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ThemeProvider } from "../components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: '%s | Développeur Web Freelance',
    default: 'Développeur Web Freelance | Solutions Web Modernes',
  },
  description: "Création de sites web, développement d'applications mobiles et conception de solutions web personnalisées. Des sites rapides, élégants et optimisés pour tous les appareils.",
  keywords: ["développeur web", "freelance", "next.js", "react", "site web", "applications", "responsive", "mobile", "e-commerce"],
  authors: [{ name: "Votre Nom" }],
  creator: "Votre Nom",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-site-web.fr',
    title: 'Développeur Web Freelance | Solutions Web Modernes',
    description: "Création de sites web, développement d'applications mobiles et conception de solutions web personnalisées.",
    siteName: 'Votre Nom - Développeur Web Freelance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur Web Freelance | Solutions Web Modernes',
    description: "Création de sites web, développement d'applications mobiles et conception de solutions web personnalisées.",
    creator: '@votre_pseudo',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

