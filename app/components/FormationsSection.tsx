"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Share2 } from "lucide-react";
import Image from "next/image";
import comDigitalPics from "../assets/images/com-digitale-webcreatis.webp";
import Button from "../ui/Button";

export default function FormationsSection() {
  return (
    <section className="formations">
      <div
        id="services-header"
        className="flex flex-col justify-center items-center pt-32 pb-10"
      >
        <div className="flex items-center">
          <Share2 size={36} color="#7BE0AD" />
          <h2>
            <span className="text-white font-raleway italic text-6xl pr-3 xs:text-2xl mobile:text-3xl tablet:text-6xl">
              Our
            </span>
            <span className="text-white text-5xl font-jaapokki font-bold uppercase xs:text-2xl mobile:text-3xl tablet:text-6xl">
              Com Digitale
            </span>
          </h2>
        </div>
        <h3 className="font-raleway font-normal text-greenLight text-2xl pt-10 xs:text-base xs:text-center">
          Libérez-vous du Temps et Reprenez les Rênes de Votre Activité !
        </h3>
      </div>
      <div className="w-full h-auto flex items-center xs:flex-col laptop:flex-row">
        <div className="w-[50%] xs:w-full laptop:w-[50%]">
          <DotLottieReact src="/Animation - 1733233092249.json" loop autoplay />
        </div>
        <div className="w-[50%] flex flex-col items-start p-10 xs:w-full lg:w-[50%]">
          <h2 className="text-4xl font-semibold font-raleway text-green pb-10 xs:text-lg tablet:text-2xl">
            Vous êtes indépendants, commerçants, artisans ??
          </h2>
          <p className="text-white text-justify pb-10 xs:text-sm tablet:text-base">
            Recentrez-vous sur votre coeur de métier et dites adieu aux heures
            perdues en communication grâce à nos formations Canva et à nos
            solutions de gestion des réseaux sociaux.
          </p>
          <Button
            text="Boostez ma com"
            bg="bg-green"
            color="text-black"
            onClick={() =>
              (window.location.href = "https://webcreatis.fr/contact/")
            }
          />
        </div>
      </div>
      <div className="w-3/4 m-auto h-auto bg-darkWhite rounded-2xl flex xs:flex-col xs:w-full tablet:w-3/4 laptop:flex-row">
        <div className="w-[40%] h-full flex justify-center overflow-hidden rounded-l-lg p-10 xs:w-full xs:p-5">
          <Image
            src={comDigitalPics}
            alt={`portrait de patrick développeur front end chez webcreatis`}
            className="hover:scale-110 object-cover transition-transform duration-300 ease-in-out"
            placeholder="blur"
          />
        </div>
        <div className="w-[60%] p-10 flex flex-col items-start justify-center xs:w-full xs:p-5">
          <h3 className="font-jaapokki text-darkGreen text-3xl">
            Gestion de vos réseaux sociaux
          </h3>
          <span className="font-raleway inline-block">
            “Je n’ai pas le temps pour ma com et je déteste ça !!” <br />
            Cette solution est faite pour vous !
          </span>
          <p className="font-raleway pt-5 pb-10">
            Entretenir une présence efficace sur les réseaux sociaux demande du
            temps et des compétences qui ne sont peut être pas les vôtres et
            pour lesquelles vous n’aviez pas imaginé y lasser autant d’énergie.
            <br />
            Profitez de notre expertise pour déléguer cette tâche chronophage et
            vous recentrer sur ce qui fait la force de votre activité. <br />
            En nous confiant la gestion de vos réseaux sociaux, vous investissez
            dans bien plus qu’un simple service. <br />
            En effet vous bénéficierez selon vos besoins:
            <br /> * De conseil concernant la fréquence de publications, du
            choix des réseaux sociaux <br />* D’un calendrier éditorial complet
            personnalisé selon votre activité.
            <br /> * De la création et publication de contenus graphique <br />*
            De réalisation et publication de Reels et Story <br />* De la
            rédaction de vos textes accompagnants vos Posts <br />* De la
            rédaction de réponses aux questions de vos followers
          </p>
          <Button
            text="Devis gratuit"
            bg="bg-green"
            color="text-black"
            onClick={() =>
              (window.location.href = "https://webcreatis.fr/contact/")
            }
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="font-jaapokki font-semibold text-6xl text-darkWhite uppercase pt-32 pb-10 xs:text-2xl">
          Formations CANVA
        </h3>
        <span className="font-raleway font-normal text-darkWhite text-2xl text-center xs:text-xl xs:p-2">
          “Je veux garder la main sur ma com mais je perd trop de temps à le
          faire !! “ <br />{" "}
          <span className="inline-block pt-10 text-xl pb-10">
            Alors ces formations sont faites pour vous !
          </span>
        </span>
        <p className="text-darkWhite text-lg text-center pb-10">
          Vous souhaitez maîtriser votre communication visuelle pour attirer de
          nouveaux clients ?<br /> Nos formations Canva sont conçues pour vous
          donner les clés de votre communication, même sans connaissances en
          design !<br />
          Nous vous proposons 3 types de formations:{" "}
        </p>
        <ul className="w-full flex justify-center mt-10 pb-20 gap-10 xs:flex-col laptop:flex-row">
          <li className="overflow-hidden">
            <div className="flip-card bg-transparent font-raleway perspective-midrange xs:w-full tablet:w-3/4 tablet:m-auto">
              <div className="flip-card-inner relative w-full h-full text-center">
                <div className="flip-card-front">
                  <p className="title uppercase font-jaapokki">
                    Formation Starter
                  </p>
                  <p>{`Ma Com' en Main`}</p>
                </div>
                <div className="flip-card-back pt-10">
                  <p className="title text-left p-5 text-sm font-raleway xs:text-xs">
                    {`Parfaite pour débuter, cette formation vous apprend les bases essentielles de Canva. 
                      Ensemble, nous concevons votre logo, créons une charte graphique qui reflète votre identité, 
                      vos valeurs et réalisons vos premiers visuels pour les réseaux sociaux. 
                      Vous repartez avec les compétences pour construire votre image de marque, 
                      tout en gardant la maîtrise de votre communication.`}
                  </p>
                  <p className="font-semibold font-raleway xs:text-xs">
                    Ce Pack comprend :
                  </p>
                  <ul className="p-5 flex flex-col gap-2 font-semibold">
                    <li className="text-sm text-left xs:text-xs">
                      * Débuter avec Canva , les bases essentielles
                    </li>
                    <li className="text-sm text-left xs:text-xs">
                      * Création de votre logo
                    </li>
                    <li className="text-sm text-left xs:text-xs">
                      * Votre charte graphique et présentation du modèle de
                      marque
                    </li>
                    <li className="text-sm text-left xs:text-xs">
                      * Création de votre Carte de visite
                    </li>
                    <li className="text-sm text-left xs:text-xs">
                      * Débuter mes designs sur les Réseaux Sociaux
                      <ul>
                        <li className="text-sm text-left pl-5 xs:text-xs">
                          1 Post de présentation de vous et vos services
                        </li>
                        <li className="text-sm text-left pl-5 xs:text-xs">
                          1 Bannière (Linkedin, Facebook, YouTube)
                        </li>
                      </ul>
                    </li>
                    <li className="text-sm text-left xs:text-xs">
                      * Calendrier éditorial de votre premier mois de
                      publication pour bien débuter
                    </li>
                  </ul>
                  <div className="w-full flex justify-center">
                    <Button
                      text="Un devis ?"
                      bg="bg-green"
                      color="text-black"
                      onClick={() =>
                        (window.location.href =
                          "https://webcreatis.fr/contact/")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="overflow-hidden">
            <div className="flip-card bg-transparent w-[450px] h-[600px] font-raleway perspective-midrange xs:w-full tablet:w-3/4 tablet:m-auto">
              <div className="flip-card-inner relative w-full h-full text-center">
                <div className="flip-card-front">
                  <p className="title title uppercase font-jaapokki">
                    Formation Starter Plus
                  </p>
                  <p>{`Ma Com' Pro`}</p>
                </div>
                <div className="flip-card-back pt-5">
                  <p className="title text-left p-5 text-sm font-raleway xs:text-xs">
                    {`Pour aller plus loin, cette formation personnalisée vous
                    permet de créer en direct avec notre formateur une série de
                    designs avancés. 
                    Vous repartez avec un panel de visuels
                    prêts à l'emploi et un savoir-faire approfondi pour réaliser
                    des créations autonomes et professionnelles.`}
                  </p>
                  <p className="font-semibold font-raleway xs:text-xs">
                    Ce Pack comprend:
                  </p>
                  <ul className="p-5">
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Débuter avec Canva , les bases essentielles
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Création de votre logos
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Votre charte graphique et présentation du modèle de
                      marque
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Création de votre Carte de visite
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Débuter mes designs sur les Réseaux Sociaux
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Calendrier éditorial de 3 mois pour avancer en toute
                      confiance
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Introduction à l’IA sur Canva pour créer des post plus
                      rapidement et trouver des idées de publications
                    </li>
                  </ul>
                  <div className="w-full flex justify-center">
                    <Button
                      text="Un devis ?"
                      bg="bg-green"
                      color="text-black"
                      onClick={() =>
                        (window.location.href =
                          "https://webcreatis.fr/contact/")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="overflow-hidden">
            <div className="flip-card bg-transparent w-[450px] h-[600px] font-raleway perspective-midrange xs:w-full tablet:w-3/4 tablet:m-auto">
              <div className="flip-card-inner relative w-full h-full text-center">
                <div className="flip-card-front">
                  <p className="title title title uppercase font-jaapokki">
                    Formation sur mesure{" "}
                  </p>
                  <p>Créations à la Carte</p>
                </div>
                <div className="flip-card-back pt-10">
                  <p className="title text-left p-5 text-sm font-raleway xs:text-xs">
                    Votre communication est déjà bien définie et vous avez votre
                    charte graphique , mais vous souhaitez gagner en autonomie
                    et optimiser votre temps ? <br />
                    La formation - Créations à la Carte <br />
                    est faite pour vous !
                  </p>
                  <p className="font-semibold font-raleway xs:text-xs">
                    Ce que cette formation vous offre :
                  </p>
                  <ul className="p-5">
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Une prise en main complète de Canva adaptée à vos
                      besoins.
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs ">
                      {`* L'apprentissage des astuces et fonctionnalités avancées
                      pour créer rapidement des visuels professionnels.`}
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Une prise en main complète de Canva adaptée à vos
                      besoins.
                    </li>
                    <li className="text-sm font-normal text-left xs:text-xs">
                      * Une prise en main complète de Canva adaptée à vos
                      besoins.
                    </li>
                  </ul>
                  <div className="w-full flex justify-center">
                    <Button
                      text="Un devis ?"
                      bg="bg-green"
                      color="text-black"
                      onClick={() =>
                        (window.location.href =
                          "https://webcreatis.fr/contact/")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
