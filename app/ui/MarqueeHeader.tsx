export default function MarqueeHeader() {
  return (
    <div className="flex place-items-center h-[100px] border-solid border-[1px] border-[#3f3f46] rounded-xl mt-10 xs:h-[50px] xs:w-full xs:rounded-none xs:mt-5 laptop:w-2/4 laptop:mt-16 animate-fadeIn transition-all duration-1200 ease-in-out">
      <div className="marqueeText relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite] min-w-max">
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Développement web
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Social Network
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Création site internet
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Boutique en ligne
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Identité visuelle
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Refonte & Optimisation
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Logo
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Formations
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Canva
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]">
            Web design
          </span>
        </div>
      </div>
    </div>
  );
}
