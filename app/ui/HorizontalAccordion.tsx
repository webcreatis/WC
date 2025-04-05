"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import accordionItems from "../datas/methoddatas";

export default function HorizontalAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-3/4 m-auto h-[420px] xs:w-full xs:flex-col lg:flex-row">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={cn(
            "h-full flex-1 flex-col items-center justify-between relative overflow-hidden transition-all duration-700 ease-in-out tablet:p-1",
            activeIndex === index ? "flex-[3] flex-col justify-start" : "flex-1"
          )}
          onClick={() => setActiveIndex(index)}
        >
          {/* Background & Overlay */}
          <div
            className={cn(
              "relative h-full flex flex-col items-center justify-between border-[1px] shadow-md border-solid border-black rounded-lg inset-0 transition-opacity duration-700 pt-5 pb-32 xs:flex-row lg:flex-col",
              item.bg,
              activeIndex === index
                ? "justify-start items-center p-5 gap-5"
                : "justify-between"
            )}
          >
            {/* Number */}
            <div
              className={cn(
                "number text-black flex justify-center items-center rounded-md border-[1px] border-solid border-green w-[38px] h-[38px] xs:p-3 xs:mt-5 xs:ml-5 lg:ml-0",
                activeIndex === index
                  ? "bg-green text-black xs:ml-0"
                  : "bg-transparent"
              )}
            >
              {index + 1}
            </div>

            {/* Title */}
            <h3
              className={cn(
                "text-black font-semibold uppercase z-10 w-56 absolute transform xs:right-5 xs:text-right lg:bottom-14 lg:text-left lg:-translate-y-16 lg:-right-16",
                activeIndex === index
                  ? "text-base hidden"
                  : "text-sm xs:rotate-0 lg:-rotate-90"
              )}
            >
              {item.title}
            </h3>

            {/* Content */}
            <div
              className={cn(
                "transition-all duration-500 ease-in-out text-black text-base z-20 rounded-md text-left tracking-tight xs:text-xs tablet:text-base",
                activeIndex === index
                  ? "max-h-[300px] opacity-100 xs:pt-2 lg:pt-10"
                  : "max-h-0 opacity-0 overflow-hidden"
              )}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
