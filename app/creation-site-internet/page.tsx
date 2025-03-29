"use client";

import { useRef } from "react";
import StackingCards from "../components/StackingCards";
import sections from "../datas/creadatas";
import ParagraphAnimated from "../ui/ParagraphAnimated";
import TextAnimated from "../ui/TextAnimated";

export default function CreateWebPage() {
  const containerRef = useRef(null);
  const words = `Nous créons des sites web sur-mesure, pensés pour vous, avec style et efficacité.`;

  return (
    <section className="w-full flex flex-col bg-white text-black font-raleway pt-40">
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
    </section>
  );
}
