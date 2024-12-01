"use client";

import { Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo6w2h from "../assets/images/6W2H-ERIC-JULIEN.webp";
import logoDrValerieLaval from "../assets/images/DR-LAVAL-VALERIE.webp";
import logoDrJulien from "../assets/images/DR-VIVIER-JULIEN.webp";
import logoEnvergure from "../assets/images/ENVERGURE.webp";
import logoExpertNet from "../assets/images/EXPERT.NET.webp";
import logoSeaIntense from "../assets/images/logo-sea-intense-reunion.webp";
import logoReunionPortage from "../assets/images/REUNION-PORTAGE.webp";
import logoSimplon from "../assets/images/SIMPLON-OUTRE-MER.webp";
import logoSurya from "../assets/images/VILLA-SURYA-SOPHIE-PICCIRILLI.webp";

export default function CustomerSection() {
  const [animatedIndex, setAnimatedIndex] = useState<number | null>(null);

  const logosCustomer = [
    {
      path: logoDrValerieLaval.src,
      bg: "#EFCDD4",
    },
    {
      path: logoDrJulien.src,
      bg: "#2D4673",
    },
    {
      path: logoEnvergure.src,
      bg: "#7F8445",
    },
    {
      path: logoExpertNet.src,
      bg: "#FFFFFF",
    },
    {
      path: logoSimplon.src,
      bg: "#FFFFFF",
    },
    {
      path: logoSurya.src,
      bg: "#EEE0BF",
    },
    {
      path: logoSeaIntense.src,
      bg: "#FFFFFF",
    },
    {
      path: logo6w2h.src,
      bg: "#1D3E57",
    },
    {
      path: logoReunionPortage.src,
      bg: "#01AEEF",
    },
  ];

  const [logosArray, setLogosArray] = useState(logosCustomer);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogosArray((prevElements) => {
        const newElements = [...prevElements];

        // Sélectionne un nouvel index aléatoirement
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * prevElements.length);
        } while (randomIndex === animatedIndex);

        setAnimatedIndex(randomIndex);

        return newElements;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedIndex]);
  return (
    <section className="w-full h-auto flex flex-col justify-center bg-darkWhite">
      <div className="flex justify-center items-center pt-32 pb-10">
        <Target size={36} color="#7BE0AD" />
        <h2>
          <span className="text-black font-raleway italic text-6xl pr-3 xs:text-2xl mobile:text-3xl tablet:text-6xl">
            Our
          </span>
          <span className="text-black text-5xl font-jaapokki font-bold uppercase xs:text-2xl mobile:3xl tablet:text-6xl">
            References
          </span>
        </h2>
      </div>
      <h3 className="text-3xl text-black font-raleway text-center pb-10 xs:text-xl tablet:text-2xl">
        Ils nous font confiance
      </h3>

      <div className="w-1/2 m-auto overflow-hidden grid grid-cols-5 grid-rows-3 gap-x-8 gap-y-10 h-auto bg-darkWhite pt-20 pb-20 xs:w-full xs:grid-cols-2 xs:gap-x-2 tablet:grid-cols-3 tablet:w-3/4 ipadPro:grid-cols-5 xl:grid-cols-4">
        {logosArray.map((logo, index) => (
          <div
            key={index}
            className={`relative flex justify-center p-5 ${
              animatedIndex === index ? `card-logo` : ""
            } ${
              animatedIndex !== index
                ? "blur-sm xs:blur-none tablet:blur-sm"
                : ""
            } `}
            style={{
              backgroundColor:
                animatedIndex === index ? logo.bg : "transparent",
            }}
          >
            <Image
              src={logo.path}
              alt={`Logo ${index}`}
              width={100}
              height={100}
              className={`object-contain`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
