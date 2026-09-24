'use client'

import { IGymData } from '@/gym.type';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MarkAsDoneButton = ({ gym }: { gym: IGymData }) => {

  const [isMarked, setIsMarked] = useState<boolean>(false);
  

  const handleOnRead = () => {
   if(isMarked){
    toast.error(`${gym.name} is already marked as done`);
     return
   }
   setIsMarked(true);
    toast.success(`${gym.name} is marked as done`);
    
  };

  return (
    <div>
      <button
        onClick={handleOnRead}
        className="rounded-xl bg-[#C2F800] px-4 py-2 text-xs font-bold text-slate-950 cursor-pointer"
      >
        {isMarked ? 'Marked' : 'Mark as Read'}
      </button>
    </div>
  );
};
export default MarkAsDoneButton;