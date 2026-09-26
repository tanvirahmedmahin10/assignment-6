import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='mt-20'>
    <footer className="w-full bg-black text-white mt-auto">
      <div className="border-t border-slate-800"></div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:px-6 sm:pb-10 sm:text-left">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={22}
            height={22}
          />

          <h2 className="font-bold tracking-wide">
            FITLOG
          </h2>
        </div>

        <p className="text-xs text-slate-400 sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;