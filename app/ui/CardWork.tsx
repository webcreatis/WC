import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type cardWoksProps = {
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
}: cardWoksProps) {
  return (
    <>
      <Link
        href={link}
        aria-label={`Visitez le site de ${link}`}
        className="p-5"
      >
        <li
          data-link="link"
          className="buttonAction flex xs:flex-col-reverse xs:h-auto xs:gap-7 tablet:flex-row tablet:gap-2 tablet:pb-5 justify-between items-center transition ease-out border-t-[1px] border-white first:border-t-0 hover:bg-green hover:border-t-green hover:border-b-green cursor-pointer overflow-hidden whitespace-nowrap relative group"
        >
          <span className="w-full invisible uppercase inline-block text-white text-[2000%] font-extrabold font-raleway absolute -top-[4rem] group-hover:visible group-hover:animate-marqueeText group-hover:opacity-20">
            {titleMarquee}
          </span>
          <div className="flex flex-grow items-center gap-10 ml-3">
            <div className="uppercase font-jaapokki text-white text-4xl font-extrabold xs:hidden tablet:flex">
              {number}
            </div>
            <div className="flex-col">
              <span className="text-white font-raleway text-2xl group-hover:opacity-25">
                {desc}
              </span>
              <h3 className="text-[40px] uppercase font-jaapokki text-white opacity-25 group-hover:opacity-100 xs:text-2xl">
                {title}
              </h3>
              <div className="flex gap-3 flex-wrap">
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  {skillOne}
                </span>
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  {skillTwo}
                </span>
                {skillThree ? (
                  <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                    {skillThree}
                  </span>
                ) : (
                  <></>
                )}
                {skillFour ? (
                  <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                    {skillFour}
                  </span>
                ) : (
                  <></>
                )}
                {skillFive ? (
                  <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                    {skillFive}
                  </span>
                ) : (
                  <></>
                )}
              </div>
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
        </li>
      </Link>
    </>
  );
}
