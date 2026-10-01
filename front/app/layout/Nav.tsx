"use client";
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export const Nav = () => (
  <header className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-8 md:px-16 mix-blend-difference">
    <div className="flex items-center gap-12">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="hidden md:flex gap-24 text-xl font-light tracking-[0.2em]"
      >
        {['films', 'series', 'animes'].map((item) => (
          <motion.button 
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='uppercase transition-all duration-300 px-4 py-1 hover:bg-white hover:text-black hover:font-serif hover:italic relative group'
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
          </motion.button>
        ))}
      </motion.nav>
    </div>

    <div className="flex gap-6 items-center">
      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        className="relative"
      >
        <Search 
          size={25} 
          strokeWidth={1.5} 
          className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" 
        />
      </motion.div>
    </div>
  </header>
);