import React from 'react';
import { Utensils } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Utensils size={32} />
            <h1 className="text-3xl font-bold">Flavor Fusion</h1>
          </div>
          <p className="text-lg italic">Where Every Meal Tells a Story</p>
        </div>
      </div>
    </header>
  );
}