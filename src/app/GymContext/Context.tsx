'use client'

import { IGymData } from '@/gym.type';
import React, { createContext, useState } from 'react';
interface IAppsContext {
    isToday: IGymData[];
    setIsToday: React.Dispatch<React.SetStateAction<IGymData[]>>;
    isSaved: IGymData[];
    setIsSaved: React.Dispatch<React.SetStateAction<IGymData[]>>;

}
export const GymContext=createContext<IAppsContext>({
    isToday:[],
    setIsToday:()=>{},
    isSaved:[],
    setIsSaved:()=>{},

})
const GymPovider = ({children}: { children: React.ReactNode }) => {
    const [isToday,setIsToday]=useState<IGymData[]>([])
    const [isSaved,setIsSaved]=useState<IGymData[]>([])
    const shareData={
      isToday,
      setIsToday,
      isSaved,
      setIsSaved
    }
    return (
        <GymContext.Provider value={shareData}>{children}</GymContext.Provider>
    );
};

export default GymPovider;