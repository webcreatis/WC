"use client";

import { useRef } from "react";
import StackingCards from "../components/StackingCards";
import TextAnimated from "../ui/TextAnimated";

type SectionProps = {
  title: string;
  bg: string;
  description: string;
  service: string;
  src: string;
};

export default function CreateWebPage() {
  const containerRef = useRef(null);

  const sections: SectionProps[] = [
    {
      title: "créasite",
      bg: "bg-white",
      description: `Aujourd’hui, avoir un site, c’est bien. 
      Mais avoir un site web sur-mesure qui claque, c’est encore mieux ! 
      Chez Webcreatis, on mixe design stylé, dev solide, marketing malin et SEO qui fait mouche pour créer un site qui reflète parfaitement votre marque et répond à vos besoins spécifiques.
      Votre projet mérite mieux qu’un simple template, alors Contactez-nous et construisons quelque chose d’unique ensemble !`,
      service:
        "Développement custom - Single Page Applications - Responsive Implementation",
      src: "/videos/creasite-webcreatis.mp4",
    },
    {
      title: "créaone",
      bg: "bg-white",
      description: `Une One Page qui fait tout, sauf passer inaperçue ! 
      Pas besoin de 10 pages pour faire le taf. Avec une One Page bien pensée, on va droit à l’essentiel : design soigné, scroll fluide, animations stylées et contenu qui percute.
      Parfait pour présenter ton activité, un service ou un produit sans détour.
      Rapide, efficace, impactant.
      Tu veux marquer les esprits en un scroll ? Let's go`,
      service:
        "Développement custom - Single Page Applications - Responsive Implementation",
      src: "/videos/creaone-webcreatis.webm",
    },
    {
      title: "créashop",
      bg: "bg-white",
      description: `Vous avez un projet e-commerce ? On s’occupe de tout. De la vitrine à la caisse, on vous crée un site ultra-performant, stylé, rapide, et surtout pensé pour vendre. 
      Chez Webcreatis, pas de solutions toutes faites : chaque boutique est 100% sur-mesure, responsive et optimisée pour l’expérience utilisateur.
      On utilise des technos modernes (Next.js, Tailwind, etc.) pour que votre site soit aussi beau qu’efficace, avec une gestion simplifiée de vos produits, paiements sécurisés et tout ce qu’il faut pour cartonner en ligne.`,
      service:
        "Paiement en ligne - Ajoutez, modifiez, organisez vos produits - Authentification & comptes clients",
      src: "/videos/creashop-webcreatis.mp4",
    },
    {
      title: "Animations Web",
      bg: "bg-white",
      description: `On donne du mouvement à vos idées ! Grâce à Motion, on anime les éléments de votre site pour les rendre vivants et engageants. 
      Que ce soit pour mettre en valeur vos produits ou expliquer des concepts de façon cool, on ajoute du dynamisme à votre storytelling digital. 
      Résultat : des interactions fun et une expérience utilisateur qui reste en tête.`,
      service:
        "Animations au défilement - Effets interactifs au survol - Animations de texte dynamiques",
      src: "/videos/services-animations.webm",
    },
    {
      title: "TECHNOLOGIES",
      bg: "bg-white",
      description: `On propulse votre projet avec les technologies les plus puissantes ! Chaque site qu'on crée est optimisé à fond grâce à Next.js, React, et Tailwind CSS, 
      pour des performances de folie et un design impeccable. On prend aussi en main votre contenu avec Directus et vous assure une sécurité de fer avec NextAuth.js pour l'authentification. 
      Et pour vos applications mobiles, Flutter et Dart nous permettent de proposer des expériences super fluides sur iOS et Android.`,
      service:
        "NextJS - React - Directus - Zod - Tailwind css - NextAuth.js - Flutter - Stripe - Redux toolkit",
      src: "/videos/react-animated.mp4",
    },
    {
      title: "CMS - DIRECTUS",
      bg: "bg-white",
      description: `Besoin d'un Dashboard pour gérer vos données ? Directus vous offre une personnalisation complète de l'interface et une flexibilité totale avec toutes les bases SQL. 
      Son API RESTful robuste facilite l'intégration, sans dépendance aux plugins tiers. 
      Et avec un contrôle granulaire des autorisations, vos données sont en sécurité. Simple, flexible et sécurisé, c'est l'outil idéal pour gérer vos contenus !`,
      service: "Conception d'interface utilisateur",
      src: "/videos/directus.mp4",
    },
  ];

  return (
    <section className="w-full flex flex-col bg-white text-black font-raleway pt-40">
      {/* <h1 className="font-jaapokki uppercase text-7xl text-green flex justify-center">
        Création de site internet
      </h1>
      <p className="font-raleway text-black w-2/5 mx-auto text-lg text-center pt-10">
        En tant qu’agence spécialisée dans la création de site internet sur
        mesure, nous développons des solutions digitales adaptés à vos besoins.
      </p> */}
      <TextAnimated />
      <main className="relative mt-[2vh] xs:mb-[85vh] md:mb-[70vh] laptop:mb-[80vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={containerRef}
            className="flex items-center justify-center xs:relative xs:h-[80vh] md:h-[70vh] laptop:h-[60vh] lg:sticky lg:top-0 xl:h-[40vh] "
          >
            <StackingCards key={index} index={index} section={section} />
          </div>
        ))}
      </main>
    </section>
  );
}
