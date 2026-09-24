'use client'

import React, { useContext } from 'react';
import { GymContext } from '../GymContext/Context';
import { IGymData } from '@/gym.type';
import PlanCard from '../Components/MyPlanData/PlanCard';
import SavedCard from '../Components/MyPlanData/SavedCard';


const PlanPage = () => {
    const {isToday,isSaved}=useContext(GymContext)
    return (
        <div>
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white my-3">MY PLAN</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed my-4">Cap of five lifts for today. Finish them, then load more.</p>
        
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's Plan" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10">
      <div className='grid grid-cols-1 gap-4'>
    {isToday.map((gym:IGymData)=><PlanCard key={gym.id} gym={gym} ></PlanCard>)}
    </div>
    </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved"/>
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <div className='grid grid-cols-1 gap-4'>
    {isSaved.map((gym:IGymData)=><SavedCard key={gym.id} gym={gym} ></SavedCard>)}
    </div>
    </div>
</div>
</div>
    );
};

export default PlanPage;