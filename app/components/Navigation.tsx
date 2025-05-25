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
        <div
          onClick={handleCloseMenu}
          className="absolute right-1 top-5 w-full h-[50px] flex justify-end"
        >
          <X size={36} color="black" />
        </div>
        <ul className="flex flex-col justify-center items-left h-full gap-2 md:h-full">
          {[
            { href: "/", label: "Home" },
            { href: "/#mentoring", label: "Mentoring" },
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
              >
                <span
                  onClick={handleCloseMenu}
                  className="text-xl md:text-4xl xl:text-6xl text-green font-bold"
                >
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
