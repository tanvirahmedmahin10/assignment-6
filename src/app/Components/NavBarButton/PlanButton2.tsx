'use client'
import { GymContext } from '@/app/GymContext/Context';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanButton = () => {
    const { isToday } = useContext(GymContext)
    return (
        <div>
            <Link
                href="/myplan"
                className="flex items-center gap-2 font-medium text-white">
                <span>Plan</span>
                <span className="flex min-w-6 h-6 items-center justify-center rounded-full bg-[#C2F800] px-2 text-xs font-bold text-black">
                    {isToday?.length || 0}
                </span>
            </Link>
        </div>
    );
};

export default PlanButton;