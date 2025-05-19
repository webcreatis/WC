import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kap Numerik Réunion - Webcreatis",
  description:
    "Kap Numerik accompagne les entreprises réunionnaises dans leur transformation digitale : stratégie numérique, développement web, et SEO local à La Réunion.",
  keywords: [
    "Kap Numerik",
    "numérique",
    "digital",
    "transformation digitale",
    "SEO Réunion",
    "création site internet Réunion",
    "développement web Réunion",
    "Webcreatis",
    "accompagnement digital",
    "La Réunion",
  ],
  openGraph: {
    title: "Kap Numerik Réunion - Webcreatis",
    description:
      "Accompagnement digital des entreprises à La Réunion : stratégie, site web, SEO, développement. Découvrez Kap Numerik avec Webcreatis.",
    url: "https://webcreatis.re/kap-numerik",
    siteName: "Webcreatis",
    images: [
      {
        url: "https://webcreatis.re/images/KAP-NUMERIK-2024-webcreatis.webp",
        width: 1200,
        height: 630,
        alt: "Kap Numerik - Webcreatis Réunion",
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
    canonical: "https://webcreatis.re/kap-numerik",
  },
};

export default function KapNumerikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
