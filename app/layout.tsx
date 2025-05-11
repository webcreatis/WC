import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
    "Création Site Internet à La Réunion | Agence Web & Mentoring | Webcreatis",
  description:
    "Webcreatis, agence web à La Réunion, vous accompagne dans la création de sites, mentoring, formations Canva et démarches Kap Numérik. Contactez-nous !",
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
      <body
        className={`${jaapokkiSans.variable} ${raleway.variable} antialiased bg-background`}
      >
        {/* <CanvasTrail /> */}
        <Header />
        {children}
        <Footer />
      </body>
      <Script
        id="link-matomo"
        dangerouslySetInnerHTML={{
          __html: `
              var _paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u = "//web-analyse-matomo.sh2.hidora.net/";
                _paq.push(['setTrackerUrl', u + 'matomo.php']);
                _paq.push(['setSiteId', '2']);
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
    </html>
  );
}
