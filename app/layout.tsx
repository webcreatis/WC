import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

// Fonts
const jaapokkiSans = localFont({
  src: "./fonts/jaapokki-subtract.otf",
  variable: "--font-jaapokki-sans",
  display: "swap",
  weight: "400",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

// Metadata
export const metadata: Metadata = {
  title:
    "Webcreatis,Agence Digitale - La Réunion: Création site internet,Marketing Digital,Développement",
  description:
    "Webcreatis, Agence digitale basée à La Réunion : Création site internet, marketing digital, développement, stratégies digitales, gestion des réseaux sociaux, webdesign.",
  other: {
    "google-site-verification": "VfeRAKrEv3DMzCqWxIUaizKN_jvPxMS43bXa5Cclz-Q", // Balise meta pour Google
  },
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        {/* Script Matomo */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u = "//web-analyse-matomo.sh2.hidora.net/";
                _paq.push(['setTrackerUrl', u + 'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d = document,
                    g = d.createElement('script'),
                    s = d.getElementsByTagName('script')[0];
                g.async = true;
                g.src = u + 'matomo.js';
                s.parentNode.insertBefore(g, s);
              })();
            `,
          }}
        />
      </Head>
      <body
        className={`${jaapokkiSans.variable} ${raleway.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
