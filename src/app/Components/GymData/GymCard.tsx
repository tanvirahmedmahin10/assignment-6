import { IGymData } from '@/gym.type';
import { Flame, Timer } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const GymCard = ({gym}:{gym:IGymData}) => {
    return (
       <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={gym.image}
          alt={gym.name || 'Gym Exercise'}
          width={500}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500"
        />

        
        
      </div>

     
      <div className="p-5">
        {gym.muscleGroups && gym.muscleGroups.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {gym.muscleGroups.map((muscle, idx) => (
              <span
                key={idx}
               className="rounded-md bg-[#C2F800] px-2.5 py-0.5  font-medium text-slate-900 dark:bg-[#C2F800] dark:text-slate-900"
              >
                {muscle}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-lg font-bold text-slate-900 line-clamp-1 dark:text-white">
          {gym.name}
        </h3>
        {gym.equipment && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-700 dark:text-slate-300">Equipment:</span>{' '}
            {gym.equipment}
          </p>
        )}

        <div className="mt-4 flex gap-5 border-t pt-3 text-sm text-gray-500">
      <span className='flex items-center'><Timer />{gym.duration} mins</span>

      {gym.rating && (
        <span className='flex items-center'>★ {gym.rating.toFixed(1)}</span>
      )}

      <span className='flex items-center'><Flame/>{gym.caloriesBurned} kcal</span>
      </div>
      </div>
    </div>
    );
};

export default GymCard;