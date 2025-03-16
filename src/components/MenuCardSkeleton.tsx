import React from 'react';

export default function MenuCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200" />
        <div className="absolute top-0 right-0 bg-gray-200 w-16 h-6 rounded-bl-lg" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="h-6 bg-gray-200 w-3/4 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 w-full rounded" />
          <div className="h-4 bg-gray-200 w-5/6 rounded" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="h-6 bg-gray-200 w-24 rounded-full" />
          <div className="h-6 bg-gray-200 w-20 rounded" />
        </div>
      </div>
    </div>
  );
} 