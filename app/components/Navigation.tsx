"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

type MenuNavigationPropsTypes = {
  handleCloseMenu: () => void;
  isMenuVisible: boolean;
};

const MenuNavigation = forwardRef<HTMLElement, MenuNavigationPropsTypes>(
  ({ handleCloseMenu, isMenuVisible }, ref) => {
    return (
      <nav
        ref={ref}
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
              aria-label="Aller sur la page d'accueil de webcreatis"
              href="/"
              className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
              onClick={handleCloseMenu}
            >
              Home
            </Link>
          </li>
          <li
            data-link="link"
            className={`buttonAction font-jaapokki uppercase text-black ${
              isMenuVisible ? "animate-fadeIn" : ""
            } transition-all w-full h-[60px] flex justify-center items-center`}
          >
            <Link
              aria-label="Aller sur la page création de site internet"
              href="/creation-site-internet"
              className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
              onClick={handleCloseMenu}
            >
              Création site internet
            </Link>
          </li>
          <li
            data-link="link"
            className={`buttonAction font-jaapokki uppercase text-black ${
              isMenuVisible ? "animate-fadeIn" : ""
            } transition-all w-full h-[60px] flex justify-center items-center`}
          >
            <Link
              aria-label="Aller sur la page contact"
              href="/contact"
              className="w-full h-full text-xl text-black flex justify-center items-center tablet:text-base laptop:text-xl"
              onClick={handleCloseMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
);

MenuNavigation.displayName = "MenuNavigation";

export default MenuNavigation;
