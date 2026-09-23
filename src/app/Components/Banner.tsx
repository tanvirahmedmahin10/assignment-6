import Image from 'next/image';
import React from 'react';
import logo from '@/assets/banner.png'

const Banner = () => {
    return (
       <div className="container mx-auto px-12 py-10 md:py-16 rounded-2xl flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 bg-gray-800">
  
  <div className="w-full lg:w-1/2 text-left space-y-4 md:space-y-6">
    <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#C2F800] uppercase">
      Workout Library
    </h2>
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      TRAIN WITH INTENT.<br className="hidden sm:inline" /> LOG EVERY SET.
    </h1>
    
    
    <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
      into today&apos;s plan, and watch the week&apos;s work add up.
    </p>
    
    <div className="pt-2">
      <button className="bg-[#C2F800] hover:bg-[#b0e200] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-sm md:text-base uppercase tracking-wider cursor-pointer">
        Browse Workouts
      </button>
    </div>
  </div>

  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
    <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-1280/2242 max-h-112.5">
      <Image 
        src={logo}
        alt="banner logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
</div>
    );
};

export default Banner;