import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site internet à La Réunion - Webcreatis",
  description:
    "Agence Web à La Réunion (974), spécialisée en création de sites internet vitrine, e-commerce et refonte. Devis gratuit.",
  keywords: [
    "création site internet Réunion",
    "agence web La Réunion",
    "site vitrine Réunion",
    "site e-commerce Réunion",
    "création site e-commerce",
    "landing page Réunion",
    "développement web Réunion",
    "SEO Réunion",
    "agence digitale Réunion",
    "Webcreatis",
    "création site professionnel",
    "site internet personnalisé",
    "site web responsive",
    "création boutique en ligne",
    "site internet sur mesure",
  ],
  openGraph: {
    title: "Création de site internet à La Réunion - Webcreatis",
    description: `Webcreatis, agence digitale à La Réunion (974), spécialisée en création de sites internet vitrine, e-commerce, refonte, print, identité visuelle, logo, mentoring digital et formations Canva. 
      Devis gratuit et accompagnement sur mesure.`,
    url: "https://webcreatis.re/creation-site-internet",
    siteName: "Webcreatis",
    images: [
      {
        url: "https://webcreatis.re/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Création de site internet à La Réunion - Webcreatis",
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
    canonical: "https://webcreatis.re/creation-site-internet",
  },
};

export default function CreationSiteInternetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
