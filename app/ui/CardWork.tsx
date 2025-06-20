import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardWorksProps = {
  title: string;
  desc: string;
  number: string;
  titleMarquee: string;
  link: string;
  skillOne: string;
  skillTwo: string;
  skillThree?: string;
  skillFour?: string;
  skillFive?: string;
  pics: StaticImageData | string;
};

export default function CardWork({
  title,
  desc,
  number,
  titleMarquee,
  link,
  skillOne,
  skillTwo,
  skillThree,
  skillFour,
  skillFive,
  pics,
}: CardWorksProps) {
  const skills = [skillOne, skillTwo, skillThree, skillFour, skillFive].filter(
    Boolean
  );

  return (
    <Link
      href={link}
      aria-label={`Visitez le site de ${title}`}
      className="block pt-5 pb-5"
    >
      <div
        data-link="link"
        className="buttonAction flex xs:flex-col-reverse xs:h-auto xs:gap-7 tablet:flex-row tablet:gap-2 tablet:pb-5 justify-between items-center transition ease-out border-t-[1px] border-white first:border-t-0 hover:bg-green hover:border-t-green hover:border-b-green cursor-pointer overflow-hidden whitespace-nowrap relative group"
      >
        <span className="w-full invisible uppercase inline-block text-white text-[2000%] font-extrabold font-raleway absolute -top-[4rem] group-hover:visible group-hover:animate-marqueeText group-hover:opacity-20">
          {titleMarquee}
        </span>

        <div className="grid grid-cols-[auto_1fr] gap-10 ml-20 xl:gap-20 items-center w-full max-w-[1400px] xl:ml-auto xl:mr-10">
          <div className="w-16 text-right uppercase font-jaapokki text-white text-4xl font-extrabold xs:hidden tablet:flex lg:text-5xl xl:text-7xl">
            {number}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-raleway text-xl group-hover:opacity-25 lg:text-3xl xl:text-3xl">
              {desc}
            </span>
            <h3 className="text-[40px] uppercase font-jaapokki text-white opacity-25 group-hover:opacity-100 text-xl lg:text-3xl xl:text-4xl">
              {title}
            </h3>

            <ul className="flex gap-3 flex-wrap mt-2">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-[30%] mr-3 z-20 xs:w-[90%] xs:mr-0 xs:pb-2 xs:pt-10 tablet:w-[40%] tablet:mr-4">
          <Image
            src={pics}
            alt={`image du site ${title}`}
            className="h-auto rounded-xl transition ease-out group-hover:scale-110 group-hover:animate-scalePics"
            width={450}
          />
        </div>
      </div>
    </Link>
  );
}
