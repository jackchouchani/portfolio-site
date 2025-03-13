import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | WebWizardry",
  description: "Politique de confidentialité détaillant comment nous traitons vos données personnelles sur WebWizardry.fr",
  keywords: ["politique de confidentialité", "RGPD", "données personnelles", "cookies", "WebWizardry"],
  alternates: {
    canonical: "https://webwizardry.fr/legal/politique-de-confidentialite",
    languages: {
      'fr': 'https://webwizardry.fr/legal/politique-de-confidentialite',
      'x-default': 'https://webwizardry.fr/legal/politique-de-confidentialite'
    }
  }
};

export default function PolitiqueConfidentialitePage() {
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

      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-muted-foreground">
          La présente politique de confidentialité définit et vous informe de la manière dont Jacques CHOUCHANI utilise et protège les informations que vous nous transmettez lorsque vous utilisez le site accessible depuis l'URL suivante : webwizardry.fr
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Identité du responsable de traitement</h2>
        <p>
          Le responsable du traitement des données à caractère personnel est :<br />
          <strong>Jacques CHOUCHANI</strong><br />
          Adresse email : contact@webwizardry.fr
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Données collectées</h2>
        <p>
          WebWizardry.fr peut être amené à collecter les données personnelles suivantes :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>Données d'identification</strong> : nom, prénom, adresse e-mail, numéro de téléphone</li>
          <li><strong>Données de connexion</strong> : adresse IP, type et version de navigateur, système d'exploitation, date et heure de connexion</li>
          <li><strong>Données de navigation</strong> : pages visitées, temps passé sur les pages, actions effectuées sur le site</li>
        </ul>

        <p className="mt-4">
          Ces données sont collectées lorsque vous :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Remplissez le formulaire de contact</li>
          <li>Demandez un devis pour un projet</li>
          <li>Naviguez sur le site (via les cookies et technologies similaires)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Finalités du traitement</h2>
        <p>
          Les données que nous collectons sont utilisées pour les finalités suivantes :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Répondre à vos demandes de contact ou de devis</li>
          <li>Vous proposer des services adaptés à vos besoins</li>
          <li>Améliorer notre site web et nos services</li>
          <li>Établir des statistiques de visite</li>
          <li>Assurer la sécurité du site</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Base légale du traitement</h2>
        <p>
          Nous traitons vos données personnelles sur les bases légales suivantes :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>Consentement</strong> : lorsque vous acceptez explicitement la collecte de vos données</li>
          <li><strong>Exécution d'un contrat</strong> : lorsque le traitement est nécessaire à l'exécution d'un contrat auquel vous êtes partie ou à l'exécution de mesures précontractuelles prises à votre demande</li>
          <li><strong>Intérêt légitime</strong> : lorsque nous avons un intérêt commercial légitime à traiter vos données (amélioration de nos services, sécurité du site, etc.), sans que cela ne porte atteinte à vos intérêts ou à vos droits et libertés fondamentaux</li>
          <li><strong>Obligation légale</strong> : lorsque nous sommes légalement tenus de traiter vos données</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Destinataires des données</h2>
        <p>
          Les données collectées sont destinées aux services internes de Jacques CHOUCHANI. Elles peuvent être transmises à des tiers dans les cas suivants :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Prestataires techniques intervenant dans la gestion du site web et des services associés</li>
          <li>Autorités judiciaires ou administratives lorsque la loi l'exige</li>
        </ul>
        <p className="mt-4">
          Dans tous les cas, nous nous assurons que ces tiers présentent des garanties suffisantes quant à la protection de vos données personnelles.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Durée de conservation</h2>
        <p>
          Vos données personnelles sont conservées pour une durée limitée et proportionnelle à la finalité pour laquelle elles sont traitées :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Données de contact et demandes de devis : 3 ans à compter du dernier contact</li>
          <li>Données relatives aux clients : durée de la relation contractuelle, augmentée des délais de prescription légaux (5 ans)</li>
          <li>Cookies et données de navigation : 13 mois maximum</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Cookies et technologies similaires</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation et réaliser des statistiques de visite. Les cookies sont de petits fichiers texte stockés sur votre terminal (ordinateur, tablette, smartphone) lorsque vous naviguez sur notre site.
        </p>
        <p className="mt-4">
          Types de cookies utilisés :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
          <li><strong>Cookies analytiques</strong> : permettent de suivre et analyser le comportement des utilisateurs pour améliorer le site</li>
          <li><strong>Cookies fonctionnels</strong> : permettent de mémoriser vos préférences (comme le mode clair/sombre)</li>
        </ul>
        <p className="mt-4">
          Vous pouvez à tout moment désactiver les cookies en paramétrant votre navigateur. Pour en savoir plus sur la gestion des cookies, consultez la rubrique "Aide" de votre navigateur.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>Droit d'accès</strong> : vous pouvez obtenir des informations concernant le traitement de vos données ainsi qu'une copie de celles-ci</li>
          <li><strong>Droit de rectification</strong> : vous pouvez demander la rectification de vos données inexactes ou incomplètes</li>
          <li><strong>Droit à l'effacement</strong> : vous pouvez demander l'effacement de vos données dans certains cas</li>
          <li><strong>Droit à la limitation du traitement</strong> : vous pouvez demander la limitation du traitement de vos données dans certains cas</li>
          <li><strong>Droit à la portabilité</strong> : vous pouvez demander à recevoir vos données dans un format structuré, couramment utilisé et lisible par machine</li>
          <li><strong>Droit d'opposition</strong> : vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</li>
          <li><strong>Droit de retirer votre consentement</strong> à tout moment pour les traitements basés sur le consentement</li>
          <li><strong>Droit de définir des directives</strong> relatives au sort de vos données après votre décès</li>
        </ul>
        <p className="mt-4">
          Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse suivante : contact@webwizardry.fr
        </p>
        <p className="mt-4">
          Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque que présentent le traitement et la nature des données à protéger. Ces mesures visent à préserver la confidentialité, l'intégrité et la disponibilité de vos données.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">10. Transfert de données hors UE</h2>
        <p>
          Par principe, vos données personnelles sont hébergées et traitées au sein de l'Union Européenne. Toutefois, certains de nos prestataires techniques peuvent être situés en dehors de l'Union Européenne. Dans ce cas, nous nous assurons que les transferts de données sont encadrés par les garanties appropriées (décision d'adéquation, clauses contractuelles types, etc.).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">11. Modification de la politique de confidentialité</h2>
        <p>
          Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment, notamment pour nous conformer aux évolutions réglementaires. Les modifications sont applicables dès leur publication sur notre site web.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact</h2>
        <p>
          Pour toute question relative à la présente politique de confidentialité ou pour toute demande relative à vos données personnelles, vous pouvez nous contacter à l'adresse suivante : contact@webwizardry.fr
        </p>
        
        <div className="mt-12 text-sm text-muted-foreground">
          <p><em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em></p>
        </div>
      </div>
    </div>
  );
} 