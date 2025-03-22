import { Target } from "lucide-react";
import { MarqueeDemo } from "./MarqueePartners";
import TitleSection from "./TitleSection";

export default function ClientSection() {
  const iconRef = <Target size={36} color="#7BE0AD" />;
  return (
    <section
      id="customers"
      className="w-full h-auto flex flex-col justify-center bg-darkWhite"
    >
      <TitleSection icon={iconRef} title="References" color="text-black" />
      <h3 className="text-3xl text-black font-raleway text-center pb-10 xs:text-xl tablet:text-2xl">
        Ils nous font confiance
      </h3>
      <MarqueeDemo />
    </section>
  );
}
