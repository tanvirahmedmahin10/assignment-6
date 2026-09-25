import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="divider mt-12 sm:mt-20"></div>
      
      <div className="my-6 sm:mb-10 container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex gap-2 items-center justify-center">
          <Image 
            src={logo}
            alt="logo"
            width={22}
            height={22}
          />
          <h2 className="font-bold tracking-wide">FITLOG</h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-400">
          © 2026 FitLog — Workout Library. Train hard, log honest
        </p>
      </div>
    </footer>
  );
};

export default Footer;