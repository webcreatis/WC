"use client";

import Link from "next/link";
import CrossIcon from "../ui/CrossIcon";
import MarqueeHeader from "../ui/MarqueeHeader";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="hero-section w-full h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-9xl uppercase font-bold tracking-wide text-white font-jaapokki animate-fadeIn xs:mt-32 s:mt-16">
        <div className="flex space-x-1">
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            w
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            e
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            b
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            c
          </span>
          <span className="letter inline-blockmin-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            r
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            e
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            a
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            t
          </span>
          <span className="letter inline-block min-w-[2vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            i
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            s
          </span>
        </div>
      </h2>
      <div className="hero-subtitle w-3/4 caption-timeline text-white pt-10 xs:p-7 xs:w-full tablet:w-3/4 lg:w-[65%] animate-fadeIn transition-all duration-1000 ease-in-out">
        <h1 className="xs:text-sm xs:text-left tablet:text-sm ipadPro:text-lg laptop:text-center">
          {`Nous sommes deux passionnés du digital basés à La Réunion.
          On vous aide à créer un site internet qui vous ressemble, à développer
          votre présence sur les réseaux sociaux et à booster vos projets en
          ligne.
          Besoin d'un site, d'une formation ou d'un coup de main pour vos
          visuels ?
          On est là pour vous accompagner, avec simplicité et créativité !`}
        </h1>
      </div>
      <MarqueeHeader />
      <div className="mt-14 flex gap-5 xs:mt-10 xs:gap-1 xs:mb-10 s:gap-2 mobile:gap-3 laptop:mt-14">
        <Link
          href="https://calendly.com/contact-webcreatis/30min"
          data-link="link"
          className="buttonAction z-50 flex justify-center xs:w-[100px] xs:h-[2.5em] xs:p-2 ipadPro:w-[130px] laptop:xs:h-[3.5em] items-center uppercase cursor-pointer p-[1.7em] rounded-md bg-corail xs:text-xs mobile:text-sm mobile:w-[120px]"
        >
          RDV en ligne
        </Link>
        <Link
          href="/contact"
          data-link="link"
          className="buttonAction z-50 flex justify-center xs:w-[100px] xs:h-[2.5em] xs:p-2 ipadPro:w-[130px] laptop:xs:h-[3.5em] items-center uppercase cursor-pointer p-[1.7em] rounded-md bg-white xs:text-xs mobile:text-sm mobile:w-[120px]"
        >
          contact
        </Link>
        <Link
          href="#projects"
          data-link="link"
          className="buttonAction z-50 flex justify-center xs:w-[100px] xs:h-[2.5em] xs:p-2 ipadPro:w-[130px] laptop:xs:h-[3.5em] items-center uppercase cursor-pointer p-[1.7em] rounded-md bg-white xs:text-xs mobile:text-sm mobile:w-[120px]"
        >
          Réalisations
        </Link>
      </div>

      <div className="absolute bottom-5 flex w-full justify-between p-5">
        <CrossIcon />
        <CrossIcon />
        <span className="uppercase text-white font-raleway">
          scroll to explore
        </span>
        <CrossIcon />
        <CrossIcon />
      </div>
    </section>
  );
}
