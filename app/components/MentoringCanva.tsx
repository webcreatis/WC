import { GraduationCap } from "lucide-react";
import Image from "next/image";
import mentoringPics from "../assets/images/patricia-accompagnement-canva-webcreatis.webp";
import TitleSection from "./TitleSection";

const packs = [
  {
    title: "Forfait préparation examen",
    price: "à partir de 600€",
    description:
      "1 ou 2 sessions/semaine (2h au total). Diagnostic initial, Préparation technique, Relecture projet, Entraînement à l’oral & examen blanc.",
    time: "2 mois avant",
  },
  {
    title: "Forfait accompagnement formation",
    price: "à partir de 1150€",
    description:
      "1 ou 2 sessions/semaine (2h au total). Accompagnement complet sur l'ensemble de la formation suivi + préparation à l'examen.",
    time: "3 à 8 mois",
  },
  {
    title: "Forfait projet de fin de formation",
    price: "à partir de 400€",
    description:
      "Accompagnement complet sur le projet de fin de formation (à partir de 10h). Relecture du dossier projet, aide à la structuration, débogage ou améliorations techniques.",
  },
];

export default function MentoringCanva() {
  const graduationCapIcon = <GraduationCap color="#7BE0AD" size={36} />;

  return (
    <section
      id="mentoringCanva"
      className="relative px-6 py-16 max-w-7xl mx-auto mt-14 mb-14"
    >
      <div className="h-14 w-full gradient-halo-behind-image -mb-20 -mt-3"></div>
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
            Apprends à maîtriser Canva comme un pro ✨
          </h3>
          <p className="text-gray-700 text-base sm:text-base font-raleway">
            Tu suis une formation <strong>CDA</strong> ou <strong>DWWM</strong>{" "}
            et tu veux un mentor pour :
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1 font-raleway">
            <li>Ateliers adaptés à tous niveaux</li>
            <li>Exemples concrets d’entreprise</li>
            <li>Accompagnement individuel ou en petit groupe</li>
          </ul>
          <p className="font-raleway text-base text-gray-700 ">
            Découvre notre accompagnement pour créer des visuels impactants, des
            présentations professionnelles, et des supports de communication qui
            captent l’attention.
          </p>
          <p></p>
          <a
            href="https://forms.office.com/r/k0zkgBAFJ1?origin=lprLink"
            aria-label="Demander un accompagnement en mentoring web"
            className="buttonAction inline-block bg-green text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition font-raleway"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packs.map((pack, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <h4 className="text-base font-normal mb-2 font-jaapokki uppercase text-green">
              {pack.title}
            </h4>
            <ul className="list-disc">
              <li className="text-gray-700 text-sm leading-relaxed font-raleway">
                {pack.price}
              </li>
              {pack.time ? (
                <li className="text-gray-700 text-sm leading-relaxed font-raleway">
                  {pack.time}
                </li>
              ) : null}
              <li className="text-gray-700 text-sm leading-relaxed font-raleway">
                {pack.description}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
