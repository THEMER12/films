"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

type CarouselItem = {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  genre?: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Carousel({ items }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 1000; 

    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-24 relative mt-[-100px]">
      <div className="mb-4 flex justify-end gap-4">
          <button onClick={() => scroll("left")}>
          <ArrowLeft className="opacity-40 hover:opacity-100 transition" />
        </button>

        <button onClick={() => scroll("right")}>
          <ArrowRight className="opacity-40 hover:opacity-100 transition" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x gap-6 overflow-x-hidden pb-8"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -10 }}
            className="group relative aspect-[16/10] min-w-[300px] cursor-pointer overflow-hidden rounded-2xl glass snap-start md:min-w-[350px]"
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              {item.genre && (
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] opacity-60">
                  {item.genre}
                </span>
              )}

              <h3 className="mb-1 font-serif text-2xl italic">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-xs font-light opacity-40">
                  {item.subtitle}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}