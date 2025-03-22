import { Library } from "lucide-react";
import TitleSection from "../components/TitleSection";

export default function MarqueeText() {
  const iconLib = <Library color="#7BE0AD" size={36} />;
  return (
    <div className="mt-20 mb-20 flex w-full place-items-center h-auto xs:pb-5 xs:flex-col laptop:h-[350px] laptop:flex-row">
      <div className="flex flex-col justify-center items-center xs:w-full laptop:w-2/5">
        {" "}
        <TitleSection icon={iconLib} title="skills" color="text-black" />
        <p className="font-raleway pl-10 pr-10 text-justify xs:p-6">
          Des sites web performants qui ont du style, et où tout marche comme
          sur des roulettes – même les paiements 💳.
          <br /> De l’interface au back-end, on soigne chaque détail pour offrir
          une expérience fluide, rapide et fiable.
        </p>
      </div>
      <div className="marqueeText relative overflow-hidden xs:text-4xl xs:w-full xs:mt-10 md:mt-10 laptop:text-6xl laptop:flex-1">
        {/*-- Première ligne de texte */}
        <div className="flex whitespace-nowrap animate-marqueeText">
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            development
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            react
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            next js
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            styled components
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            tailwind css
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            astro js
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            redux toolkit
          </span>
        </div>
        {/* -- Deuxième ligne de texte */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            design
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            wireframe
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            maquettage
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            kakemono
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">logo</span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            charte graphique
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            branding board
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            flyer
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            business card
          </span>
        </div>
        {/*-- Troisiéme ligne de texte */}
        <div className="flex whitespace-nowrap animate-marqueeText">
          <span className="text-[5vw] px-[2vw] uppercase text-stroke-2">
            wordpress
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            directus
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            ZSA
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            NextAuth
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            wordpress
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            directus
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            ZOD
          </span>
          <span className="text-[5vw] px-[2vw] uppercase  text-stroke-2">
            stripe
          </span>
        </div>
      </div>
    </div>
  );
}
