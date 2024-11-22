import Button from "../ui/Button";
import Meteo from "../ui/Meteo";

export default function Footer() {
  return (
    <footer className=" bg-black w-full h-auto flex">
      <div className="container mx-auto border-2 border-solid border-red-700">
        <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Colonne 1 */}
          <div className="flex flex-col gap-4">
            <Meteo />
          </div>
          {/* Colonne 2 */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[450px] border-[1px] border-[#3f3f46] rounded-xl overflow-hidden bg-site-envergure">
              <div className="flex w-full items-center justify-between uppercase p-5 backdrop-opacity-10 backdrop-invert bg-black/75">
                <div className="font-raleway text-xl text-white"> Latest </div>
                <span className="font-raleway text-xl text-white"> #Work </span>
              </div>
              <div className="flex flex-col justify-center items-start p-5 mt-16">
                <div className="mb-2 text-2xl font-bold text-white font-jaapokki">
                  Création site internet - Envergure
                </div>
                <div className="mb-4 text-white font-raleway">
                  {" "}
                  Chez WebCreatis, nous donnons vie à vos idées sur le web. 🌐
                  Avec Envergure.re, nous avons conçu un site moderne, au design
                  soigné et aux fonctionnalités adaptées, avec une bonne dose de
                  passion. Vous avez les rêves, on a les pixels ! 🚀
                </div>
              </div>
              <div className="p-5">
                <Button
                  text="View Project"
                  bg="bg-green"
                  color="text-black"
                  link="https://www.envergure.re/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
