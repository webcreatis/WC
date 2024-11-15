import { TrafficCone } from "lucide-react";
import vivierPics from "../assets/images/site-dr-julien-vivier.webp";
import CardWork from "../ui/CardWork";

export default function WorksSection() {
  return (
    <section className="works w-full h-auto flex-col justify-start items-start">
      <div
        id="work-header"
        className="flex justify-center items-center pt-32 pb-32"
      >
        <TrafficCone color="#7BE0AD" size={36} />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold upper">
            Work
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
      </ul>
    </section>
  );
}
