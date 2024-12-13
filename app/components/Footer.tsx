"use client";

import { AtSign, Github, Instagram, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import copyrightIcon from "../assets/images/icon-copyrights.webp";
import webcreatisLogo from "../assets/images/logo-transparent-webcreatis-reunion.webp";
import Button from "../ui/Button";
import CardFooter from "../ui/CardFooter";
import Meteo from "../ui/Meteo";

export default function Footer() {
  // Année en cours
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-black w-full h-auto flex">
      <div className="container mx-auto pb-14">
        <div className="pt-24 grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4">
          <div className="text-5xl text-black rounded-lg py-1 row-span-4 gap-y-4">
            <Meteo />
            <div className="w-full h-auto row-span-2 border-[1px] border-[#3f3f46] rounded-xl overflow-hidden mt-5">
              <small className="flex items-center uppercase text-white text-xl p-5">
                Connect with us
              </small>
              <div className="grid grid-cols-3 grid-rows-2 gap-2 p-5">
                <CardFooter
                  icon={<AtSign size="1.25rem" />}
                  texte="Email"
                  link="mailto:contact.webcreatis@gmail.com"
                />
                <CardFooter
                  icon={<Instagram size="1.25rem" />}
                  texte="Instagram"
                  link="https://www.instagram.com/webcreatis?igsh=MXdjdml0NGJmNXhqaw%3D%3D&utm_source=qr"
                />
                <CardFooter
                  icon={<Linkedin size="1.25rem" />}
                  texte="Patricia"
                  link="https://www.linkedin.com/in/patriciaperroudon/"
                />
                <CardFooter
                  icon={<Linkedin size="1.25rem" />}
                  texte="Patrick"
                  link="https://www.linkedin.com/in/patrick-perroudon/"
                />
                <CardFooter
                  icon={<Github size="1.25rem" />}
                  texte="Github"
                  link="https://github.com/webcreatis"
                />
                <CardFooter
                  icon={<Phone size="1.25rem" />}
                  texte="Phone"
                  link="tel:0693514439"
                />
              </div>
            </div>
            <div className="w-full flex h-[250px] items-center row-span-2 overflow-hidden mt-5 border-solid border-[1px] border-[#3f3f46] rounded-xl gradient-border xs:justify-center">
              <div className="w-1/2 h-1/2 flex items-center justify-center border-solid border-r-[1px] border-white xs:w-[120px] laptop:w-1/2">
                <Image
                  src={copyrightIcon}
                  alt={`icon du copyright`}
                  className="hover:scale-110 object-cover"
                  width={150}
                  placeholder="blur"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center xs:items-start xs:pl-5">
                <span className="text-white font-raleway text-xl xs:text-base">
                  {currentYear} All Rights Reserved
                </span>
                <Link
                  href="/mentions-legales"
                  className="text-white buttonAction font-raleway text-xl xs:text-base"
                  aria-label={`Allez sur la page des mentions légales de webcreatis`}
                >
                  Mentions légales
                </Link>
                <div className="flex justify-center items-center">
                  <Link
                    href="/"
                    className="text-white buttonAction"
                    data-link="link"
                    aria-label={`Retour en haut de la page`}
                  >
                    <Image
                      src={webcreatisLogo}
                      alt={`logo du site webcreatis`}
                      className="object-cover"
                      width={120}
                      placeholder="blur"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-full place-items-center h-[100px] border-solid border-[1px] border-[#3f3f46] rounded-xl mt-5">
              <div className="marqueeText relative overflow-hidden">
                <div className="flex whitespace-nowrap animate-marqueeText">
                  <span className="text-[3vw] px-[2vw] uppercase text-green  xs:text-2xl ipadPro:text-[2.5vw]">
                    Get In Touch
                  </span>
                  <span className="text-[2vw] px-[2vw] uppercase text-green  xs:text-2xl ipadPro:text-[2.5vw]">
                    Get In Touch
                  </span>
                  <span className="text-[2vw] px-[2vw] uppercase text-green  xs:text-2xl ipadPro:text-[2.5vw]">
                    Get In Touch
                  </span>
                  <span className="text-[2vw] px-[2vw] uppercase text-green  xs:text-2xl ipadPro:text-[2.5vw]">
                    Get In Touch
                  </span>
                  <span className="text-[2vw] px-[2vw] uppercase text-green  xs:text-2xl ipadPro:text-[2.5vw]">
                    Get In Touch
                  </span>
                  <span className="text-[2vw] px-[2vw] uppercase text-green  xs:text-2xl ipadPro:text-[2.5vw]">
                    Get In Touch
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-5xl text-black rounded-lg py-1 row-span-2">
            <div className="w-full h-full row-span-2 border-[1px] border-[#3f3f46] rounded-xl overflow-hidden bg-site-envergure">
              <div className="flex w-full items-center justify-between uppercase p-5 backdrop-opacity-10 backdrop-invert bg-black/95">
                <div className="font-raleway text-xl text-white"> Latest </div>
                <span className="font-raleway text-xl text-white"> #Work </span>
              </div>
              <div className="flex flex-col justify-center items-start p-5 mt-16">
                <div className="mb-2 text-2xl font-bold text-white font-jaapokki">
                  Création site internet - Envergure
                </div>
                <div className="mb-4 text-white font-raleway">
                  {" "}
                  Chez WebCreatis, nous donnons vie à vos idées sur le web. 🌐
                  Avec Envergure.re, nous avons conçu un site moderne, au design
                  soigné et aux fonctionnalités adaptées, avec une bonne dose de
                  passion. Vous avez les rêves, on a les pixels ! 🚀
                </div>
              </div>
              <div className="p-5">
                <Button
                  text="View Project"
                  bg="bg-green"
                  color="text-black"
                  onClick={() =>
                    (window.location.href = "https://www.envergure.re/")
                  }
                />
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#3f3f46] text-5xl text-white rounded-lg p-5 row-span-2">
            <small className="flex flex-row items-center justify-between gap-2 uppercase">
              <div className="flex flex-row items-center gap-2">
                <div className="w-10 h-4 overflow-hidden">
                  <div className="w-full h-full rotate-180">
                    <div className="flex flex-wrap justify-center relative translate-[-50%, -50%] left-[10%] top-[10%]">
                      <div
                        className="bar bg-green w-[0.125rem] animate-barAnimated mt-0 mr-[0.1rem] mb-0 ml-[0.1rem] h-0"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="bar bg-green w-[0.125rem] animate-barAnimated mt-0 mr-[0.1rem] mb-0 ml-[0.1rem] h-0"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="bar bg-green w-[0.125rem] animate-barAnimated mt-0 mr-[0.1rem] mb-0 ml-[0.1rem] h-0"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                      <div
                        className="bar bg-green w-[0.125rem] animate-barAnimated mt-0 mr-[0.1rem] mb-0 ml-[0.1rem] h-0"
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                      <div
                        className="bar bg-green w-[0.125rem] animate-barAnimated mt-0 mr-[0.1rem] mb-0 ml-[0.1rem] h-0"
                        style={{ animationDelay: "0.8s" }}
                      ></div>
                      <div
                        className="bar bg-green w-[0.125rem] animate-barAnimated mt-0 mr-[0.1rem] mb-0 ml-[0.1rem] h-0"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="bar bg-green w-[0.125rem] animate-barAnimated mt-0 mr-[0.1rem] mb-0 ml-[0.1rem] h-0"
                        style={{ animationDelay: "1.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
                Recent Listening to
              </div>
              <button
                aria-label="bouton action"
                type="button"
                className="btn btn--neutral btn--sm btn--square"
              >
                <span data-v-e7429577="" className="btn__content">
                  <svg
                    data-v-3bffcb87=""
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="icon"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"></path>
                      <path d="m18 2l4 4l-4 4M2 6h1.9c1.5 0 2.9.9 3.6 2.2M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"></path>
                      <path d="m18 14l4 4l-4 4"></path>
                    </g>
                  </svg>
                </span>
              </button>
            </small>
            <div className="w-full mt-10 flex justify-center gap-3 xs:flex-col laptop:flex-row">
              <iframe
                title="spotify"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/5nZVdhUh4Oz9LMQyneMpD5?utm_source=generator"
                width="40%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="xs:w-full laptop:w-[50%]"
              ></iframe>
              <iframe
                title="spotify"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/3HIA9qP0VRXwGPu9JGhntM?utm_source=generator"
                width="40%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="xs:w-full laptop:w-[50%]"
              ></iframe>
            </div>
            <div className="w-full mt-4 flex justify-center items-center gap-3 xs:flex-col laptop:flex-row">
              <iframe
                title="spotify"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/16zrPTCH7MuDST1aIwk3gI?utm_source=generator"
                width="40%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="xs:w-full laptop:w-[50%]"
              ></iframe>
              <iframe
                title="spotify"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/5TlSw8HyxbUeOdQlb8zVbg?utm_source=generator"
                width="40%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="xs:w-full laptop:w-[50%]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
