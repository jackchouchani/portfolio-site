import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import CookieConsent from '../src/components/CookieConsent'
import ChatwootWidget from '../src/components/ChatwootWidget'
import Script from "next/script"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

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
    card: 'summary_large_image',
    site: '@jackchouchani',
    creator: '@jackchouchani',
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
        
        {/* Meta tags explicites pour OpenGraph */}
        <meta property="og:site_name" content="Web Wizardry" />
        <meta property="og:image" content="https://webwizardry.fr/api/og?title=Développement Web Moderne %26 Abordable&description=Création de sites web professionnels, rapides et optimisés pour votre entreprise" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Web Wizardry - Développement Web Moderne" />
        
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
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Développement de site web abordable",
                    "description": "Création de site web professionnel à prix abordable avec design moderne et optimisé pour le référencement"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "500",
                    "priceCurrency": "EUR",
                    "minPrice": "500"
                  }
                }
              ],
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
        
        {/* Script Cal.com pour les réservations - optimisé */}
        <Script
          id="cal-com-embed"
          strategy="lazyOnload"
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) {
                  a.q.push(ar);
                };
                let d = C.document;
                C.Cal =
                  C.Cal ||
                  function () {
                    let cal = C.Cal;
                    let ar = arguments;
                    if (!cal.loaded) {
                      cal.ns = {};
                      cal.q = cal.q || [];
                      d.head.appendChild(d.createElement("script")).src = A;
                      cal.loaded = true;
                    }
                    if (ar[0] === L) {
                      const api = function () {
                        p(api, arguments);
                      };
                      const namespace = ar[1];
                      api.q = api.q || [];
                      typeof namespace === "string"
                        ? (cal.ns[namespace] = api) && p(api, ar)
                        : p(cal, ar);
                      return;
                    }
                    p(cal, ar);
                  };
              })(window, "https://cal.com/embed.js", "init");
              Cal("init", {origin:"https://cal.com"});
            `
          }}
        />
      </head>
      <body className={`${inter.className} scroll-behavior-auto`}>
        {/* Google Tag Manager (noscript) - chargé uniquement après le consentement */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=G-3LLBL993Q4"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        
        {/* SpeedInsights - collecte d'informations sur les performances, considéré comme essentiel */}
        <SpeedInsights />
        
        {/* Widget de support client - chargé uniquement après interaction utilisateur */}
        <ChatwootWidget />
      </body>
    </html>
  )
}