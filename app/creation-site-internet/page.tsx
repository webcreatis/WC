"use client";

import { useRef } from "react";
import StackingCards from "../components/StackingCards";
import sections from "../datas/creadatas";
import CallToActionWithQrCode from "../ui/CallToActionWithQrCode";
import CustomCursor from "../ui/CustomCursor";
import MarqueeText from "../ui/MarqueeText";
import ParagraphAnimated from "../ui/ParagraphAnimated";
import TextAnimated from "../ui/TextAnimated";

export default function CreateWebPage() {
  const containerRef = useRef(null);

  const words = `Nous créons des sites web sur-mesure, pensés pour vous, avec style et efficacité.`;
  const ctaDescriptionText = `Fini les sites génériques ! On crée pour vous un site unique, beau, rapide et pensé pour vos vrais besoins. Pas de blabla, juste un projet bien ficelé, avec vous, pour vous.
Scannez le QR code à droite pour répondre à quelques questions et nous aider à créer un site qui vous correspond à 100 %. 
C'est rapide, sans engagement, et ça nous permet de mieux comprendre votre projet.`;
  const qrCodeLink =
    "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAooRbNxUQkJUMzlZUEpZMjJaV0xCSFg0NEZNWDVTMy4u&origin=QRCode&route=shorturl";
  const ctaDescriptionQrCodeText = `👀 Pas de scanner ? Pas de souci, cliquez ci-dessous !"`;

  return (
    <section className="creasite w-full flex flex-col text-black font-raleway pt-40">
      <TextAnimated />
      <div className="relative mt-[2vh] xs:mb-[2vh] md:mb-[5vh] laptop:mb-[7vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={containerRef}
            className="flex items-center justify-center xs:relative xs:h-auto xs:gap-5 md:gap-6 laptop:gap-8 lg:sticky lg:top-0 "
          >
            <StackingCards key={index} index={index} section={section} />
          </div>
        ))}
      </div>
      <ParagraphAnimated value={words} />
      <div className="bg-white py-10 sm:py-14 md:py-16 lg:py-20 xl:py-28">
        <h3 className="font-jaapokki uppercase text-2xl md:text-3xl laptop:text-4xl lg:text-6xl text-center px-4">
          <span className="text-corail uppercase font-jaapokki xs:text-2xl sm:text-4xl md:text-3xl laptop:text-4xl lg:text-6xl">
            Outils
          </span>{" "}
          et{" "}
          <span className="text-green uppercase font-jaapokki xs:text-2xl md:text-3xl laptop:text-4xl lg:text-6xl">
            technologies
          </span>{" "}
          utilisés
        </h3>
        <p className="font-raleway text-base xs:pt-5 sm:text-lg md:text-lg x:text-2xl pt-2 sm:pt-3 md:pt-4 lg:pt-5 text-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto">
          On pioche le top de la tech pour créer des produits rapides, malins et
          agréables à utiliser.
        </p>
        <MarqueeText />
      </div>
      <CallToActionWithQrCode
        ctaTitle="Votre site web, votre meilleure vitrine."
        ctaDescription={ctaDescriptionText}
        ctaDescriptionQrCode={ctaDescriptionQrCodeText}
        ctaLink={qrCodeLink}
        ctaTitleLink="Accéder au formulaire"
        ctaQrText="Flashez le QR code"
      />
      <CustomCursor />
    </section>
  );
}
