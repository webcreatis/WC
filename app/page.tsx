import type { Metadata } from "next";
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

// Metadata
export const metadata: Metadata = {
  title:
    "Création Site Internet à La Réunion | Agence Digitale Réunion & Mentoring | Webcreatis",
  description:
    "Webcreatis, Agence digitale basée à La Réunion, vous accompagne dans la création de sites, mentoring, accompagnement Canva et démarches Kap Numérik. Contactez-nous !",
  keywords: [
    "création site internet",
    "création site internet Réunion",
    "création de site internet professionnel à La Réunion",
    "création de logos",
    "services de webdesign Réunion 974",
    "agence web La Réunion",
    "développement web",
    "mentoring développeur web",
    "accompagnement Canva",
    "Kap Numérik",
    "site e-commerce",
    "site vitrine",
    "webdesign",
    "création graphique",
    "SEO naturel",
    "Webcreatis",
    "accompagnement digital PME Réunion",
    "partenaire Kap Numérik Réunion",
  ],
  alternates: {
    canonical: "https://www.webcreatis.fr/",
  },
  openGraph: {
    title:
      "Création Site Internet à La Réunion | Agence Digitale Réunion & Mentoring | Webcreatis",
    description:
      "Webcreatis, Agence digitale basée à La Réunion, vous accompagne dans la création de sites, mentoring, accompagnement Canva et démarches Kap Numérik. Contactez-nous !",
    url: "https://www.webcreatis.fr/",
    siteName: "Webcreatis",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://www.webcreatis.fr/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Webcreatis - Agence Digitale Réunion & Mentoring - Création de sites internet",
      },
    ],
  },
  other: {
    "instagram:creator": "@webcreatis",
    "instagram:site": "@webcreatis",
    "article:author": "https://www.instagram.com/webcreatis/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  authors: [{ name: "Webcreatis" }],
  creator: "Webcreatis",
  publisher: "Webcreatis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

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
