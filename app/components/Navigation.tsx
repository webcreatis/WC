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
        className={`w-full xs:h-screen sm:h-[150px] z-50 fixed top-0 left-0 bg-greenLight transition-transform duration-300 ease-in-out 
        ${isMenuVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          onClick={handleCloseMenu}
          className="w-full h-[50px] flex justify-end mt-5 pr-7 xs:mr-5"
        >
          <X size={36} color="black" />
        </div>
        <ul className="flex flex-col items-center justify-center h-full gap-6 md:flex-row md:h-auto md:w-3/4 md:m-auto">
          {[
            { href: "/", label: "Home" },
            { href: "/#mentoring", label: "Mentoring" },
            {
              href: "/creation-site-internet",
              label: "Création site internet",
            },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <li
              key={index}
              className="buttonAction font-jaapokki uppercase text-black transition-all w-full md:w-auto flex justify-center items-center"
            >
              <Link
                aria-label={`Aller sur la page ${item.label}`}
                href={item.href}
                className="w-full h-full text-xl text-black flex justify-center items-center md:text-base lg:text-xl px-6 py-3"
                scroll={true}
              >
                <span onClick={handleCloseMenu}>{item.label}</span>
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
