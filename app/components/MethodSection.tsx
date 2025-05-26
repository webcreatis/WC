"use client";

import { Layers3 } from "lucide-react";
import Button from "../ui/Button";
import HorizontalAccordion from "../ui/HorizontalAccordion";
import TitleSection from "./TitleSection";

export default function MethodSection() {
  const iconMethod = <Layers3 color="#7BE0AD" size={36} />;
  return (
    <section className="w-full flex flex-col">
      <TitleSection
        icon={iconMethod}
        title="Methods"
        color="text-black"
        textSize="text-4xl"
      />
      <div className="w-full flex pt-16 pb-36 justify-between xs:flex-col lg:flex-row">
        <div className="w-[50%] flex flex-col items-start p-10 xs:w-full md:mb-14 lg:w-[50%] lg:mb-0">
          <h3 className="font-semibold font-jaapokki text-green pb-10 text-xl md:text-2xl lg:text-3xl">
            Notre processus de création de site internet : <br />
          </h3>
          <p className="font-raleway text-justify pb-10 xs:text-base tablet:text-base">
            Spécialisés dans les sites sur-mesure, on vous accompagne de la
            première idée jusqu’à la mise en ligne.
            <br />
            Des sites pensés pour vos objectifs, conçus pour vos utilisateurs,
            et 100 % adaptés au mobile.
          </p>
          <p className="font-raleway text-justify pb-10 xs:text-base tablet:text-base">
            Notre approche ?<br /> <br />
            On mixe une bonne dose de stratégie, des outils au top et surtout,
            beaucoup de bon sens. <br />
            À chaque étape, vous avez une URL privée pour suivre l’évolution du
            site en temps réel — comme si vous étiez dans les coulisses. <br />
            Et à chaque mise en ligne, on se cale une réunion ensemble pour
            valider, ajuster et avancer dans la bonne direction.
          </p>
          <div className="flex gap-5 xs:flex-col md:flex-row">
            <Button
              text="Devis gratuit"
              bg="bg-green"
              color="text-black"
              onClick={() =>
                (window.location.href =
                  "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAooRbNxUQkJUMzlZUEpZMjJaV0xCSFg0NEZNWDVTMy4u&origin=QRCode&route=shorturl")
              }
            />
            <Button
              text="En savoir plus"
              bg="bg-corail"
              color="text-black"
              onClick={() => (window.location.href = "/creation-site-internet")}
            />
          </div>
        </div>
        <div className="w-[50%] xs:w-full lg:w-[50%]">
          <HorizontalAccordion />
        </div>
      </div>
    </section>
  );
}
