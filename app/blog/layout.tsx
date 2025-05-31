import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title:
    "Blog de notre Agence Digitale à La Réunion (974) – Conseils & Actus Web | Webcreatis",
  description:
    "Bienvenue sur le blog de Webcreatis à La Réunion ! Astuces web, conseils digitaux et nouveautés de notre agence digitale 974",
  keywords: [
    "blog agence web La Réunion",
    "création site internet",
    "conseils création site internet Réunion",
    "actualités création site e-commerce Réunion",
    "tendances webdesign Réunion",
    "SEO naturel conseils Réunion",
    "meilleures pratiques SEO naturel pour PME Réunion",
    "astuces création site internet professionnel",
    "nouveautés digitales et transformation numérique La Réunion",
    "Webcreatis",
  ],
  alternates: {
    canonical: "https://www.webcreatis.fr/blog",
  },
  openGraph: {
    title:
      "Blog de notre Agence Digitale à La Réunion (974) – Conseils & Actus Web | Webcreatis",
    description:
      "Bienvenue sur le blog de Webcreatis à La Réunion ! Astuces web, conseils digitaux et nouveautés de notre agence digitale 974.",
    url: "https://www.webcreatis.fr/blog",
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
