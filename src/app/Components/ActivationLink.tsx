'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const ActivationLink = () => {
    const pathname = usePathname()
    return (
        <div className='flex'>
            <li>
        <Link
          href="/"
          className={pathname === '/' ? 'text-blue-500 font-bold' : ''}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myplan"
          className={pathname === '/myplan' ? 'text-blue-500 font-bold' : ''}
        >
          My Plan
        </Link>
      </li>
        </div>
    );
};

export default ActivationLink;