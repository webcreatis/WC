import Image from "next/image";
import kapNumerikPics from "../assets/images/KAP-NUMERIK-2024-webcreatis.webp";
import logoRegionReunion from "../assets/images/region-reunion-logo.webp";
import Button from "../ui/Button";

export default function KapNumerikCTA() {
  // Année en cours
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full flex justify-center items-center p-16 relative">
      <div className="absolute bottom-5 right-10">
        <Image
          src={logoRegionReunion}
          alt="Logo de la région Réunion"
          className="w-[200px] h-[200px]"
        />
      </div>
      <div className="w-[50%] h-[500px] shadow-[0_10px_20px_rgba(0,0,0,0.15),_0_6px_6px_rgba(0,0,0,0.1)] rounded-xl">
        <Image
          src={kapNumerikPics}
          alt="Publicité pour le kap Numerik à la réunion"
          className="w-[100%] h-[100%] rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow p-16">
        <h2 className="font-jaapokki uppercase text-3xl pb-5">
          Kap Numérik {currentYear}
        </h2>
        <p className="font-raleway">
          Le Kap Numérik, anciennement le Chèque Numérique Région Réunion, est
          une aide proposée par la Région Réunion pour accompagner les
          entreprises dans leur transition numérique.
          <br />
          Cette subvention, pouvant aller jusqu’à <b>3 200 €</b>, permet de
          financer :
        </p>
        <ul className="flex flex-col font-raleway">
          <li className="before:content-['.'] before:text-green before:text-4xl before:pr-2">
            La création ou la refonte de sites vitrines ou e-commerce.
          </li>
          <li className="before:content-['.'] before:text-green before:text-4xl before:pr-2">
            Le webdesign et la création de visuels comme des logos.
          </li>
        </ul>
        <p className="pt-5 pb-10 font-raleway">
          Que votre entreprise soit en création ou déjà établie, Webcreatis vous
          accompagne dans toutes les démarches et prend en charge le dépôt de
          votre dossier auprès de la Région Réunion.
        </p>
        <div className="flex justify-start items-center gap-5">
          <Button
            text="J'ai un projet"
            bg="bg-green"
            color="text-black"
            link=""
          />
          <Button
            text="Region Réunion"
            bg="bg-darkWhite"
            color="text-black"
            link="https://regionreunion.com/aides-services/article/le-kap-numerik-version-2023-programme-europeen-feder-2021-2027"
          />
        </div>
      </div>
    </section>
  );
}