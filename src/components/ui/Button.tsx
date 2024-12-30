import React from 'react';
import { PRIMARY_COLOR, PRIMARY_DARK } from '../../utils/constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: `bg-[${PRIMARY_COLOR}] text-white hover:bg-[${PRIMARY_DARK}] focus:ring-[${PRIMARY_COLOR}]`,
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    outline: `border-2 border-[${PRIMARY_COLOR}] text-[${PRIMARY_COLOR}] hover:bg-[${PRIMARY_COLOR}] hover:text-white`
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${loading ? 'opacity-75 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={loading}
      {...props}
    >
      {loading && (
        <div className="mr-2">
          <LoadingSpinner size="sm" />
        </div>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}