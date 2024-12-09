export default function MarqueeHeader() {
  return (
    <div className="flex place-items-center h-[100px] border-solid border-[1px] border-[#3f3f46] rounded-xl mt-10 xs:h-[50px] xs:w-full xs:rounded-none xs:mt-5 laptop:w-3/4">
      <div className="marqueeText relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Développement web
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Social Network
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Création site internet
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Boutique en ligne
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Identité visuelle
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Refonte & Optimisation
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Logo
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Formations
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Canva
          </span>
          <span className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[2vw]">
            Web design
          </span>
        </div>
      </div>
    </div>
  );
}
