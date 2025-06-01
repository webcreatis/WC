import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ContactCardProps = {
  title: string;
  link: string;
  textLink: string;
  icon: JSX.Element;
};

export default function ContactCard({
  title,
  link,
  textLink,
  icon,
}: ContactCardProps) {
  return (
    <div className="relative flex w-[90%] md:w-[70%] m-auto h-auto justify-between border-2 border-white min-[320px]:flex-col laptop:flex-row laptop:w-full lg:w-[90%] xl:w-[70%]">
      <p className="w-full flex items-center gap-2 font-semibold text-2xl p-5 xs:text-lg md:flex-1 md:text-3xl border-b-2 md:border-b-2 md:border-r-0 md:p-7 laptop:border-b-0 laptop:border-r-2 laptop:text-left xl:p-14 uppercase text-center cursor-pointer">
        <span>{icon}</span>
        {title}
      </p>

      <Link
        data-link="link"
        href={link}
        className="relative touch-manipulation buttonAction w-full md:flex-1 text-2xl md:text-3xl flex items-center overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corail"
      >
        {/* background anim hover */}
        <span className="absolute inset-0 bg-corail scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0 pointer-events-none" />

        {/* content */}
        <div className="w-20 md:w-28 border-r-2 h-full flex justify-center items-center z-10 xs:hidden md:flex">
          <ArrowUpRight
            color="#ffffff"
            className="h-full md:w-[38px] laptop:w-[40px] xl:w-[60px]"
          />
        </div>

        <p className="flex-1 text-xl xs:text-base xs:pl-2 xs:pr-2 xs:pt-5 xs:pb-5 md:text-xl p-5 md:p-7 lg:text-2xl xl:text-3xl z-10 text-center md:text-left">
          {textLink}
        </p>
      </Link>
    </div>
  );
}
