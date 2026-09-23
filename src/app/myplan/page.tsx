'use client'

import React, { useContext } from 'react';
import { GymContext } from '../GymContext/Context';
import { IGymData } from '@/gym.type';
import TodayPlan from '../Components/PlanComponents/TodayPlan';
import Saved from '../Components/PlanComponents/Saved';
import GymCard from '../Components/GymData/GymCard';


const PlanPage = () => {
    const {isToday,isSaved}=useContext(GymContext)
    return (
        <div>
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white my-3">MY PLAN</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed my-4">Cap of five lifts for today. Finish them, then load more.</p>
        
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's Plan" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10">{isToday.map((gym:IGymData)=><GymCard key={gym.id} gym={gym} ></GymCard>)}</div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved"/>
  <div className="tab-content border-base-300 bg-base-100 p-10">{isSaved.map((gym:IGymData)=><GymCard key={gym.id} gym={gym} ></GymCard>)}</div>
</div>
</div>
    );
};

export default PlanPage;