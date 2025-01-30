import Head from "next/head";
import AboutSection from "./components/AboutSection";
import CustomerSection from "./components/CustomerSection";
import Footer from "./components/Footer";
import FormationsSection from "./components/FormationsSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KapNumerikCTA from "./components/KapNumerikCTA";
import MethodSection from "./components/MethodSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WorksSection from "./components/WorkSection";
import CanvasTrail from "./ui/Cursor";
import MarqueeText from "./ui/MarqueeText";

export default function Home() {
  return (
    <>
      <Head>
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
      <CanvasTrail />
      <Header />
      <main>
        <HeroSection />
        <KapNumerikCTA />
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <MethodSection />
        <FormationsSection />
        <MarqueeText />
        <CustomerSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
