'use client'
import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayPlan = ({data}:{data:IGymData}) => {
    const {isToday,setIsToday}=useContext(GymContext)
    
    const dupliData=isToday.find(dup=>dup.id===data.id)
    const handleOnToday=()=>{
        if(dupliData){
            toast.error('Duplicate Detected')
            return 
        }
        setIsToday([...isToday,data])
        toast.success(`${data.name} is Added to Today's Plan`)
    }
    return (
        <div>
             <button onClick={handleOnToday} className="bg-[#ccff00] text-black text-xs font-bold px-4 py-2 rounded-lg hover:opacity-90">
            Add to today&apos;s plan
          </button>
        </div>
    );
};

export default TodayPlan;