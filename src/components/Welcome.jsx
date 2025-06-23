import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <div
      className="w-full h-[65vh] md:h-[80vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/webD.png')`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-70"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Welcome to <span className="text-cyan-400">Arivra</span>
        </h1>

        <h2 className="text-md md:text-2xl text-white-200 font-medium">
          <Typewriter
            words={['Learn', 'Learn Build', 'Learn Build Evolve.....']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </h2>

        <NavLink to='/courses'><button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300">
          Get Started
        </button></NavLink>
      </motion.div>
    </div>
  );
};

export default WelcomeSection;