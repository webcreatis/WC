import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Webcreatis | Agence digitale à La Réunion",
  description:
    "Contactez Webcreatis, votre agence digitale à La Réunion. Discutons de vos projets de création de site, SEO local ou stratégie numérique.",
  keywords: [
    "Contact agence web",
    "Contact Webcreatis",
    "Contacter agence digitale Réunion",
    "contacter agence web à La Réunion",
    "agence digitale Réunion contact rapide",
    "création site internet",
    "développement web Réunion",
    "transformation digitale",
    "création site internet Réunion",
    "Webcreatis",
  ],
  openGraph: {
    title: "Contactez Webcreatis - Agence digitale à La Réunion",
    description:
      "Besoin d’un site web, d’une stratégie SEO ou d’un accompagnement digital ? Contactez l’équipe Webcreatis à La Réunion.",
    url: "https://www.webcreatis.fr/contact",
    siteName: "Webcreatis",
    images: [
      {
        url: "https://webcreatis.fr/images/logo.png",
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
    canonical: "https://webcreatis.fr/contact",
  },
  other: {
    "instagram:creator": "@webcreatis",
    "instagram:site": "@webcreatis",
    "article:author": "https://www.instagram.com/webcreatis/",
    "format-detection": "telephone=no",
  },
  authors: [{ name: "Webcreatis", url: "https://www.webcreatis.fr" }],
  category: "technology",
  creator: "Webcreatis",
  publisher: "Webcreatis",
  metadataBase: new URL("https://www.webcreatis.fr"),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
