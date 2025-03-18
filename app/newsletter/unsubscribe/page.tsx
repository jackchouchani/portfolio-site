import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function UnsubscribePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="mb-8">
          <span className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </span>
          <h1 className="text-4xl font-bold text-foreground">Désabonnement confirmé</h1>
        </div>
        
        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg">
            Vous avez été désabonné avec succès de notre newsletter.
          </p>
          <p>
            Nous sommes désolés de vous voir partir. Si vous souhaitez nous faire part de vos remarques
            ou suggestions, n'hésitez pas à nous contacter.
          </p>
          <p className="text-sm">
            Vous pouvez vous réabonner à tout moment depuis notre site.
          </p>
        </div>

        <div className="pt-8 flex justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
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