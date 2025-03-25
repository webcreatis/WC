"use client";

import { useRef } from "react";
import StackingCards from "../components/StackingCards";

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
      title: "Développement Web",
      bg: "bg-white",
      description: `Dans un monde numérique où la présence en ligne est essentielle, un site web sur-mesure est la clé pour se démarquer. 
        Faire appel à une agence spécialisée à Paris garantit un site optimisé, qui reflète parfaitement votre marque et répond à vos besoins spécifiques. 
        Grâce à une approche globale alliant développement, design, marketing digital et SEO, nous créons des expériences uniques pour booster votre visibilité et vos opportunités commerciales.`,
      service:
        "Développement custom - Single Page Applications - Responsive Implementation",
      src: "/videos/services-web.mp4",
    },
    {
      title: "Animations Web",
      bg: "bg-white",
      description: `On donne du mouvement à vos idées ! Grâce à Motion, on anime les éléments de votre site pour les rendre vivants et engageants. 
      Que ce soit pour mettre en valeur vos produits ou expliquer des concepts de façon cool, on ajoute du dynamisme à votre storytelling digital. 
      Résultat : des interactions fun et une expérience utilisateur qui reste en tête.`,
      service:
        "Animations au défilement - Effets interactifs au survol - Animations de texte dynamiques",
      src: "/videos/services-animations.mp4",
    },
    {
      title: "TECHNOLOGIES",
      bg: "bg-white",
      description: `On propulse votre projet avec les technologies les plus puissantes ! 🚀 Chaque site qu'on crée est optimisé à fond grâce à Next.js, React, et Tailwind CSS, 
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
    {
      title: "E-Commerce",
      bg: "bg-white",
      description: `Vous avez un projet e-commerce ? On s’occupe de tout. De la vitrine à la caisse, on vous crée un site ultra-performant, stylé, rapide, et surtout pensé pour vendre. 
      Chez Webcreatis, pas de solutions toutes faites : chaque boutique est 100% sur-mesure, responsive et optimisée pour l’expérience utilisateur.
      On utilise des technos modernes (Next.js, Tailwind, etc.) pour que votre site soit aussi beau qu’efficace, avec une gestion simplifiée de vos produits, paiements sécurisés et tout ce qu’il faut pour cartonner en ligne.`,
      service:
        "Paiement en ligne - Ajoutez, modifiez, organisez vos produits - Authentification & comptes clients",
      src: "/videos/services-ecommerce.mp4",
    },
  ];

  return (
    <section className="w-full flex flex-col bg-white text-black font-raleway pt-80">
      <h1 className="font-jaapokki uppercase text-7xl text-green flex justify-center">
        Création de site internet
      </h1>
      <p className="font-raleway text-black w-2/5 mx-auto text-lg text-center pt-10">
        En tant qu’agence spécialisée dans la création de site internet sur
        mesure, nous développons des solutions digitales adaptés à vos besoins.
      </p>
      <main className="relative mt-[2vh] mb-[20vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={containerRef}
            className="h-[100vh] flex items-center justify-center sticky top-0"
          >
            <StackingCards key={index} index={index} section={section} />
          </div>
        ))}
      </main>
    </section>
  );
}
