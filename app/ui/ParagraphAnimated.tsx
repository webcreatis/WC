"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ParagraphAnimatedProps = {
  value: string;
};

export default function ParagraphAnimated({ value }: ParagraphAnimatedProps) {
  const elementRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "center center"],
  });

  // ici useEffect permet de mettre à jour l'état avec la valeur actuelle du scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", setScrollProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  // const characters = value.split("");
  const words = value.split(" ");

  return (
    <motion.p
      ref={elementRef}
      className="whitespace-pre-wrap break-words font-raleway text-white w-[90%] sm:w-[85%] md:w-[80%] mx-auto text-center pt-0 pb-20 xs:text-left xs:pt-20 sm:pb-32 md:pb-40 lg:pb-48 lg:pt-10"
    >
      {words.map((word, i) => {
        const wordThreshold = i / words.length;
        const isVisible = scrollProgress >= wordThreshold;

        return (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em] text-4xl sm:text-4xl md:text-6xl laptop:text-7xl lg:text-9xl"
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
              transition: { duration: 0.3 },
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
