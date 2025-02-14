// app/components/shared/loading-spinner.tsx
import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="relative w-10 h-10">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}

// You can also create a smaller variant for inline loading states
export function LoadingSpinnerSmall() {
  return (
    <div className="flex items-center justify-center h-6">
      <div className="relative w-4 h-4">
        <div className="absolute top-0 left-0 w-full h-full border-2 border-primary/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-2 border-primary rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}