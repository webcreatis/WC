"use client";

import Link from "next/link";
import CrossIcon from "../ui/CrossIcon";
import MarqueeHeader from "../ui/MarqueeHeader";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="hero-section w-full min-h-screen flex flex-col justify-center items-center pt-10 s:pt-28"
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
        <h1 className="text-sm text-center tablet:text-sm ipadPro:text-lg laptop:text-center">
          {`Nous sommes deux passionnés du web & du digital basés à La Réunion.
          Nous vous accompagnons dans la création de votre site internet, de votre identité visuelle et dans le développement de vos projets en ligne.
          Nous proposons du mentoring pour les développeurs web en formation, des audits de sites pour vous aider à améliorer l’existant, et des accompagnements canva pour gagner en autonomie et créer vos design.
          Nous sommes là pour vous guider, avec simplicité, écoute et créativité !`}
        </h1>
      </div>
      <MarqueeHeader />
      <div className="mt-14 flex flex-col w-full items-center gap-5 mb-10 s:gap-2 mobile:gap-3 md:flex-row md:px-10 laptop:mt-14 laptop:gap-1 laptop:w-3/5 lg:w-[30%] lg:pt-10">
        <Link
          href="https://calendly.com/contact-webcreatis/30min"
          data-link="link"
          className="buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer rounded-md bg-corail mobile:text-sm mobile:w-2/3 mobile:m-auto laptop:w-[150px] laptop:xs:h-[3.5em]"
        >
          RDV en ligne
        </Link>
        <Link
          href="/contact"
          data-link="link"
          className="buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer rounded-md bg-white mobile:text-sm mobile:w-2/3 mobile:m-auto laptop:w-[150px] laptop:xs:h-[3.5em]"
        >
          contact
        </Link>
        <Link
          href="#projects"
          data-link="link"
          className="buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer rounded-md bg-white mobile:text-sm mobile:w-2/3 mobile:m-auto laptop:w-[150px] laptop:xs:h-[3.5em]"
        >
          Réalisations
        </Link>
      </div>

      <div className="flex w-full justify-between items-center p-2 mobile:mt-10 md:mt-20 lg:mt-28 lg:p-5">
        <CrossIcon />
        <CrossIcon />
        <span className="uppercase text-white font-raleway text-xs md:text-base lg:text-2xl">
          scroll to explore
        </span>
        <CrossIcon />
        <CrossIcon />
      </div>
    </section>
  );
}
