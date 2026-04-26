"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import {
  CheckCircle2,
  Edit3,
  Phone,
  Mail,
  Sparkles,
  Globe2,
  Search,
  Rocket,
  LifeBuoy,
  Loader2,
  Check,
  AlertCircle,
} from "lucide-react"
import { useForm } from "@formspree/react"

const DEVIS_REF = "WW-2026-MADA-001"
const DEVIS_DATE = "26 avril 2026"
const DEVIS_VALIDITY = "26 mai 2026"
const CREATION_HT = 2480
const CARE_HT = 990
const TOTAL_YEAR_1_HT = CREATION_HT + CARE_HT

const phases = [
  {
    n: "01",
    icon: Sparkles,
    title: "Stratégie & Maquettage",
    price: 350,
    items: [
      "Brief stratégique et benchmark des cabinets de référence",
      "Architecture de l'information (10 pages)",
      "Maquettes haute fidélité desktop + mobile",
      "Déclinaison fidèle de la charte graphique fournie par MADA aux contraintes web",
    ],
  },
  {
    n: "02",
    icon: Globe2,
    title: "Développement du Site Vitrine",
    price: 1300,
    items: [
      "Site Next.js sur mesure — 10 pages (Accueil, Cabinet, Équipe, 4 pages Expertises, Insights, Actualités, Contact)",
      "Système CMS intégré pour autonomie éditoriale (blog, news, équipe)",
      "Bilinguisme FR / EN complet avec routage SEO dédié",
      "Design responsive (desktop, tablet, mobile)",
      "Animations sobres et performances optimisées (Lighthouse 95+)",
      "Conformité RGPD (bandeau cookies, mentions légales, politique de confidentialité)",
      "Formulaire contact segmenté par expertise",
    ],
  },
  {
    n: "03",
    icon: Search,
    title: "SEO Premium + GEO",
    price: 690,
    items: [
      "Audit SEO complet et stratégie de mots-clés sectoriels juridiques",
      "Optimisation technique (Core Web Vitals, sitemap, robots.txt)",
      "Données structurées Schema.org (LegalService, Attorney, LocalBusiness)",
      "GEO / AEO — optimisation pour ChatGPT, Perplexity, Google AI Overviews et Claude",
      "Configuration Google Search Console + Analytics 4",
      "Inscription dans les annuaires juridiques de référence",
    ],
  },
  {
    n: "04",
    icon: Rocket,
    title: "Lancement & Formation",
    price: 140,
    items: [
      "Connexion du domaine mada.legal (déjà acquis) à l'infrastructure Vercel",
      "Mise en production sur infrastructure premium",
      "Session de formation 2h (CMS, publication, bonnes pratiques SEO)",
      "Documentation utilisateur livrée",
    ],
  },
]

const careItems = [
  "Hébergement premium Vercel Pro + renouvellement domaine mada.legal",
  "Certificat SSL + monitoring uptime 24/7 + sauvegardes quotidiennes",
  "Mises à jour techniques continues (Next.js, dépendances, sécurité)",
  "Support prioritaire — réponse < 24h ouvrées",
  "3 heures par mois d'évolutions incluses (textes, news, deals, photos)",
  "Audit SEO trimestriel + reporting de performance et de trafic",
  "Restauration garantie en cas d'incident",
]

const options = [
  { label: "Rédaction de contenu juridique sur mesure", price: "80€ / page" },
  { label: "Page expertise additionnelle (au-delà des 4 prévues)", price: "130€ / page" },
  { label: "Module prise de RDV en ligne (Cal.com intégré)", price: "150€" },
  { label: "Newsletter avec automation (Brevo / Mailchimp)", price: "250€" },
  { label: "Espace presse / médias (logos, kit téléchargeable)", price: "180€" },
]

const timeline = [
  { week: "Semaine 1", phase: "Brief · Maquettes · Validation design" },
  { week: "Semaine 2", phase: "Développement · Intégration contenu · Bilinguisme" },
  { week: "Semaine 3", phase: "SEO · GEO · Tests · Mise en ligne · Formation" },
]

export default function DevisMadaClient() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SynthesisSection />
      <DetailSection />
      <CareSection />
      <TotalSection />
      <TimelineSection />
      <OptionsSection />
      <ActionsSection />
      <FooterSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-muted/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.06),_transparent_60%)]" />
      <div className="container relative max-w-5xl mx-auto py-20 px-4 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/logo.svg" alt="Web Wizardry" width={36} height={36} className="dark:invert group-hover:scale-105 transition-transform" />
              <span className="font-semibold tracking-tight">Web Wizardry</span>
            </Link>
            <Separator orientation="vertical" className="h-5" />
            <Badge variant="outline" className="text-xs font-mono">{DEVIS_REF}</Badge>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Proposition commerciale
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Site internet sur mesure
            <br />
            <span className="text-muted-foreground">pour le cabinet</span> <span className="font-extrabold">MADA</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Une plateforme institutionnelle bilingue, optimisée pour le référencement
            traditionnel et les moteurs génératifs, à la hauteur des standards des cabinets
            d'affaires internationaux.
          </p>

          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Émis le</p>
              <p className="font-medium">{DEVIS_DATE}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Valable jusqu'au</p>
              <p className="font-medium">{DEVIS_VALIDITY}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Préparé par</p>
              <p className="font-medium">Jacques Chouchani · Web Wizardry</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SynthesisSection() {
  return (
    <section className="border-b border-border bg-muted/20">
      <div className="container max-w-5xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Pages", value: "10", sub: "Site vitrine premium" },
            { label: "Langues", value: "FR · EN", sub: "Bilingue complet" },
            { label: "Délai", value: "3 sem.", sub: "Après acompte" },
            { label: "MADA Care", value: "12 mois", sub: "Reconductible" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{item.label}</p>
              <p className="text-2xl font-bold mb-1">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DetailSection() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Détail des prestations</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">5 phases pour un lancement maîtrisé</h2>
        </div>

        <div className="space-y-4">
          {phases.map((phase, idx) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="border-border/60 hover:border-border transition-colors">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex flex-col items-center min-w-[60px]">
                        <span className="font-mono text-xs text-muted-foreground mb-2">{phase.n}</span>
                        <div className="w-12 h-12 rounded-lg border border-border flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                          <h3 className="text-xl font-bold tracking-tight">{phase.title}</h3>
                          <p className="text-2xl font-bold tabular-nums">{phase.price}€<span className="text-sm font-normal text-muted-foreground ml-1">HT</span></p>
                        </div>
                        <ul className="space-y-2">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CareSection() {
  return (
    <section className="py-20 px-4 border-y border-border bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-4">
              <LifeBuoy className="w-3.5 h-3.5" />
              ABONNEMENT ANNUEL
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">MADA Care</h2>
            <p className="text-lg italic text-muted-foreground mb-6">
              « Un site qui vit avec votre cabinet. »
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold tabular-nums">{CARE_HT}€</span>
              <span className="text-muted-foreground">HT&nbsp;/&nbsp;an</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Soit ≈ {Math.round(CARE_HT / 12)}€&nbsp;HT par mois · facturé annuellement, reconductible.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-5">Inclus dans le forfait</p>
            <ul className="space-y-3">
              {careItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function TotalSection() {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-3">Création du site (phases 01 → 04)</p>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl sm:text-6xl font-bold tabular-nums">{CREATION_HT.toLocaleString("fr-FR")}€</span>
              <span className="text-xl opacity-70">HT</span>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/15">
              <p className="text-sm opacity-90 mb-1">
                <strong>+ MADA Care</strong> · {CARE_HT}€&nbsp;HT&nbsp;/&nbsp;an
              </p>
              <p className="text-base font-bold mt-2">
                Total année 1 · <span className="text-2xl">{TOTAL_YEAR_1_HT.toLocaleString("fr-FR")}€&nbsp;HT</span>
              </p>
              <p className="text-xs opacity-50 mt-2">TVA non applicable, art. 293 B du CGI</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Modalités de règlement</p>
            <div className="space-y-3">
              {[
                { label: "Acompte création à la signature", percent: "50 % du forfait création", amount: Math.round(CREATION_HT * 0.5) },
                { label: "Solde création à la livraison", percent: "50 % du forfait création", amount: Math.round(CREATION_HT * 0.5) },
                { label: "MADA Care · facturé à la mise en ligne", percent: "Reconductible chaque année", amount: CARE_HT },
              ].map((step) => (
                <div key={step.label} className="flex items-baseline justify-between border-b border-primary-foreground/15 pb-3 gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-sm">{step.label}</p>
                    <p className="text-xs opacity-60">{step.percent}</p>
                  </div>
                  <p className="font-mono font-semibold tabular-nums whitespace-nowrap">{step.amount.toLocaleString("fr-FR")}€</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OptionsSection() {
  return (
    <section className="py-20 px-4 border-b border-border">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">À la carte</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Options additionnelles</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Modules optionnels sélectionnables à tout moment, avant ou pendant le projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((option) => (
            <div key={option.label} className="flex items-center justify-between gap-4 p-4 border border-border rounded-lg hover:border-primary/30 transition-colors">
              <span className="text-sm">{option.label}</span>
              <span className="text-sm font-mono font-semibold whitespace-nowrap text-muted-foreground">{option.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="py-20 px-4 bg-muted/20 border-b border-border">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Calendrier prévisionnel</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Mise en ligne en 3 semaines</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timeline.map((step, idx) => (
            <div key={step.week} className="relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
                <span className="text-xs font-mono text-muted-foreground">{step.week}</span>
              </div>
              <p className="text-sm font-medium leading-snug">{step.phase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActionsSection() {
  const [showContact, setShowContact] = useState(false)

  return (
    <section className="py-24 px-4" id="actions">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Prochaine étape</p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          Donnons vie au site MADA.
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Trois manières de nous donner suite. Acceptez le devis pour démarrer immédiatement,
          demandez des ajustements, ou planifiez un échange.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AcceptDialog />
          <ModifyDialog />
          <Button
            variant="outline"
            size="lg"
            className="h-auto py-6 flex-col gap-2"
            onClick={() => setShowContact(!showContact)}
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Contact direct</span>
            <span className="text-xs font-normal opacity-70">Téléphone ou email</span>
          </Button>
        </div>

        {showContact && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-8 p-6 border border-border rounded-lg bg-muted/20 inline-block"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start text-left">
              <a href="tel:+33652588583" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="text-xs text-muted-foreground">Téléphone</p>
                  <p className="font-medium">+33 6 52 58 85 83</p>
                </div>
              </a>
              <a href="mailto:contact@webwizardry.fr?subject=Devis MADA" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">contact@webwizardry.fr</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function AcceptDialog() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string)
  const [data, setData] = useState({ name: "", email: "", notes: "" })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit({
      ...data,
      _subject: `[DEVIS ACCEPTÉ] ${DEVIS_REF} - MADA`,
      action: "Acceptation du devis",
      reference: DEVIS_REF,
      creation: `${CREATION_HT}€ HT`,
      care: `${CARE_HT}€ HT / an`,
      total_year_1: `${TOTAL_YEAR_1_HT}€ HT`,
      mention: "Bon pour accord",
    })
  }

  if (state.succeeded) {
    return (
      <Alert className="md:col-span-3 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
        <Check className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-left">
          <strong>Devis accepté avec succès.</strong> Vous recevrez un email de confirmation
          ainsi que la facture d'acompte sous 24 h. Merci pour votre confiance.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="h-auto py-6 flex-col gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-semibold">Accepter le devis</span>
          <span className="text-xs font-normal opacity-80">Démarrage immédiat</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Validation du devis {DEVIS_REF}</DialogTitle>
          <DialogDescription>
            En validant, vous donnez votre accord pour démarrer le projet aux conditions
            décrites. Une facture d'acompte de {Math.round(CREATION_HT * 0.5).toLocaleString("fr-FR")}€
            (50&nbsp;% du forfait création) vous sera adressée.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="accept-name">Nom et prénom *</Label>
            <Input
              id="accept-name"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Votre nom"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="accept-email">Email professionnel *</Label>
            <Input
              id="accept-email"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="vous@mada.legal"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="accept-notes">Notes (optionnel)</Label>
            <Textarea
              id="accept-notes"
              value={data.notes}
              onChange={(e) => setData({ ...data, notes: e.target.value })}
              placeholder="Précisions sur la facturation, dates souhaitées, etc."
              rows={3}
            />
          </div>
          <Alert className="bg-muted/40 border-border">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              En cliquant sur « Confirmer la validation », vous mentionnez explicitement
              <strong> « Bon pour accord »</strong> sur ce devis daté du {DEVIS_DATE}.
            </AlertDescription>
          </Alert>
          <DialogFooter>
            <Button type="submit" disabled={state.submitting} className="w-full">
              {state.submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
              Confirmer la validation
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function ModifyDialog() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string)
  const [data, setData] = useState({ name: "", email: "", message: "" })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit({
      ...data,
      _subject: `[MODIF DEVIS] ${DEVIS_REF} - MADA`,
      action: "Demande de modification",
      reference: DEVIS_REF,
    })
  }

  if (state.succeeded) {
    return (
      <Alert className="md:col-span-3 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <Check className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-left">
          <strong>Demande envoyée.</strong> Je reviens vers vous sous 24 h ouvrées avec
          une proposition révisée.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg" className="h-auto py-6 flex-col gap-2">
          <Edit3 className="w-5 h-5" />
          <span className="font-semibold">Demander une modification</span>
          <span className="text-xs font-normal opacity-70">Ajustement du devis</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Demande de modification</DialogTitle>
          <DialogDescription>
            Indiquez les éléments à ajuster. Je vous renvoie une proposition révisée
            sous 24 h ouvrées.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="modif-name">Nom et prénom *</Label>
            <Input
              id="modif-name"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modif-email">Email *</Label>
            <Input
              id="modif-email"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="modif-message">Modifications souhaitées *</Label>
            <Textarea
              id="modif-message"
              required
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="Ex : ajouter une page Carrières, retirer le module newsletter, allonger le délai…"
              rows={5}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={state.submitting} className="w-full">
              {state.submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Edit3 className="w-4 h-4 mr-2" />}
              Envoyer la demande
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function FooterSection() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-muted/20">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.svg" alt="Web Wizardry" width={28} height={28} className="dark:invert" />
              <span className="font-semibold">Web Wizardry</span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Studio de création de sites internet performants pour les professionnels exigeants.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Coordonnées</p>
            <p className="text-foreground/80 leading-relaxed">
              Jacques Chouchani<br />
              Paris, France<br />
              +33 6 52 58 85 83<br />
              contact@webwizardry.fr
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Mentions légales</p>
            <p className="text-foreground/80 leading-relaxed">
              SIRET : 851 283 259 00030<br />
              TVA non applicable, art. 293 B du CGI<br />
              Devis valable jusqu'au {DEVIS_VALIDITY}<br />
              Référence : {DEVIS_REF}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Web Wizardry — Document confidentiel établi pour le cabinet MADA</p>
          <Link href="/" className="hover:text-foreground transition-colors">webwizardry.fr</Link>
        </div>
      </div>
    </footer>
  )
}
