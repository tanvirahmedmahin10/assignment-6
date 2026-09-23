'use client'
import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import React, { useContext } from 'react';

const TodayPlan = ({data}:{data:IGymData}) => {
    const {isToday,setIsToday}=useContext(GymContext)
    const handleOnToday=()=>{
        setIsToday([...isToday,data])
        alert('added')
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