import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import patriciaPics from "../assets/images/patricia-webdesigner-webcreatis.webp";
import patrickPics from "../assets/images/patrick-developpeur-front-end-webcreatis.webp";

export default function AboutSection() {
  return (
    <section className="about w-full h-auto flex flex-col pb-28 xs:pb-10">
      <div
        id="services-header"
        className="flex justify-center items-center pt-32 pb-32"
      >
        <Users size={36} color="#7BE0AD" />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3 xs:text-4xl">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold uppercase xs:text-4xl">
            Team
          </span>
        </h2>
      </div>
      <div className="flex w-full xs:flex-col">
        <div className="flex flex-col w-[50%] justify-between xs:w-full">
          <div className="h-[650px] flex justify-center mix-blend-darken overflow-hidden hover:mix-blend-normal transition-all duration-300 ease-in-out">
            <Image
              src={patrickPics}
              alt={`portrait de patrick développeur front end chez webcreatis`}
              className="hover:scale-110 object-cover transition-transform duration-300 ease-in-out"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col w-full items-center gap-8">
            <p className="text-white pt-10 font-raleway text-2xl xs:text-xl">
              Création de site Web sur mesure
            </p>
            <div className="w-full flex justify-center gap-5 xs:flex-col xs:items-center">
              <Button variant="outline" className="w-[150px] font-jaapokki">
                Contactez-moi
              </Button>
              <Button variant="outline" className="w-[150px] font-jaapokki">
                Download CV
              </Button>
              <Button variant="outline" className="w-[150px] font-jaapokki">
                <Link href="https://www.linkedin.com/in/patrick-perroudon/">
                  Linkedin
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-[150px] font-jaapokki xs:mb-7"
              >
                <Link href="https://github.com/webcreatis">Github</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%] justify-between xs:w-full">
          <div className="h-[650px] flex justify-center mix-blend-darken overflow-hidden hover:mix-blend-normal transition-all duration-300 ease-in-out">
            <Image
              src={patriciaPics}
              alt={`portrait de patricia webdesigner chez webcreatis`}
              className="hover:scale-110 object-cover transition-transform duration-300 ease-in-out"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col w-full items-center gap-8">
            <p className="text-white pt-10 font-raleway text-2xl xs:text-xl xs:p-2 xs:pt-5">
              Création digitale | Print | Réseaux sociaux | Formation Canva
            </p>
            <div className="w-full flex justify-center gap-5 xs:flex-col xs:items-center">
              <Button variant="outline" className="w-[150px] font-jaapokki">
                Contactez-moi
              </Button>
              <Button variant="outline" className="w-[150px] font-jaapokki">
                <Link href="https://www.linkedin.com/in/patriciaperroudon/">
                  Linkedin
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] m-auto pt-24 flex justify-between gap-5 xs:w-[95%] xs:flex-col xs:pt-10">
        <div className="w-[50%] border-[1px] border-solid border-white xs:w-full">
          <h2 className="text-center text-3xl text-green font-jaapokki pt-10 pb-5 uppercase xs:text-xl s:text-lg">
            POURQUOI CRÉER UN SITE INTERNET ?
          </h2>
          <p className="text-[20px] text-white font-raleway text-left font-light p-16 xs:p-4 xs:text-base">
            Que vous souhaitiez vendre sur internet ou augmenter votre
            visibilité, votre site web doit impérativement : attirer, séduire et
            convertir. Or, le web est un environnement très concurrentiel. Tout
            passe par un site web conçu à votre image, attrayant , moderne,
            optimisé et bien référencé. En vous appuyant sur l’expertise d’une
            agence de création de site web comme Webcreatis, vous vous assurez
            d’obtenir bien plus qu’un simple site vitrine.
          </p>
        </div>
        <div className="w-[50%] border-[1px] border-solid border-white xs:w-full">
          <h2 className="text-center text-3xl text-green font-jaapokki pt-10 pb-5 uppercase xs:text-xl s:text-lg">
            POURQUOI une présence digitale ?
          </h2>
          <p className="text-[20px] text-white font-raleway text-left font-light p-16 xs:p-4 xs:text-base">
            Il est important dans notre monde moderne d’être présent sur la
            toile et faire parler de soi. Cela vous apportera une visibilité
            accrue, de devenir une entreprise accessible dans ce monde du
            numérique, d’être connu, reconnu et une meilleur crédibilité auprès
            de vos clients.
          </p>
        </div>
      </div>
    </section>
  );
}
