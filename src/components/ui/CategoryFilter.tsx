import React from 'react';

interface CategoryFilterProps {
  categories: { id: string; name: string }[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isDarkMode: boolean;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  setSelectedCategory,
  isDarkMode 
}: CategoryFilterProps) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className={`px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <option value="">Tüm Kategoriler</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}