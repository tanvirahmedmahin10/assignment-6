import { IGymData } from '@/gym.type';
import { Flame, Star, Timer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MarkAsDoneButton from './PlanButtons/MarkAsDoneButton';
import RemoveButton from './PlanButtons/RemoveButton';

const PlanCard = ({ gym }: { gym: IGymData }) => {
  return (
    <div className="container mx-auto flex flex-col gap-4 rounded-2xl border border-slate-800 bg-[#0F172A] p-4 text-white md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4 min-w-0">
        <div className="relative h-20 w-28 sm:h-24 sm:w-36 shrink-0 overflow-hidden rounded-xl bg-slate-800">
          <Image
            src={gym.image}
            alt={gym.name || 'Gym Exercise'}
            fill
            sizes="(max-width: 640px) 112px, 144px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3 className="font-extrabold uppercase text-white line-clamp-1 text-sm sm:text-base">
            {gym.name}
          </h3>

          {gym.equipment && (
            <p className="mt-0.5 text-xs font-medium text-slate-400 line-clamp-1">
              {gym.equipment}
            </p>
          )}

          <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-300">
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

      <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 sm:gap-3 shrink-0 md:pt-0 md:border-t-0">
        <Link href={`/myplan/${gym.id}`} className="flex-1 md:flex-initial">
          <button className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs font-semibold text-slate-200 cursor-pointer hover:bg-slate-800 transition-colors">
            View Details
          </button>
        </Link>
        
        <div className="flex-1 md:flex-initial">
          <MarkAsDoneButton gym={gym} />
        </div>
        
        <div className="shrink-0">
          <RemoveButton gym={gym} />
        </div>
      </div>
    </div>
  );
};

export default PlanCard;