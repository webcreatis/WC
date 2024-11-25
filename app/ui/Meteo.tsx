"use client";

import { useEffect, useState } from "react";
import RealTime from "./RealTime";

export default function Meteo() {
  // state
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherCode, setWeatherCode] = useState<number | null>(null);
  const [weatherCodeNight, setWeatherCodeNight] = useState<number | null>(null);
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

        setWeatherCode(infos.data.values.weatherCode);
        setWeatherCodeNight(infos.data.values.weatherCodeNight);

        setTemperature(Math.round(infos.data.values.temperature));
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
    <div className="w-full h-auto clock border-[1px] border-[#3f3f46] rounded-xl overflow-hidden gap-7 p-5 text-white font-michroma shadow-[0_5px_5px_-5px_rgba(212,212,212,0.2),0_5px_5px_-6px_rgba(212,212,212,0.2)] bg-[radial-gradient(circle,hsla(0,0%,100%,0.1) 0,hsla(0,0%,100%,0) 50%)] tablet:flex">
      <p className="flex justify-center pb-5 gap-5 font-raleway text-xl uppercase">
        Our local Time{" "}
        <span className="bg-bg-brand bg-opacity-20 uppercase font-jaapokki rounded-xl text-[#2563eb] px-[0.625rem] py-[0.125rem]">
          rèunion
        </span>
      </p>
      <RealTime
        temperature={temperature}
        weatherCode={weatherCode}
        weatherCodeNight={weatherCodeNight}
      />
    </div>
  );
}
