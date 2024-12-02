"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const accordionItems = [
  {
    title: "Analyse & Stratégie",
    content: `Nous commençons par comprendre vos besoins et vos objectifs. Ensuite, une étude des mots-clés permet de choisir ceux qui correspondent le mieux à votre activité. 
    Enfin, nous définissons ensemble un plan clair et adapté pour créer un site qui répond à vos attentes et attire les bonnes audiences.`,
    bg: "bg-black",
  },
  {
    title: "Wireframe & Maquettes",
    content: `Wireframes et maquettes :\n 
    On imagine d’abord la structure du site pour que l’information soit super claire, 
    puis on s’assure que tout roule niveau navigation et expérience utilisateur !`,
    bg: "bg-black",
  },
  {
    title: "Développement",
    content: `Nous créons votre site web sur-mesure, en répondant exactement à vos besoins, avec une priorité sur le mobile-first. 
    En plus, nous intégrons des outils top comme les CMS (Directus, Strapi), les systèmes de mailing (Mailchimp), et bien plus, pour vous offrir une expérience ultra fluide et hyper connectée.`,
    bg: "bg-black",
  },
  {
    title: "Optimisations SEO",
    content: `Dès le départ, on met le SEO au cœur du projet ! On choisit les mots-clés stratégiques, on crée une stratégie éditoriale percutante et on configure les redirections pour une meilleure visibilité. 
    Avant le lancement, on vérifie tout : les titres, le balisage, la vitesse du site, et l’accessibilité pour garantir des performances optimales selon les critères de Google Web Vitals`,
    bg: "bg-black",
  },
  {
    title: "Tests & Déploiement",
    content: `Nous testons la compatibilité du site sur tous les appareils et navigateurs. Avant le lancement, nous vérifions que tout fonctionne parfaitement. 
    Après mise en ligne, nous suivons les performances et ajustons selon les retours et les indicateurs SEO.`,
    bg: "bg-black",
  },
];

export default function HorizontalAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-3/4 m-auto h-[420px] xs:w-full xs:flex-col lg:flex-row">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={cn(
            "h-full flex-1 flex-col items-center justify-between relative overflow-hidden transition-all duration-700 ease-in-out tablet:p-1",
            activeIndex === index ? "flex-[3] flex-col justify-start" : "flex-1"
          )}
          onClick={() => setActiveIndex(index)}
        >
          {/* Background & Overlay */}
          <div
            className={cn(
              "relative h-full flex flex-col items-center justify-between border-[1px] border-solid border-white rounded-lg inset-0 transition-opacity duration-700 pt-5 pb-32 xs:flex-row lg:flex-col",
              item.bg,
              activeIndex === index
                ? "justify-start items-center p-5 gap-5"
                : "justify-between"
            )}
          >
            {/* Number */}
            <div
              className={cn(
                "number text-white flex justify-center items-center rounded-md border-[1px] border-solid w-[38px] h-[38px] xs:p-3 xs:mt-5 xs:ml-5 lg:ml-0",
                activeIndex === index
                  ? "bg-green text-black xs:ml-0"
                  : "bg-transparent"
              )}
            >
              {index + 1}
            </div>

            {/* Title */}
            <h3
              className={cn(
                "text-white font-semibold uppercase z-10 w-56 absolute transform xs:right-5 xs:text-right lg:bottom-14 lg:text-left lg:-translate-y-16 lg:-right-16",
                activeIndex === index
                  ? "text-base hidden"
                  : "text-sm xs:rotate-0 lg:-rotate-90"
              )}
            >
              {item.title}
            </h3>

            {/* Content */}
            <div
              className={cn(
                "transition-all duration-500 ease-in-out text-white text-sm z-20 shadow-md rounded-md text-left tracking-tight xs:text-xs tablet:text-sm",
                activeIndex === index
                  ? "max-h-[300px] opacity-100 xs:pt-2 lg:pt-10"
                  : "max-h-0 opacity-0 overflow-hidden"
              )}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
