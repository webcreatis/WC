import { GraduationCap } from "lucide-react";
import Image from "next/image";
import mentoringPics from "../assets/images/presta-webcreatis.webp";
import TitleSection from "./TitleSection";

const packs = [
  {
    title: "Forfait préparation examen",
    price: "à partir de 600€ HT",
    description:
      "1 ou 2 sessions/semaine (2h au total). Diagnostic initial, Préparation technique, Relecture projet, Entraînement à l’oral & examen blanc.",
    time: "2 mois avant",
  },
  {
    title: "Forfait accompagnement formation",
    price: "à partir de 1150€ HT",
    description:
      "1 ou 2 sessions/semaine (2h au total). Accompagnement complet sur l'ensemble de la formation suivi + préparation à l'examen.",
    time: "3 à 8 mois",
  },
  {
    title: "Forfait projet de fin de formation",
    price: "à partir de 400€ HT",
    description:
      "Accompagnement complet sur le projet de fin de formation (à partir de 10h). Relecture du dossier projet, aide à la structuration, débogage ou améliorations techniques.",
  },
];

export default function Mentoring() {
  const graduationCapIcon = <GraduationCap color="#7BE0AD" size={36} />;

  return (
    <section
      id="mentoring-dev"
      className="relative px-6 py-16 max-w-7xl mx-auto mt-14"
    >
      <TitleSection
        icon={graduationCapIcon}
        title="Mentoring Dev"
        color="text-black"
        textSize="text-4xl"
      />

      {/* Section haute : Image + Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-12 mb-16">
        {/* Image à gauche */}
        <div className="w-full">
          <Image
            src={mentoringPics}
            alt="Mentoring pour développeur web en formation"
            className="rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Description à droite */}
        <div className="space-y-6">
          <h3 className="text-lg text-black font-raleway font-bold">
            Prépare ton titre pro avec un mentor qui connaît les attentes du
            jury
          </h3>
          <p className="text-gray-700 text-base sm:text-base font-raleway">
            Tu suis une formation <strong>CDA</strong> ou <strong>DWWM</strong>{" "}
            et tu veux un mentor pour :
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1 font-raleway">
            <li>Structurer ton apprentissage (HTML, CSS, JS, React…)</li>
            <li>Avoir des retours sur tes projets</li>
            <li>Développer une vraie logique de développeur</li>
            <li>Préparer les entretiens et l&rsquo;examen</li>
            <li>Renforcer les bases techniques</li>
          </ul>
          <p className="font-raleway text-base text-gray-700 ">
            Patrick ton futur mentor intervient en tant que membre de jury
            d’examen pour les titres professionnels CDA et DWWM, notamment au
            sein de centres comme Simplon, l’AFPAR, Ariane Formation et Expernet
            à La Réunion, ce qui lui permet d’avoir une vision précise des
            attentes et critères d’évaluation des jurys.
          </p>
          <p></p>
          <a
            href="https://forms.office.com/r/k0zkgBAFJ1?origin=lprLink"
            aria-label="Demander un accompagnement en mentoring web"
            className="buttonAction inline-block bg-green text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition font-raleway"
          >
            Je veux un mentor !
          </a>
        </div>
      </div>

      {/* Section basse : 3 blocs côte à côte */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
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
                {pack.description}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="h-[1px] w-full bg-darkGreen mt-5"></div>
    </section>
  );
}
