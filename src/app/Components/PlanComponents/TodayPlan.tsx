'use client'
import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayPlan = ({ data }: { data: IGymData }) => {
    const { isToday, setIsToday } = useContext(GymContext)

    const dupliData = isToday.find(dup => dup.id === data.id)
    const handleOnToday = () => {
        if (dupliData) {
            toast.error(`${data.name} is Already Added to Today's Plan`)
            return
        }
        setIsToday([...isToday, data])
        toast.success(`${data.name} is Added to Today's Plan`)
    }
    return (
        <div>
            <button onClick={handleOnToday} className={dupliData?'bg-[#ff0800] text-white text-xs font-bold px-4 py-2 rounded-lg cursor-not-allowed':"bg-[#ccff00] text-black text-xs font-bold px-4 py-2 rounded-lg cursor-pointer "}><div className='flex gap-1'><CalendarPlus className='h-4 w-4'></CalendarPlus>
                {dupliData?'Already Added':`Add to today's plan`}
                </div>
            </button>
        </div>
    );
};

export default TodayPlan;