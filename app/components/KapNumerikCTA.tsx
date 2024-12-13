"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import kapNumerikPics from "../assets/images/KAP-NUMERIK-2024-webcreatis.webp";
import logoRegionReunion from "../assets/images/region-reunion-logo.webp";
import Button from "../ui/Button";

export default function KapNumerikCTA() {
  // Année en cours
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="kap"
      className="w-full flex justify-center items-center relative xs:flex-col-reverse xs:p-2 laptop:flex-row laptop:p-16 laptop:gap-10"
    >
      <div className="flex w-full justify-center xs:w-full laptop:hidden">
        <Image
          src={logoRegionReunion}
          alt="Logo de la région Réunion"
          className="w-[200px] h-[200px] xs:w-[60%] xs:h-auto tablet:w-[45%]"
        />
      </div>
      <div className="w-[50%] xs:w-[80%] xs:mt-12 tablet:w-[50%] laptop:w-[35%] h-auto shadow-[0_10px_20px_rgba(0,0,0,0.15),_0_6px_6px_rgba(0,0,0,0.1)] rounded-xl">
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ boxShadow: "0px 0px #000", height: "0px" }}
          whileInView={{ boxShadow: "10px 10px #000", height: "100%" }}
        >
          <Image
            src={kapNumerikPics}
            alt="Publicité pour le kap Numerik à la réunion"
            className="w-[100%] h-[100%] rounded-xl"
          />
        </motion.div>
      </div>
      <div className="flex flex-col flex-grow p-16 xs:p-2">
        <h2 className="font-jaapokki uppercase text-3xl pb-5 xs:pt-12 xs:Text-2xl mobile:text-3xl">
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
        <div className="flex justify-start items-center gap-5 xs:flex-col xs:w-full tablet:flex-row tablet:justify-center">
          <Button
            text="J'ai un projet"
            bg="bg-green"
            color="text-black"
            onClick={() =>
              (window.location.href = "https://webcreatis.fr/contact/")
            }
          />
          <Button
            text="Region Réunion"
            bg="bg-darkWhite"
            color="text-black"
            onClick={() =>
              (window.location.href =
                "https://www.regionreunion.com/aides-services/article/le-kap-numerik-version-2023-programme-europeen-feder-2021-2027")
            }
          />
        </div>
      </div>
    </section>
  );
}
