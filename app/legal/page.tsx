import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pages légales | WebWizardry",
  description: "Consultez les informations légales, politique de confidentialité et conditions générales de vente de WebWizardry",
  keywords: ["mentions légales", "politique de confidentialité", "CGV", "informations légales", "WebWizardry"],
};

export default function LegalIndexPage() {
  const legalPages = [
    {
      id: "mentions-legales",
      title: "Mentions légales",
      description: "Informations légales concernant l'identité de l'éditeur du site, l'hébergeur et les droits de propriété intellectuelle.",
      href: "/legal/mentions-legales",
    },
    {
      id: "politique-de-confidentialite",
      title: "Politique de confidentialité",
      description: "Informations sur la collecte et le traitement des données personnelles, conformément au RGPD.",
      href: "/legal/politique-de-confidentialite",
    },
    {
      id: "conditions-generales-de-vente",
      title: "Conditions Générales de Vente",
      description: "Conditions régissant les relations commerciales entre WebWizardry et ses clients.",
      href: "/legal/conditions-generales-de-vente",
    },
  ];

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" asChild size="sm">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Informations légales</h1>
      
      <p className="text-muted-foreground mb-8">
        Cette section contient toutes les informations légales concernant WebWizardry, la politique de confidentialité et les conditions générales de vente.
      </p>

      <div className="grid gap-6 md:grid-cols-1">
        {legalPages.map((page) => (
          <Link 
            key={page.id} 
            href={page.href}
            className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {page.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {page.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-sm text-muted-foreground">
        <p><em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em></p>
      </div>
    </div>
  );
} 