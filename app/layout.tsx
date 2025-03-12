import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieConsent } from '../src/components/CookieConsent'
import AnalyticsWrapper from '../src/components/AnalyticsWrapper'
import FreshworksWidget from '../src/components/FreshworksWidget'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Web Wizardry | Développement Web Moderne & Abordable',
  description: 'Création de sites web professionnels, rapides et pas chers. Développement d\'applications web modernes et de solutions digitales optimisées pour votre entreprise. Tarifs abordables et résultats rapides garantis.',
  applicationName: 'Web Wizardry',
  keywords: ['développement web', 'site web pas cher', 'création site web rapide', 'développeur freelance', 'site web moderne', 'applications web', 'solutions digitales', 'site web professionnel', 'développeur web abordable', 'web design réactif'],
  authors: [{ name: 'Web Wizardry', url: 'https://webwizardry.fr' }],
  creator: 'Web Wizardry',
  publisher: 'Web Wizardry',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://webwizardry.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/',
    },
  },
  openGraph: {
    title: 'Web Wizardry | Développement Web Moderne & Abordable',
    description: 'Création de sites web professionnels, rapides et pas chers. Services de développement web de qualité à prix abordable.',
    url: 'https://webwizardry.fr',
    siteName: 'Web Wizardry',
    images: [
      {
        url: 'https://webwizardry.fr/api/og?title=Développement Web Moderne %26 Abordable&description=Création de sites web professionnels, rapides et optimisés pour votre entreprise',
        width: 1200,
        height: 630,
        alt: 'Web Wizardry - Développement Web Moderne',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    title: 'Web Wizardry | Développement Web Moderne & Abordable',
    description: 'Création de sites web professionnels, rapides et pas chers. Services de développement web de qualité à prix abordable.',
    images: ['https://webwizardry.fr/api/og?title=Développement Web Moderne %26 Abordable&description=Création de sites web professionnels, rapides et optimisés pour votre entreprise'],
  },
  appleWebApp: {
    title: 'WebWizardry',
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="WW" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Schema.org JSON-LD pour le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Web Wizardry",
              "description": "Création de sites web professionnels, rapides et pas chers. Développement d'applications web modernes et solutions digitales optimisées.",
              "image": "/logo.svg",
              "url": "https://webwizardry.fr",
              "telephone": "+33652588583",
              "email": "contact@webwizardry.fr",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              },
              "priceRange": "€€",
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
              "sameAs": [
                "https://twitter.com/jackchouchani",
                "https://linkedin.com/company/jacqueschouchani",
                "https://github.com/jackchouchani"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Développement de site web abordable",
                "description": "Création de site web professionnel à prix abordable avec design moderne et optimisé pour le référencement",
                "price": "à partir de 500€",
                "priceCurrency": "EUR"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.8566,
                  "longitude": 2.3522
                },
                "geoRadius": "100000"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} scroll-behavior-auto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        
        {/* SpeedInsights - collecte d'informations sur les performances, considéré comme essentiel */}
        <SpeedInsights />
        
        {/* Analytics - activé uniquement si l'utilisateur a accepté tous les cookies */}
        <AnalyticsWrapper />
        
        {/* Widget de support client */}
        <FreshworksWidget />
      </body>
    </html>
  )
}
