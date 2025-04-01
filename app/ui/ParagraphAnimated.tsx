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

  const characters = value.split("");

  return (
    <motion.p
      ref={elementRef}
      className="font-raleway text-white w-[90%] sm:w-[85%] md:w-[80%] mx-auto text-center pt-0 pb-20 xs:pt-40 sm:pb-32 md:pb-40 lg:pb-48 lg:pt-10"
    >
      {characters.map((char, i) => {
        // Calcul pour déterminer quand un caractère doit apparaître
        const charThreshold = i / characters.length;
        const isVisible = scrollProgress >= charThreshold;

        return (
          <motion.span
            key={i}
            className="text-3xl sm:text-4xl md:text-6xl laptop:text-7xl lg:text-9xl inline-block"
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
              transition: { duration: 0.3 },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
