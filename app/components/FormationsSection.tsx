"use client";

import { Share2 } from "lucide-react";
import Image from "next/image";
import comDigitalPics from "../assets/images/com-digitale-webcreatis.webp";
import patriciaPics from "../assets/images/patricia-webcreatis.webp";
import Button from "../ui/Button";
import { CardHoverEffectFormations } from "../ui/CardFormation";
//import FormationCard from "../ui/FormationCard";
import TitleSection from "./TitleSection";

export default function FormationsSection() {
  // state
  const iconFormation = <Share2 size={36} color="#7BE0AD" />;

  // datas
  // const formationStarterList = [
  //   "* Débuter avec Canva , les bases essentielles",
  //   "* Création de votre logo",
  //   "* Votre charte graphique et présentation du modèle de marque",
  //   "* Création de votre Carte de visite",
  //   "* Débuter mes designs sur les Réseaux Sociaux",
  //   "*********** 1 Post de présentation de vous et vos services",
  //   "*********** 1 Bannière (Linkedin, Facebook, YouTube)",
  //   "* Calendrier éditorial de votre premier mois de publication pour bien débuter",
  // ];
  // const formationStarterPlusList = [
  //   "* Débuter avec Canva , les bases essentielles",
  //   "* Création de votre logo",
  //   "* Votre charte graphique et présentation du modèle de marque",
  //   "* Création de votre Carte de visite",
  //   "* Débuter mes designs sur les Réseaux Sociaux",
  //   "* Calendrier éditorial de 3 mois pour avancer en toute confiance",
  //   " * Introduction à l’IA sur Canva pour créer des post plus rapidement et trouver des idées de publications",
  // ];
  // const formationCustomList = [
  //   "* Une prise en main complète de Canva adaptée à vos besoins.",
  //   "* L'apprentissage des astuces et fonctionnalités avancées pour créer rapidement des visuels professionnels.",
  // ];

  return (
    <section id="formations" className="formations">
      <div className="flex flex-col justify-center items-center pt-5 pb-10">
        <TitleSection icon={iconFormation} title="Com Digitale" />
        <h3 className="font-raleway font-normal text-greenLight text-2xl xs:text-base xs:text-center">
          Libérez-vous du Temps et Reprenez les Rênes de Votre Activité !
        </h3>
      </div>
      <div className="w-full h-auto pb-20 pt-20 flex items-center xs:flex-col laptop:flex-row">
        <div className="w-[50%] flex justify-center xs:w-full laptop:w-[50%]">
          <Image
            src={patriciaPics}
            alt={`image de patricia webdesign chez webcreatis`}
            className="rounded-xl transition ease-out group-hover:scale-110 group-hover:animate-scalePics"
            width={250}
            height={250}
          />
        </div>
        <div className="w-[50%] flex flex-col items-start p-10 xs:w-full lg:w-[50%]">
          <h2 className="font-semibold font-jaapokki text-green pb-10 xs:text-lg tablet:text-2xl laptop:text-4xl">
            Vous êtes indépendants, commerçants, artisans ??
          </h2>
          <p className="text-white font-raleway text-justify pb-10 xs:text-sm tablet:text-base">
            Recentrez-vous sur votre coeur de métier et dites adieu aux heures
            perdues en communication grâce à nos formations Canva et à nos
            solutions de gestion des réseaux sociaux.
          </p>
          <Button
            text="Boostez ma com"
            bg="bg-green"
            color="text-black"
            onClick={() =>
              (window.location.href = "mailto:contact.webcreatis@gmail.com")
            }
          />
        </div>
      </div>
      <div className="w-3/4 m-auto h-auto bg-darkWhite rounded-2xl flex xs:flex-col xs:w-full tablet:w-3/4 laptop:flex-row">
        <div className="w-[40%] h-full flex justify-center rounded-l-lg p-10 xs:w-full xs:p-5 laptop:w-[40%]">
          <Image
            src={comDigitalPics}
            alt={`publicité com digitale chez webcreatis`}
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
              (window.location.href = "mailto:contact.webcreatis@gmail.com")
            }
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="font-jaapokki font-semibold text-6xl text-darkWhite uppercase pt-32 pb-10 xs:text-2xl laptop:text-6xl">
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
        {/* <ul className="w-full flex justify-center mt-10 pb-20 gap-10 xs:flex-col laptop:flex-row laptop:w-full">
          <FormationCard
            title="Formation Starter"
            subTitle="Ma Com' en Main"
            text="Parfaite pour débuter, cette formation vous apprend les bases essentielles de Canva. 
                      Ensemble, nous concevons votre logo, créons une charte graphique qui reflète votre identité, 
                      vos valeurs et réalisons vos premiers visuels pour les réseaux sociaux. 
                      Vous repartez avec les compétences pour construire votre image de marque, 
                      tout en gardant la maîtrise de votre communication."
            liste={formationStarterList}
          />
          <FormationCard
            title="Formation Starter Plus"
            subTitle="Ma Com' Pro"
            text="Pour aller plus loin, cette formation personnalisée vous
                    permet de créer en direct avec notre formateur une série de
                    designs avancés. 
                    Vous repartez avec un panel de visuels
                    prêts à l'emploi et un savoir-faire approfondi pour réaliser
                    des créations autonomes et professionnelles."
            liste={formationStarterPlusList}
          />
          <FormationCard
            title="Formation sur mesure"
            subTitle="Créations à la Carte"
            text="Votre communication est déjà bien définie et vous avez votre
                    charte graphique , mais vous souhaitez gagner en autonomie
                    et optimiser votre temps ?
                    La formation - Créations à la Carte
                    est faite pour vous !"
            liste={formationCustomList}
          />
        </ul> */}
      </div>
      <CardHoverEffectFormations />
    </section>
  );
}
