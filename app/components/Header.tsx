"use client";

import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo-transparent-webcreatis-reunion.webp";
import Button from "../ui/Button";

import { motion } from "framer-motion";
import Navigation from "./Navigation";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigationRef = useRef<HTMLDivElement | null>(null);

  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.9, // Control the duration of the scroll
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    const animate = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current?.destroy();
    };
  }, []);

  const handleShowMenu = () => {
    if (navigationRef.current) {
      setMenuVisible(true);
      navigationRef.current.classList.remove("-top-[1000px]");
      navigationRef.current.classList.add("top-0", "animate-SlideDownDeform");
    }
  };

  const handleCloseMenu = () => {
    if (navigationRef.current) {
      setMenuVisible(false);
      navigationRef.current.classList.remove(
        "top-0",
        "animate-SlideDownDeform"
      );
      navigationRef.current.classList.add("-top-[1000px]");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[12.5em] p-9 xs:h-[10rem] xs:p-2 z-[200]">
      <div className="flex justify-between items-center overflow-hidden pb-2 h-full">
        <motion.div
          animate={{ y: 10, opacity: 1 }}
          initial={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
        >
          <Link
            href={"/"}
            aria-label="bouton action"
            data-link="link"
            className="buttonAction"
          >
            <Image
              src={logo}
              alt="Logo de l'agence digitale webcreatis"
              className="w-[12.5em] h-[12.5em] xs:w-[8.5em] xs:h-[8.5em] tablet:w-[10em] tablet:h-[10em]"
            />
          </Link>
        </motion.div>

        <div className="flex gap-5 xs:flex-col tablet:flex-row">
          {/* <motion.div
            animate={{ y: 10, opacity: 1 }}
            initial={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
          >
            <Button
              text="RDV en ligne"
              bg="bg-corail"
              color="text-black"
              onClick={() =>
                window.open(
                  "https://calendly.com/contact-webcreatis/30min",
                  "_blank"
                )
              }
            ></Button>
          </motion.div> */}
          <motion.div
            animate={{ y: 10, opacity: 1 }}
            initial={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.8, ease: "linear" }}
            className="mr-1 laptop:mr-5"
          >
            <Button
              text="Menu"
              bg="bg-darkWhite"
              color="text-black"
              onClick={handleShowMenu}
            >
              <div className="dots flex items-center relative w-[1.15em] h-[1.15em] text-black gap-1">
                <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
                <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
              </div>
            </Button>
          </motion.div>
          <Navigation
            handleCloseMenu={handleCloseMenu}
            isMenuVisible={isMenuVisible}
            ref={navigationRef}
          />
        </div>
      </div>
    </header>
  );
}
