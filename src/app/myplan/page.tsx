'use client'

import React, { useContext, useState } from 'react';
import { GymContext } from '../GymContext/Context';
import { IGymData } from '@/gym.type';
import PlanCard from '../Components/MyPlanData/PlanCard';
import SavedCard from '../Components/MyPlanData/SavedCard';
import Link from 'next/link';
import Calculation from '../Components/Calculation';


const PlanPage = () => {
    const {isToday,isSaved}=useContext(GymContext)
     const [isSort,SetIsSort]=useState<'Duration'|'Calories'|'Rating'>
     ('Duration')
     const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
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
           <div>
  <Calculation
  gym={activeTab === 'today' ? sortForToday : sortForSaved}
/>
</div>
     
<div className="tabs tabs-border">
  <input
    type="radio"
    name="my_tabs_2"
    className="tab"
    aria-label="Today's Plan"
    defaultChecked
    onChange={() => setActiveTab('today')}
  />

  <div className="tab-content border-base-300 bg-base-100 p-10">
    <div className="grid grid-cols-1 gap-4">{sortForToday.length>0?
      sortForToday.map((gym: IGymData) => (
        <PlanCard key={gym.id} gym={gym} />
      )):
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
  <h2 className="text-2xl font-bold">
    Nothing Here yet
  </h2>

  <p className="mt-2 text-gray-400">
    Browse the library and add a lift to get today moving.
  </p>

  <button className="mt-5 rounded-lg bg-[#C2F10D] px-5 py-2 font-semibold text-black cursor-pointer">
    Go to Workout
  </button>
</div>
      }
    </div>
  </div>
  <input
    type="radio"
    name="my_tabs_2"
    className="tab"
    aria-label="Saved"
    onChange={() => setActiveTab('saved')}
  />
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <div className="grid grid-cols-1 gap-4">{sortForSaved.length>0?
      sortForSaved.map((gym: IGymData) => (
        <SavedCard key={gym.id} gym={gym} />
      )):
       <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
  <h2 className="text-2xl font-bold">
    Nothing Here yet
  </h2>

  <p className="mt-2 text-gray-400">
    Browse the library and add a lift to get today moving.
  </p>
  <Link href='/'>
  <button className="mt-5 rounded-lg bg-[#C2F10D] px-5 py-2 font-semibold text-black cursor-pointer">
    Go to Workout
  </button>
  </Link>
</div>
      }
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