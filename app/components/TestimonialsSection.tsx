"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoDrValerieLaval from "../assets/images/DR-LAVAL-VALERIE.webp";
import logoEnvergure from "../assets/images/ENVERGURE.webp";
import logoSeaIntense from "../assets/images/logo-sea-intense-reunion.webp";
import stephaneMalhoPics from "../assets/images/stephane-malho.webp";
import videvPics from "../assets/images/videv.webp";
import logoSurya from "../assets/images/VILLA-SURYA-SOPHIE-PICCIRILLI.webp";

export default function TestimonialsSection() {
  const testimonialArray = [
    {
      date: "5 novembre 2024",
      texte: `Un grand merci à Webcreatis pour leur excellent travail dans la création de notre portail web ainsi que pour la maintenance et mise à jour de notre site web. 
    Leur accompagnement sur mesure et leur écoute attentive de nos besoins font toute la différence. 
    Grâce à leur réactivité et à leur professionnalisme, nous avons un site qui répond parfaitement à nos attentes.
    Un service de grande qualité à un tarif très compétitif !
    Je vous les recommande vivement !`,
      societe: "ENVERGURE - Déborah.F",
      avatar: logoEnvergure,
      link: "https://www.envergure.re/",
    },
    {
      date: "4 novembre 2024",
      texte: `Des professionnels complémentaires dans leurs compétences à votre service et à votre écoute. 
    Ils m’ont accompagné afin de mettre en place et en ligne mon site Web dans les meilleures conditions toujours avec des conseils pertinents pour optimiser nos objectifs. 
    Un grand merci pour votre collaboration.`,
      societe: "SEA INTENSE - Sébastien.M",
      avatar: logoSeaIntense,
      link: "https://www.seaintense.re/",
    },
    {
      date: "6 mai 2024",
      texte: `Patrick et Patricia sont très professionnels. Ils ont le soucis du travail bien fait, ils sont disponibles, patients, à l’écoute, et de très bons conseils. 
    J’adore le travail qu’ils m’ont livré. 
    Je les recommande à 1000% et les remercie du fond du coeur pour leur accompagnement dans la réalisation de mon site.`,
      societe: "VILLA SURYA - Sofia.P",
      avatar: logoSurya,
      link: "https://sofiapiccirilli.com/",
    },
    {
      date: "13 octobre 2023",
      texte: `Patrick a un sens du beau très prononcé surtout quand il est question de créer de belles interfaces utilisateurs ergonomiques qui engagent les prospects de son client. 
    En plus de savoir écouter et prendre en compte mes exigences client en termes de fonctionnalité, son sens aigüe de la créativité l’a poussé naturellement à me proposer gentiment (quand cela été approprié) plusieurs idées de fonctionnalités en plus auxquelles je n’avais pas pensé du tout et 
    qui apportaient un vrai « + » à l’expérience utilisateur. 
    Contrairement aux agences classiques, c’est un vrai partenaire qui sait (et peut ☝️) prendre le temps de se mettre à la place du client grâce à une équipe à taille humaine. 
    Je recommande les services de Patrick et de son agence avec joie.`,
      societe: "Vi - Lead Développeur",
      avatar: videvPics,
      link: "https://www.youtube.com/@videv9858",
    },
    {
      date: "25 septembre 2023",
      texte: `N’ hésitez pas à confier votre site et votre communication sur le Web à l’équipe de Webcreatis!
            Je travaille avec eux depuis plusieurs années et j’ai toujours été très satisfaite de leur travail et de leurs propositions.
            Celles ci sont vraiment personnalisées.
            Ils sont très à l’écoute et inventifs.
            Ils ont su créer un site , un logo et des posts qui me ressemblent.
            Que du bonheur!`,
      societe: "DR Valérie Laval",
      avatar: logoDrValerieLaval,
      link: "https://lyon-esthetique-dr-laval.com/",
    },
    {
      date: "25 septembre 2023",
      texte: `Je tiens à exprimer ma profonde gratitude envers WEBCREATIS, pour leur remarquable travail dans la création de mon site internet.
            C’est bien plus qu’une agence web. Ils incarnent l’excellence en matière de développement web, de consulting digital, de webdesign, 
            de création graphique et de référencement naturel, et ce qui les distingues vraiment, c’est leur dévouement à la qualité.
            Encore merci pour tout.`,
      societe: "Dev Front - Stéphane M",
      avatar: stephaneMalhoPics,
      link: "https://www.linkedin.com/in/malho-st%C3%A9phane/",
    },
  ];

  return (
    <section className="about w-full h-auto flex flex-col pb-28 xs:pb-10">
      <div
        id="services-header"
        className="flex justify-center items-center pt-32 pb-10"
      >
        <Pen size={36} color="#7BE0AD" />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3 xs:text-4xl tablet:text-6xl">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold uppercase xs:text-4xl tablet:text-6xl">
            Testimonials
          </span>
        </h2>
      </div>
      <h3 className="text-3xl text-white font-raleway text-center pb-10 xs:text-xl tablet:text-2xl">
        Ils parlent de nous
      </h3>
      <div className="flex justify-center mt-20 mb-20">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-2xl"
        >
          <CarouselContent className="-mt-1 h-[250px] xs:h-[320px] mobile:h-[230px]">
            {testimonialArray.map((testimonial, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-5/6">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-start gap-5 justify-center p-6 relative">
                      <Link href={testimonial.link}>
                        <Image
                          src={testimonial.avatar}
                          alt={`logo du site ${testimonial.societe}`}
                          className="rounded-xl absolute xs:hidden tablet:bottom-3 tablet:right-4 tablet:flex"
                          width={40}
                          height={40}
                        />
                      </Link>
                      <p className="text-xs font-light font-raleway">
                        {testimonial.texte}
                      </p>
                      <span className="xs:text-xs">
                        {testimonial.societe} - {testimonial.date}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
