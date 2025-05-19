import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Webcreatis | Agence web à La Réunion",
  description:
    "Contactez Webcreatis, votre agence digitale à La Réunion. Discutons de vos projets de création de site, SEO local ou stratégie numérique.",
  keywords: [
    "Contact agence web",
    "Webcreatis",
    "contact Webcreatis",
    "agence digitale Réunion",
    "création site internet",
    "SEO Réunion",
    "développement web Réunion",
    "transformation digitale",
    "numérique La Réunion",
    "stratégie digitale Réunion",
    "création site internet Réunion",
  ],
  openGraph: {
    title: "Contactez Webcreatis - Agence digitale à La Réunion",
    description:
      "Besoin d’un site web, d’une stratégie SEO ou d’un accompagnement digital ? Contactez l’équipe Webcreatis à La Réunion.",
    url: "https://www.webcreatis.re/contact",
    siteName: "Webcreatis",
    images: [
      {
        url: "https://webcreatis.re/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Webcreatis Réunion",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://webcreatis.re/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
