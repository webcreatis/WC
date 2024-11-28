"use client";

import { ArrowUpFromDot, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import logo from "../assets/images/logo-transparent-webcreatis-reunion.webp";
import Button from "../ui/Button";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigationRef = useRef<HTMLDivElement | null>(null);

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
    <header
      id="top"
      className="fixed top-0 left-0 w-full h-[12.5em] p-9 xs:h-[10rem] xs:p-2 z-[200]"
    >
      <div className="flex justify-between items-center overflow-hidden pb-2 h-full">
        <Image
          src={logo}
          alt="Logo de l'agence digitale webcreatis"
          className="w-[12.5em] h-[12.5em] xs:w-[8.5em] xs:h-[8.5em] tablet:w-[10em] tablet:h-[10em]"
        />
        <div className="flex gap-5 xs:flex-col tablet:flex-row">
          <Button
            text="un projet ?"
            bg="bg-darkWhite"
            color="text-black"
            onClick={handleShowMenu}
          ></Button>
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
          <nav
            ref={navigationRef}
            className="w-full h-[150px] z-50 xs:h-screen tablet:h-[150px] absolute left-0 overflow-hidden -top-[1000px] bg-corail transition-transform"
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
                className={`buttonAction font-jaapokki uppercase text-darkWhite ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  href="#top"
                  className="w-full h-full text-xl text-darkWhite flex justify-center items-center tablet:text-base laptop:text-xl gap-1"
                  onClick={handleCloseMenu}
                >
                  Top
                  <span className="flex -mt-[0.5rem]">
                    <ArrowUpFromDot size={20} color="#E4F2E7" />
                  </span>
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-darkWhite ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  href="#projects"
                  className="w-full h-full text-xl text-darkWhite flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={handleCloseMenu}
                >
                  works
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-darkWhite ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  href="#projects"
                  className="w-full h-full text-xl text-darkWhite flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={handleCloseMenu}
                >
                  services
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-darkWhite ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  href="#projects"
                  className="w-full h-full text-xl text-darkWhite flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={handleCloseMenu}
                >
                  team
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-darkWhite ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  href="#projects"
                  className="w-full h-full text-xl text-darkWhite flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={handleCloseMenu}
                >
                  clients
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-darkWhite ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  href="#projects"
                  className="w-full h-full text-xl text-darkWhite flex justify-center items-center tablet:text-base laptop:text-xl"
                  onClick={handleCloseMenu}
                >
                  avis
                </Link>
              </li>
              <li
                data-link="link"
                className={`buttonAction font-jaapokki uppercase text-darkWhite ${
                  isMenuVisible ? "animate-fadeIn" : ""
                } transition-all w-full h-[60px] flex justify-center items-center`}
              >
                <Link
                  href="#projects"
                  className="w-full h-full text-xl text-darkWhite flex justify-center items-center tablet:text-base laptop:text-xl"
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
