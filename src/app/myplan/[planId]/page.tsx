import Saved from '@/app/Components/PlanComponents/Saved';
import TodayPlan from '@/app/Components/PlanComponents/TodayPlan';
import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';
const page = async({
  params,
}: {
  params: Promise<{ planId: string }>;
}) => {
    const { planId } = await params;
    const res=await fetch(`https://api.abcz.workers.dev/api/fitlog/${planId}`) 
    if (!res.ok) {
    notFound();
  }
    const data=await res.json()
    return (
       <div className='container mx-auto my-7 px-4'>
  <div className="flex flex-col mx-auto md:flex-row gap-6 md:gap-10 bg-[#121318] text-white p-6 rounded-2xl w-full md:w-fit font-sans">

    <div className="flex-1 md:max-w-100">
      <Image
        src={data.image}
        alt={data.name}
        height={500}
        width={500}
        className="w-full h-64 md:h-full object-cover rounded-xl"
      />
    </div>

  
      <div className="flex-1 flex flex-col gap-3">
        
 
        <h2 className="text-2xl font-bold uppercase tracking-wide">
          {data.name}
        </h2>

        <p className="text-gray-400 text-sm">
          {data.description}
        </p>

        <div className="flex gap-2">
          {data.muscleGroups.map((muscle:string[], index:number) => (
            <span 
              key={index} 
              className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full"
            >
              {muscle}
            </span>
          ))}
        </div>

       
        <div className="bg-[#1c1e24] p-3 rounded-lg flex flex-col gap-2 text-xs">
          <div className="flex justify-between my-2">
            <span className="text-gray-400">EQUIPMENT</span>
            <span>{data.equipment}</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-gray-400">DIFFICULTY</span>
            <span>{data.difficulty}</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-gray-400">SETS</span>
            <span>{data.sets}</span>
          </div>
          <div className="flex justify-between my-2" >
            <span className="text-gray-400">REPS</span>
            <span>{data.reps}</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-gray-400">DURATION</span>
            <span>{data.duration} min</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-gray-400">CALORIES</span>
            <span>{data.caloriesBurned} kcal</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-gray-400">RATING</span>
            <span>{data.rating}</span>
          </div>
        </div>

       
        <div>
          <h4 className="font-bold text-xs uppercase mb-1 my-3">Instructions</h4>
          <ol className="list-decimal list-inside text-gray-300 text-xs space-y-1 my-3">
            {data.instructions.map((step:string[], index:number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="flex gap-2 pt-2">
         <TodayPlan data={data}></TodayPlan>
          
          <Saved data={data}></Saved>
        </div>

      </div>
    </div>
       </div>
    );
};

export default page;