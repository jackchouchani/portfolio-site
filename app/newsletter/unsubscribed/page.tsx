import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UnsubscribedPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Désabonnement confirmé</h1>
        <p className="text-lg text-muted-foreground">
          Vous avez été désabonné avec succès de notre newsletter.
          Nous sommes désolés de vous voir partir !
        </p>
        <p className="text-muted-foreground">
          Si vous changez d'avis, vous pouvez vous réabonner à tout moment.
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link href="/">
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 