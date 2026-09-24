'use client'
import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import { Istok_Web } from 'next/font/google';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const RemoveButtonForSaved = ({gym}:{gym:IGymData}) => {
   const {isSaved,setIsSaved}=useContext(GymContext)
   const removedData=isSaved.filter(del=>del.id!==gym.id)
   const handelRemove=()=>{
    setIsSaved(removedData)
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

export default RemoveButtonForSaved;