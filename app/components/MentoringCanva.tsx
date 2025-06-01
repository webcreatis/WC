import { GraduationCap } from "lucide-react";
import Image from "next/image";
import mentoringPics from "../assets/images/patricia-accompagnement-canva-webcreatis.webp";
import TitleSection from "./TitleSection";

const packs = [
  {
    title: "Crea’Start : Mentoring solopreneurs",
    price: "à partir de 240€ HT",
    public:
      "Public : Artisans, commerçants, coachs, thérapeutes, freelances, indépendants, micro-entrepreneurs.",
    description:
      "Prise en main de Canva et création de vos premiers outils de communication visuelle : templates de posts, carte de visite, bannière, signature mail… Le tout sur-mesure, prêt à l’emploi et réutilisable.",
    time: "Durée : 6 heures réparties sur 3/4 semaines",
  },
  {
    title: "Crea’Team : Mentoring entreprises",
    price: "à partir de 360€ HT",
    public:
      "Public : TPE, PME, startups, associations, cabinets médicaux, agences immobilières, etc.",
    description:
      "Création de templates personnalisés pour vos supports internes et externes, mise en place d’une bibliothèque partagée, harmonisation visuelle et structuration complète de votre communication dans Canva.",
    time: "Durée : 8 heures réparties sur 4/5 semaines",
  },
  {
    title:
      "Offre d’accompagnement mensuel solopreneurs (option après le mentoring)",
    price: `90 € HT / mois`,
    public:
      "2h/mois de suivi personnalisé (co-création, creation ou ajustement)",
    description:
      "Un accompagnement créatif chaque mois : conseils, adaptation de visuels selon votre actualité, ajustement de vos contenus Canva et envoi de nouveaux templates.",
  },
  {
    title:
      "Offre d’accompagnement mensuel entreprises (option après le mentoring)",
    price: `180 € HT / mois`,
    public: "4h/mois d’intervention (réunions, création, MAJ templates, suivi)",
    description:
      "Un suivi mensuel pour maintenir une communication claire, alignée et professionnelle : mises à jour des visuels, évolution des templates, soutien à l’organisation et cohérence d’équipe.",
  },
];

export default function MentoringCanva() {
  const graduationCapIcon = <GraduationCap color="#7BE0AD" size={36} />;

  return (
    <section
      id="mentoring-canva"
      className="relative px-6 py-16 max-w-7xl mx-auto mb-14"
    >
      <TitleSection
        icon={graduationCapIcon}
        title="Mentoring Canva"
        color="text-black"
        textSize="text-4xl"
      />

      {/* Section haute : Image + Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-12 mb-16">
        {/* Description à droite */}
        <div className="space-y-6">
          <h3 className="text-lg text-black font-raleway font-bold">
            Apprends à maîtriser Canva comme un pro
          </h3>
          <p className="text-gray-700 text-base sm:text-base font-raleway">
            Accompagner les professionnels à devenir autonomes sur Canva, <br />
            tout en co-créant leurs outils de communication
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1 font-raleway">
            <li>Autonomie rapides, gain de temps</li>
            <li>Templates réutilisables</li>
            <li>Création de kits de communication</li>
            <li>Identité visuelle cohérente entre les supports</li>
            <li>Professionnalisation de la communication interne et externe</li>
          </ul>
          <p className="font-raleway text-base text-gray-700 ">
            Découvrez mes offres de mentoring Canva : un accompagnement
            sur-mesure pour créer vos outils de communication et maîtriser Canva
            en toute autonomie. 👉 Pour les solopreneurs et les entreprises,
            c’est le moment de passer au niveau supérieur !
          </p>
          <p></p>
          <a
            href="mailto:contact.webcreatis@gmail.com"
            aria-label="Demander un accompagnement dans la maitrise de Canva"
            className="buttonAction inline-block bg-green text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition font-raleway focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
          >
            Je veux un accompagnement !
          </a>
        </div>

        <div className="w-full">
          <Image
            src={mentoringPics}
            alt="Mentoring pour développeur web en formation"
            className="rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Section basse : 3 blocs côte à côte */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {packs.map((pack, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <h4 className="text-base font-normal mb-2 font-jaapokki uppercase text-black">
              {pack.title}
            </h4>
            <ul className="list-disc">
              <li className="text-grey text-sm leading-relaxed font-raleway">
                {pack.price}
              </li>
              {pack.time ? (
                <li className="text-grey text-sm leading-relaxed font-raleway">
                  {pack.time}
                </li>
              ) : null}
              <li className="text-grey text-sm leading-relaxed font-raleway">
                {pack.public}
              </li>
              <li className="text-grey text-sm leading-relaxed font-raleway">
                {pack.description}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
