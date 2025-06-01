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
        className={`w-full xs:h-screen z-auto fixed top-0 left-0 bg-greenLight transition-transform duration-300 ease-in-out 
        ${isMenuVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          onClick={handleCloseMenu}
          aria-label="Fermer le menu"
          data-link="link"
          className="w-10 absolute buttonAction right-5 top-5 h-[50px] flex justify-end items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
        >
          <X size={36} color="black" />
        </button>

        <ul className="flex flex-col justify-center items-left h-full gap-2 md:h-full">
          {[
            { href: "/", label: "Home" },
            { href: "/#mentoring-dev", label: "Mentoring Dev" },
            { href: "/#mentoring-canva", label: "Mentoring Canva" },
            { href: "/kap-numerik", label: "Kap Numerik" },
            {
              href: "/creation-site-internet",
              label: "Création site internet",
            },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <li
              key={index}
              className="buttonAction font-jaapokki uppercase text-black transition-all w-full flex justify-center items-center"
            >
              <Link
                aria-label={`Aller sur la page ${item.label}`}
                href={item.href}
                className="w-full h-full flex justify-center items-center px-6 py-2 md:py-4"
                scroll={true}
                onClick={handleCloseMenu}
              >
                <span className="text-xl md:text-6xl xl:text-7xl text-green font-bold">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

MenuNavigation.displayName = "MenuNavigation";

export default MenuNavigation;
