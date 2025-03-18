import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NewsletterErrorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Une erreur est survenue</h1>
        <p className="text-lg text-muted-foreground">
          Nous n'avons pas pu traiter votre demande.
          Veuillez réessayer plus tard ou nous contacter directement.
        </p>
        <div className="pt-4 space-x-4">
          <Button asChild variant="outline">
            <Link href="/">
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild>
            <Link href="/contact">
              Nous contacter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 