"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "../ui/Button";

type StackingCardsProps = {
  index: number;
  section: {
    title: string;
    bg: string;
    description: string;
    service: string;
    src: string;
    imgPlaceholder: string;
  };
};

export default function StackingCards({ index, section }: StackingCardsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={container}
      key={index}
      className={`flex flex-col relative w-[95%] max-w-[1800px] mx-auto xs:mt-10 s:mt-16 md:h-[650px] md:flex-row laptop:h-[600px] justify-center overflow-hidden text-6xl font-bold rounded-3xl shadow-[0_2px_43px_rgba(43,0,33,0.1),0_-30px_100px_rgba(43,0,33,0.1)] ${
        section.bg
      } z-[${10 - index}]`}
    >
      {/* Texte */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 px-6 py-8 xs:pt-1 md:pt-8 md:pr-8">
        <h2 className="pt-10 xs:text-2xl xs:text-left md:text-3xl md:pt-5 laptop:text-4xl xl:text-[50px] font-jaapokki text-black uppercase">
          {section.title}
        </h2>
        <div className="w-full flex flex-col gap-5 justify-between">
          <p className="text-black font-raleway xs:text-base md:text-lg laptop:text-lg xl:text-2xl font-normal">
            {section.description}
          </p>
          <p className="text-black font-raleway text-sm md:text-base font-medium">
            {section.service}
          </p>
        </div>
        <div className="pt-4 md:pl-1">
          <Button
            text="Prendre RDV"
            bg="bg-corail"
            color="text-black"
            onClick={() =>
              (window.location.href = "mailto:contact.webcreatis@gmail.com")
            }
          />
        </div>
      </div>
      <div className="relative w-full md:w-1/2 h-full">
        <motion.div style={{ opacity }} className="h-full">
          <Image
            src={section.imgPlaceholder}
            alt="Placeholder"
            width={1400}
            height={1300}
            className="w-full h-full object-cover"
          />
          {/* <picture>
            <source
              srcSet={section.imgPlaceholder}
              media="(max-width: 768px)"
            />
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0 md:rounded-tr-3xl md:rounded-br-3xl hidden md:block"
            >
              <source src={section.src} type="video/mp4" />
              <source
                src={section.src.replace(".mp4", ".webm")}
                type="video/webp"
              />
            </video>
            <Image
              src={section.imgPlaceholder}
              alt="Placeholder"
              width={10}
              height={10}
              className="w-full h-full object-cover md:hidden"
            />
          </picture> */}
        </motion.div>
      </div>
    </motion.div>
  );
}
