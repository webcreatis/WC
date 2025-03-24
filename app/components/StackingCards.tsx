"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type SectionProps = {
  title: string;
  bg: string;
};

const sections: SectionProps[] = [
  { title: "Card 1", bg: "bg-[#FF6B6B]" }, // Couleurs fixes pour test
  { title: "Card 2", bg: "bg-[#1DD1A1]" },
  { title: "Card 3", bg: "bg-[#2E86DE]" },
  { title: "Card 4", bg: "bg-[#9B59B6]" },
];

export default function StackingCards() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative h-[400vh] mt-28">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`sticky top-0 h-screen w-full flex items-center justify-center text-white text-6xl font-bold ${
            section.bg
          } z-[${10 - index}]`}
        >
          {section.title}
        </motion.div>
      ))}
    </div>
  );
}
