import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  danger?: boolean;
}

export default function MenuItem({ 
  icon: Icon, 
  children, 
  onClick, 
  className = '',
  danger = false 
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center w-full px-4 py-2 text-sm
        ${danger ? 'text-red-600 hover:bg-red-50' : 'text-gray-700 hover:bg-gray-100'}
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
}