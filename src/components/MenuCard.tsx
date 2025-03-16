import React, { memo } from 'react';
import { MenuItem } from '../types';
import { ChefHat, Clock } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = memo(function MenuCard({ item }: MenuCardProps) {
  return (
    <article 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-102"
      role="article"
      aria-labelledby={`menu-item-${item.id}`}
    >
      <div className="relative">
        <img 
          src={item.image} 
          alt={`${item.name} dish`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div 
          className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg"
          aria-label={`Price: $${item.price.toFixed(2)}`}
        >
          ${item.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 
            id={`menu-item-${item.id}`}
            className="text-xl font-semibold text-gray-800"
          >
            {item.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="flex items-center justify-between">
          <span 
            className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
            role="status"
          >
            <ChefHat size={16} aria-hidden="true" />
            <span>{item.category}</span>
          </span>
          <span 
            className="inline-flex items-center gap-1 text-gray-500 text-sm"
            role="status"
            aria-label="Preparation time: 20-30 minutes"
          >
            <Clock size={16} aria-hidden="true" />
            <span>20-30 min</span>
          </span>
        </div>
      </div>
    </article>
  );
});

MenuCard.displayName = 'MenuCard';

export default MenuCard;