import { Laptop } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="services w-full h-auto flex-col justify-start items-start">
      <div
        id="services-header"
        className="flex justify-center items-center pt-32 pb-32"
      >
        <Laptop color="#7BE0AD" size={36} />
        <h2>
          <span className="text-white font-raleway italic text-6xl pr-3">
            Our
          </span>
          <span className="text-white text-5xl font-jaapokki font-bold uppercase">
            Services
          </span>
        </h2>
      </div>
      <div className="w-full h-auto pb-32">
        <ul className="w-3/4 m-auto">
          <li className="flex w-full border-b-[1px] border-white mt-5">
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              website
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                design
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                développement
              </span>
              <span className="font-jaapokki uppercase text-xl text-white">
                seo
              </span>
            </div>
          </li>
          <li className="flex w-full border-b-[1px] border-white mt-5">
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              webdesign
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                wireframe
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                maquettage
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                charte graphique
              </span>
              <span className="font-jaapokki uppercase text-xl text-white">
                branding board
              </span>
            </div>
          </li>
          <li className="flex w-full border-b-[1px] border-white mt-5">
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              design & print
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                logo
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                business card
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                kakemono
              </span>
              <span className="font-jaapokki uppercase text-xl text-white">
                kakemono
              </span>
            </div>
          </li>
          <li className="flex w-full border-b-[1px] border-white mt-5">
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              social network
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                managment
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                design
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                reels
              </span>
              <span className="font-jaapokki uppercase text-xl text-white">
                web editor
              </span>
            </div>
          </li>
          <li className="flex w-full border-b-[1px] border-white mt-5">
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              formation
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                react
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                flutter
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                js
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                html-css
              </span>
              <span className="font-jaapokki uppercase text-xl text-white">
                canva
              </span>
            </div>
          </li>
          <li className="flex w-full border-b-[1px] border-white mt-5">
            <h3 className="inline-block text-6xl font-jaapokki uppercase text-green">
              presta
            </h3>
            <div className="flex justify-start items-end gap-1 ml-10">
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                development
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                maquettage
              </span>
              <span className="font-jaapokki uppercase text-xl text-white after:content-['|'] after:ml-0.5 after:text-green">
                canva
              </span>
              <span className="font-jaapokki uppercase text-xl text-white">
                funnel marketing
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
