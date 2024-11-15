import { TrafficCone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import vivierPics from "../assets/images/site-dr-julien-vivier.webp";

export default function WorksSection() {
  return (
    <section className="works w-full h-auto flex-col justify-start items-start">
      <div
        id="work-header"
        className="flex justify-center items-center pt-32 pb-32"
      >
        <TrafficCone color="#7BE0AD" size={36} />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold upper">
            Work
          </span>
        </h2>
      </div>
      <ul className="w-full">
        <li className="flex justify-between items-center h-[21.25rem] transition ease-out border-t-[1px] border-b-[1px] border-white hover:bg-green hover:border-t-green hover:border-b-green cursor-pointer overflow-hidden whitespace-nowrap relative group">
          <Link href="https://drjulienvivier.fr/">
            <span className="w-full invisible uppercase inline-block text-white text-[2000%] font-extrabold font-raleway absolute -top-[4rem] group-hover:visible group-hover:animate-marquee group-hover:opacity-20">
              DR JULIEN VIVIER
            </span>
          </Link>
          <div className="flex flex-grow items-center gap-10 ml-3">
            <div className="uppercase font-jaapokki text-white text-4xl font-extrabold">
              01
            </div>
            <div className="flex-col">
              <span className="text-white font-raleway text-2xl group-hover:opacity-25">
                Medicine & Aesthetics
              </span>
              <h3 className="text-[40px] uppercase font-jaapokki text-white opacity-25 group-hover:opacity-100">
                Docteur Julien Vivier
              </h3>
              <div className="flex gap-3">
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Wordpress
                </span>
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Elementor
                </span>
              </div>
            </div>
          </div>
          <div className="w-[30%] height-[78%] mr-3 z-20">
            <Image
              src={vivierPics}
              alt="Picture of the author"
              className="rounded-xl object-cover"
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </li>
        <li className="flex justify-between items-center h-[21.25rem] transition ease-out border-t-[1px] border-b-[1px] border-white hover:bg-green hover:border-t-green hover:border-b-green cursor-pointer overflow-hidden whitespace-nowrap relative group">
          <Link href="https://drjulienvivier.fr/">
            <span className="w-full invisible uppercase inline-block text-white text-[2000%] font-extrabold font-raleway absolute -top-[4rem] group-hover:visible group-hover:animate-marquee group-hover:opacity-20">
              DR JULIEN VIVIER
            </span>
          </Link>
          <div className="flex flex-grow items-center gap-10 ml-3">
            <div className="uppercase font-jaapokki text-white text-4xl font-extrabold">
              01
            </div>
            <div className="flex-col">
              <span className="text-white font-raleway text-2xl group-hover:opacity-25">
                Medicine & Aesthetics
              </span>
              <h3 className="text-[40px] uppercase font-jaapokki text-white opacity-25 group-hover:opacity-100">
                Docteur Julien Vivier
              </h3>
              <div className="flex gap-3">
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Wordpress
                </span>
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Elementor
                </span>
              </div>
            </div>
          </div>
          <div className="w-[30%] height-[78%] mr-3 z-20">
            <Image
              src={vivierPics}
              alt="Picture of the author"
              className="rounded-xl object-cover"
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </li>
        <li className="flex justify-between items-center h-[21.25rem] transition ease-out border-t-[1px] border-b-[1px] border-white hover:bg-green hover:border-t-green hover:border-b-green cursor-pointer overflow-hidden whitespace-nowrap relative group">
          <Link href="https://drjulienvivier.fr/">
            <span className="w-full invisible uppercase inline-block text-white text-[2000%] font-extrabold font-raleway absolute -top-[4rem] group-hover:visible group-hover:animate-marquee group-hover:opacity-20">
              DR JULIEN VIVIER
            </span>
          </Link>
          <div className="flex flex-grow items-center gap-10 ml-3">
            <div className="uppercase font-jaapokki text-white text-4xl font-extrabold">
              01
            </div>
            <div className="flex-col">
              <span className="text-white font-raleway text-2xl group-hover:opacity-25">
                Medicine & Aesthetics
              </span>
              <h3 className="text-[40px] uppercase font-jaapokki text-white opacity-25 group-hover:opacity-100">
                Docteur Julien Vivier
              </h3>
              <div className="flex gap-3">
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Wordpress
                </span>
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Elementor
                </span>
              </div>
            </div>
          </div>
          <div className="w-[30%] height-[78%] mr-3 z-20">
            <Image
              src={vivierPics}
              alt="Picture of the author"
              className="rounded-xl object-cover"
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </li>
        <li className="flex justify-between items-center h-[21.25rem] transition ease-out border-t-[1px] border-b-[1px] border-white hover:bg-green hover:border-t-green hover:border-b-green cursor-pointer overflow-hidden whitespace-nowrap relative group">
          <Link href="https://drjulienvivier.fr/">
            <span className="w-full invisible uppercase inline-block text-white text-[2000%] font-extrabold font-raleway absolute -top-[4rem] group-hover:visible group-hover:animate-marquee group-hover:opacity-20">
              DR JULIEN VIVIER
            </span>
          </Link>
          <div className="flex flex-grow items-center gap-10 ml-3">
            <div className="uppercase font-jaapokki text-white text-4xl font-extrabold">
              01
            </div>
            <div className="flex-col">
              <span className="text-white font-raleway text-2xl group-hover:opacity-25">
                Medicine & Aesthetics
              </span>
              <h3 className="text-[40px] uppercase font-jaapokki text-white opacity-25 group-hover:opacity-100">
                Docteur Julien Vivier
              </h3>
              <div className="flex gap-3">
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Wordpress
                </span>
                <span className="inline-block text-sm bg-white bg-opacity-25 group-hover:bg-opacity-100 p-2 rounded-md">
                  Elementor
                </span>
              </div>
            </div>
          </div>
          <div className="w-[30%] height-[78%] mr-3 z-20">
            <Image
              src={vivierPics}
              alt="Picture of the author"
              className="rounded-xl object-cover"
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
