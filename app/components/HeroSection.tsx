import CrossIcon from "../ui/CrossIcon";
import MarqueeHeader from "../ui/MarqueeHeader";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="hero-section w-full h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-9xl uppercase font-bold tracking-wide text-white font-jaapokki animate-fadeIn xs:mt-10">
        <div className="flex space-x-1">
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            w
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            e
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            b
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            c
          </span>
          <span className="letter inline-blockmin-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            r
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            e
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            a
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            t
          </span>
          <span className="letter inline-block min-w-[2vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            i
          </span>
          <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
            s
          </span>
        </div>
      </h1>
      <div className="hero-subtitle w-3/4 caption-timeline text-white pt-10 xs:p-7 xs:w-full tablet:w-3/4 lg:w-[65%]">
        <p className="xs:text-xs xs:text-left tablet:text-sm ipadPro:text-lg">
          {`Nous sommes deux passionnés du digital basés à La Réunion.
          On vous aide à créer un site internet qui vous ressemble, à développer
          votre présence sur les réseaux sociaux et à booster vos projets en
          ligne.
          Besoin d'un site, d'une formation ou d'un coup de main pour vos
          visuels ?
          On est là pour vous accompagner, avec simplicité et créativité !`}
        </p>
      </div>
      <MarqueeHeader />
      <div className="absolute bottom-5 flex w-full justify-between p-5">
        <CrossIcon />
        <CrossIcon />
        <span className="uppercase text-white font-raleway">
          scroll to explore
        </span>
        <CrossIcon />
        <CrossIcon />
      </div>
    </section>
  );
}
