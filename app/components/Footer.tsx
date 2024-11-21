import Meteo from "../ui/Meteo";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-[500px] flex flex-col">
      <div className="flex">
        <Meteo />
        <Meteo />
      </div>
    </footer>
  );
}
