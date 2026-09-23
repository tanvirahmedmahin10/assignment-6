import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
const link=<>
 <li><Link href='/'>Workouts</Link></li>
 <li><Link href='/myplan'>My Plan</Link></li>
</>
const Navbar = () => {
    return (
      <div className='container mx-auto'>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <div className='flex gap-2'>
      <Image
      src={logo}
      alt='logo png'
      height={28}
      width={28}
      ></Image>
      <h2 className='font-semibold'>FITLOG</h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <Link href='/myplan'><button>Plan</button></Link>
    <Link href='/myplan'><button>Saved</button></Link>
  </div>
</div>
</div>
    );
};

export default Navbar;