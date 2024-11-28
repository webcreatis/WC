"use client";

import { Laptop, MoveRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import brandingBoardPics from "../assets/images/Branding-board-webcreatis.webp";
import kakemonoPics from "../assets/images/Envergure-Kakemono.webp";
import canvaPics from "../assets/images/logo-canva.webp";
import prestaPics from "../assets/images/presta-webcreatis.webp";
import websitePics from "../assets/images/site-seaintense.webp";
import socialNetworkPics from "../assets/images/social-network-webcreatis.webp";

export default function ServicesSection() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorPosition = useCallback((e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const cursor = cursorRef.current;

    if (cursor) {
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
    }
  }, []);

  useEffect(() => {
    // On récupére l'ensemble des cards services
    const boxes = document.querySelectorAll(".box");
    const links = document.querySelectorAll(".buttonAction");
    const cursorIcon = cursorRef.current?.querySelector(".arrow-cursor");

    const showCursorIcon = () => {
      if (cursorIcon) {
        cursorIcon.classList.add("visible");
      }
    };

    const hideCursorIcon = () => {
      if (cursorIcon) {
        cursorIcon.classList.remove("visible");
      }
    };

    links.forEach((button) => {
      const attributeButton = button.getAttribute("data-link");

      button.addEventListener("mouseover", () => {
        showCursorIcon();
        // on se branche au cursor via sa reference
        const cursor = cursorRef.current;
        if (attributeButton && cursor) {
          cursor.style.transform = "scale(2)";
        }
      });

      button.addEventListener("mouseout", () => {
        hideCursorIcon();
        // on se branche au cursor via sa reference
        const cursor = cursorRef.current;

        if (attributeButton && cursor) cursor.style.transform = "none";
      });
    });

    // On boucle dessus pour ajouter un événement au passage de la souris
    boxes.forEach((elem) => {
      // Mouse enter
      elem.addEventListener("mouseenter", function () {
        // On récupére l'élément qui posséde l'attribue "data-image"
        const att = elem.getAttribute("data-image");

        // on se branche au cursor via sa reference
        const cursor = cursorRef.current;

        // On affiche les images des services si cursor n'est pas nul
        if (cursor) {
          // On ajoute la class "cursorGrow"
          cursor.classList.add("cursorGrow");
          // on ajoute un bg image
          cursor.style.background = `url(${att})`;
          cursor.style.backgroundPosition = "center";
          cursor.style.backgroundSize = "contain";
          cursor.style.backgroundRepeat = "no-repeat";
        }
      });

      // Mouse Out
      elem.addEventListener("mouseout", function () {
        // On récupére le cursor
        const cursor = cursorRef.current;
        if (cursor) {
          cursor.classList.remove("cursorGrow");
          cursor.style.background = "#E4F2E7";
        }
      });
    });

    window.addEventListener("mousemove", cursorPosition);

    // Cleanup des événements pour éviter les fuites de mémoire
    return () => {
      boxes.forEach((elem) => {
        elem.removeEventListener("mouseenter", () => {});
        elem.removeEventListener("mouseout", () => {});
      });
      window.removeEventListener("mousemove", cursorPosition);
    };
  }, [cursorPosition]);

  return (
    <section className="w-full h-auto flex-col justify-start items-start bg-white">
      <div
        id="services-header"
        className="flex justify-center items-center pt-32 pb-32"
      >
        <Laptop color="#7BE0AD" size={36} />
        <h2>
          <span className="text-black font-raleway italic text-6xl pr-3 xs:text-2xl mobile:text-3xl tablet:text-6xl">
            Our
          </span>
          <span className="text-black text-5xl font-jaapokki font-bold uppercase xs:text-2xl mobile:text-3xl tablet:text-6xl">
            Services
          </span>
        </h2>
      </div>
      <div className="w-full h-auto pb-32">
        <ul className="w-3/4 m-auto tablet:w-[85%]">
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box xs:flex-col tablet:flex-row"
            data-image={websitePics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green xs:text-xl xs:pb-3 tablet:text-2xl laptop:text-5xl">
              website
            </h3>
            <div className="flex justify-start gap-1 ml-10 xs:ml-1 xs:flex-col xs:items-start tablet:flex-row tablet:items-end tablet:ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                design
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                développement
              </span>
              <span className="font-jaapokki uppercase text-xl text-blac xs:text-base tablet:text-xs laptop:text-sm">
                seo
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box xs:flex-col tablet:flex-row"
            data-image={brandingBoardPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green xs:text-xl xs:pb-3 tablet:text-2xl laptop:text-5xl">
              webdesign
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10 xs:ml-1 xs:flex-col xs:items-start tablet:flex-row tablet:items-end tablet:ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                wireframe
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                maquettage
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                charte graphique
              </span>
              <span className="font-jaapokki uppercase text-xl text-black xs:text-base tablet:text-xs laptop:text-sm">
                branding board
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box xs:flex-col tablet:flex-row"
            data-image={kakemonoPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green xs:text-xl xs:pb-3 tablet:text-2xl laptop:text-5xl">
              design & print
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10 xs:ml-1 xs:flex-col xs:items-start tablet:flex-row tablet:items-end tablet:ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                logo
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                business card
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                kakemono
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box xs:flex-col tablet:flex-row"
            data-image={socialNetworkPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green xs:text-xl xs:pb-3 tablet:text-2xl laptop:text-5xl">
              social network
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10 xs:ml-1 xs:flex-col xs:items-start tablet:flex-row tablet:items-end tablet:ml-10">
              <span className="font-jaapokki uppercase text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                managment
              </span>
              <span className="font-jaapokki uppercase text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                design
              </span>
              <span className="font-jaapokki uppercase text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                reels
              </span>
              <span className="font-jaapokki uppercase text-black xs:text-base tablet:text-xs laptop:text-sm">
                web editor
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box xs:flex-col tablet:flex-row"
            data-image={canvaPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green xs:text-xl xs:pb-3 tablet:text-2xl laptop:text-5xl">
              formation
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10 xs:ml-1 xs:flex-col xs:items-start tablet:flex-row tablet:items-end tablet:ml-10">
              <span className="font-jaapokki uppercase text-black xs:text-base tablet:text-xs laptop:text-sm">
                canva
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box xs:flex-col tablet:flex-row"
            data-image={prestaPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green xs:text-xl xs:pb-3 tablet:text-2xl laptop:text-5xl">
              presta
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10 xs:ml-1 xs:flex-col xs:items-start tablet:flex-row tablet:items-end tablet:ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                development
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-xs laptop:text-sm">
                maquettage
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green xs:text-base tablet:text-x laptop:text-sm">
                canva
              </span>
              <span className="font-jaapokki uppercase text-xl text-black xs:text-base tablet:text-xs laptop:text-sm">
                funnel marketing
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div
        ref={cursorRef}
        className="cursor flex justify-center items-center w-[30px] h-[30px] rounded-full bg-greenLight fixed pointer-events-none bg-contain bg-center z-[9999] transition-transform duration-500 ease-in-out"
      >
        <p className="arrow-cursor">
          <MoveRight color="#18181B" size={10} />
        </p>
      </div>
    </section>
  );
}
