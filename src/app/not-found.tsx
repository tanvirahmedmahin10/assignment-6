
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
       <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
  <h2 className="text-9xl font-bold">
    404
  </h2>

  <p className="my-6 text-4xl text-gray-400">
    Not Found
  </p>
  <Link href='/'>
  <button className="mt-5 rounded-lg bg-[#C2F10D] px-5 py-2 font-semibold text-black cursor-pointer">
    Go back to HomePage
  </button>
  </Link>
</div>
    );
};

export default NotFound;