import React from 'react';
import GymCard from './GymCard';
import { IGymData } from '@/gym.type';
import Link from 'next/link';

export const gymPromise=async()=>{
 const res=await fetch('https://api.abcz.workers.dev/api/fitlog')
 return res.json()
}
const GymMap = async() => {
    const gymData=await gymPromise()
    return (
       <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {gymData.map((gym: IGymData) => (
    <Link key={gym.id} href={`/myplan/${gym.id}`}>
      <GymCard gym={gym} />
    </Link>
  ))}
</div>
    );
};

export default GymMap;