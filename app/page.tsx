import AboutSection from "./components/AboutSection";
import CustomerSection from "./components/CustomerSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KapNumerikCTA from "./components/KapNumerikCTA";
import ServicesSection from "./components/ServicesSection";
import WorksSection from "./components/WorkSection";
import CanvasTrail from "./ui/Cursor";
import MarqueeText from "./ui/MarqueeText";

export default function Home() {
  return (
    <div>
      <CanvasTrail />
      <Header />
      <main>
        <HeroSection />
        <KapNumerikCTA />
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <MarqueeText />
        <CustomerSection />
      </main>
      <Footer />
    </div>
  );
}
