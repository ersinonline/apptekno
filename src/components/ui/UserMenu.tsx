import React, { useState } from 'react';
import { User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { APP_URL } from '../../utils/constants';

interface UserMenuProps {
  user: any;
  isDarkMode: boolean;
}

export default function UserMenu({ user, isDarkMode }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
          isDarkMode 
            ? 'hover:bg-gray-700' 
            : 'hover:bg-gray-100'
        }`}
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'User'}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <User className="w-8 h-8 p-1 rounded-full bg-gray-200" />
        )}
        <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
          {user?.displayName || 'User'}
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 ${
            isDarkMode 
              ? 'bg-gray-800 text-white' 
              : 'bg-white text-gray-900'
          }`}
        >
          <a
            href={APP_URL}
            className={`flex items-center px-4 py-2 text-sm ${
              isDarkMode 
                ? 'hover:bg-gray-700' 
                : 'hover:bg-gray-100'
            }`}
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </a>
          <button
            onClick={handleSignOut}
            className={`flex items-center w-full px-4 py-2 text-sm ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-red-400' 
                : 'hover:bg-gray-100 text-red-600'
            }`}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}