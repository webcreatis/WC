"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import creaWebsitePics from "../assets/images/responsive-design.webp";

type StackingCardsProps = {
  index: number;
  section: {
    title: string;
    bg: string;
    description: string;
    url: string;
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
      style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
      className={`relative h-[560px] w-[90%] mx-auto flex items-center justify-center text-white text-6xl font-bold rounded-3xl ${
        section.bg
      } z-[${10 - index}]`}
    >
      {/* <div ref={container} className="flex"> */}
      <div className="w-[50%] flex flex-col justify-center gap-5">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
        <span className="flex gap-5 items-center">
          <a href={section.url} target="_blank">
            See more
          </a>
          <svg
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
              fill="black"
            />
          </svg>
        </span>
      </div>

      <div className="w-[50%]">
        <motion.div style={{ opacity, scale }}>
          <Image
            src={creaWebsitePics.src}
            alt="image"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      {/* </div> */}
    </motion.div>
  );
}
