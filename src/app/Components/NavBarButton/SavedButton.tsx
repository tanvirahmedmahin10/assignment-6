'use client'

import { GymContext } from '@/app/GymContext/Context';
import Link from 'next/link';
import React, { useContext } from 'react';

const SavedButton = () => {
    const {isSaved}=useContext(GymContext)
    return (
        <div>
             <div>
            <Link
                href="/myplan"
                className="flex items-center gap-2 font-medium text-white">
                <span>Plan</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black border border-gray-600 text-xs font-bold text-white">
                    {isSaved?.length || 0}
                </span>
            </Link>
        </div>
        </div>
    );
};

export default SavedButton;