import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
        <div className="divider mt-20"></div>
        <div className='mt-6 mb-10 container items-center mx-auto flex justify-between'>
            <div className='flex gap-2 items-center'>
             <Image src={logo}
             alt='logo'
             width={22}
             height={22}
             >

             </Image>
             <h2 className='font-bold'>FITLOG</h2>
            </div>
            <p>© 2026 FitLog — Workout Library. Train hard, log honest</p>
        </div>
        </div>
    );
};

export default Footer;