import AboutSection from "./components/AboutSection";
import ClientSection from "./components/ClientSection";
import FormationsSection from "./components/FormationsSection";
import HeroSection from "./components/HeroSection";
import KapNumerikCTA from "./components/KapNumerikCTA";
import MethodSection from "./components/MethodSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WorksSection from "./components/WorkSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <KapNumerikCTA />
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <MethodSection />
        <FormationsSection />
        <ClientSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
