"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "./layout/Nav";
import { trending, popularMovies } from "./services/tmdb.api";
import { Carousel } from "./components/carousel";

type CarouselItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  genre: string;
};

function mapToCarouselItems(items: any[]): CarouselItem[] {
  return items
    .filter((item) => item.poster_path)
    .map((item) => ({
      id: item.id,
      title: item.title || item.name,
      subtitle: `${
        (item.release_date || item.first_air_date)?.slice(0, 4) || "N/A"
      } • ⭐ ${item.vote_average?.toFixed(1) || "0.0"}`,
      image: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
      genre:
        item.media_type === "tv"
          ? "TV Show"
          : item.media_type === "movie"
          ? "Movie"
          : "Movie",
    }));
}

export default function Home() {
  const [trendingItems, setTrendingItems] = useState<CarouselItem[]>([]);
  const [popularItems, setPopularItems] = useState<CarouselItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [trendingData, popularData] = await Promise.all([
          trending(),
          popularMovies(),
        ]);

        const trendingArray = Array.isArray(trendingData)
          ? trendingData
          : trendingData.results || [];

        const popularArray = Array.isArray(popularData)
          ? popularData
          : popularData.results || [];

        setTrendingItems(mapToCarouselItems(trendingArray));
        setPopularItems(mapToCarouselItems(popularArray));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-bg font-sans text-white">
      <Nav />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-8 pb-20 pt-32 md:px-16">
        <section className="mb-24">
           <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
             <div className="max-w-2xl">
               <h2 className="mb-6 font-serif text-5xl italic leading-tight tracking-tight md:text-5xl">
                 Trending Now
               </h2>
             </div>
           </div>
           <Carousel items={trendingItems} />
         </section>
         <section>
           <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
             <div className="max-w-2xl">
               <h2 className="mb-6 font-serif text-5xl italic leading-tight tracking-tight md:text-5xl">
                 Popular Movies
               </h2>
             </div>
             </div>
              <Carousel items={popularItems} />
         </section>
      </motion.div>
    </div>
  );
}
>>>>>>> 12ea9a5 (primera actualizacion del front)
