import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectFormations() {
  return (
    <div className="max-w-full mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id: 1,
    title: "Formation starter : Ma Com' en Main",
    description: `Parfaite pour débuter, cette formation vous apprend les bases essentielles de Canva. 
      Ensemble, nous concevons votre logo, créons une charte graphique qui reflète votre identité, 
      vos valeurs et réalisons vos premiers visuels pour les réseaux sociaux. 
      Vous repartez avec les compétences pour construire votre image de marque, tout en gardant la maîtrise de votre communication.
      Ce pack comprend :
      `,
    infos: [
      "Débuter avec Canva, les bases essentielles",
      "Création de votre logo",
      "Votre charte graphique et présentation du modèle de marque",
      "Création de votre Carte de visite",
      "Débuter mes designs sur les Réseaux Sociaux",
      "**1 Post de présentation de vous et vos services",
      "**1 Bannière (LinkedIn, Facebook, YouTube)",
      "Calendrier éditorial de votre premier mois de publication pour bien débuter",
    ],
    link: "",
  },
  {
    id: 2,
    title: "Formation starter plus : Ma Com' Pro",
    description: `Pour aller plus loin, cette formation personnalisée vous
    permet de créer en direct avec notre formateur une série de
    designs avancés. 
    Vous repartez avec un panel de visuels
    prêts à l'emploi et un savoir-faire approfondi pour réaliser
    des créations autonomes et professionnelles.
    Ce pack comprend :
      `,
    infos: [
      "Débuter avec Canva , les bases essentielles",
      "Création de votre logo",
      "Votre charte graphique et présentation du modèle de marque",
      "Création de votre Carte de visite",
      "Débuter mes designs sur les Réseaux Sociaux",
      "Calendrier éditorial de 3 mois pour avancer en toute confiance",
      "Introduction à l’IA sur Canva pour créer des post plus rapidement et trouver des idées de publications",
    ],
    link: "",
  },
  {
    id: 3,
    title: "Formation sur mesure : Créations à la carte",
    description: `Votre communication est déjà bien définie et vous avez votre
    charte graphique , mais vous souhaitez gagner en autonomie
    et optimiser votre temps ?
    La formation - Créations à la Carte
    est faite pour vous !
    Ce pack comprend :
      `,
    infos: [
      "Une prise en main complète de Canva adaptée à vos besoins.",
      "L'apprentissage des astuces et fonctionnalités avancées pour créer rapidement des visuels professionnels.",
    ],
    link: "",
  },
];
