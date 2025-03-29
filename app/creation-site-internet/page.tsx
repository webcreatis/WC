"use client";

import { useRef } from "react";
import StackingCards from "../components/StackingCards";
import sections from "../datas/creadatas";
import MarqueeText from "../ui/MarqueeText";
import ParagraphAnimated from "../ui/ParagraphAnimated";
import TextAnimated from "../ui/TextAnimated";

export default function CreateWebPage() {
  const containerRef = useRef(null);
  const words = `Nous créons des sites web sur-mesure, pensés pour vous, avec style et efficacité.`;

  return (
    <section className="creasite w-full flex flex-col text-black font-raleway pt-40">
      <TextAnimated />
      <div className="relative mt-[2vh] xs:mb-[85vh] md:mb-[70vh] laptop:mb-[80vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={containerRef}
            className="flex items-center justify-center xs:relative xs:h-[80vh] md:h-[70vh] laptop:h-[60vh] lg:sticky lg:top-0 xl:h-[40vh] "
          >
            <StackingCards key={index} index={index} section={section} />
          </div>
        ))}
      </div>
      <ParagraphAnimated value={words} />
      <div className="bg-white">
        <h3 className="font-jaapokki uppercase text-6xl text-center pt-20">
          <span className="text-corail uppercase text-6xl font-jaapokki">
            Outils
          </span>{" "}
          et{" "}
          <span className="text-green uppercase text-6xl font-jaapokki">
            technologies
          </span>{" "}
          utilisés
        </h3>
        <p className="font-raleway text-xl pt-5 text-center">
          On pioche le top de la tech pour créer des produits rapides, malins et
          agréables à utiliser.
        </p>
        <MarqueeText />
      </div>
    </section>
  );
}
