import { Metadata } from "next";
import CustomCursor from "../ui/CustomCursor";

// Metadata
export const metadata: Metadata = {
  title: "Mentions Légales Protections et Droits | Webcreatis",
  description:
    "Mentions légales : droits d’auteur, protection des données personnelles et informations sur le contenu du site.",
  alternates: {
    canonical: "https://www.webcreatis.fr/mentions-legales",
  },
  openGraph: {
    title: "Mentions Légales Protections et Droits | Webcreatis",
    description:
      "Mentions légales : droits d’auteur, protection des données personnelles et informations sur le contenu du site.",
    url: "https://www.webcreatis.fr/mentions-legales",
    siteName: "Webcreatis",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://www.webcreatis.fr/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Webcreatis - Mentions legales",
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

export default function MentionsLegales() {
  return (
    <section className="politique px-5 space-y-6 w-full font-raleway text-white pb-20 md:px-10">
      <div className="lg:w-1/2 lg:m-auto">
        <h1 className="text-3xl font-bold mb-6 font-jaapokki pt-52 pb-5 w-full md:pb-10 md:text-4xl lg:text-5xl">
          Mentions Légales
        </h1>
        <h2 className="text-xl font-semibold xl:text-3xl">
          Édition du site Internet
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Le site Webcreatis, accessible aux adresses{" "}
          <strong>webcreatis.re</strong> et <strong>webcreatis.fr</strong>, sont
          édité par Patrick et Patricia Perroudon.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Directeur de la publication
        </h2>
        <p className="text-base md:text-lg xl:text-xl">Patrick Perroudon</p>
        <p className="text-base md:text-lg xl:text-xl">Patricia Perroudon</p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Salariés indépendants portés par la société :
        </h2>
        <p className="text-base md:text-lg xl:text-xl">Réunion Portage</p>
        <p className="text-base md:text-lg xl:text-xl">97419 La Possession</p>
        <p className="text-base md:text-lg xl:text-xl">
          SIRET : 78846591200038
        </p>
        <p className="text-base md:text-lg xl:text-xl">
          Forme juridique : SARL unipersonnelle
        </p>
        <p className="text-base md:text-lg xl:text-xl">
          Contact :{" "}
          <a
            href="mailto:contact.webcreatis@gmail.com"
            className="text-base md:text-lg xl:text-xl"
          >
            contact.webcreatis@gmail.com
          </a>
        </p>
        <p className="text-base md:text-lg xl:text-xl">
          Téléphone : 06 93 51 44 39
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Hébergeur du site Internet
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Le site Webcreatis est hébergé par Vercel. <br></br>La société Vercel
          Inc. est située au 440 N Barranca Ave, PMB 4133, Covina, CA 91723,
          États-Unis. <br></br>Pour toute question, vous pouvez les contacter
          par téléphone au +1 (951) 383-6898.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">
          Respect de la propriété intellectuelle
        </h2>
        <p className="text-base md:text-lg xl:text-xl">
          Toutes les marques, photographies, textes, commentaires,
          illustrations, images animées ou non, séquences vidéo, sons, ainsi que
          toutes les applications informatiques qui pourraient être utilisées
          pour faire fonctionner le Site et plus généralement tous les éléments
          reproduits ou utilisés sur le Site sont protégés par les lois en
          vigueur au titre de la propriété intellectuelle.
        </p>
        <p className="text-base md:text-lg xl:text-xl">
          Ils sont la propriété pleine et entière de l’Editeur ou de ses
          partenaires, sauf mentions particulières. Toute reproduction,
          représentation, utilisation ou adaptation, sous quelque forme que ce
          soit, de tout ou partie de ces éléments, y compris les applications
          informatiques, sans l’accord préalable et écrit de l’Editeur, sont
          strictement interdites. Le fait pour l’Editeur de ne pas engager de
          procédure dès la prise de connaissance de ces utilisations non
          autorisées ne vaut pas acceptation desdites utilisations et
          renonciation aux poursuites.
        </p>
        <p className="text-base md:text-lg xl:text-xl">
          Seule l’utilisation pour un usage privé dans un cercle de famille est
          autorisée et toute autre utilisation est constitutive de contrefaçon
          et/ou d’atteinte aux droits voisins, sanctionnées par le Code de la
          propriété intellectuelle.
        </p>
        <p className="text-base md:text-lg xl:text-xl">
          La reprise de tout ou partie de ce contenu nécessite l’autorisation
          préalable de l’Editeur ou du titulaire des droits sur ce contenu.
        </p>

        <h2 className="text-xl font-semibold xl:text-3xl">Liens hypertextes</h2>
        <p className="text-base md:text-lg xl:text-xl">
          Le Site peut contenir des liens hypertexte donnant accès à d’autres
          sites web édités et gérés par des tiers et non par l’Editeur.
          L’Editeur ne pourra être tenu responsable directement ou indirectement
          dans le cas où lesdits sites tiers ne respecteraient pas les
          dispositions légales.
        </p>
      </div>
      <CustomCursor />
    </section>
  );
}
