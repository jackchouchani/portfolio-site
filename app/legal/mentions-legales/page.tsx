import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mentions Légales | WebWizardry",
  description: "Mentions légales et informations juridiques concernant le site WebWizardry.fr",
  keywords: ["mentions légales", "informations juridiques", "WebWizardry", "LCEN"],
  alternates: {
    canonical: "https://webwizardry.fr/legal/mentions-legales",
    languages: {
      'fr': 'https://webwizardry.fr/legal/mentions-legales',
      'x-default': 'https://webwizardry.fr/legal/mentions-legales'
    }
  }
};

export default function MentionsLegalesPage() {
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

      <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-muted-foreground">
          Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes :
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Informations légales</h2>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Éditeur du site</h3>
        <p>
          <strong>Nom :</strong> Jacques CHOUCHANI<br />
          <strong>Statut :</strong> Entrepreneur individuel<br />
          <strong>Adresse :</strong> Paris, France<br />
          <strong>Email :</strong> contact@webwizardry.fr<br />
          <strong>Téléphone :</strong> +33 6 52 58 85 83<br />
          <strong>SIRET :</strong> [À renseigner]<br />
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Hébergeur du site</h3>
        <p>
          <strong>Hébergeur :</strong> Vercel Inc.<br />
          <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
          <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Présentation et principe</h2>
        <p>
          Tout internaute qui se connecte et utilise le site webwizardry.fr est considéré comme utilisateur du site.
        </p>
        <p>
          Le site webwizardry.fr regroupe un ensemble de services, dans l'état, mis à la disposition des utilisateurs. Il est précisé que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu'envers le webmaster du site. Le site est mis à jour régulièrement par son propriétaire.
        </p>
        <p>
          Jacques CHOUCHANI s'efforce de fournir sur le site des informations les plus précises possibles (sous réserve de modifications apportées depuis leur mise en ligne). Cependant, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Accessibilité</h2>
        <p>
          Le site webwizardry.fr est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d'impossibilité d'accès au service, le site s'engage à faire son maximum afin de rétablir l'accès au service. Le site ne saurait être tenu pour responsable de tout dommage, quelle qu'en soit la nature, résultant d'une indisponibilité du service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Propriété intellectuelle</h2>
        <p>
          Jacques CHOUCHANI est propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, tant sur la structure que sur les textes, images, graphismes, logo, icônes, sons, logiciels, etc.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Jacques CHOUCHANI.
        </p>
        <p>
          Toute exploitation non autorisée du site ou d'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Liens hypertextes et cookies</h2>
        <p>
          Le site webwizardry.fr contient des liens hypertextes vers d'autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d'autres sites vers webwizardry.fr.
        </p>
        <p>
          La navigation sur le site webwizardry.fr est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre Politique de Confidentialité.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Droit applicable et juridiction compétente</h2>
        <p>
          Tout litige en relation avec l'utilisation du site webwizardry.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact</h2>
        <p>
          Pour toute question ou demande d'information concernant le site, ou tout signalement de contenu ou d'activités illicites, l'utilisateur peut contacter l'éditeur à l'adresse e-mail suivante : contact@webwizardry.fr ou adresser un courrier à l'adresse indiquée précédemment.
        </p>
        
        <div className="mt-12 text-sm text-muted-foreground">
          <p><em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em></p>
        </div>
      </div>
    </div>
  );
} 