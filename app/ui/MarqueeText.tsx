export default function MarqueeText() {
  return (
    <div className="mt-5 flex w-full place-items-center h-auto xs:pb-5 xs:flex-col laptop:h-[250px] lg:h-[300px] x:h-[470px]">
      <div className="marqueeText relative overflow-hidden xs:w-full xs:mt-10 md:mt-10 laptop:text-6xl laptop:flex-1">
        {/*-- Première ligne de texte */}
        <div className="flex whitespace-nowrap animate-marqueeText">
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            development
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            react
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            next js
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            styled components
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            tailwind css
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            astro js
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            redux toolkit
          </span>
        </div>
        {/* -- Deuxième ligne de texte */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            CSS3
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            Framer Motion
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            Typescript
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            Dart
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            context
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            Flutter
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            Node Js
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            Better Auth
          </span>
          <span className="xs:text-[5vw] px-[2vw] text-green uppercase">
            Stripe
          </span>
        </div>
        {/*-- Troisiéme ligne de texte */}
        <div className="flex whitespace-nowrap animate-marqueeText">
          <span className="xs:text-[5vw] px-[2vw] uppercase text-stroke-2">
            wordpress
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            directus
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            ZSA
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            NextAuth
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            wordpress
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            directus
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            ZOD
          </span>
          <span className="xs:text-[5vw] px-[2vw] uppercase  text-stroke-2">
            Elementor
          </span>
        </div>
      </div>
    </div>
  );
}
