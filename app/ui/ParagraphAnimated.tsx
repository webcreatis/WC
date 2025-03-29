"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParagraphAnimatedProps = {
  value: string;
};

export default function ParagraphAnimated({ value }: ParagraphAnimatedProps) {
  const elementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.8", "start start"],
  });

  const words = value.split("");

  return (
    <motion.p
      ref={elementRef}
      className="font-raleway text-black w-[80%] mx-auto text-center pt-0 pb-40"
      style={{ opacity: scrollYProgress }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        return (
          <motion.span key={i} style={{ opacity }} className="text-9xl">
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
