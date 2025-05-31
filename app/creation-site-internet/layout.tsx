import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de Site Internet à La Réunion | Agence Web | Webcreatis",
  description:
    "Agence digitale à La Réunion (974) spécialisée en création de sites internet vitrine, e-commerce et refonte. Devis gratuit et accompagnement sur mesure.",
  keywords: [
    "création site internet Réunion",
    "création de site internet professionnel à La Réunion",
    "agence web La Réunion",
    "site vitrine Réunion",
    "site e-commerce Réunion",
    "création site e-commerce",
    "création de site responsive et personnalisé Réunion",
    "développement web Réunion",
    "SEO Réunion",
    "agence digitale Réunion",
    "Webcreatis",
    "site internet personnalisé",
    "site web responsive",
  ],
  openGraph: {
    title: "Création de Site Internet à La Réunion | Agence Web | Webcreatis",
    description:
      "Agence digitale à La Réunion (974) spécialisée en création de sites internet vitrine, e-commerce, refonte et identité visuelle. Devis gratuit.",
    url: "https://www.webcreatis.fr/creation-site-internet",
    siteName: "Webcreatis",
    images: [
      {
        url: "https://www.webcreatis.fr/images/logo.png",
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.webcreatis.fr/creation-site-internet",
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

export default function CreationSiteInternetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
