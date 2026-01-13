import { TrafficCone } from "lucide-react";
import kolibrizPics from "../assets/images/kolibriz-site.webp";
import runMysteryPics from "../assets/images/run-mystery-reunion.webp";
import vivierPics from "../assets/images/site-dr-julien-vivier.webp";
import lavalPics from "../assets/images/site-dr-laval.webp";
import envergurePics from "../assets/images/site-envergure.webp";
import sofiaPics from "../assets/images/site-sofia-piccirilli.webp";
import CardWork from "../ui/CardWork";
import TitleSection from "./TitleSection";

export default function WorksSection() {
  const iconWorks = <TrafficCone size={36} color="#7BE0AD" />;
  return (
    <section
      className="works w-full h-auto flex-col justify-start items-start"
      id="projects"
    >
      <TitleSection icon={iconWorks} title="Works" textSize="text-4xl" />
      <ul className="w-full pt-16 xs:pt-2 tablet:pt-16">
        <li>
          <CardWork
            title="Kolibriz"
            desc="Massage et Bien-être à la Réunion"
            number="01"
            titleMarquee="KOLIBRIZ"
            link="https://www.kolibriz.com/"
            skillOne="Migration"
            skillTwo="Wordpress"
            pics={kolibrizPics}
          />
        </li>
        <li>
          <CardWork
            title="Run Mystery"
            desc="Murder Party à la Réunion"
            number="01"
            titleMarquee="RUN MYSTERY"
            link="https://runmystery.com/"
            skillOne="Refonte"
            skillTwo="Wordpress"
            skillThree="Elementor"
            pics={runMysteryPics}
          />
        </li>
        <li>
          <CardWork
            title="Docteur Julien Vivier"
            desc="Medicine & Aesthetics"
            number="02"
            titleMarquee="DR JULIEN VIVIER"
            link="https://drjulienvivier.fr/"
            skillOne="Wordpress"
            skillTwo="Elementor"
            pics={vivierPics}
          />
        </li>
        {/* <li>
          <CardWork
            title="Sea Intense"
            desc="Diving & Cetaceans"
            number="03"
            titleMarquee="SEA INTENSE"
            link="https://www.seaintense.re/"
            skillOne="Astro JS"
            skillTwo="Tailwind CSS"
            skillThree="Directus"
            skillFour="Logo"
            skillFive="Maquettage"
            pics={seaIntensePics}
          />
        </li> */}
        <li>
          <CardWork
            title="Envergure"
            desc="Training & Environment"
            number="04"
            titleMarquee="ENVERGURE"
            link="https://www.envergure.re/"
            skillOne="Astro JS"
            skillTwo="Tailwind CSS"
            skillThree="Kakemono"
            skillFour="Flyer"
            skillFive="Maquettage"
            pics={envergurePics}
          />
        </li>
        <li>
          <CardWork
            title="VILLA SURYA"
            desc="Massage & Hosting"
            number="05"
            titleMarquee="VILLA SURYA"
            link="https://sofiapiccirilli.com/"
            skillOne="Next JS"
            skillTwo="Tailwind CSS"
            skillThree="Directus CMS"
            skillFour="Maquettage"
            pics={sofiaPics}
          />
        </li>
        <li>
          <CardWork
            title="Docteur Valérie Laval"
            desc="Medicine & Aesthetics"
            number="06"
            titleMarquee="DR VALERIE LAVAL"
            link="https://lyon-esthetique-dr-laval.com/"
            skillOne="Wordpress"
            skillTwo="Elementor"
            skillThree="Carte de visite"
            skillFour="Logo"
            pics={lavalPics}
          />
        </li>
      </ul>
    </section>
  );
}
