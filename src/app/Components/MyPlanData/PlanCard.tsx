import { IGymData } from '@/gym.type';
import { Flame, Star, Timer } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const PlanCard = ({ gym }: { gym: IGymData }) => {
    return (
        
       <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-[#0F172A] p-3 text-white shadow-sm ">
     
      <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl bg-slate-800">
        <Image
          src={gym.image}
          alt={gym.name || 'Gym Exercise'}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>

     
      <div className="flex flex-1 flex-col justify-center min-w-0">
        <h3 className="font-extrabold uppercase text-white line-clamp-1">
          {gym.name}
        </h3>

        {gym.equipment && (
          <p className="mt-0.5 text-xs font-medium text-slate-400 line-clamp-1">
            {gym.equipment}
          </p>
        )}

        <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-slate-300">
          <span className="flex items-center gap-1">
            <Timer className="h-4 w-4 text-[#C2F800]" />
            {gym.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame className="h-4 w-4 text-[#C2F800]" />
            {gym.caloriesBurned} kcal
          </span>

          {gym.rating && (
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#C2F800] text-[#C2F800]" />
              {gym.rating.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </div>
    
    );
};

export default PlanCard;