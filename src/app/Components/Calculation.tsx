import { IGymData } from '@/gym.type';
import React from 'react';

const Calculation = ({gym}:{gym:IGymData[]}) => {
    return (
     <div className="flex bg-[#12141d] text-white p-6 rounded-2xl border border-gray-800/60 my-5">
  
  <div className="flex-1 px-4">
    <h2 className="text-xs text-gray-400 mb-2 font-normal">
      Exercises
    </h2>
    <span className="text-3xl font-bold text-[#b4f800]">
      {gym.length}
    </span>
  </div>

  <div className="flex-1 px-4 border-l border-gray-800/80">
    <h2 className="text-xs text-gray-400 mb-2 font-normal">
      Minutes
    </h2>
    <span className="text-3xl font-bold text-white">
      {gym.reduce((total, item) => item.duration + total, 0)}
    </span>
  </div>

  <div className="flex-1 px-4 border-l border-gray-800/80">
    <h2 className="text-xs text-gray-400 mb-2 font-normal">
      Calories
    </h2>
    <span className="text-3xl font-bold text-white">
      {gym.reduce((total, item) => item.caloriesBurned + total, 0)}
    </span>
  </div>
</div>
    );
};

export default Calculation;