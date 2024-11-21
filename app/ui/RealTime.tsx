"use client";

import {
  CloudDrizzle,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudRainWind,
  CloudSun,
  Cloudy,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

type RealTimeProps = {
  temperature?: number | null;
  weatherCode: number | null;
  weatherCodeNight: number | null;
};

export default function RealTime({
  temperature,
  weatherCode,
  weatherCodeNight,
}: RealTimeProps) {
  //state
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [dayOfMonth, setDayOfMonth] = useState("");

  // Obtenir le jour de la semaine
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Jour et Mois
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weatherIcons: Record<number, JSX.Element> = {
    1000: <Sun />, // Ciel dégagé
    1100: <CloudSun />, // soleil + nuage
    1101: <CloudSun />, // Partiellement nuageux
    1102: <Cloudy />, // nuageux
    1001: <Cloudy />, // Très nuageux
    4000: <CloudDrizzle />, // Bruine
    4200: <CloudRain />, // Pluie légère
    4001: <CloudRain />, // Pluie
    4201: <CloudRainWind />, // Pluie forte + vent
    8000: <CloudLightning />, // Orage
  };

  const weatherIconsNight: Record<number, JSX.Element> = {
    1000: <Moon />, // Lune dégagé
    11001: <CloudMoon />, // lune partiellement nuageux
    11011: <CloudMoon />, // lune partiellement nuageux
    11021: <CloudMoon />, // lune nuageux
  };

  const defaultIcon = <Cloudy />; // Icône par défaut
  const defaultIconNight = <Moon />; // Icône par défaut

  const getWeatherIcon = (code: number | null) => {
    // Vérification si le code est null et retour de l'icône par défaut
    if (code === null) return defaultIcon;
    return weatherIcons[code] || defaultIcon;
  };

  const getWeatherIconNight = (weatherCodeNight: number | null) => {
    // Vérification si le code est null et retour de l'icône par défaut
    if (weatherCodeNight === null) return defaultIconNight;
    return weatherIconsNight[weatherCodeNight] || defaultIconNight;
  };

  const WeatherDisplay = ({ weatherCode, weatherCodeNight }: RealTimeProps) => {
    return weatherCode ? (
      <span className="weather-icon">{getWeatherIcon(weatherCode)}</span>
    ) : (
      <span className="weather-icon">
        {getWeatherIconNight(weatherCodeNight)}
      </span>
    );
  };

  const updateTime = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    setTime(timeString);
    const dayName = daysOfWeek[now.getDay()];
    const dayOfMonth = String(now.getDate()).padStart(2, "0"); // Jour du mois
    const monthName = months[now.getMonth()]; // Mois en texte
    setDay(dayName);
    setMonth(monthName);
    setDayOfMonth(dayOfMonth);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    updateTime(); // Appel initial pour éviter un délai d'une seconde
    return () => clearInterval(interval); // Nettoyage à la désinstallation
  }, []);

  return (
    <div className="flex justify-center items-center uppercase gap-5">
      <div className="flex flex-col">
        <span className="font-raleway">{day}</span>
        <div>
          <span>{dayOfMonth} - </span>
          <span className="font-raleway">{month}</span>
        </div>
        <div className="flex items-center gap-5 pt-2">
          <span className="tablet:text-xs">{temperature}°C</span>
          <WeatherDisplay
            weatherCode={weatherCode}
            weatherCodeNight={weatherCodeNight}
          />
        </div>
      </div>

      <span className="inline-block text-[50px] p-5 font-mono w-[300px] text-center">
        {time}
      </span>
    </div>
  );
}
