import AboutSection from "./components/AboutSection";
import AuditSection from "./components/AuditSection";
import ClientSection from "./components/ClientSection";
import HeroSection from "./components/HeroSection";
import Mentoring from "./components/Mentoring";
import MentoringCanva from "./components/MentoringCanva";
import MethodSection from "./components/MethodSection";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";
import WorksSection from "./components/WorkSection";
import CanvasTrail from "./ui/Cursor";
import CustomCursor from "./ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CanvasTrail />
      <main>
        <HeroSection />
        <Mentoring />
        <MentoringCanva />
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <MethodSection />
        <AuditSection />
        <ClientSection />
        <ReviewsSection />
      </main>
      <CustomCursor />
    </>
  );
}
