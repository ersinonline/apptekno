import React from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  src?: string | null;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ src, alt = 'User', size = 'md' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  if (!src) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gray-200 flex items-center justify-center`}>
        <User className="w-2/3 h-2/3 text-gray-500" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  );
}