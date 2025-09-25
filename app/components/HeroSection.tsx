"use client";

import { BoxReveal } from "@/components/ui/box-reveal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Image from "next/image";
import Link from "next/link";
import kapMumPics from "../assets/images/KAP-NUMERIK.webp";
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
      <MarqueeHeader />
      {/* CTA HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full mt-5">
        <div className="max-w-7xl mx-auto px-6 py-10 gap-10 flex flex-col lg:flex-row items-center lg:items-center justify-between">
          {/* Texte */}
          <div className="flex-1 text-center lg:text-left lg:max-w-xl flex flex-col justify-center">
            <BoxReveal boxColor="#5FC593" width="100%" duration={0.4}>
              <h1 className="text-2xl text-left p-5 md:text-center md:text-3xl lg:text-left lg:p-0 font-bold mb-4 animate-fadeIn tracking-[-1]">
                <strong className="text-corail text-2xl md:text-3xl md:pr-1">
                  C
                </strong>
                réation de sites internet à La Réunion
                <br />
                <strong className="text-corail text-2xl md:text-3xl md:pr-1">
                  R
                </strong>
                efonte & Audit de site Web <br />
                <strong className="text-corail text-2xl md:text-3xl md:pr-1">
                  U
                </strong>
                X/UI Design & Mentoring Canva
                <br />
                <strong className="text-corail text-2xl md:text-3xl md:pr-1">
                  D
                </strong>
                éveloppement Mobile & Formations
              </h1>
            </BoxReveal>
            <BoxReveal boxColor="#5FC593" duration={0.6}>
              <p className="p-5 text-lg text-left md:text-xl opacity-90 mb-6 animate-fadeIn md:p-5 lg:p-0">
                Webcreatis, agence digitale à La Réunion, conçoit et refond des
                sites web professionnels sur mesure. Nous associons design
                UX/UI, développement, identité visuelle et SEO pour booster
                votre visibilité locale. Mentoring, accompagnement Canva et aide
                Kap Numérik pour concrétiser votre projet.
              </p>
            </BoxReveal>

            {/* Boutons CTA */}
            <BoxReveal boxColor="#5FC593" width="100%" duration={0.8}>
              <div className="mt-5 flex flex-col items-center gap-5 md:flex-row md:justify-center lg:justify-start md:w-full">
                <InteractiveHoverButton className="bg-[#8AE4B6] border-transparent rounded-sm">
                  <Link
                    href="/contact"
                    className="animate-fadeIn buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer text-black hover:text-white mobile:text-sm laptop:w-[150px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
                  >
                    Devis gratuit
                  </Link>
                </InteractiveHoverButton>
                <InteractiveHoverButton className="border-transparent rounded-sm">
                  <Link
                    href="https://calendly.com/contact-webcreatis/30min"
                    className="buttonAction z-20 flex justify-center w-[200px] h-[3rem] p-2 text-xs items-center uppercase cursor-pointer rounded-md  text-[#5FC593] mobile:text-sm laptop:w-[150px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
                  >
                    RDV en ligne
                  </Link>
                </InteractiveHoverButton>
              </div>
            </BoxReveal>
          </div>

          {/* Illustration */}
          <BoxReveal boxColor="#5FC593" duration={0.6}>
            <div className="flex-none flex justify-center animate-fadeIn">
              <Image
                src={kapMumPics}
                alt="Illustration WebCreatis"
                width={500}
                height={350}
                className="mx-auto object-cover rounded-md sm:hidden md:flex md: pt-8"
              />
            </div>
          </BoxReveal>
        </div>
      </div>

      <div className="flex w-full justify-between items-center p-2 mobile:mt-10 md:mt-20 lg:-mt-1 lg:p-5">
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
