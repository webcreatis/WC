import Link from "next/link";
import CustomCursor from "../ui/CustomCursor";

export default function ArchivePage() {
  return (
    <section className="w-full archive h-full flex flex-col justify-center items-start text-white md:items-center pt-52 p-10 md:p-36 md:pt-96 gap-5">
      <h1 className="font-raleway text-xl md:text-center md:text-3xl">
        Cet article faisait partie d’un ancien blog WebCreatis. Il n&apos;est
        plus disponible, mais de nouveaux contenus sont en cours de publication.
      </h1>
      <h2 className="font-raleway text-lg md:text-2xl md:text-center">
        Découvrez nos services ou consultez notre blog.
      </h2>
      <div className="flex w-full mt-10 gap-2 md:justify-center">
        <Link
          href={"/"}
          className="flex bg-green px-3 py-3 rounded-xl text-black font-semibold buttonAction text-sm font-raleway xl:text-xl"
          data-link="link"
        >
          Nos services
        </Link>
        <Link
          href={"/blog"}
          className="flex bg-green px-3 py-3 rounded-xl text-black font-semibold  buttonAction text-sm font-raleway xl:text-xl"
          data-link="link"
        >
          Voir le Blog
        </Link>
      </div>
      <CustomCursor />
    </section>
  );
}
