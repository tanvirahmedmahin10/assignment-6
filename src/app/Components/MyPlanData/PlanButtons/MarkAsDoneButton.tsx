import { GymContext } from '@/app/GymContext/Context';
import { IGymData } from '@/gym.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const MarkAsDoneButton = ({gym}:{gym:IGymData}) => {
    const{isToday}=useContext(GymContext)
    const dupi=isToday.find(item=>item.id===gym.id)
    const handleOnRead=()=>{
      if(dupi){
        toast.error('Aleady Marked')
      }
      toast.success('It is added')
    }
    return (
        <div>
            <button onClick={handleOnRead} className="rounded-xl bg-[#C2F800] px-4 py-2 text-xs font-bold text-slate-950 cursor-pointer">
     {dupi?'Marked':'Mark as Read'}
    </button>
        </div>
    );
};

export default MarkAsDoneButton;