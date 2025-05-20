import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-amber-900/70 to-black/80 z-10 dark:from-purple-900/90 dark:via-amber-900/80 dark:to-black/90"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent animate-pulse"></div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 hover:scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
        }}
      ></div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 mb-4 animate-gradient dark:from-amber-300 dark:via-amber-100 dark:to-amber-300">
            Fama Barber Shop and Beauty Salon
          </h1>
          <p className="text-xl sm:text-2xl text-amber-100 mb-8 font-light tracking-wide dark:text-amber-50">
            Where Style Meets Precision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 dark:from-amber-600 dark:to-amber-700 dark:hover:from-amber-700 dark:hover:to-amber-800 dark:hover:shadow-amber-600/50">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 dark:border-amber-300 dark:text-amber-300 dark:hover:bg-amber-300 dark:hover:text-black">
              Our Services
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10 dark:from-black"></div>
    </div>
  );
};

export default Hero;
