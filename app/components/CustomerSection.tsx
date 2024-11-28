import { Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo6w2h from "../assets/images/6W2H-ERIC-JULIEN.webp";
import logoDrValerieLaval from "../assets/images/DR-LAVAL-VALERIE.webp";
import logoDrJulien from "../assets/images/DR-VIVIER-JULIEN.webp";
import logoEnvergure from "../assets/images/ENVERGURE.webp";
import logoExpertNet from "../assets/images/EXPERT.NET.webp";
import logoSeaIntense from "../assets/images/logo-sea-intense-reunion.webp";
import logoReunionPortage from "../assets/images/REUNION-PORTAGE.webp";
import logoSimplon from "../assets/images/SIMPLON-OUTRE-MER.webp";
import logoSurya from "../assets/images/VILLA-SURYA-SOPHIE-PICCIRILLI.webp";
import AnimatedLogos from "../components/AnimatedLogos";

export default function CustomerSection() {
  return (
    <section className="w-full h-auto flex flex-col justify-center">
      <div className="flex justify-center items-center pt-32 pb-10 ">
        <Target size={36} color="#7BE0AD" />
        <h2>
          <span className="text-black font-raleway italic text-6xl pr-3 xs:text-2xl mobile:text-3xl tablet:text-6xl">
            Our
          </span>
          <span className="text-black text-5xl font-jaapokki font-bold uppercase xs:text-2xl mobile:3xl tablet:text-6xl">
            Clients
          </span>
        </h2>
      </div>
      <h3 className="text-3xl text-black font-raleway text-center pb-10 xs:text-xl tablet:text-2xl">
        Ils nous font confiance
      </h3>
      <div className="w-full flex justify-center gap-5 tablet:flex-col l:flex-row">
        <div className="hidden md:block w-full h-full m-auto mb-28 relative overflow-hidden tablet:w-[90%] l:w-[30%] l:items-center">
          <AnimatedLogos />
        </div>
        <div className="w-[70%] h-auto p-10 xs:p-0 tablet:w-full l:w-[60%]">
          <ul className="flex flex-col">
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logo6w2h.src}
                  alt="logo du site 6W2H"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                6w2h
              </span>
            </li>
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoDrValerieLaval.src}
                  alt="logo du site du Dr Laval Valérie"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Docteur Valérie Laval - Lyon
              </span>
            </li>
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoDrJulien.src}
                  alt="logo du site du Dr Julien Vivier"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Docteur Julien Vivier - Paris
              </span>
            </li>
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoEnvergure.src}
                  alt="logo du site Envergure"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Envergure - Formation & Environnement
              </span>
            </li>
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoExpertNet.src}
                  alt="logo du site Expert.Net"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Expert.net - Centre formation Informatique la Réunion
              </span>
            </li>
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoSeaIntense.src}
                  alt="logo du site sea intense"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Sea Intense - Plongée sous marine et sortie cétacé la Réunion
              </span>
            </li>
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoReunionPortage.src}
                  alt="logo du site Réunion portage"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Réunion Portage - portage salarial à la Réunion
              </span>
            </li>
            <li className="flex items-center border-solid border-b-[1px] border-black pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoSimplon.src}
                  alt="logo du site de Simplon outre mer"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Simplon Outre Mer - Centre de formation informatique la Réunion
              </span>
            </li>
            <li className="flex items-center pb-3 pt-3 gap-7 xs:flex-col l:flex-row l:w-[80%]">
              <Link
                href={""}
                className="w-full flex justify-center l:justify-start l:w-[5%]"
              >
                <Image
                  src={logoSurya.src}
                  alt="logo du site Villa Surya Réunion"
                  width={40}
                  height={40}
                  className="xs:w-[30%] tablet:w-[15%] laptop:w-[10%] l:w-[90%]"
                />
              </Link>
              <span className="uppercase font-jaapokki text-base text-green font-bold">
                Villa Surya - Sofia Piccirilli la Réunion
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
