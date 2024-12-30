import React, { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import Hero from '../components/layout/Hero';
import SearchSection from '../components/sections/SearchSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import { categories, services } from '../utils/data';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredServices = services.filter(service => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout>
      <div className="min-h-screen flex flex-col">
        <Hero />
        
        <SearchSection 
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="flex-grow py-4 sm:py-6">
          <ServicesGrid services={filteredServices} />
        </main>
      </div>
    </AppLayout>
  );
}