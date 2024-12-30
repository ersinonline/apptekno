import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDarkMode, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}