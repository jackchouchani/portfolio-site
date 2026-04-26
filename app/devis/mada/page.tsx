import React from "react"
import { Metadata } from "next"
import DevisMadaClient from "@/src/components/pages/DevisMadaClient"

export const metadata: Metadata = {
  title: "Devis MADA | Web Wizardry",
  description: "Proposition commerciale personnalisée pour la création du site internet du cabinet MADA.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/devis/mada",
  },
}

export default function DevisMadaPage() {
  return (
    <main className="flex-1 bg-background">
      <DevisMadaClient />
    </main>
  )
}
