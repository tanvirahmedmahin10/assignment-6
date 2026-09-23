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
                    toast.error('Duplicate Detected')
                    return 
        }
        setIsSaved([...isSaved,data])
        toast.success(`${data.name} is Added to Saved`)
    }
    return (
        <div>
            <button onClick={handleOnSaved} className="border border-gray-700 text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800">
            Save for later
          </button>
        </div>
    );
};

export default Saved;