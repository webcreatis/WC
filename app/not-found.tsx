import Link from "next/link";
import bgGreenGoblin from "./assets/images/Bouffon-Vert-Willem-Dafoe.webp";
import CustomCursor from "./ui/CustomCursor";

export default function NotFound() {
  return (
    <section
      style={{
        backgroundImage: `url(${bgGreenGoblin.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen flex justify-center items-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10" />
      <div className="relative z-20 text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-7xl text-green font-bold font-jaapokki md:text-8xl xl:text-9xl">
          404
        </h1>
        <h2 className="flex justify-center text-xl text-center p-10 font-raleway md:text-2xl xl:text-5xl">
          Oops! La page que vous recherchez n&apos;existe pas.
        </h2>
        <Link
          href={"/"}
          className="flex bg-green px-3 py-3 rounded-xl text-black buttonAction text-sm font-raleway xl:text-xl"
          data-link="link"
        >
          Retour Accueil
        </Link>
      </div>
      <CustomCursor />
    </section>
  );
}
