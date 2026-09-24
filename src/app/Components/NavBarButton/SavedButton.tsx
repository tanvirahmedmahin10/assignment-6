'use client'

import { GymContext } from '@/app/GymContext/Context';
import Link from 'next/link';
import React, { useContext } from 'react';

const SavedButton = () => {
    const { isSaved } = useContext(GymContext)
    return (
        <div>
            <Link
                href="/myplan"
                className="flex items-center gap-2 font-medium text-white"
            >
                <span>Plan</span>

                <span className="flex min-w-6 h-6 items-center justify-center rounded-full border border-gray-600 px-2 text-xs font-bold text-white">
                    {isSaved?.length || 0}
                </span>
            </Link>
        </div>

    );
};

export default SavedButton;