import { TrafficCone } from "lucide-react";
import vivierPics from "../assets/images/site-dr-julien-vivier.webp";
import lavalPics from "../assets/images/site-dr-laval.webp";
import envergurePics from "../assets/images/site-envergure.webp";
import seaIntensePics from "../assets/images/site-seaintense.webp";
import sofiaPics from "../assets/images/site-sofia-piccirilli.webp";
import CardWork from "../ui/CardWork";

export default function WorksSection() {
  return (
    <section
      className="works w-full h-auto flex-col justify-start items-start"
      id="projects"
    >
      <div
        id="work-header"
        className="flex justify-center items-center pt-32 pb-32 xs:pb-16"
      >
        <TrafficCone color="#7BE0AD" size={36} />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3 xs:text-2xl mobile:text-3xl tablet:text-6xl">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold uppercase xs:text-2xl mobile:text-3xl tablet:text-6xl">
            Works
          </span>
        </h2>
      </div>
      <ul className="w-full">
        <CardWork
          title="Docteur Julien Vivier"
          desc="Medicine & Aesthetics"
          number="01"
          titleMarquee="DR JULIEN VIVIER"
          link="https://drjulienvivier.fr/"
          skillOne="Wordpress"
          skillTwo="Elementor"
          pics={vivierPics}
        />
        <CardWork
          title="Sea Intense"
          desc="Diving & Cetaceans"
          number="02"
          titleMarquee="SEA INTENSE"
          link="https://www.seaintense.re/"
          skillOne="Astro JS"
          skillTwo="Tailwind CSS"
          skillThree="Directus CMS"
          skillFour="Logo"
          skillFive="Maquettage"
          pics={seaIntensePics}
        />
        <CardWork
          title="Envergure"
          desc="Training & Environment"
          number="03"
          titleMarquee="ENVERGURE"
          link="https://www.envergure.re/"
          skillOne="Astro JS"
          skillTwo="Tailwind CSS"
          skillThree="Kakemono"
          skillFour="Flyer"
          skillFive="Maquettage"
          pics={envergurePics}
        />
        <CardWork
          title="VILLA SURYA"
          desc="Massage & Hosting"
          number="04"
          titleMarquee="VILLA SURYA"
          link="https://sofiapiccirilli.com/"
          skillOne="Next JS"
          skillTwo="Tailwind CSS"
          skillThree="Directus CMS"
          skillFour="Maquettage"
          pics={sofiaPics}
        />
        <CardWork
          title="Docteur Valérie Laval"
          desc="Medicine & Aesthetics"
          number="05"
          titleMarquee="DR VALERIE LAVAL"
          link="https://lyon-esthetique-dr-laval.com/"
          skillOne="Wordpress"
          skillTwo="Elementor"
          skillThree="Carte de visite"
          skillFour="Logo"
          pics={lavalPics}
        />
      </ul>
    </section>
  );
}
