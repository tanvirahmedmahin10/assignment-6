'use client'

import React, { useContext, useState } from 'react';
import { GymContext } from '../GymContext/Context';
import { IGymData } from '@/gym.type';
import PlanCard from '../Components/MyPlanData/PlanCard';
import SavedCard from '../Components/MyPlanData/SavedCard';


const PlanPage = () => {
    const {isToday,isSaved}=useContext(GymContext)
     const [isSort,SetIsSort]=useState<'Duration'|'Calories'|'Rating'>('Duration')
    const sorted=(sortData:IGymData[])=>{
     const sortinfo=[...sortData]
     if(isSort ==='Duration'){
     sortinfo.sort((a,b)=>b.duration-a.duration)
     }
     else if(isSort ==='Calories'){
        sortinfo.sort((a,b)=>b.caloriesBurned-a.caloriesBurned)
     }
      else if(isSort ==='Rating'){
        sortinfo.sort((a,b)=>b.rating-a.rating)
     }
     return sortinfo
    }
    const sortForToday=sorted(isToday)
    const sortForSaved=sorted(isSaved)
    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white my-3">MY PLAN</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed my-4">Cap of five lifts for today. Finish them, then load more.</p>

<div className="tabs tabs-border">
  <input
    type="radio"
    name="my_tabs_2"
    className="tab"
    aria-label="Today's Plan"
    defaultChecked
  />

  <div className="tab-content border-base-300 bg-base-100 p-10">
    <div className="grid grid-cols-1 gap-4">
      {sortForToday.map((gym: IGymData) => (
        <PlanCard key={gym.id} gym={gym} />
      ))}
    </div>
  </div>
  <input
    type="radio"
    name="my_tabs_2"
    className="tab"
    aria-label="Saved"
  />
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <div className="grid grid-cols-1 gap-4">
      {sortForSaved.map((gym: IGymData) => (
        <SavedCard key={gym.id} gym={gym} />
      ))}
    </div>
  </div>
  <div className='flex ml-auto gap-2 items-center'>
  <h2>Sort By</h2>
  <select
  value={isSort}
  onChange={(e)=>SetIsSort(e.target.value as 'Duration'|'Calories'|'Rating' )}
    className="select w-fit"
  >
    <option value={'Duration'}>Duration</option>
    <option value={'Calories'}>Calories</option>
    <option value={'Rating'}>Rating</option>
  </select>
</div>
</div>
</div>
    );
};

export default PlanPage;