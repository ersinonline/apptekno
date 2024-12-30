import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  user: any;
}

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  isDarkMode, 
  toggleTheme,
  user 
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className={`fixed inset-y-0 left-0 w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        onClick={e => e.stopPropagation()}
      >
        <div className="px-4 py-6 space-y-6">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
          {user && (
            <div className="px-4 py-2">
              <p className="text-sm text-gray-600">Signed in as:</p>
              <p className="font-medium">{user.displayName || user.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}