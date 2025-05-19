import KapNumerikCTA from "../components/KapNumerikCTA";
import CustomCursor from "../ui/CustomCursor";
import TextAnimated from "../ui/TextAnimated";

export default function KapNumerikPage() {
  return (
    <section className="creasite w-full flex flex-col text-black font-raleway pt-40">
      <TextAnimated title="Kap Numerik" />
      <KapNumerikCTA />
      <CustomCursor />
    </section>
  );
}
