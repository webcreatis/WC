"use client";

import { Laptop } from "lucide-react";
//import { useCallback, useEffect, useRef } from "react";
import brandingBoardPics from "../assets/images/Branding-board-webcreatis.webp";
import kakemonoPics from "../assets/images/Envergure-Kakemono.webp";
import canvaPics from "../assets/images/logo-canva.webp";
import prestaPics from "../assets/images/presta-webcreatis.webp";
import websitePics from "../assets/images/site-seaintense.webp";
import socialNetworkPics from "../assets/images/social-network-webcreatis.webp";
import ServiceBloc from "../ui/ServiceBloc";
import TitleSection from "./TitleSection";

export default function ServicesSection() {
  // state
  const iconService = <Laptop color="#7BE0AD" size={36} />;
  // const cursorRef = useRef<HTMLDivElement>(null);

  // const cursorPosition = useCallback((e: MouseEvent) => {
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   const cursor = cursorRef.current;

  //   if (cursor) {
  //     cursor.style.top = `${y}px`;
  //     cursor.style.left = `${x}px`;
  //   }
  // }, []);

  // useEffect(() => {
  //   // On récupére l'ensemble des cards services
  //   const boxes = document.querySelectorAll(".box");
  //   const links = document.querySelectorAll(".buttonAction");
  //   const cursorIcon = cursorRef.current?.querySelector(".arrow-cursor");

  //   const showCursorIcon = () => {
  //     if (cursorIcon) {
  //       cursorIcon.classList.add("visible");
  //     }
  //   };

  //   const hideCursorIcon = () => {
  //     if (cursorIcon) {
  //       cursorIcon.classList.remove("visible");
  //     }
  //   };

  //   links.forEach((button) => {
  //     const attributeButton = button.getAttribute("data-link");

  //     button.addEventListener("mouseover", () => {
  //       showCursorIcon();
  //       // on se branche au cursor via sa reference
  //       const cursor = cursorRef.current;
  //       if (attributeButton && cursor) {
  //         cursor.style.transform = "scale(2)";
  //       }
  //     });

  //     button.addEventListener("mouseout", () => {
  //       hideCursorIcon();
  //       // on se branche au cursor via sa reference
  //       const cursor = cursorRef.current;

  //       if (attributeButton && cursor) cursor.style.transform = "none";
  //     });
  //   });

  //   // On boucle dessus pour ajouter un événement au passage de la souris
  //   boxes.forEach((elem) => {
  //     // Mouse enter
  //     elem.addEventListener("mouseenter", function () {
  //       // On récupére l'élément qui posséde l'attribue "data-image"
  //       const att = elem.getAttribute("data-image");

  //       // on se branche au cursor via sa reference
  //       const cursor = cursorRef.current;

  //       // On affiche les images des services si cursor n'est pas nul
  //       if (cursor) {
  //         // On ajoute la class "cursorGrow"
  //         cursor.classList.add("cursorGrow");
  //         // on ajoute un bg image
  //         cursor.style.background = `url(${att})`;
  //         cursor.style.backgroundPosition = "center";
  //         cursor.style.backgroundSize = "contain";
  //         cursor.style.backgroundRepeat = "no-repeat";
  //         cursor.classList.remove("border-2", "border-solid", "border-corail");
  //       }
  //     });

  //     // Mouse Out
  //     elem.addEventListener("mouseout", function () {
  //       // On récupére le cursor
  //       const cursor = cursorRef.current;
  //       if (cursor) {
  //         cursor.classList.remove("cursorGrow");
  //         cursor.style.background = "#18181B";
  //         cursor.classList.add("border-2", "border-solid", "border-corail");
  //       }
  //     });
  //   });

  //   window.addEventListener("mousemove", cursorPosition);

  //   // Cleanup des événements pour éviter les fuites de mémoire
  //   return () => {
  //     boxes.forEach((elem) => {
  //       elem.removeEventListener("mouseenter", () => {});
  //       elem.removeEventListener("mouseout", () => {});
  //     });
  //     window.removeEventListener("mousemove", cursorPosition);
  //   };
  // }, [cursorPosition]);

  // Affichage
  return (
    <section
      id="services"
      className="w-full h-auto flex-col justify-start items-start bg-white"
    >
      <TitleSection icon={iconService} title="Services" color="text-black" />
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
            skills={["Seo", "Performances", "sécurité", "UX/UI"]}
            imagePath={canvaPics.src}
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
