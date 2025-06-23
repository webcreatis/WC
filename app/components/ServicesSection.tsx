"use client";

import { Laptop } from "lucide-react";
//import { useCallback, useEffect, useRef } from "react";
import brandingBoardPics from "../assets/images/Branding-board-webcreatis.webp";
import kakemonoPics from "../assets/images/Envergure-Kakemono.webp";
import patriciaAuditPics from "../assets/images/patricia-accompagnement-canva-webcreatis.webp";
import prestaPics from "../assets/images/presta-webcreatis.webp";
import websitePics from "../assets/images/run-mystery-reunion.webp";
import socialNetworkPics from "../assets/images/social-network-webcreatis.webp";
import ServiceBloc from "../ui/ServiceBloc";
import TitleSection from "./TitleSection";

export default function ServicesSection() {
  // state
  const iconService = <Laptop color="#7BE0AD" size={36} />;
  return (
    <section
      id="services"
      className="w-full h-auto flex-col justify-start items-start bg-white"
    >
      <TitleSection
        icon={iconService}
        title="Services"
        color="text-black"
        textSize="text-4xl"
      />
      <div className="w-full h-auto pb-32">
        <ul className="w-3/4 m-auto pt-16 tablet:w-[85%]">
          <ServiceBloc
            title="website"
            skills={["Maquettage", "développement web", "seo"]}
            imagePath={websitePics.src}
          />
          <ServiceBloc
            title="Design"
            skills={["identité graphique", "logo", "branding board"]}
            imagePath={brandingBoardPics.src}
          />
          <ServiceBloc
            title="print"
            skills={["business card", "kakemono", "Plaquette commerciale"]}
            imagePath={kakemonoPics.src}
          />
          <ServiceBloc
            title="Mentoring"
            skills={["Canva", "Apprenant dev web"]}
            imagePath={socialNetworkPics.src}
          />
          <ServiceBloc
            title="Audit"
            skills={["Site", "Supports de communication", "Identité visuelle"]}
            imagePath={patriciaAuditPics.src}
          />
          <ServiceBloc
            title="presta"
            skills={[
              "development",
              "formation canva",
              "Jury CDA - DWWM - Cléa Numérique - CIF",
            ]}
            imagePath={prestaPics.src}
          />
        </ul>
      </div>
    </section>
  );
}
