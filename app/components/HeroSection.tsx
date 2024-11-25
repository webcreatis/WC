import CrossIcon from "../ui/CrossIcon";

export default function HeroSection() {
  return (
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
      <div className="hero-subtitle caption-timeline text-white text-center text-lg uppercase pt-10 xs:p-5 xs:text-sm xs:text-left">
        <span className="block opacity-100">
          Nous sommes une Agence Digitale située à la Réunion,
        </span>
        <span className="block opacity-100">
          spécialisée dans la création de sites internet, le marketing digital,
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
  );
}
