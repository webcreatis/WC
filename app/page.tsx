import AboutSection from "./components/AboutSection";
import ClientSection from "./components/ClientSection";
import Footer from "./components/Footer";
import FormationsSection from "./components/FormationsSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KapNumerikCTA from "./components/KapNumerikCTA";
import MethodSection from "./components/MethodSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WorksSection from "./components/WorkSection";
import CanvasTrail from "./ui/Cursor";

export default function Home() {
  return (
    <>
      <CanvasTrail />
      <Header />
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
      <Footer />
    </>
  );
}
