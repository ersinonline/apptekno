import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Service } from '../../types';

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="group relative rounded-xl p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                {service.title}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-[#fff8e1] text-[#ffb700] font-medium">
                {service.category}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-2">
              {service.description}
            </p>

            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-[#ffb700] rounded-lg hover:bg-[#e6a300] transition-colors"
            >
              {service.buttonText}
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}