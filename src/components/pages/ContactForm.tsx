"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Check, Loader2, AlertTriangle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm, ValidationError } from "@formspree/react"
import { toast } from "sonner"

// Déclaration pour TypeScript (pour l'autocomplétion et éviter les erreurs TS)
declare global {
  interface Window {
    gtag: any;
    gtagSendEvent: (url?: string) => boolean;
  }
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "site-vitrine",
    newsletter: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit({
      ...formData,
      _subject: `Nouveau message de ${formData.name} - WebWizardry`,
      _language: "fr",
      _source: "portfolio-site",
      _referrer: typeof window !== 'undefined' ? window.location.href : "",
      _utm_source: typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('utm_source') || "",
      _utm_medium: typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('utm_medium') || "",
      _utm_campaign: typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('utm_campaign') || "",
    })

    // Si l'utilisateur a coché la newsletter, on l'inscrit
    if (formData.newsletter) {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Une erreur est survenue');
        }

        toast.success('Merci de votre inscription à la newsletter !');
      } catch (error) {
        console.error('Erreur newsletter:', error);
        toast.error(error instanceof Error ? error.message : 'Erreur lors de l\'inscription à la newsletter');
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Discutons de votre projet</CardTitle>
        </CardHeader>

        <CardContent>
          {state.succeeded ? (
            <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
              <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle>Message envoyé avec succès !</AlertTitle>
              <AlertDescription>
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </AlertDescription>
            </Alert>
          ) : state.errors ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>
                Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou me contacter directement par email.
                <ValidationError errors={state.errors} />
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6" id="devis-form">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <ValidationError field="name" prefix="Nom" errors={state.errors} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="exemple@domaine.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <ValidationError field="phone" prefix="Téléphone" errors={state.errors} />
                </div>
                
                <div className="space-y-2">
                  <Label>Type de projet</Label>
                  <RadioGroup 
                    defaultValue="site-vitrine"
                    value={formData.projectType}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="site-vitrine" id="site-vitrine" />
                      <Label htmlFor="site-vitrine" className="font-normal cursor-pointer">Site vitrine</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="e-commerce" id="e-commerce" />
                      <Label htmlFor="e-commerce" className="font-normal cursor-pointer">Site e-commerce</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="application" id="application" />
                      <Label htmlFor="application" className="font-normal cursor-pointer">Application web</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="autre" id="autre" />
                      <Label htmlFor="autre" className="font-normal cursor-pointer">Autre</Label>
                    </div>
                  </RadioGroup>
                  <ValidationError field="projectType" prefix="Type de projet" errors={state.errors} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Votre message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet et vos besoins..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, newsletter: checked === true }))
                    }
                  />
                  <Label htmlFor="newsletter" className="font-normal cursor-pointer">
                    Je souhaite recevoir des conseils et actualités sur le développement web
                  </Label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </Button>
            </form>
          )}
        </CardContent>
        
        {state.succeeded && (
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => window.location.reload()}
            >
              Envoyer un nouveau message
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
} 