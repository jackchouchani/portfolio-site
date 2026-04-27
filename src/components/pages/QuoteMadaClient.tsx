"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
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
const DEVIS_DATE = "April 27, 2026"
const DEVIS_VALIDITY = "May 27, 2026"
const CREATION_HT = 2480
const CARE_HT = 990
const TOTAL_YEAR_1_HT = CREATION_HT + CARE_HT

const phases = [
  {
    n: "01",
    icon: Sparkles,
    title: "Strategy & Design",
    price: 350,
    items: [
      "Strategic brief and benchmark of reference firms",
      "Complete information architecture (10 pages)",
      "High-fidelity mockups — desktop and mobile versions",
      "Faithful adaptation of the brand guidelines provided by MADA to web constraints",
    ],
  },
  {
    n: "02",
    icon: Globe2,
    title: "Website Development",
    price: 1300,
    items: [
      "Bespoke Next.js site — 10 pages (Home, The Firm, Team, 4 Practice Areas, Insights, News, Contact)",
      "Integrated CMS for editorial autonomy (blog, news, team profiles)",
      "Full FR / EN bilingualism with dedicated SEO routing per language",
      "Responsive design (desktop, tablet, mobile)",
      "Subtle animations and optimised performance (target Lighthouse 95+)",
      "Full GDPR compliance (cookie banner, legal notices, privacy policy)",
      "Contact form segmented by practice area",
    ],
  },
  {
    n: "03",
    icon: Search,
    title: "Premium SEO + GEO",
    price: 690,
    items: [
      "Full SEO audit and keyword strategy for legal verticals",
      "Technical optimisation (Core Web Vitals, sitemap, robots.txt)",
      "Schema.org structured data (LegalService, Attorney, LocalBusiness)",
      "GEO / AEO — optimisation for ChatGPT, Perplexity, Google AI Overviews and Claude",
      "Google Search Console + Analytics 4 setup",
      "Listing in leading legal directories",
    ],
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & Training",
    price: 140,
    items: [
      "Connection of the mada.legal domain (already acquired) to the Vercel infrastructure",
      "Deployment to premium infrastructure",
      "2-hour training session (CMS, publishing, SEO best practices)",
      "User documentation delivered",
    ],
  },
]

const careItems = [
  "Premium Vercel Pro hosting + mada.legal domain renewal",
  "SSL certificate + 24/7 uptime monitoring + daily backups",
  "Continuous technical updates (Next.js, dependencies, security patches)",
  "Priority support — response within 24 business hours",
  "3 hours per month of evolutions included (text edits, news, deals, photos)",
  "Quarterly SEO audit + performance and traffic reporting",
  "Guaranteed restoration in case of incident",
]

const options = [
  { label: "Bespoke legal content writing", price: "€80 / page" },
  { label: "Additional practice area page (beyond the 4 included)", price: "€130 / page" },
  { label: "Online booking module (Cal.com integrated)", price: "€150" },
  { label: "Newsletter with automation (Brevo / Mailchimp)", price: "€250" },
  { label: "Press / media kit (logos, downloadable assets)", price: "€180" },
]

const timeline = [
  { week: "Week 1", phase: "Brief · Mockups · Design validation" },
  { week: "Week 2", phase: "Development · Content integration · Bilingualism" },
  { week: "Week 3", phase: "SEO · GEO · Testing · Launch · Training" },
]

export default function QuoteMadaClient() {
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

function LanguageSwitcher() {
  return (
    <Link
      href="/devis/mada"
      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
      title="Voir en français"
    >
      <Globe2 className="w-3 h-3" />
      EN <span className="opacity-40">/</span> <span className="opacity-60">FR</span>
    </Link>
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
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/logo.svg" alt="Web Wizardry" width={36} height={36} className="dark:invert group-hover:scale-105 transition-transform" />
              <span className="font-semibold tracking-tight">Web Wizardry</span>
            </Link>
            <Separator orientation="vertical" className="h-5" />
            <Badge variant="outline" className="text-xs font-mono">{DEVIS_REF}</Badge>
            <Separator orientation="vertical" className="h-5" />
            <LanguageSwitcher />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Commercial proposal
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Bespoke website
            <br />
            <span className="text-muted-foreground">for the firm</span> <span className="font-extrabold">MADA</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed text-justify hyphens-auto">
            A bilingual institutional platform, optimised for both traditional search
            engines and generative AI search, meeting the standards of international
            business law firms.
          </p>

          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Issued on</p>
              <p className="font-medium">{DEVIS_DATE}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Valid until</p>
              <p className="font-medium">{DEVIS_VALIDITY}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Prepared by</p>
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
            { label: "Pages", value: "10", sub: "Premium showcase site" },
            { label: "Languages", value: "FR · EN", sub: "Fully bilingual" },
            { label: "Delivery", value: "3 wks", sub: "After deposit" },
            { label: "MADA Care", value: "12 mos", sub: "Renewable" },
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
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Detailed deliverables</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">5 phases for a controlled launch</h2>
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
                          <p className="text-2xl font-bold tabular-nums">€{phase.price.toLocaleString("en-GB")}<span className="text-sm font-normal text-muted-foreground ml-1">excl. VAT</span></p>
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
              ANNUAL SUBSCRIPTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">MADA Care</h2>
            <p className="text-lg italic text-muted-foreground mb-6">
              "A website that grows with your firm."
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold tabular-nums">€{CARE_HT}</span>
              <span className="text-muted-foreground">excl. VAT&nbsp;/&nbsp;year</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Approx. €{Math.round(CARE_HT / 12)} excl. VAT per month · billed annually, renewable.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-5">Included in the subscription</p>
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
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-3">Site creation (phases 01 → 04)</p>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl sm:text-6xl font-bold tabular-nums">€{CREATION_HT.toLocaleString("en-GB")}</span>
              <span className="text-xl opacity-70">excl. VAT</span>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/15">
              <p className="text-sm opacity-90 mb-1">
                <strong>+ MADA Care</strong> · €{CARE_HT}&nbsp;excl. VAT&nbsp;/&nbsp;year
              </p>
              <p className="text-base font-bold mt-2">
                Total year 1 · <span className="text-2xl">€{TOTAL_YEAR_1_HT.toLocaleString("en-GB")}&nbsp;excl. VAT</span>
              </p>
              <p className="text-xs opacity-50 mt-2">VAT exempt, art. 293 B of the French Tax Code</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Payment terms</p>
            <div className="space-y-3">
              {[
                { label: "Creation deposit upon signing", percent: "50% of creation fee", amount: Math.round(CREATION_HT * 0.5) },
                { label: "Creation balance upon delivery", percent: "50% of creation fee", amount: Math.round(CREATION_HT * 0.5) },
                { label: "MADA Care · invoiced at launch", percent: "Renewable annually", amount: CARE_HT },
              ].map((step) => (
                <div key={step.label} className="flex items-baseline justify-between border-b border-primary-foreground/15 pb-3 gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-sm">{step.label}</p>
                    <p className="text-xs opacity-60">{step.percent}</p>
                  </div>
                  <p className="font-mono font-semibold tabular-nums whitespace-nowrap">€{step.amount.toLocaleString("en-GB")}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Optional add-ons</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Optional modules selectable at any time, before or during the project.
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
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Project timeline</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Live in 3 weeks</h2>
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
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Next step</p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          Let's bring MADA to life.
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Three ways to move forward. Approve the quote to start immediately,
          request adjustments, or schedule a conversation.
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
            <span className="font-semibold">Direct contact</span>
            <span className="text-xs font-normal opacity-70">Phone or email</span>
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
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">+33 6 52 58 85 83</p>
                </div>
              </a>
              <a href="mailto:contact@webwizardry.fr?subject=MADA Quote" className="flex items-center gap-3 hover:text-primary transition-colors">
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
      _subject: `[QUOTE ACCEPTED] ${DEVIS_REF} - MADA`,
      action: "Quote acceptance",
      reference: DEVIS_REF,
      creation: `€${CREATION_HT} excl. VAT`,
      care: `€${CARE_HT} excl. VAT / year`,
      total_year_1: `€${TOTAL_YEAR_1_HT} excl. VAT`,
      mention: "Read and approved",
    })
  }

  if (state.succeeded) {
    return (
      <Alert className="md:col-span-3 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
        <Check className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-left">
          <strong>Quote successfully approved.</strong> You will receive a confirmation
          email and the deposit invoice within 24 hours. Thank you for your trust.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="h-auto py-6 flex-col gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-semibold">Approve the quote</span>
          <span className="text-xs font-normal opacity-80">Immediate kick-off</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quote validation {DEVIS_REF}</DialogTitle>
          <DialogDescription>
            By approving, you agree to start the project under the conditions described.
            A deposit invoice of €{Math.round(CREATION_HT * 0.5).toLocaleString("en-GB")}
            (50% of the creation fee) will be sent to you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="accept-name">First and last name *</Label>
            <Input
              id="accept-name"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="accept-email">Business email *</Label>
            <Input
              id="accept-email"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="you@mada.legal"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="accept-notes">Notes (optional)</Label>
            <Textarea
              id="accept-notes"
              value={data.notes}
              onChange={(e) => setData({ ...data, notes: e.target.value })}
              placeholder="Billing details, preferred dates, etc."
              rows={3}
            />
          </div>
          <Alert className="bg-muted/40 border-border">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              By clicking "Confirm approval", you explicitly mark this quote dated
              {' '}{DEVIS_DATE} as <strong>"Read and approved"</strong>.
            </AlertDescription>
          </Alert>
          <DialogFooter>
            <Button type="submit" disabled={state.submitting} className="w-full">
              {state.submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
              Confirm approval
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
      _subject: `[QUOTE MODIFICATION] ${DEVIS_REF} - MADA`,
      action: "Modification request",
      reference: DEVIS_REF,
    })
  }

  if (state.succeeded) {
    return (
      <Alert className="md:col-span-3 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <Check className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-left">
          <strong>Request sent.</strong> I will get back to you within 24 business hours
          with a revised proposal.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg" className="h-auto py-6 flex-col gap-2">
          <Edit3 className="w-5 h-5" />
          <span className="font-semibold">Request modifications</span>
          <span className="text-xs font-normal opacity-70">Adjust the quote</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modification request</DialogTitle>
          <DialogDescription>
            Indicate what should be adjusted. I'll send back a revised proposal within
            24 business hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="modif-name">First and last name *</Label>
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
            <Label htmlFor="modif-message">Requested modifications *</Label>
            <Textarea
              id="modif-message"
              required
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="E.g.: add a Careers page, remove the newsletter module, extend the deadline…"
              rows={5}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={state.submitting} className="w-full">
              {state.submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Edit3 className="w-4 h-4 mr-2" />}
              Send request
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
              Bespoke website studio for demanding professionals.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Contact</p>
            <p className="text-foreground/80 leading-relaxed">
              Jacques Chouchani<br />
              Paris, France<br />
              +33 6 52 58 85 83<br />
              contact@webwizardry.fr
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Legal information</p>
            <p className="text-foreground/80 leading-relaxed">
              SIRET: 851 283 259 00030<br />
              VAT exempt, art. 293 B of French Tax Code<br />
              Quote valid until {DEVIS_VALIDITY}<br />
              Reference: {DEVIS_REF}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Web Wizardry — Confidential document prepared for MADA</p>
          <Link href="/" className="hover:text-foreground transition-colors">webwizardry.fr</Link>
        </div>
      </div>
    </footer>
  )
}
