import { Target } from "lucide-react";
import AnimatedLogos from "../components/AnimatedLogos";

export default function CustomerSection() {
  return (
    <section className="customer w-full flex flex-col justify-center">
      <div className="flex justify-center items-center pt-32 pb-10">
        <Target size={36} color="#7BE0AD" />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold uppercase">
            Clients
          </span>
        </h2>
      </div>
      <h3 className="text-3xl text-white font-raleway text-center pb-10">
        Ils nous font confiance
      </h3>
      <div className="hidden md:block w-1/2 h-[614px] m-auto border-2 border-solid border-white mb-28 bg-transparent relative overflow-hidden">
        <AnimatedLogos />
      </div>
    </section>
  );
}
