import AboutSection from "./components/AboutSection";
import CustomerSection from "./components/CustomerSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
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
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <MarqueeText />
        <CustomerSection />
      </main>
      <footer></footer>
    </div>
  );
}
