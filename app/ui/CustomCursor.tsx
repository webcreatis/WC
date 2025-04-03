"use client";

import { MoveRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorPosition = useCallback((e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const cursor = cursorRef.current;

    if (cursor) {
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
    }
  }, []);

  useEffect(() => {
    // On récupére l'ensemble des cards services
    const boxes = document.querySelectorAll(".box");
    const links = document.querySelectorAll(".buttonAction");
    const cursorIcon = cursorRef.current?.querySelector(".arrow-cursor");

    const showCursorIcon = () => {
      if (cursorIcon) {
        cursorIcon.classList.add("visible");
      }
    };

    const hideCursorIcon = () => {
      if (cursorIcon) {
        cursorIcon.classList.remove("visible");
      }
    };

    links.forEach((button) => {
      const attributeButton = button.getAttribute("data-link");

      button.addEventListener("mouseover", () => {
        showCursorIcon();
        // on se branche au cursor via sa reference
        const cursor = cursorRef.current;
        if (attributeButton && cursor) {
          cursor.style.transform = "scale(2)";
        }
      });

      button.addEventListener("mouseout", () => {
        hideCursorIcon();
        // on se branche au cursor via sa reference
        const cursor = cursorRef.current;

        if (attributeButton && cursor) cursor.style.transform = "none";
      });
    });

    // On boucle dessus pour ajouter un événement au passage de la souris
    boxes.forEach((elem) => {
      // Mouse enter
      elem.addEventListener("mouseenter", function () {
        // On récupére l'élément qui posséde l'attribue "data-image"
        const att = elem.getAttribute("data-image");

        // on se branche au cursor via sa reference
        const cursor = cursorRef.current;

        // On affiche les images des services si cursor n'est pas nul
        if (cursor) {
          // On ajoute la class "cursorGrow"
          cursor.classList.add("cursorGrow");
          // on ajoute un bg image
          cursor.style.background = `url(${att})`;
          cursor.style.backgroundPosition = "center";
          cursor.style.backgroundSize = "contain";
          cursor.style.backgroundRepeat = "no-repeat";
          cursor.classList.remove("border-2", "border-solid", "border-corail");
        }
      });

      // Mouse Out
      elem.addEventListener("mouseout", function () {
        // On récupére le cursor
        const cursor = cursorRef.current;
        if (cursor) {
          cursor.classList.remove("cursorGrow");
          cursor.style.background = "#18181B";
          cursor.classList.add("border-2", "border-solid", "border-corail");
        }
      });
    });

    window.addEventListener("mousemove", cursorPosition);

    // Cleanup des événements pour éviter les fuites de mémoire
    return () => {
      boxes.forEach((elem) => {
        elem.removeEventListener("mouseenter", () => {});
        elem.removeEventListener("mouseout", () => {});
      });
      window.removeEventListener("mousemove", cursorPosition);
    };
  }, [cursorPosition]);

  return (
    <div
      ref={cursorRef}
      className="cursor flex justify-center items-center w-[30px] h-[30px] rounded-full bg-black border-2 border-solid border-corail fixed pointer-events-none bg-contain bg-center z-[9999] transition-transform duration-500 ease-in-out"
    >
      <p className="arrow-cursor">
        <MoveRight color="#e4e6ef" size={10} />
      </p>
    </div>
  );
}
