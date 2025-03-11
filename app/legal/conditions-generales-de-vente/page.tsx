import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | WebWizardry",
  description: "Conditions Générales de Vente régissant les relations commerciales avec WebWizardry",
  keywords: ["conditions générales de vente", "CGV", "contrat", "prestations de services", "développement web", "WebWizardry"],
};

export default function CGVPage() {
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

      <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-muted-foreground">
          Les présentes Conditions Générales de Vente (CGV) définissent les droits et obligations des parties dans le cadre des prestations de services proposées par Jacques CHOUCHANI, exerçant sous le nom commercial "WebWizardry", ci-après désigné "le Prestataire", à ses clients, ci-après désignés "le Client".
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 1 - Champ d'application</h2>
        <p>
          Les présentes CGV s'appliquent à toutes les prestations de services conclues par le Prestataire auprès de ses Clients, quelles que soient les clauses pouvant figurer sur les documents du Client, et notamment ses conditions générales d'achat.
        </p>
        <p className="mt-4">
          Conformément à la réglementation en vigueur, le Prestataire se réserve le droit de déroger à certaines clauses des présentes CGV en fonction des négociations menées avec le Client, par l'établissement de Conditions Particulières.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 2 - Services proposés</h2>
        <p>
          Le Prestataire propose des services de développement web, notamment :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Création de sites web (vitrines, e-commerce, applications web)</li>
          <li>Refonte et amélioration de sites existants</li>
          <li>Développement d'applications web personnalisées</li>
          <li>Intégration web (HTML/CSS)</li>
          <li>Développement front-end et back-end</li>
          <li>Optimisation SEO</li>
          <li>Maintenance de sites web</li>
        </ul>
        <p className="mt-4">
          Cette liste n'est pas exhaustive et peut être complétée par d'autres prestations en fonction des demandes spécifiques du Client.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 3 - Commandes et devis</h2>
        <p>
          Les ventes de prestations ne sont parfaites qu'après établissement d'un devis et acceptation expresse et par écrit de la commande du Client par le Prestataire, matérialisée par un accusé de réception émanant du Prestataire et acceptation du devis.
        </p>
        <p className="mt-4">
          Les devis établis par le Prestataire sont valables pour une durée de 30 jours à compter de leur émission.
        </p>
        <p className="mt-4">
          Toute commande doit faire l'objet d'un acompte dont le montant est précisé dans le devis. Cet acompte n'est pas remboursable en cas d'annulation de la commande par le Client.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 4 - Tarifs</h2>
        <p>
          Les prestations de services sont fournies aux tarifs en vigueur au jour de la passation de la commande, selon le devis préalablement établi par le Prestataire et accepté par le Client.
        </p>
        <p className="mt-4">
          Les tarifs s'entendent en euros et hors taxes (TVA non applicable, art. 293 B du CGI).
        </p>
        <p className="mt-4">
          Une facture est établie par le Prestataire et remise au Client lors de la fourniture des services commandés.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 5 - Conditions de paiement</h2>
        <p>
          Le prix est payable selon les modalités suivantes :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>30% d'acompte à la commande</li>
          <li>40% à la livraison de la première version</li>
          <li>30% à la livraison finale</li>
        </ul>
        <p className="mt-4">
          Le Prestataire se réserve le droit de modifier ces conditions pour certains projets, les modalités spécifiques étant alors précisées dans le devis.
        </p>
        <p className="mt-4">
          Les paiements effectués par le Client ne seront considérés comme définitifs qu'après encaissement effectif des sommes dues par le Prestataire.
        </p>
        <p className="mt-4">
          En cas de retard de paiement et de versement des sommes dues par le Client au-delà du délai fixé ci-dessus, des pénalités de retard calculées au taux légal en vigueur seront automatiquement et de plein droit acquises au Prestataire, sans formalité aucune ni mise en demeure préalable.
        </p>
        <p className="mt-4">
          En outre, en application des articles L. 441-10 et D. 441-5 du Code de commerce, une indemnité forfaitaire pour frais de recouvrement d'un montant de 40 euros sera due en cas de retard de paiement.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 6 - Modalités de fourniture des services</h2>
        <p>
          Le Prestataire s'engage à mettre en œuvre tous les moyens nécessaires à la fourniture des services commandés par le Client.
        </p>
        <p className="mt-4">
          Le délai de fourniture des services est donné à titre indicatif dans le devis. Ce délai ne constitue pas un délai de rigueur et le Prestataire ne pourra voir sa responsabilité engagée à l'égard du Client en cas de retard dans la fourniture des services n'excédant pas 30 jours.
        </p>
        <p className="mt-4">
          En cas de retard supérieur à 30 jours, le Client pourra demander la résolution de la vente. Les acomptes déjà versés lui seront alors restitués.
        </p>
        <p className="mt-4">
          La responsabilité du Prestataire ne pourra en aucun cas être engagée en cas de retard ou de suspension de la fourniture de la prestation imputable au Client, ou en cas de force majeure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 7 - Obligations du Client</h2>
        <p>
          Pour permettre au Prestataire de réaliser sa mission, le Client s'engage à :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Établir un cahier des charges détaillé qui ne subira plus de modification, sauf accord des parties, après avoir été approuvé par le Prestataire</li>
          <li>Fournir tous les éléments documentaires, graphiques et textuels nécessaires à la bonne réalisation du projet</li>
          <li>Disposer des droits nécessaires sur les éléments fournis</li>
          <li>Collaborer activement à la réussite du projet en répondant rapidement aux sollicitations du Prestataire</li>
          <li>Se conformer strictement aux préconisations techniques et créatives faites par le Prestataire</li>
          <li>Garantir le Prestataire contre toute action qui pourrait lui être intentée à un titre quelconque, par toute personne qui estimerait avoir des droits sur les éléments fournis</li>
          <li>Régler dans les délais précis les sommes dues au Prestataire</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 8 - Propriété intellectuelle</h2>
        <p>
          Tous les éléments créés par le Prestataire dans le cadre de la prestation et livrés au Client deviennent la propriété du Client à compter du paiement intégral de la prestation, à l'exception des éléments sous licence tierce (logiciels, plugins, images, etc.) qui restent soumis à leurs licences respectives.
        </p>
        <p className="mt-4">
          Le Prestataire conserve le droit d'utiliser les créations réalisées à des fins de démonstration et de portfolio, sauf stipulation contraire écrite.
        </p>
        <p className="mt-4">
          Le code source développé spécifiquement pour le Client devient sa propriété à compter du paiement intégral de la prestation, sauf mention contraire dans le devis.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 9 - Garanties</h2>
        <p>
          Le Prestataire garantit au Client la conformité des prestations fournies par rapport au devis accepté et aux règles de l'art.
        </p>
        <p className="mt-4">
          La garantie ne s'applique pas dans les cas suivants :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Défaut d'utilisation conforme aux instructions fournies</li>
          <li>Modification apportée par le Client ou un tiers sur les prestations livrées</li>
          <li>Détérioration provenant d'un cas de force majeure</li>
          <li>Problème lié à l'hébergement du site</li>
        </ul>
        <p className="mt-4">
          Le Prestataire assure une garantie de bon fonctionnement de 3 mois après la livraison finale pour corriger d'éventuels bugs ou défauts de fonctionnement non détectés lors de la validation finale par le Client.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 10 - Limitation de responsabilité</h2>
        <p>
          La responsabilité du Prestataire est limitée au montant des prestations réglées par le Client.
        </p>
        <p className="mt-4">
          Le Prestataire ne saurait être tenu pour responsable des dommages directs ou indirects que pourrait subir le Client à la suite d'un dysfonctionnement du service fourni, et notamment :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Perte d'exploitation</li>
          <li>Perte de profit ou de données</li>
          <li>Dommage commercial ou atteinte à l'image de marque</li>
        </ul>
        <p className="mt-4">
          Le Prestataire ne peut être tenu responsable des défaillances techniques du serveur d'hébergement du Client, des perturbations liées au réseau Internet ou de toute autre circonstance indépendante de sa volonté.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 11 - Droit de rétractation</h2>
        <p>
          Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
        </p>
        <p className="mt-4">
          En conséquence, pour les clients consommateurs au sens du Code de la consommation, il est précisé que le droit de rétractation est applicable, sauf si les prestations ont commencé, avec l'accord du client, avant la fin du délai de rétractation de 14 jours.
        </p>
        <p className="mt-4">
          Pour les clients professionnels, aucun droit de rétractation n'est applicable.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 12 - Référencement et publicité</h2>
        <p>
          Sauf mention contraire explicite du Client, le Prestataire se réserve la possibilité d'inclure dans la réalisation une mention discrète comportant notamment son nom et l'URL de son site web.
        </p>
        <p className="mt-4">
          Le Client autorise le Prestataire à utiliser son nom et à mentionner les prestations réalisées pour son compte à des fins publicitaires et commerciales.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 13 - Force majeure</h2>
        <p>
          Aucune des parties ne pourra être tenue pour responsable de son retard ou de sa défaillance à exécuter l'une des obligations à sa charge si ce retard ou cette défaillance est l'effet direct ou indirect d'un cas de force majeure, tel que défini par l'article 1218 du Code civil et la jurisprudence des tribunaux français.
        </p>
        <p className="mt-4">
          Dans un tel cas, les parties conviennent que le contrat pourra être suspendu jusqu'à la cessation du cas de force majeure, ou résilié si le cas de force majeure persiste plus de deux mois, sans qu'aucune des parties ne puisse prétendre à une quelconque indemnité.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 14 - Confidentialité</h2>
        <p>
          Chacune des parties s'engage à conserver confidentiels les informations et documents concernant l'autre partie de quelque nature qu'ils soient, auxquels elle aurait pu avoir accès au cours de l'exécution du contrat.
        </p>
        <p className="mt-4">
          Cette obligation de confidentialité se poursuivra après la cessation des relations contractuelles.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 15 - Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes CGV et les opérations qui en découlent sont régies par le droit français.
        </p>
        <p className="mt-4">
          En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
        </p>
        <p className="mt-4">
          À défaut d'accord amiable, tous les litiges auxquels les présentes CGV pourraient donner lieu, concernant tant leur validité, leur interprétation, leur exécution, leur résiliation, leurs conséquences et leurs suites seront soumis aux tribunaux compétents de Paris.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Article 16 - Contact</h2>
        <p>
          Pour toute question relative aux présentes CGV, vous pouvez contacter le Prestataire à l'adresse suivante : contact@webwizardry.fr
        </p>
        
        <div className="mt-12 text-sm text-muted-foreground">
          <p><em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em></p>
        </div>
      </div>
    </div>
  );
} 