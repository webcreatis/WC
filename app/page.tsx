import AboutSection from "./components/AboutSection";
import ClientSection from "./components/ClientSection";
import FormationsSection from "./components/FormationsSection";
import HeroSection from "./components/HeroSection";
import Mentoring from "./components/Mentoring";
import MethodSection from "./components/MethodSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WorksSection from "./components/WorkSection";
import CanvasTrail from "./ui/Cursor";
import CustomCursor from "./ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CanvasTrail />
      <main>
        <HeroSection />
        <div className="h-14 w-full gradient-halo-behind-image -mb-5 -mt-3"></div>
        <Mentoring />
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <MethodSection />
        <FormationsSection />
        <ClientSection />
        <TestimonialsSection />
      </main>
      <CustomCursor />
    </>
  );
}
