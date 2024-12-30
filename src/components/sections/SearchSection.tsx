import React from 'react';
import { Search } from 'lucide-react';
import { Category } from '../../types';

interface SearchSectionProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function SearchSection({
  searchQuery,
  onSearch,
  categories,
  selectedCategory,
  setSelectedCategory,
}: SearchSectionProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-6 sticky top-[52px] sm:top-[60px] z-10 bg-[#fff4cc]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#fff8e1] rounded-xl shadow-lg p-3 sm:p-4 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffb700]" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Hizmet veya kategori ara..."
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#ffe082] bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#ffb700] focus:border-transparent transition-colors duration-200"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-56 px-3 py-2.5 text-sm rounded-lg border border-[#ffe082] bg-white text-gray-900 focus:ring-2 focus:ring-[#ffb700] focus:border-transparent transition-colors duration-200"
          >
            <option value="">Tüm Kategoriler</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}