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
  pics,
}: cardWoksProps) {
  return (
    <>
      <li className="flex justify-between items-center h-[21.25rem] transition ease-out border-t-[1px] border-white first:border-t-0 hover:bg-green hover:border-t-green hover:border-b-green cursor-pointer overflow-hidden whitespace-nowrap relative group">
        <Link href={link}>
          <span className="w-full invisible uppercase inline-block text-white text-[2000%] font-extrabold font-raleway absolute -top-[4rem] group-hover:visible group-hover:animate-marquee group-hover:opacity-20">
            {titleMarquee}
          </span>
        </Link>
        <div className="flex flex-grow items-center gap-10 ml-3">
          <div className="uppercase font-jaapokki text-white text-4xl font-extrabold">
            {number}
          </div>
          <div className="flex-col">
            <span className="text-white font-raleway text-2xl group-hover:opacity-25">
              {desc}
            </span>
            <h3 className="text-[40px] uppercase font-jaapokki text-white opacity-25 group-hover:opacity-100">
              {title}
            </h3>
            <div className="flex gap-3">
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
            </div>
          </div>
        </div>
        <div className="w-[30%] mr-3 z-20">
          <Image
            src={pics}
            alt={`image du site ${title}`}
            className="rounded-xl transition ease-out group-hover:scale-110 group-hover:animate-scalePics"
            width={450}
            height={450}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </li>
    </>
  );
}
