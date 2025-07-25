import { Marquee } from "@/components/magicui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import logoAfpar from "../assets/images/afpar-logo.webp";
import logo6w2hPics from "../assets/images/logo-6w2h.webp";
import logoAexis from "../assets/images/logo-aexis.webp";
import logoArianeFormationPics from "../assets/images/logo-ariane-formation.webp";
import logoDrJulienVivierPics from "../assets/images/logo-dr-julien-vivier.webp";
import logoExpertNetPics from "../assets/images/logo-expert-net-reunion.webp";
import logoReunionPortagePics from "../assets/images/logo-reunion-portage.webp";
import logoRunMysteryPics from "../assets/images/Logo-Run-Mystery.webp";
import logoSeaIntensePics from "../assets/images/logo-sea-intense-reunion.webp";
import logoSimplonPics from "../assets/images/logo-simplon-reunion.webp";
import logoValerieLavalPics from "../assets/images/Logo-valerie-laval.webp";
import logoVillaSuryaPics from "../assets/images/logo-villa-surya-sophie-piccirilli-reunion.webp";
import logoYogaDuRire from "../assets/images/Logo-yoga-du-rire.webp";
import logoElectrilePics from "../assets/images/LOGO_ELECTRILE.webp";

type propsCardType = {
  img: string;
  link: string;
  enterprise: string;
  bg: string;
};

const partners = [
  {
    id: 1,
    link: "https://www.devenirconsultant.re/",
    img: logoReunionPortagePics.src,
    enterprise: "Réunion portage",
    bg: "bg-blue",
  },
  {
    id: 2,
    link: "https://expernet.re/",
    img: logoExpertNetPics.src,
    enterprise: "Expert.net",
    bg: "",
  },
  {
    id: 3,
    link: "https://www.simplon.co/region/outre-mer",
    img: logoSimplonPics.src,
    enterprise: "Simplon",
    bg: "bg-red",
  },
  {
    id: 4,
    link: "https://www.seaintense.re/",
    img: logoSeaIntensePics.src,
    enterprise: "Sea Intense",
    bg: "",
  },
  {
    id: 5,
    link: "https://lyon-esthetique-dr-laval.com/",
    img: logoValerieLavalPics.src,
    enterprise: "Docteur Valérie Laval",
    bg: "",
  },
  {
    id: 6,
    link: "https://drjulienvivier.fr/",
    img: logoDrJulienVivierPics.src,
    enterprise: "Docteur Julien Vivier",
    bg: "bg-orange",
  },
  {
    id: 7,
    link: "https://sofiapiccirilli.com/fr",
    img: logoVillaSuryaPics.src,
    enterprise: "Villa Surya",
    bg: "",
  },
  {
    id: 8,
    link: "https://www.ariane-formation.re/",
    img: logoArianeFormationPics.src,
    enterprise: "Ariane formation",
    bg: "bg-black_ariane",
  },
  {
    id: 9,
    link: "https://www.6w2h.fr/",
    img: logo6w2hPics.src,
    enterprise: "6W2H",
    bg: "",
  },
  {
    id: 10,
    link: "https://runmystery.com/",
    img: logoRunMysteryPics.src,
    enterprise: "Run Mystery",
    bg: "bg-black",
  },
  {
    id: 11,
    link: "https://www.electrile.re/",
    img: logoElectrilePics.src,
    enterprise: "Electr'ile",
    bg: "",
  },
  {
    id: 12,
    link: "https://afpar.re/",
    img: logoAfpar.src,
    enterprise: "Afpar",
    bg: "",
  },
  {
    id: 13,
    link: "https://www.ahnolia.com/",
    img: logoYogaDuRire.src,
    enterprise: "Ahnolia",
    bg: "bg-black_ariane",
  },
  {
    id: 14,
    link: "https://www.aexis.com/",
    img: logoAexis.src,
    enterprise: "Aexis",
    bg: "",
  },
];

const PartnersCard = ({ img, link, enterprise, bg }: propsCardType) => {
  return (
    <Card
      className={`relative h-[160px] w-64 cursor-pointer overflow-hidden rounded-xl border ${bg}`}
    >
      <CardContent className="flex justify-center items-center gap-5 h-48">
        <Link
          data-link="link"
          href={link}
          aria-label={`Visitez le site de ${enterprise}`}
          className="buttonAction relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
        >
          <Image
            src={img}
            alt={`logo`}
            className="p-10 object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={200}
            height={100}
          />
        </Link>
      </CardContent>
    </Card>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-20 mb-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {partners.map((logo) => (
          <PartnersCard key={logo.id} {...logo} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {partners.map((logo) => (
          <PartnersCard key={logo.id} {...logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
