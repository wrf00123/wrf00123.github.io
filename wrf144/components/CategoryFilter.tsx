
import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';

interface CategoryFilterProps {
  selectedCategory: Category | 'All';
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full overflow-x-auto pb-1 scrollbar-hide">
      <div className="flex space-x-2 min-w-max">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`
                flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                ${isSelected 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-200 hover:text-indigo-600 hover:bg-white'
                }
              `}
            >
              <Icon className={`w-4 h-4 mr-2 ${isSelected ? 'text-indigo-100' : 'text-slate-400 group-hover:text-indigo-500'}`} />
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
