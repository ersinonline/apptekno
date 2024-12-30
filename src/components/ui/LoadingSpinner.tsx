import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff4cc]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#ffb700]"></div>
    </div>
  );
}