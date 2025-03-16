import React, { useMemo, useState, useEffect } from 'react';
import { format } from 'date-fns';
import { menuData } from '../data/menuData';
import MenuCard from './MenuCard';
import MenuCardSkeleton from './MenuCardSkeleton';
import ErrorBoundary from './ErrorBoundary';

export default function DailyMenu() {
  const [isLoading, setIsLoading] = useState(true);
  
  const today = useMemo(() => format(new Date(), 'EEEE').toLowerCase(), []);
  const todayMenu = useMemo(() => menuData[today] || menuData.monday, [today]);
  const categories = useMemo(() => 
    [...new Set(todayMenu.map(item => item.category))],
    [todayMenu]
  );

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-pulse bg-gray-200 h-10 w-64 mx-auto rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <MenuCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {today === 'sunday' ? "Sunday's Indian Specials" : `${format(new Date(), 'EEEE')}'s Menu`}
        </h2>
        
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-orange-500 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todayMenu
                .filter(item => item.category === category)
                .map((item) => (
                  <ErrorBoundary key={item.id}>
                    <MenuCard item={item} />
                  </ErrorBoundary>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}