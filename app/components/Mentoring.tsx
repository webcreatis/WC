// import Image from "next/image";
// import mentoringPics from "../assets/images/presta-webcreatis.webp";

// // export default function Mentoring() {
// //   return (
// //     <section
// //       id="mentoring"
// //       aria-labelledby="mentoring-title"
// //       className="relative max-w-6xl mx-auto px-10 py-20 border-2 border-green mb-20 mt-20 rounded-3xl"
// //     >
// //       <div className="h-10 w-11/12 mx-auto gradient-halo-behind-image -mb-5 absolute -top-10"></div>
// //       <div className="text-center mb-16">
// //         <h2
// //           id="mentoring-title"
// //           className="text-4xl font-jaapokki uppercase text-gray-900"
// //         >
// //           Mentorat Web pour Apprenants
// //         </h2>
// //         <h3 className="text-xl text-gray-600 mt-3 font-raleway">
// //           Un accompagnement humain pour les futurs développeurs web et web
// //           mobile
// //         </h3>
// //       </div>

// //       <div className="flex flex-col md:flex-row md:items-center gap-12">
// //         <div className="flex-1">
// //           <p className="text-lg text-gray-700 font-raleway mb-6 leading-relaxed">
// //             Tu suis une formation de{" "}
// //             <strong>Concepteur Développeur d’Applications</strong> (CDA) ou de{" "}
// //             <strong>Développeur Web et Web Mobile</strong> (DWWM) et tu ressens
// //             le besoin d’un mentor pour accélérer ta progression, mieux
// //             comprendre les concepts techniques, ou obtenir des retours concrets
// //             sur tes projets ?
// //           </p>
// //           <p className="text-lg text-gray-700 font-raleway mb-6">
// //             Je propose un accompagnement personnalisé pour t’aider à :
// //           </p>
// //           <ul className="list-disc list-inside text-gray-700 font-raleway text-base space-y-3 mb-8">
// //             <li>
// //               Mieux structurer ton apprentissage (HTML, CSS, JS, React, etc.).
// //             </li>
// //             <li>Avoir des feedbacks sur tes projets ou ton portfolio.</li>
// //             <li>Développer une vraie logique de développeur autonome.</li>
// //             <li>
// //               Gagner en confiance avant les entretiens ou la certification.
// //             </li>
// //             <li>
// //               Intégrer et maîtriser les concepts fondamentaux de la
// //               programmation.
// //             </li>
// //           </ul>
// //           <p className="text-lg text-gray-700 font-raleway mb-10">
// //             Que tu sois débutant ou en milieu de parcours, je suis là pour
// //             t’aider à franchir les étapes clés de ta formation.
// //           </p>
// //           <a
// //             href="mailto:contact.webcreatis@gmail.com?subject=Demande de Mentoring Web"
// //             aria-label="Demander un accompagnement en mentoring web"
// //             data-link="link"
// //             className="buttonAction inline-block bg-green text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
// //           >
// //             Je veux un mentor !
// //           </a>
// //         </div>
// //         <div className="flex-1">
// //           <Image
// //             src={mentoringPics.src}
// //             alt="Mentoring pour apprenants en développement web"
// //             width={500}
// //             height={400}
// //             className="rounded-xl shadow-md w-full h-auto object-cover"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// const packs = [
//   // {
//   //   title: "Pack Basique",
//   //   price: "120€ - 200€/mois",
//   //   description:
//   //     "1 session/semaine (45min - 1h). Aide ponctuelle, retour sur projets, concepts et bonnes pratiques.",
//   // },
//   {
//     title: "Forfait préparation examen (2 mois avant)",
//     price: "à partir de 600€",
//     description:
//       "1 ou 2 sessions/semaine (2h au total). Diagnostic initial, Préparation technique, Relecture projet, Entraînement à l’oral & examen blanc.",
//   },
//   {
//     title: "Forfait accompagnement formation (3 à 8 mois)",
//     price: "à partir de 1150€",
//     description:
//       "1 ou 2 sessions/semaine (2h au total). Accompagnement complet sur l'ensemble de la formation suivi + préparation à l'examen.",
//   },
//   {
//     title: "Forfait projet de fin de formation",
//     price: "à partir de 400€",
//     description:
//       "Accompagnement complet sur le projet de fin de formation (à partir de 10h). Relecture du dossier projet, aide à la structuration, débogage ou améliorations techniques.",
//   },
// ];

// export default function Mentoring() {
//   return (
//     <section
//       id="mentoring"
//       className="relative px-6 py-16 max-w-7xl mx-auto mt-14 mb-14"
//     >
//       <div className="h-10 w-11/12 mx-auto gradient-halo-behind-image -mb-5 absolute top-7"></div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start z-10">
//         {/* Bloc gauche original conservé */}
//         <div className="space-y-6">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Mentoring pour apprenants web CDA / DWWM
//           </h2>
//           <h3 className="text-xl text-gray-600">
//             Progresser plus vite, avec un accompagnement humain et structuré
//           </h3>
//           <p className="text-gray-700 text-base sm:text-lg">
//             Tu es en formation <strong>CDA</strong> ou <strong>DWWM</strong> et
//             tu veux un mentor pour t’aider à :
//           </p>
//           <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1">
//             <li>
//               Mieux structurer ton apprentissage (HTML, CSS, JS, React, etc.).
//             </li>
//             <li>Avoir des retours sur tes projets ou ton portfolio.</li>
//             <li>Développer une vraie logique de développeur autonome.</li>
//             <li>
//               Gagner en confiance avant les entretiens ou la certification.
//             </li>
//             <li>Intégrer les concepts de programmation durablement.</li>
//           </ul>
//           <Image
//             src={mentoringPics}
//             alt="Mentoring pour développeur web en formation"
//             className="rounded-xl shadow-md w-full h-full"
//             priority
//           />
//         </div>

//         {/* Bento Grid à droite */}
//         <div className="grid gap-6 md:grid-cols-1">
//           {packs.map((pack, idx) => (
//             <div
//               key={idx}
//               className="rounded-xl bg-white shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300"
//             >
//               <h4 className="text-lg font-bold text-green-700 mb-2">
//                 {pack.title}
//               </h4>
//               <p className="text-sm text-gray-600 mb-3">{pack.price}</p>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 {pack.description}
//               </p>
//             </div>
//           ))}
//           <a
//             href="mailto:contact.webcreatis@gmail.com?subject=Demande de Mentoring Web"
//             aria-label="Demander un accompagnement en mentoring web"
//             data-link="link"
//             className="buttonAction inline-block bg-green text-black text-center font-semibold px-6 py-5 rounded-md hover:opacity-90 transition"
//           >
//             Je veux un mentor !
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import mentoringPics from "../assets/images/presta-webcreatis.webp";

const packs = [
  {
    title: "Forfait préparation examen (2 mois avant)",
    price: "à partir de 600€",
    description:
      "1 ou 2 sessions/semaine (2h au total). Diagnostic initial, Préparation technique, Relecture projet, Entraînement à l’oral & examen blanc.",
  },
  {
    title: "Forfait accompagnement formation (3 à 8 mois)",
    price: "à partir de 1150€",
    description:
      "1 ou 2 sessions/semaine (2h au total). Accompagnement complet sur l'ensemble de la formation suivi + préparation à l'examen.",
  },
  {
    title: "Forfait projet de fin de formation",
    price: "à partir de 400€",
    description:
      "Accompagnement complet sur le projet de fin de formation (à partir de 10h). Relecture du dossier projet, aide à la structuration, débogage ou améliorations techniques.",
  },
];

export default function Mentoring() {
  return (
    <section
      id="mentoring"
      className="relative px-6 py-16 max-w-7xl mx-auto mt-14 mb-14"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Colonne 1 : Image */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <Image
            src={mentoringPics}
            alt="Mentoring pour développeur web en formation"
            className="rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Colonne 2 : Contenu central */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Mentoring pour apprenants web CDA / DWWM
          </h2>
          <h3 className="text-xl text-gray-600">
            Progresser plus vite, avec un accompagnement humain et structuré
          </h3>
          <p className="text-gray-700 text-base sm:text-lg">
            Tu suis une formation <strong>CDA</strong> ou <strong>DWWM</strong>{" "}
            et tu veux un mentor pour :
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1">
            <li>Structurer ton apprentissage (HTML, CSS, JS, React…)</li>
            <li>Avoir des retours sur tes projets</li>
            <li>Développer une vraie logique de développeur</li>
            <li>Préparer les entretiens et l&rsquo;examen</li>
            <li>Renforcer les bases techniques</li>
          </ul>
          <a
            href="mailto:contact.webcreatis@gmail.com?subject=Demande de Mentoring Web"
            aria-label="Demander un accompagnement en mentoring web"
            className="buttonAction inline-block bg-green text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Je veux un mentor !
          </a>
        </div>

        {/* Colonne 3 : Packs */}
        <div className="space-y-6">
          {packs.map((pack, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <h4 className="text-lg font-bold text-green-700 mb-2">
                {pack.title}
              </h4>
              <p className="text-sm text-gray-600 mb-3">{pack.price}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {pack.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
