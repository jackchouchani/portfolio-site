import React from "react"
import { Metadata } from "next"
import QuoteMadaClient from "@/src/components/pages/QuoteMadaClient"

export const metadata: Metadata = {
  title: "MADA Quote | Web Wizardry",
  description: "Personalised commercial proposal for the MADA law firm website.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/quote/mada",
    languages: {
      en: "/quote/mada",
      fr: "/devis/mada",
    },
  },
}

export default function QuoteMadaPage() {
  return (
    <main className="flex-1 bg-background">
      <QuoteMadaClient />
    </main>
  )
}
