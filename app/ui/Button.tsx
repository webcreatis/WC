"use client";

import { useEffect, useRef } from "react";

type ButtonProps = {
  text: string;
  bg: string;
  color: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  text,
  bg,
  color,
  children,
  onClick,
}: ButtonProps) {
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
        aria-label="bouton action"
        onClick={onClick}
        data-link="link"
        className={`buttonAction relative flex justify-center xs:w-[135px] xs:h-[2.5em] xs:p-2 ipadPro:w-[130px] laptop:xs:h-[3.5em] items-center uppercase cursor-pointer p-[1.7em] rounded-md ${bg}`}
      >
        <div
          ref={childrenRef}
          className="flex justify-center items-center overflow-hidden gap-[.625em]"
        >
          <span
            className={`font-raleway font-semibold xs:text-xs ipadPro:text-sm ${color}`}
          >
            {text}
          </span>
          {children}
        </div>
      </button>
    </>
  );
}
