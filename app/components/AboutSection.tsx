import { Users } from "lucide-react";
import Image from "next/image";
import patriciaPics from "../assets/images/patricia-webdesigner-webcreatis.webp";
import patrickPics from "../assets/images/patrick-developpeur-front-end-webcreatis.webp";

export default function AboutSection() {
  return (
    <section className="about w-full h-auto flex flex-col pb-60">
      <div
        id="services-header"
        className="flex justify-center items-center pt-32 pb-32"
      >
        <Users size={36} color="#7BE0AD" />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold uppercase">
            Team
          </span>
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="w-[50%] flex justify-center mix-blend-darken overflow-hidden hover:mix-blend-normal transition-all ease-in-out delay-150">
          <Image
            src={patrickPics}
            alt={`portrait de patrick développeur front end chez webcreatis`}
            className="hover:scale-110 object-cover h-[650px]"
            placeholder="blur"
          />
          <div className="flex flex-col">
            <p className="text-center">
              Besoin d’un site internet ou refondre l’existant ?
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center mix-blend-darken overflow-hidden hover:mix-blend-normal transitio-all ease-in-out delay-150">
          <Image
            src={patriciaPics}
            alt={`portrait de patricia webdesigner chez webcreatis`}
            className="hover:scale-110 object-cover h-[650px]"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
