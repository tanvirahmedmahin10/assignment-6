'use client'

import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import { Check } from 'lucide-react';
import React, { useContext} from 'react';
import { toast } from 'react-toastify';

const MarkAsDoneButton = ({ gym }: { gym: IGymData }) => {
  const {isToday,setIsToday}=useContext(GymContext)

  const removedData=isToday.filter(del=>del.id!==gym.id)
     const handelRemove=()=>{
      setIsToday(removedData)
      toast.success(`${gym.name} is Marked as Done`)
     }

  return (
    <div>
      <button
        onClick={handelRemove}
        className="flex rounded-xl bg-[#C2F800] px-4 py-2 text-xs font-bold text-slate-950 cursor-pointer"
      >
        <Check className="h-4 w-4"/>Mark as Done
      </button>
    </div>
  );
};
export default MarkAsDoneButton;