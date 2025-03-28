"use client";

import { Layers3 } from "lucide-react";
import Button from "../ui/Button";
import HorizontalAccordion from "../ui/HorizontalAccordion";
import MarqueeText from "../ui/MarqueeText";
import TitleSection from "./TitleSection";

export default function MethodSection() {
  const iconMethod = <Layers3 color="#7BE0AD" size={36} />;
  return (
    <section className="w-full flex flex-col">
      <TitleSection icon={iconMethod} title="Methods" color="text-black" />
      <div className="w-full flex pt-16 justify-between xs:flex-col lg:flex-row">
        <div className="w-[50%] flex flex-col items-start p-10 xs:w-full lg:w-[50%]">
          <h2 className="text-4xl font-semibold font-jaapokki text-green pb-10 xs:text-xl tablet:text-2xl">
            Notre processus de création de site internet : <br />
            De l’idée à la réalisation
          </h2>
          <p className="font-raleway text-justify pb-10 xs:text-base tablet:text-base">
            Notre approche ?<br /> Nous combinons une stratégie bien pensée avec
            des outils modernes, à chaque étape du projet. Nous suivons un
            processus clair et transparent pour garantir un travail de qualité,
            parfaitement intégré à votre écosystème numérique.
          </p>
          <Button
            text="j'ai un projet"
            bg="bg-green"
            color="text-black"
            onClick={() =>
              (window.location.href = "mailto:contact.webcreatis@gmail.com")
            }
          />
        </div>
        <div className="w-[50%] xs:w-full lg:w-[50%]">
          <HorizontalAccordion />
        </div>
      </div>
      <MarqueeText />
    </section>
  );
}
