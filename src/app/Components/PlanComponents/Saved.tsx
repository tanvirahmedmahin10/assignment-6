'use client'
import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Saved = ({data}:{data:IGymData}) => {
    const {isSaved,setIsSaved}=useContext(GymContext)
    const dupliData=isSaved.find(dup=>dup.id===data.id)
    const handleOnSaved=()=>{
        if(dupliData){
                    toast.error(`${data.name} is  Already Added to Saved`)
                    return 
        }
        setIsSaved([...isSaved,data])
        toast.success(`${data.name} is Added to Saved`)
    }
    return (
        <div>
            <button onClick={handleOnSaved} className={dupliData?'bg-[#1f7be4] text-white text-xs px-4 py-2 rounded-lg cursor-not-allowed':"border border-gray-700 text-white text-xs px-4 py-2 rounded-lg cursor-pointer"}>
            {dupliData?'Already Saved':`Save for Later`}
          </button>
        </div>
    );
};

export default Saved;