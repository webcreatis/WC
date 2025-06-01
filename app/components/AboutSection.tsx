import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import patriciaPics from "../assets/images/patricia-webcreatis.webp";
import patrickPics from "../assets/images/patrick-developpeur-front-end-webcreatis.webp";
import AboutCard from "./AboutCard";
import TitleSection from "./TitleSection";

export default function AboutSection() {
  const iconTeam = <Users size={36} color="#7BE0AD" />;

  return (
    <section
      id="about"
      className="about w-full h-auto flex flex-col pb-28 xs:pb-10"
    >
      <TitleSection icon={iconTeam} title="Team" textSize="text-4xl" />
      <div className="flex w-full pt-16 xs:flex-col l:flex-row">
        <div className="flex flex-col justify-between xs:w-full l:w-[50%]">
          <div className="h-[650px] flex justify-center overflow-hidden hover:blur-none transition-all duration-300 ease-in-out xs:blur-none ipadPro:blur-sm">
            <Image
              src={patrickPics}
              alt={`portrait de patrick développeur front end chez webcreatis`}
              className="hover:scale-110 object-cover transition-transform duration-300 ease-in-out"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col w-full items-center gap-8 tablet:pb-10">
            <p className="text-white pt-10 font-raleway text-2xl xs:text-xl tablet:text-2xl l:text-xl">
              Création de site Web sur mesure | Audit de site | Mentoring Dev
            </p>
            <div className="w-full flex gap-5 xs:flex-col xs:items-center tablet:flex-row tablet:justify-center">
              <Link
                href="tel:+262693514439"
                data-link="link"
                aria-label="Contactez Patrick au 0693 51 44 39"
                className="inline-flex items-center justify-center w-[150px] font-jaapokki buttonAction border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Contactez-moi
              </Link>
              <Link
                href="/CV-Patrick-Perroudon.pdf"
                data-link="link"
                aria-label="Télécharger le CV de Patrick, développeur web chez Webcreatis"
                download="CV-Patrick-Perroudon.pdf"
                className="inline-flex items-center justify-center w-[150px] font-jaapokki buttonAction border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Download CV
              </Link>
              <Link
                href="https://www.linkedin.com/in/patrick-perroudon/"
                data-link="link"
                aria-label="Visitez la page LinkedIn de Patrick, développeur chez Webcreatis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[150px] font-jaapokki buttonAction border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/webcreatis"
                aria-label="Visitez la page GitHub de Webcreatis"
                data-link="link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[150px] font-jaapokki xs:mb-7 tablet:mb-0 buttonAction border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between xs:w-full l:w-[50%]">
          <div className="h-[650px] flex justify-center overflow-hidden hover:blur-none transition-all duration-300 ease-in-out xs:blur-none ipadPro:blur-sm">
            <Image
              src={patriciaPics}
              alt={`portrait de patricia webdesigner chez webcreatis`}
              className="hover:scale-110 object-cover transition-transform duration-300 ease-in-out"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col w-full items-center gap-8 tablet:pb-10">
            <p className="text-white pt-10 font-raleway text-2xl xs:text-xl xs:p-2 xs:pt-5 tablet:text-2xl l:pt-0 l:text-xl">
              Création digitale | Print | Audit Graphique | Mentoring Canva
            </p>
            <div className="w-full flex gap-5 xs:flex-col xs:items-center tablet:flex-row tablet:justify-center">
              <Link
                href="tel:+262693844876"
                data-link="link"
                aria-label="Contactez Patricia au 0693844876"
                className="inline-flex items-center justify-center w-[150px] font-jaapokki buttonAction border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Contactez-moi
              </Link>
              <Link
                href="https://www.linkedin.com/in/patriciaperroudon/"
                aria-label="Visitez la page LinkedIn de Patricia, webdesign chez Webcreatis"
                data-link="link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[150px] font-jaapokki buttonAction border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto pt-24 flex justify-between gap-5 xs:w-[95%] xs:flex-col xs:pt-10 l:flex-row">
        <AboutCard
          title="Patrick - Dev Front REACT"
          text="Développeur Web Freelance, je suis disponible pour vous accompagner
            dans vos projets : création de sites vitrines, e-commerce,
            développement sur mesure ou applications web. Passionné par le web,
            j’utilise mes compétences pour répondre à vos besoins de manière
            efficace et adaptée."
        />
        <AboutCard
          title="Patricia - Web Design & Com Digitale"
          text="Pour moi chaque design, chaque couleurs se doivent d’être à votre
            image. Je vous accompagne afin d’améliorer votre présence digitale
            avec la création de votre logo et de votre identité graphique. Je suis là
            pour vous aider dans la confection de l’ensemble de vos supports
            imprimés : carte de visite, flyers, kakémono... Ou vous accompagner
            sur CANVA pour créer vos propres réalisations et support de
            communication."
        />
      </div>
      <div className="m-auto pt-24 flex justify-between gap-5 xs:w-[95%] xs:flex-col xs:pt-10 l:flex-row">
        <AboutCard
          title="POURQUOI CRÉER UN SITE INTERNET ?"
          text="Que vous souhaitiez vendre sur internet ou augmenter votre
            visibilité, votre site web doit impérativement : attirer, séduire et
            convertir. Or, le web est un environnement très concurrentiel. Tout
            passe par un site web conçu à votre image, attrayant , moderne,
            optimisé et bien référencé. En vous appuyant sur l’expertise d’une
            agence de création de site web comme Webcreatis, vous vous assurez
            d’obtenir bien plus qu’un simple site vitrine."
        />
        <AboutCard
          title="Pourquoi une présence digitale ?"
          text="Il est important dans notre monde moderne d’être présent sur la
            toile et faire parler de soi. Cela vous apportera une visibilité
            accrue, de devenir une entreprise accessible dans ce monde du
            numérique, d’être connu, reconnu et une meilleur crédibilité auprès
            de vos clients."
        />
      </div>
    </section>
  );
}
