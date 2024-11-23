"use client";

import { Laptop } from "lucide-react";
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
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((elem) => {
      elem.addEventListener("mouseenter", function () {
        const att = elem.getAttribute("data-image");

        const cursor = cursorRef.current;
        if (cursor) {
          cursor.classList.add("cursorGrow");
          cursor.style.background = `url(${att})`;
          cursor.style.backgroundPosition = "center";
          cursor.style.backgroundSize = "contain";
          cursor.style.backgroundRepeat = "no-repeat";
        }
      });
      elem.addEventListener("mouseout", function () {
        const cursor = cursorRef.current;
        if (cursor) {
          cursor.classList.remove("cursorGrow");
          cursor.style.background = "#000000";
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
          <span className="text-black font-raleway italic text-6xl pr-3">
            Our
          </span>
          <span className="text-black text-5xl font-jaapokki font-bold uppercase">
            Services
          </span>
        </h2>
      </div>
      <div className="w-full h-auto pb-32">
        <ul className="w-3/4 m-auto">
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box"
            data-image={websitePics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              website
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                design
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                développement
              </span>
              <span className="font-jaapokki uppercase text-xl text-black">
                seo
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box"
            data-image={brandingBoardPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              webdesign
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                wireframe
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                maquettage
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                charte graphique
              </span>
              <span className="font-jaapokki uppercase text-xl text-black">
                branding board
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box"
            data-image={kakemonoPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              design & print
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                logo
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                business card
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                kakemono
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box"
            data-image={socialNetworkPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              social network
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                managment
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                design
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                reels
              </span>
              <span className="font-jaapokki uppercase text-xl text-black">
                web editor
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box"
            data-image={canvaPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              formation
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-black">
                canva
              </span>
            </div>
          </li>
          <li
            className="flex w-full border-b-[1px] border-black mt-5 box"
            data-image={prestaPics.src}
          >
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              presta
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                development
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                maquettage
              </span>
              <span className="font-jaapokki uppercase text-xl text-black after:content-['|'] after:ml-0.5 after:text-green">
                canva
              </span>
              <span className="font-jaapokki uppercase text-xl text-black">
                funnel marketing
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div
        ref={cursorRef}
        className="cursor w-[20px] h-[20px] rounded-full bg-green fixed pointer-events-none bg-contain bg-center z-50"
      ></div>
    </section>
  );
}
