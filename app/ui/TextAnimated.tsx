type TextAnimatedProps = {
  title: string;
};

export default function TextAnimated({ title }: TextAnimatedProps) {
  return (
    <div className="relative overflow-hidden w-full h-[200px] xs:h-[350px] sm:h-[300px] md:h-[400px] lg:h-[500px] xs:pt-20">
      {/* Flou à gauche */}
      <div className="absolute left-0 top-0 h-full w-16 xs:w-10 sm:w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-darkGreen to-transparent backdrop-blur-sm" />

      {/* Flou à droite */}
      <div className="absolute right-0 top-0 h-full w-16 xs:w-10 sm:w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-darkGreen to-transparent backdrop-blur-sm" />

      <div className="absolute flex animate-scroll whitespace-nowrap will-change-transform">
        <span className="px-4 sm:px-8 text-[120px] xs:text-[200px] sm:text-[200px] md:text-[300px] lg:text-[400px] uppercase text-white font-jaapokki font-light leading-none">
          {title}
        </span>
        <span className="px-4 sm:px-8 text-[120px] xs:text-[200px] sm:text-[200px] md:text-[300px] lg:text-[400px] uppercase text-white font-jaapokki font-light leading-none">
          {title}
        </span>
        <span className="px-4 sm:px-8 text-[120px] xs:text-[200px] sm:text-[200px] md:text-[300px] lg:text-[400px] uppercase text-white font-jaapokki font-light leading-none">
          {title}
        </span>
      </div>
    </div>
  );
}
