// app/components/shared/share-buttons.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Printer } from 'lucide-react';

export function SharePrintButtons() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center gap-2 print:hidden">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handlePrint}
        className="hidden md:inline-flex"
      >
        <Printer className="h-4 w-4 mr-2" />
        Print
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleShare}
      >
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
    </div>
  );
}