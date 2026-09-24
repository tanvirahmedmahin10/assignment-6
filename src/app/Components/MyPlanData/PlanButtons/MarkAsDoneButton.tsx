'use client'

import { IGymData } from '@/gym.type';
import { Check } from 'lucide-react';
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
        className="flex rounded-xl bg-[#C2F800] px-4 py-2 text-xs font-bold text-slate-950 cursor-pointer"
      >
        <Check className="h-4 w-4"/> {isMarked ? 'Marked' : `Mark as Done`}
      </button>
    </div>
  );
};
export default MarkAsDoneButton;