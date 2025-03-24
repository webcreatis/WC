"use client";

import StackingCards from "../components/StackingCards";

export default function CreateWebPage() {
  return (
    <main className="relative">
      <section className="w-full min-h-[500px] flex flex-col bg-white text-black font-raleway pt-48">
        <h1 className="font-jaapokki uppercase text-7xl text-green flex justify-center">
          Création de site internet
        </h1>
        <p className="font-raleway text-black w-2/5 mx-auto text-lg text-center pt-10">
          En tant qu’agence spécialisée dans la création de site internet sur
          mesure, nous développons des solutions digitales adaptés à vos
          besoins.
        </p>
        <StackingCards />
      </section>
    </main>
  );
}
