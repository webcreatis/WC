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
  temperature = null,
  weatherCode = null,
  weatherCodeNight = null,
}: RealTimeProps) {
  // State
  const [time, setTime] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [dayOfMonth, setDayOfMonth] = useState<string>("");

  // Weather icons mapping
  const weatherIcons: Record<number, JSX.Element> = {
    1000: <Sun />, // Clear sky
    1100: <CloudSun />, // Partly sunny
    1101: <CloudSun />, // Partly cloudy
    1102: <Cloudy />, // Cloudy
    1001: <Cloudy />, // Overcast
    4000: <CloudDrizzle />, // Drizzle
    4200: <CloudRain />, // Light rain
    4001: <CloudRain />, // Rain
    4201: <CloudRainWind />, // Heavy rain with wind
    8000: <CloudLightning />, // Thunderstorm
  };

  const weatherIconsNight: Record<number, JSX.Element> = {
    1000: <Moon />, // Clear night
    11001: <CloudMoon />, // Partly cloudy night
    11011: <CloudMoon />, // Partly cloudy night
    11021: <CloudMoon />, // Cloudy night
  };

  const defaultIcon = <Cloudy />; // Default icon for day
  const defaultIconNight = <Moon />; // Default icon for night

  const getWeatherIcon = (code: number | null): JSX.Element => {
    if (code === null) return defaultIcon;
    return weatherIcons[code] || defaultIcon;
  };

  const getWeatherIconNight = (code: number | null): JSX.Element => {
    if (code === null) return defaultIconNight;
    return weatherIconsNight[code] || defaultIconNight;
  };

  const WeatherDisplay = ({
    weatherCode,
    weatherCodeNight,
  }: RealTimeProps): JSX.Element => {
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

    // Formatter for La Réunion timezone
    const reunionTimeFormatter = new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Indian/Reunion",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      day: "2-digit",
      month: "long",
    });

    const formattedParts = reunionTimeFormatter.formatToParts(now);

    // Extract relevant parts
    const hours = formattedParts.find((part) => part.type === "hour")?.value;
    const minutes = formattedParts.find(
      (part) => part.type === "minute"
    )?.value;
    const seconds = formattedParts.find(
      (part) => part.type === "second"
    )?.value;
    const dayName = formattedParts.find(
      (part) => part.type === "weekday"
    )?.value;
    const dayOfMonth = formattedParts.find(
      (part) => part.type === "day"
    )?.value;
    const monthName = formattedParts.find(
      (part) => part.type === "month"
    )?.value;

    const timeString = `${hours || "00"}:${minutes || "00"}:${seconds || "00"}`;
    setTime(timeString);
    setDay(dayName || "");
    setMonth(monthName || "");
    setDayOfMonth(dayOfMonth || "");
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    updateTime(); // Initial call to avoid delay
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center items-center uppercase gap-5">
      <div className="flex flex-col">
        <span className="font-raleway xs:text-sm">{day}</span>
        <div>
          <span className="inline-block xs:text-sm">{dayOfMonth} - </span>
          <span className="font-raleway xs:text-sm">{month}</span>
        </div>
        <div className="flex items-center gap-5 pt-2">
          <span className="xs:text-sm tablet:text-sm">{temperature}°C</span>
          <WeatherDisplay
            weatherCode={weatherCode}
            weatherCodeNight={weatherCodeNight}
          />
        </div>
      </div>

      <span className="inline-block text-[50px] p-5 font-mono w-[300px] text-center xs:text-3xl">
        {time}
      </span>
    </div>
  );
}
