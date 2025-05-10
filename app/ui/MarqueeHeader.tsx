import { Marquee } from "@/components/magicui/marquee";

export default function MarqueeHeader() {
  const words = [
    "Développement web",
    "Création site internet",
    "Site E-Commerce",
    "Identité visuelle",
    "Refonte & Optimisation de site",
    "Création de Logo",
    "Accompagnement Canva",
    "Mentoring Apprenant Web",
    "Design & Print",
    "Audit de site",
  ];

  return (
    <div className="flex place-items-center h-[100px] border-solid border-[1px] border-[#3f3f46] rounded-xl mt-10 xs:h-[50px] xs:w-full xs:rounded-none xs:mt-5 laptop:w-2/4 laptop:mt-16 animate-fadeIn transition-all duration-1200 ease-in-out">
      <Marquee pauseOnHover className="[--duration:40s]">
        {words.map((word, index) => (
          <span
            key={index}
            className="px-[2vw] uppercase text-green  xs:text-lg ipadPro:text-[1.5vw]"
          >
            {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
