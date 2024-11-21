import Image from "next/image";
import logo from "../assets/images/logo-transparent-webcreatis-reunion.webp";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="fixed w-full h-[12.5em] p-9">
      <div className="flex justify-between items-center overflow-hidden pb-2 h-full">
        <Image
          src={logo}
          alt="Logo de l'agence digitale webcreatis"
          className="w-[12.5em] h-[12.5em]"
        />
        <div className="flex gap-5">
          <Button
            text="un projet ?"
            bg="bg-darkWhite"
            color="text-black"
            link=""
          ></Button>
          <Button text="Menu" bg="bg-darkWhite" color="text-black" link="">
            <div className="dots flex items-center relative w-[1.15em] h-[1.15em] text-black gap-1">
              <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
              <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
