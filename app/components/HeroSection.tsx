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
      <h1 className="text-base font-bold text-white text-center pt-10 pb-5 font-raleway md:text-lg lg:text-2xl xl:text-3xl">
        Création de site internet à La Réunion – Webdesign UX/UI, Mentoring &
        Accompagnement Canva
      </h1>
      <div className="hero-subtitle w-3/4 caption-timeline text-white pt-10 xs:p-7 xs:w-full tablet:w-3/4 lg:w-[65%] animate-fadeIn transition-all duration-1000 ease-in-out">
        <p className="text-sm text-center ipadPro:text-lg laptop:text-center xl:text-xl">
          {`Webcreatis, agence digitale à La Réunion, vous accompagne dans votre stratégie de communication digitale à travers la création ou la refonte de sites internet professionnels sur mesure.
           Nous allions UX/UI design, développement web, identité visuelle et SEO pour bâtir une présence en ligne cohérente et performante. Mentoring développeurs, 
           accompagnement Canva et aide Kap Numérik de la Région Réunion disponibles pour concrétiser votre projet.`}
        </p>
      </div>
      <MarqueeHeader />
      <div className="mt-14 flex flex-col w-full items-center gap-5 mb-10 s:gap-2 mobile:gap-3 md:flex-row md:px-10 laptop:mt-14 laptop:gap-1 laptop:w-3/5 lg:w-[30%] lg:pt-10">
        <Link
          href="https://calendly.com/contact-webcreatis/30min"
          data-link="link"
          tabIndex={0}
          role="button"
          className="buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer rounded-md bg-corail mobile:text-sm mobile:w-2/3 mobile:m-auto laptop:w-[150px] laptop:xs:h-[3.5em] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
        >
          RDV en ligne
        </Link>
        <Link
          href="/contact"
          data-link="link"
          tabIndex={0}
          role="button"
          className="buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer rounded-md bg-white mobile:text-sm mobile:w-2/3 mobile:m-auto laptop:w-[150px] laptop:xs:h-[3.5em] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
        >
          contact
        </Link>
        <Link
          href="#projects"
          data-link="link"
          tabIndex={0}
          role="button"
          className="buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer rounded-md bg-white mobile:text-sm mobile:w-2/3 mobile:m-auto laptop:w-[150px] laptop:xs:h-[3.5em] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
        >
          Réalisations
        </Link>
      </div>

      <div className="flex w-full justify-between items-center p-2 mobile:mt-10 md:mt-20 lg:mt-24 lg:p-5">
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
