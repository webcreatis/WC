import { TrafficCone } from "lucide-react";

export default function WorksSection() {
  return (
    <section className="w-full h-screen flex-col justify-start items-start">
      <div
        id="work-header"
        className="works flex justify-center items-center border-2 border-solid border-red-600 pt-60"
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
    </section>
  );
}
