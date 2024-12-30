import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}