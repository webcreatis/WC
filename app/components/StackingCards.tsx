"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  };
};

export default function StackingCards({ index, section }: StackingCardsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={container}
      key={index}
      style={{ scale, top: `calc(-5vh + ${index * 120}px)` }}
      className={`relative h-auto w-[95%] mx-auto flex justify-center text-6xl font-bold rounded-3xl shadow-[0_2px_43px_rgba(43,0,33,0.1),0_-30px_100px_rgba(43,0,33,0.1)] ${
        section.bg
      } z-[${10 - index}]`}
    >
      {/* <div ref={container} className="flex"> */}
      <div className="w-[50%] flex flex-col gap-5 pt-8 pr-8">
        <h2 className="text-[60px] text-right font-jaapokki text-black uppercase">
          {section.title}
        </h2>
        <div className="w-full flex flex-col gap-5 justify-between pl-8 pr-8 pb-2">
          <p className="text-black font-raleway text-lg font-normal p-3">
            {section.description}
          </p>
          <p className="text-black font-raleway text-base font-medium pl-3">
            {section.service}
          </p>
        </div>
        <div className="pl-8 p-8">
          <Button
            text="Prendre RDV"
            bg="bg-corail"
            color="text-black"
            onClick={() =>
              (window.location.href = "mailto:contact.webcreatis@gmail.com")
            }
          ></Button>
        </div>
      </div>

      <div className="w-[50%]">
        <motion.div style={{ opacity, scale }}>
          <video
            src={section.src}
            autoPlay
            muted
            loop
            className="w-full rounded-tr-lg rounded-br-lg"
          />
        </motion.div>
      </div>
      {/* </div> */}
    </motion.div>
  );
}
