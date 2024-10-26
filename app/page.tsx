export default function Home() {
  return (
    <div>
      <header className="fixed w-full h-[100px]">
        <div className="flex justify-between items-center overflow-hidden pb-2 h-full">
          <button className="flex justify-center items-center bg-darkWhite text-[.875em] uppercase h-[3.2em] cursor-pointer p-[1.125em] rounded-[6.25em]">
            <div className="flex justify-center items-center overflow-hidden gap-[.625em]">
              <span className="font-raleway font-semibold">Menu</span>
              <div className="flex items-center relative w-[1.15em] h-[1.15em] text-black gap-1">
                <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
                <span className="inline-block w-[.3125em] h-[.3125em] rounded-[100%] bg-black"></span>
              </div>
            </div>
          </button>
        </div>
      </header>
      <main>
        <div className="hero-section w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-9xl uppercase font-bold tracking-wide text-white font-jaapokki">
            <div className="flex space-x-1">
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                w
              </span>
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                e
              </span>
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                b
              </span>
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                c
              </span>
              <span className="letter inline-blockmin-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                r
              </span>
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                e
              </span>
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                a
              </span>
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                t
              </span>
              <span className="letter inline-block min-w-[2vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                i
              </span>
              <span className="letter inline-block min-w-[3vw] text-[10vw] transform transition-all duration-300 ease-in-out">
                s
              </span>
            </div>
          </h1>
          <div className="hero-subtitle caption-timeline text-white text-center text-lg uppercase pt-10">
            <span className="block opacity-100">
              Nous sommes une Agence Digitale située à la Réunion,
            </span>
            <span className="block opacity-100">
              spécialisée dans la création de sites internet, le marketing
              digital,
            </span>
            <span className="block opacity-100">
              le design et le développement.
            </span>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
