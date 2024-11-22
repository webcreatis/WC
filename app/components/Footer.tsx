import Meteo from "../ui/Meteo";

export default function Footer() {
  return (
    <footer className=" bg-black w-full h-auto flex">
      <div className="container mx-auto border-2 border-solid border-red-700">
        <div className="pt-24 grid grid-cols-2 gap-4">
          <Meteo />
          <Meteo />
        </div>
      </div>
    </footer>
  );
}
