import React from 'react';
import { gymPromise } from '../Components/GymData/GymMap';
import { IGymData } from '@/gym.type';
import GymCard from '../Components/GymData/GymCard';
import Link from 'next/link';

const page = async() => {
    const gymData=await gymPromise()
    return (
        <div>
            <h2>plan page</h2>
        
        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {
              gymData.map((gym:IGymData)=><Link key={gym.id} href={`/myplan/${gym.id}`}>
      <GymCard gym={gym} />
    </Link>)  
            }
        </div>
        </div>
    );
};

export default page;