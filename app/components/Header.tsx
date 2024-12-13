"use client";

import Lenis from "@studio-freight/lenis";
import { ArrowUpFromDot, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo-transparent-webcreatis-reunion.webp";
import Button from "../ui/Button";

import { motion } from "framer-motion";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenis.current) {
      lenis.current.scrollTo(element);
    }
  };

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
          <Image
            src={logo}
            alt="Logo de l'agence digitale webcreatis"
            className="w-[12.5em] h-[12.5em] xs:w-[8.5em] xs:h-[8.5em] tablet:w-[10em] tablet:h-[10em]"
          />
        </motion.div>
        <div className="flex gap-5 xs:flex-col tablet:flex-row">
          <motion.div
            animate={{ y: 10, opacity: 1 }}
            initial={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
          >
            <Button
              text="un projet ?"
              bg="bg-darkWhite"
              color="text-black"
              onClick={() =>
                (window.location.href = "https://webcreatis.fr/contact/")
              }
            ></Button>
          </motion.div>
          <motion.div
            animate={{ y: 10, opacity: 1 }}
            initial={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.8, ease: "linear" }}
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
          <nav
            ref={navigationRef}
            className="w-full h-[150px] z-50 xs:h-screen tablet:h-[150px] absolute left-0 overflow-hidden -top-[1000px] bg-greenLight transition-transform"
          >
            <div
              onClick={handleCloseMenu}
              className="w-full h-[50px] flex justify-end mt-5 pr-7 xs:mr-5"
            >
              <X size={36} color="black" />
            </div>
            <ul className="flex w-1/2 m-auto justify-center items-center gap-5 xs:h-full xs:w-full xs:flex-col tablet:flex-row tablet:gap-5 tablet:h-auto tablet:w-1/2">
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Retourner en haut de page`}
                  href="#top"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("top");
                    handleCloseMenu();
                  }}
                >
                  Top
                  <span className="flex -mt-[0.5rem]">
                    <ArrowUpFromDot size={20} color="#18181B" />
                  </span>
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Aller sur la section projets de webcreatis`}
                  href="#projects"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                    handleCloseMenu();
                  }}
                >
                  works
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Aller sur la section services de webcreatis`}
                  href="#services"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                    handleCloseMenu();
                  }}
                >
                  services
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Aller sur la section à propos de l'agence webcreatis`}
                  href="#about"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                    handleCloseMenu();
                  }}
                >
                  team
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Aller sur la section formations de webcreatis`}
                  href="#formations"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("formations");
                    handleCloseMenu();
                  }}
                >
                  formations
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Aller sur la section clients de webcreatis`}
                  href="#customers"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("customers");
                    handleCloseMenu();
                  }}
                >
                  références
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Aller sur la section témoignages client de webcreatis`}
                  href="#testimonials"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                    handleCloseMenu();
                  }}
                >
                  avis
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-black ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  aria-label={`Aller sur la page contact de webcreatis`}
                  href="https://webcreatis.fr/contact/"
                  className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={handleCloseMenu}
                >
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
