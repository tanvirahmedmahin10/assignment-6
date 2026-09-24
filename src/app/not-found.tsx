import { Link } from 'lucide-react';
import React from 'react';

const NotFound = () => {
    return (
       <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
  <h2 className="text-2xl font-bold">
    Nothing Here yet
  </h2>

  <p className="mt-2 text-gray-400">
    Browse the library and add a lift to get today moving.
  </p>
  <Link href='/'>
  <button className="mt-5 rounded-lg bg-[#C2F10D] px-5 py-2 font-semibold text-black cursor-pointer">
    Go to fsfdf
  </button>
  </Link>
</div>
    );
};

export default NotFound;