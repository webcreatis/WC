"use client";

import { useEffect, useRef } from "react";

type ButtonProps = {
  text: string;
  bg: string;
  color: string;
  children?: JSX.Element;
};

export default function Button({ text, bg, color, children }: ButtonProps) {
  // refs
  const childrenRef = useRef<HTMLDivElement | null>(null);

  // Effet pour attacher les événements au chargement
  useEffect(() => {
    const currentChildrenRef = childrenRef.current;
    const dotsContainer = currentChildrenRef?.querySelector(".dots");

    const handleMouseEnter = () => {
      dotsContainer?.classList.remove("animate-rotateMouseOut");
      dotsContainer?.classList.add("animate-rotateMouseEnter");
    };

    const handleMouseOut = () => {
      dotsContainer?.classList.remove("animate-rotateMouseEnter");
      dotsContainer?.classList.add("animate-rotateMouseOut");
    };

    currentChildrenRef?.addEventListener("mouseenter", handleMouseEnter);
    currentChildrenRef?.addEventListener("mouseout", handleMouseOut);

    // Nettoyage lors du démontage du composant
    return () => {
      currentChildrenRef?.removeEventListener("mouseenter", handleMouseEnter);
      currentChildrenRef?.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // Affichage
  return (
    <>
      <button
        className={
          "flex justify-center items-center text-[.875em] uppercase h-[3.2em] cursor-pointer p-[1.125em] rounded-[6.25em] " +
          bg
        }
      >
        <div
          ref={childrenRef}
          className="flex justify-center items-center overflow-hidden gap-[.625em]"
        >
          <span className={"font-raleway font-semibold " + color}>{text}</span>
          {children}
        </div>
      </button>
    </>
  );
}
