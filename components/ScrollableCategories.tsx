import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ScrollableCategoriesProps {
  categories: readonly string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const ScrollableCategories: React.FC<ScrollableCategoriesProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < (container.scrollWidth - container.clientWidth)
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {showLeftArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-8 py-2 scroll-smooth"
        onScroll={checkScroll}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "default" : "secondary"}
            size="sm"
            className="shadow-lg hover:shadow-xl transition-shadow text-xs md:text-sm px-2 md:px-4 whitespace-nowrap flex-shrink-0"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {showRightArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default ScrollableCategories;
