"use client";

import { CardHoverEffectFormations } from "../ui/CardFormation";
import CustomCursor from "../ui/CustomCursor";

export default function FormationsCanva() {
  return (
    <section className="canva w-full min-h-screen pt-24 md:pt-20">
      <div className="w-full flex flex-col justify-center items-center p-6">
        <h3 className="font-jaapokki font-semibold text-2xl text-darkWhite uppercase pt-32 pb-5 md:text-4xl laptop:text-6xl">
          Formations CANVA
        </h3>
        <div className="flex flex-col gap-2">
          <span className="font-raleway font-normal text-darkWhite text-xl text-left md:text-center md:text-xl lg:text-2xl">
            “Je veux garder la main sur ma com mais je perd trop de temps à le
            faire !!“
          </span>
          <span className="inline-block font-normal text-xl pb-5 text-darkWhite font-raleway md:text-center md:text-xl lg:text-2xl">
            Alors ces formations sont faites pour vous !
          </span>
        </div>
        <p className="text-darkWhite font-normal text-lg text-left pb-5 font-raleway md:text-center md:text-base">
          Vous souhaitez maîtriser votre communication visuelle pour attirer de
          nouveaux clients ?<br /> Nos formations Canva sont conçues pour vous
          donner les clés de votre communication, même sans connaissances en
          design !<br />
          <br />
          Nous vous proposons 3 types de formations:{" "}
        </p>
      </div>
      <CardHoverEffectFormations />
      <CustomCursor />
    </section>
  );
}
