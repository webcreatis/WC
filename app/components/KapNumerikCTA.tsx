"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import kapNumerikPics from "../assets/images/KAP-NUMERIK-2024-webcreatis.webp";
import Button from "../ui/Button";

const faqData = [
  {
    question: "Quel est le montant maximal de l’aide Kap Numérik ?",
    answer:
      "La subvention Kap Numérik peut atteindre jusqu’à 3 200 € par entreprise pour financer vos projets numériques.",
  },
  {
    question: "Qui peut bénéficier du Kap Numérik ?",
    answer:
      "Les TPE, PME et entrepreneurs basés à La Réunion, en création ou déjà établis, peuvent prétendre à cette aide.",
  },
  {
    question: "Quels types de projets sont éligibles ?",
    answer:
      "La création ou refonte de sites vitrines ou e-commerce, le webdesign, la création de logos et visuels professionnels.",
  },
  {
    question: "Combien de temps dure la procédure de demande ?",
    answer:
      "Avec un accompagnement comme celui de Webcreatis, la procédure est simplifiée et les délais réduits, mais cela dépend des services régionaux.",
  },
];

export default function KapNumerikCTA() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="kap"
      className="max-w-7xl mx-auto px-6 py-16 sm:py-24 space-y-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Image colonne gauche */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={kapNumerikPics}
            alt="Kap Numérik à La Réunion"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </motion.div>

        {/* Description colonne droite */}
        <article className="max-w-xl">
          <h2 className="font-jaapokki uppercase text-3xl sm:text-4xl text-gray-900 mb-3">
            Kap Numérik {currentYear}
          </h2>
          <h3 className="font-raleway text-lg text-gray-700 mb-6">
            Une aide régionale pour booster la transition numérique des
            entreprises réunionnaises
          </h3>

          <p className="font-raleway text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            Le <strong>Kap Numérik</strong>, anciennement{" "}
            <em>Chèque Numérique Région Réunion</em>, est une subvention pouvant
            atteindre <strong>3 200 €</strong> pour accompagner la{" "}
            <strong>transition digitale</strong> des entreprises à La Réunion.
          </p>

          <ul className="list-disc list-inside font-raleway text-base sm:text-lg text-gray-700 mb-6 space-y-2">
            <li>Création ou refonte de site vitrine / e-commerce</li>
            <li>Webdesign, création de logo, visuels professionnels</li>
          </ul>

          <p className="font-raleway text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            <strong>Webcreatis</strong> vous guide dans les démarches et dépose
            votre dossier auprès de la Région.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              text="J'ai un projet"
              bg="bg-green"
              color="text-black"
              ariaLabel="Contactez Webcreatis pour votre projet Kap Numérik"
              onClick={() =>
                (window.location.href = "mailto:contact.webcreatis@gmail.com")
              }
            />
            <Button
              text="En savoir +"
              bg="bg-gray-100"
              color="text-gray-900"
              ariaLabel="Voir la page Kap Numérik sur le site de la Région Réunion"
              onClick={() =>
                window.open(
                  "https://www.regionreunion.com/aides-services/article/le-kap-numerik-version-2023-programme-europeen-feder-2021-2027",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            />
          </div>
        </article>
      </div>

      {/* FAQ pleine largeur */}
      <motion.section
        aria-labelledby="faq-title"
        className="border-t border-gray-200 pt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3
          id="faq-title"
          className="text-2xl font-semibold text-gray-900 mb-8 text-center"
        >
          FAQ – Questions fréquentes
        </h3>
        <div className="max-w-4xl mx-auto">
          <dl className="space-y-6">
            {faqData.map(({ question, answer }, index) => (
              <div key={index}>
                <dt className="font-medium text-gray-800">{question}</dt>
                <dd className="text-gray-600">{answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.section>
    </section>
  );
}
