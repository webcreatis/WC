export default function MarqueeText() {
  return (
    <div className="marquee flex w-full place-items-center h-auto pb-20">
      <div className="marqueeText relative overflow-hidden">
        {/*-- Première ligne de texte */}
        <div className="flex whitespace-nowrap animate-marqueeText">
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            development
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            react
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            next js
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            styled components
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            tailwind css
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            astro js
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            redux toolkit
          </span>
        </div>
        {/* -- Deuxième ligne de texte */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            design
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            wireframe
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            maquettage
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            kakemono
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">logo</span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            charte graphique
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            branding board
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            flyer
          </span>
          <span className="text-[5vw] px-[2vw] text-green uppercase">
            business card
          </span>
        </div>
        {/*-- Troisiéme ligne de texte */}
        <div className="flex whitespace-nowrap animate-marqueeText">
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            wordpress
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            directus
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            strapi
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            elementor
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            wordpress
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            directus
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            strapi
          </span>
          <span className="text-[5vw] px-[2vw] uppercase text-darkGreen stroke-black text-stroke-2">
            elementor
          </span>
        </div>
      </div>
    </div>
  );
}
