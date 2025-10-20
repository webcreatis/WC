import type { Metadata } from "next";
import CustomCursor from "../ui/CustomCursor";

// Metadata
export const metadata: Metadata = {
  title: "Consultez notre politique de confidentialité | Webcreatis",
  description:
    "La protection de vos données est notre priorité. Pour toute question, notre équipe est à votre écoute.",
  alternates: {
    canonical: "https://www.webcreatis.fr/politique-de-confidentialite",
  },
  openGraph: {
    title: "Consultez notre politique de confidentialité | Webcreatis",
    description:
      "La protection de vos données est notre priorité. Pour toute question, notre équipe est à votre écoute.",
    url: "https://www.webcreatis.fr/politique-de-confidentialite",
    siteName: "Webcreatis",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://www.webcreatis.fr/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Webcreatis - Politique de confidentialité",
      },
    ],
  },
  other: {
    "instagram:creator": "@webcreatis",
    "instagram:site": "@webcreatis",
    "article:author": "https://www.instagram.com/webcreatis/",
  },
  authors: [{ name: "Webcreatis", url: "https://www.webcreatis.fr" }],
  category: "technology",
  creator: "Webcreatis",
  publisher: "Webcreatis",
  metadataBase: new URL("https://www.webcreatis.fr"),
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="politique px-5 space-y-6 w-full font-raleway text-white pb-20 md:px-10">
      <div className="lg:w-1/2 lg:m-auto">
        <h1 className="text-3xl font-bold mb-6 font-jaapokki pt-52 pb-5 w-full md:pb-10 md:text-4xl lg:text-5xl">
          Politique de confidentialité
        </h1>

        <p className="text-base md:text-lg xl:text-xl">
          Politique de confidentialité de WebCreatis.re et .fr
        </p>

        <p className="text-base md:text-lg xl:text-xl">
          Chez WebCreatis, nous accordons une grande importance à la protection
          de vos données personnelles. Cette politique de confidentialité
          explique comment nous recueillons, utilisons et protégeons les
          informations que vous nous fournissez lorsque vous utilisez notre site
          Web.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Collecte et utilisation des données personnelles
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Lorsque vous visitez notre site Web, nous pouvons collecter certaines
          informations personnelles vous concernant.
          <br />
          Nous utilisons vos informations personnelles pour vous fournir les
          services que vous avez demandés, pour répondre à vos questions et pour
          vous envoyer des communications pertinentes concernant nos services.
          Vos informations peuvent également être utilisées à des fins internes
          telles que l’analyse statistique, l’amélioration de nos services et la
          personnalisation de votre expérience sur notre site Web.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Protection des données
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Nous prenons toutes les mesures nécessaires pour assurer la sécurité
          et la confidentialité de vos données personnelles. Nous utilisons des
          mesures de sécurité appropriées pour protéger vos informations contre
          tout accès, divulgation, altération ou destruction non autorisés.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Partage des données personnelles
        </h2>
        <div className="text-base md:text-lg xl:text-xl">
          Nous ne vendons, ne louons ni ne partageons vos données personnelles
          avec des tiers, sauf dans les cas suivants :
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>
              Si vous avez donné votre consentement explicite pour le partage de
              vos informations.
            </li>
            <li>
              Si cela est nécessaire pour répondre à une obligation légale ou
              pour protéger nos droits, notre propriété ou notre sécurité, ainsi
              que ceux de nos utilisateurs ou du public.
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Liens vers des sites tiers
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Notre site Web peut contenir des liens vers des sites Web de tiers.
          Veuillez noter que nous ne sommes pas responsables de la collecte, de
          l’utilisation ou de la divulgation des informations, des pratiques de
          confidentialité ou du contenu de ces sites Web. Nous vous encourageons
          à lire les politiques de confidentialité de ces sites tiers avant de
          fournir vos informations personnelles.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Conservation des données
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Nous ne conservons vos données personnelles que le temps nécessaire
          pour atteindre les finalités pour lesquelles elles ont été collectées,
          sauf si la loi nous oblige à les conserver plus longtemps.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">Vos droits</h2>
        <p className="text-base md:text-lg xl:text-xl">
          Vous avez le droit d’accéder, de corriger, de mettre à jour ou de
          supprimer vos informations personnelles que nous détenons. Si vous
          souhaitez exercer ces droits ou si vous avez des questions concernant
          notre politique de confidentialité, veuillez nous contacter en
          utilisant les informations fournies ci-dessous.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Modifications de la politique de confidentialité
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Toute modification sera publiée sur
          cette page avec une date de mise à jour. Nous vous encourageons à
          consulter régulièrement cette page pour rester informé des éventuelles
          modifications.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">Nous contacter</h2>
        <p className="mb-2">
          Si vous avez des questions, des préoccupations ou des demandes
          concernant cette politique de confidentialité, veuillez nous contacter
          à l’adresse suivante :
        </p>
        <p className="text-base md:text-lg xl:text-xl">
          <strong>WebCreatis</strong>
          <br />
          Camp de base : La Réunion
          <br />
          Téléphone : 06 93 51 44 39
          <br />
          E-mail : contact.webcreatis@gmail.com
        </p>

        <p className="text-base text-green md:text-lg xl:text-xl">
          Dernière mise à jour : Dimanche 25 Mai 2025
        </p>
      </div>
      <CustomCursor />
    </section>
  );
}
