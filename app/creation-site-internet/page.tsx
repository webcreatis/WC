"use client";

import { useRef } from "react";
import StackingCards from "../components/StackingCards";

type SectionProps = {
  title: string;
  bg: string;
  description: string;
  url: string;
  src: string;
};

export default function CreateWebPage() {
  const containerRef = useRef(null);

  const sections: SectionProps[] = [
    {
      title: "Développement Web",
      bg: "bg-[#FF6B6B]",
      description: "fjhgjgghjgjjdjgjgjgjdgjgj",
      url: "",
      src: "",
    },
    {
      title: "Card 2",
      bg: "bg-[#1DD1A1]",
      description: "fjhgjgghjgjjdjgjgjgjdgjgj",
      url: "",
      src: "",
    },
    {
      title: "Card 3",
      bg: "bg-[#2E86DE]",
      description: "fjhgjgghjgjjdjgjgjgjdgjgj",
      url: "",
      src: "",
    },
    {
      title: "Card 4",
      bg: "bg-[#9B59B6]",
      description: "fjhgjgghjgjjdjgjgjgjdgjgj",
      url: "",
      src: "",
    },
  ];

  return (
    <section className="w-full flex flex-col bg-white text-black font-raleway pt-48">
      <h1 className="font-jaapokki uppercase text-7xl text-green flex justify-center">
        Création de site internet
      </h1>
      <p className="font-raleway text-black w-2/5 mx-auto text-lg text-center pt-10">
        En tant qu’agence spécialisée dans la création de site internet sur
        mesure, nous développons des solutions digitales adaptés à vos besoins.
      </p>
      <main className="relative mt-[10vh] mb-[5vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={containerRef}
            className="h-[100vh] flex items-center justify-center sticky top-0"
          >
            <StackingCards key={index} index={index} section={section} />
          </div>
        ))}
      </main>
    </section>
  );
}
