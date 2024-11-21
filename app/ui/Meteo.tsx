"use client";

import { useEffect, useState } from "react";

export default function Meteo() {
  // state
  const [temperature, setTemperature] = useState<number | null>(null);
  let weatherCode = 0;
  let icon;
  const apiWeatherKey = process.env.NEXT_PUBLIC_WEATHER;

  useEffect(() => {
    const weatherInfos = async (apiKey: string | undefined) => {
      if (!apiKey) {
        console.error("La clé API n'est pas définie.");
        return;
      }

      try {
        const infos = await fetch(
          `https://api.tomorrow.io/v4/weather/realtime?location=-20.926399,55.335800&apikey=${apiKey}`
        ).then((res) => res.json());

        setTemperature(Math.round(infos.data.values.temperature));
        console.log("infos---------_>", infos);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo :",
          error
        );
      }
    };

    weatherInfos(apiWeatherKey);
  }, []);

  return (
    <div className="clock border-[1px] border-[#3f3f46] rounded-xl justify-center items-center gap-7 p-5 w-auto text-white font-michroma shadow-[0_5px_5px_-5px_rgba(212,212,212,0.2),0_5px_5px_-6px_rgba(212,212,212,0.2)] bg-[radial-gradient(circle,hsla(0,0%,100%,0.1) 0,hsla(0,0%,100%,0) 50%)] xs:hidden tablet:flex">
      <p>
        My local Time{" "}
        <span className="bg-bg-brand bg-opacity-20 uppercase font-jaapokki rounded-xl text-[#2563eb] px-[0.625rem] py-[0.125rem]">
          rèunion
        </span>
      </p>
      <span id="clock" className="tablet:text-xs"></span>|
      <span className="tablet:text-xs">{temperature}°C</span>
      <span>{icon}</span>
    </div>
  );
}
