import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ThemeProvider } from "../components/ThemeProvider"
import { Providers } from './providers'
import { cn } from '../lib/utils'
import { Toaster } from "react-hot-toast"
import CookieConsent from "../components/CookieConsent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: '%s | Web Wizardry',
    default: 'Web Wizardry | Développement Web Moderne & Abordable',
  },
  description: 'Création de sites web professionnels, rapides et pas chers. Développement d\'applications web modernes et de solutions digitales optimisées pour votre entreprise. Tarifs abordables et résultats rapides garantis.',
  keywords: ['développement web', 'site web pas cher', 'création site web rapide', 'développeur freelance', 'site web moderne', 'applications web', 'solutions digitales', 'site web professionnel', 'développeur web abordable', 'web design réactif'],
  authors: [{ name: 'Web Wizardry', url: 'https://webwizardry.fr' }],
  creator: 'Web Wizardry',
  publisher: 'Web Wizardry',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://webwizardry.fr',
    title: 'Web Wizardry | Développement Web Moderne & Abordable',
    description: 'Création de sites web professionnels, rapides et pas chers. Services de développement web de qualité à prix abordable.',
    siteName: 'Web Wizardry',
    images: [
      {
        url: 'https://webwizardry.fr/api/og?title=Développement Web Moderne %26 Abordable&description=Création de sites web professionnels, rapides et optimisés pour votre entreprise',
        width: 1200,
        height: 630,
        alt: 'Web Wizardry - Développement Web Moderne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Wizardry | Développement Web Moderne & Abordable',
    description: 'Création de sites web professionnels, rapides et pas chers. Services de développement web de qualité à prix abordable.',
    images: ['https://webwizardry.fr/api/og?title=Développement Web Moderne %26 Abordable&description=Création de sites web professionnels, rapides et optimisés pour votre entreprise'],
    site: '@jackchouchani',
    creator: '@jackchouchani',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieConsent />
          </Providers>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '2px solid var(--border)',
                padding: '16px',
                borderRadius: '6px',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}

