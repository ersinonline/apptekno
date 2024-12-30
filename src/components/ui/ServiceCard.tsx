import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ServiceCardProps } from '../../types';

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {service.title}
          </h3>
          <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
            {service.category}
          </span>
        </div>
        
        <p className="text-sm mb-4 flex-grow text-gray-600">
          {service.description}
        </p>

        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium transition-colors text-primary hover:text-primary-dark"
        >
          {service.buttonText}
          <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}