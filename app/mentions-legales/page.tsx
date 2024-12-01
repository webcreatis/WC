// app/mentions-legales/page.js
import Link from "next/link";
import Button from "../ui/Button";

export default function MentionsLegales() {
  return (
    <div className="w-full px-4 py-6 bg-greenLight font-raleway">
      {/* Retour à l'accueil */}
      <div className="mb-4">
        <Link href="/" passHref>
          <Button text="Acceuil" bg="bg-corail" color="text-white" />
        </Link>
      </div>

      {/* Contenu des Mentions légales */}
      <h1 className="text-3xl font-bold mb-6 font-jaapokki pt-10 pb-10 w-3/4 m-auto">
        Mentions Légales
      </h1>
      <section className="space-y-6 w-3/4 m-auto">
        <h2 className="text-xl font-semibold">Édition du site Internet</h2>
        <p>
          Le site Webcreatis, accessible à l’adresse{" "}
          <strong>webcreatis.re</strong>, est édité par Patrick et Patricia
          Perroudon.
        </p>

        <h2 className="text-xl font-semibold">Directeur de la publication</h2>
        <p>Patrick Perroudon</p>
        <p>Patricia Perroudon</p>

        <h2 className="text-xl font-semibold">
          Salariés indépendants portés par la société :
        </h2>
        <p>Réunion Portage</p>
        <p>97419 La Possession</p>
        <p>SIRET : 78846591200038</p>
        <p>Forme juridique : SARL unipersonnelle</p>
        <p>
          Contact :{" "}
          <a href="mailto:contact.webcreatis@gmail.fr">
            contact.webcreatis@gmail.fr
          </a>
        </p>
        <p>Téléphone : +262 693 51 44 39</p>

        <h2 className="text-xl font-semibold">Hébergeur du site Internet</h2>
        <p>
          Le site Webcreatis est hébergé par Vercel. <br></br>La société Vercel
          Inc. est située au 440 N Barranca Ave, PMB 4133, Covina, CA 91723,
          États-Unis. <br></br>Pour toute question, vous pouvez les contacter
          par téléphone au +1 (951) 383-6898.
        </p>

        <h2 className="text-xl font-semibold">
          Respect de la propriété intellectuelle
        </h2>
        <p>
          Toutes les marques, photographies, textes, commentaires,
          illustrations, images animées ou non, séquences vidéo, sons, ainsi que
          toutes les applications informatiques qui pourraient être utilisées
          pour faire fonctionner le Site et plus généralement tous les éléments
          reproduits ou utilisés sur le Site sont protégés par les lois en
          vigueur au titre de la propriété intellectuelle.
        </p>
        <p>
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
        <p>
          Seule l’utilisation pour un usage privé dans un cercle de famille est
          autorisée et toute autre utilisation est constitutive de contrefaçon
          et/ou d’atteinte aux droits voisins, sanctionnées par le Code de la
          propriété intellectuelle.
        </p>
        <p>
          La reprise de tout ou partie de ce contenu nécessite l’autorisation
          préalable de l’Editeur ou du titulaire des droits sur ce contenu.
        </p>

        <h2 className="text-xl font-semibold">Liens hypertextes</h2>
        <p>
          Le Site peut contenir des liens hypertexte donnant accès à d’autres
          sites web édités et gérés par des tiers et non par l’Editeur.
          L’Editeur ne pourra être tenu responsable directement ou indirectement
          dans le cas où lesdits sites tiers ne respecteraient pas les
          dispositions légales.
        </p>
      </section>
    </div>
  );
}
