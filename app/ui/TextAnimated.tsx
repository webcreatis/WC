type TextAnimatedProps = {
  title: string;
};

export default function TextAnimated({ title }: TextAnimatedProps) {
  return (
    <div className="relative overflow-hidden w-full h-[200px] md:h-[250px] lg:h-[300px] xs:pt-10">
      {/* Flou à gauche */}
      <div className="absolute left-0 top-0 h-full w-16 xs:w-10 sm:w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-darkGreen to-transparent backdrop-blur-sm" />

      {/* Flou à droite */}
      <div className="absolute right-0 top-0 h-full w-16 xs:w-10 sm:w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-darkGreen to-transparent backdrop-blur-sm" />

      <div className="absolute flex animate-scroll whitespace-nowrap will-change-transform">
        <span className="px-4 sm:px-8 text-[120px] md:text-[200px] lg:text-[280px] uppercase text-white font-jaapokki font-light leading-none">
          {title}
        </span>
        <span className="px-4 sm:px-8 text-[120px] md:text-[200px] lg:text-[280px] uppercase text-white font-jaapokki font-light leading-none">
          {title}
        </span>
        <span className="px-4 sm:px-8 text-[120px] md:text-[200px] lg:text-[280px] uppercase text-white font-jaapokki font-light leading-none">
          {title}
        </span>
      </div>
    </div>
  );
}
