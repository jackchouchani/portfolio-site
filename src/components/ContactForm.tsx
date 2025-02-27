"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { 
  Alert, 
  AlertTitle, 
  AlertDescription 
} from "@/components/ui/alert"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler un envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    }, 1500)
  }

  return (
    <div className="w-full">
      {submitSuccess ? (
        <Alert className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-900 text-center py-6">
          <div className="flex justify-center mb-3 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <AlertTitle className="font-medium text-green-800 dark:text-green-300 mb-1 text-xl">Message envoyé !</AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-400">
            Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
          </AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Nom complet
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@example.com"
                required
                className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-foreground">
              Sujet
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Le sujet de votre message"
              required
              className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Détaillez votre projet ou votre demande..."
              rows={6}
              required
              className="border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-6 font-semibold text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Envoyer le message
                <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  )
} 