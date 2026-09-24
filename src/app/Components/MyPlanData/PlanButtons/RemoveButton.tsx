'use client'
import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const RemoveButton = ({gym}:{gym:IGymData}) => {
   const {isToday,setIsToday}=useContext(GymContext)
   const removedData=isToday.filter(del=>del.id!==gym.id)
   const handelRemove=()=>{
    setIsToday(removedData)
    toast.error(`${gym.name} is Removed`)
   }
    return (
        <div>
            <button onClick={handelRemove} className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 cursor-pointer">
      ✕
    </button>
        </div>
    );
};

export default RemoveButton;