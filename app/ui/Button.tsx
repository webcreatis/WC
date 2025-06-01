"use client";

import { useEffect, useRef } from "react";

type ButtonProps = {
  text: string;
  bg: string;
  color: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
};

export default function Button({
  text,
  bg,
  color,
  children,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const childrenRef = useRef<HTMLDivElement | null>(null);

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

    return () => {
      currentChildrenRef?.removeEventListener("mouseenter", handleMouseEnter);
      currentChildrenRef?.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <button
      onClick={onClick}
      data-link="link"
      aria-label={ariaLabel}
      className={`buttonAction inline-flex items-center justify-center px-6 py-3 rounded-md transition-all duration-200 whitespace-nowrap text-center text-base font-semibold uppercase ${bg} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail`}
    >
      <div
        ref={childrenRef}
        className="flex items-center gap-2 overflow-hidden"
      >
        <span className={`font-raleway font-semibold ${color} text-xs`}>
          {text}
        </span>
        {children}
      </div>
    </button>
  );
}
