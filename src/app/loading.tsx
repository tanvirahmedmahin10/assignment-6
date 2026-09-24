'use client'

import React from 'react';

const HomePageLoading = () => {
    return (
   <div className="min-h-screen w-full">

  <div className="border-b border-base-300 px-6 py-4">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      <div className="skeleton h-10 w-32"></div>

      <div className="flex gap-4">
        <div className="skeleton h-4 w-16"></div>
        <div className="skeleton h-4 w-16"></div>
        <div className="skeleton h-4 w-16"></div>
      </div>
    </div>
  </div>

  <main className="mx-auto max-w-7xl px-6 py-10">

    <div className="mb-8 space-y-3">
      <div className="skeleton h-8 w-64"></div>
      <div className="skeleton h-4 w-96"></div>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-base-300"
        >
          <div className="skeleton h-48 w-full"></div>

          <div className="space-y-4 p-5">
            <div className="skeleton h-6 w-3/4"></div>
            <div className="skeleton h-4 w-1/2"></div>

            <div className="space-y-2">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>
            </div>

            <div className="skeleton h-10 w-28 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  </main>
</div>
    );
};

export default HomePageLoading;