"use client";

import Button from "@/app/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    infos: string[];
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 pb-32",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              <span className="text-base font-raleway text-black text-left">
                {item.description}
              </span>
            </CardDescription>
            {item.infos && (
              <ul className="list-disc pl-5 mt-6 mb-20 flex flex-col gap-2">
                {item?.infos.map((item, i) => (
                  <li
                    key={i}
                    className="font-raleway text-black text-base text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className="absolute bottom-0 right-0">
              <Button
                text="Prendre RDV"
                bg="bg-corail"
                color="text-black"
                onClick={() =>
                  (window.location.href = "mailto:contact.webcreatis@gmail.com")
                }
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden gradient-flip-front border border-transparent dark:border-white/[0.2] group-hover:border-slate-70 z-20",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "font-bold tracking-wide mt-4 text-black font-jaapokki text-xl",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm h-full",
        className
      )}
    >
      {children}
    </p>
  );
};
