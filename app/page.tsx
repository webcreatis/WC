import Image from "next/image";
import logo from "../public/logo-transparent-webcreatis-reunion.webp";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorksSection from "./components/WorkSection";
import Button from "./ui/Button";
import CrossIcon from "./ui/CrossIcon";
import CanvasTrail from "./ui/Cursor";
import MarqueeText from "./ui/MarqueeText";

export default function Home() {
  return (
    <div>
      <CanvasTrail />
      <header className="fixed w-full h-[12.5em] p-9">
        <div className="flex justify-between items-center overflow-hidden pb-2 h-full">
          <Image
            src={logo}
            alt="Logo de l'agence digitale webcreatis"
            className="w-[12.5em] h-[12.5em]"
          />
          <div className="flex gap-5">
            <Button
              text="un projet ?"
              bg="bg-darkWhite"
              color="text-black"
            ></Button>
            <Button text="Menu" bg="bg-darkWhite" color="text-black">
              <div className="dots flex items-center relative w-[1.15em] h-[1.15em] text-black gap-1">
                <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
                <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
              </div>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero-section w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-9xl uppercase font-bold tracking-wide text-white font-jaapokki animate-fadeIn">
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
          <div className="hero-subtitle caption-timeline text-white text-center text-lg uppercase pt-10">
            <span className="block opacity-100">
              Nous sommes une Agence Digitale située à la Réunion,
            </span>
            <span className="block opacity-100">
              spécialisée dans la création de sites internet, le marketing
              digital,
            </span>
            <span className="block opacity-100">
              le design et le développement.
            </span>
          </div>
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
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <MarqueeText />
      </main>
      <footer></footer>
    </div>
  );
}
