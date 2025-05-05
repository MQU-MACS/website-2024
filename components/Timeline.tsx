"use client";
import React, { useState, useRef, useEffect } from "react";
import data from "./data.json";
import Animation from "@/components/ScrollAnimation";

const VerticalTabMenu: React.FC = () => {
  const years = Object.keys(data).sort().reverse();
  const [currentYear, setCurrentYear] = useState<string>(years[0]);
  const [isDragging, setIsDragging] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reset yearRefs array when years change
  useEffect(() => {
    yearRefs.current = yearRefs.current.slice(0, years.length);
  }, [years.length]);

  const handleYearClick = (year: string) => {
    setCurrentYear(year);
  };

  // Find closest year based on ball position
  const findClosestYear = (ballY: number) => {
    let closestYearIndex = 0;
    let minDistance = Number.MAX_VALUE;

    yearRefs.current.forEach((yearRef, index) => {
      if (yearRef) {
        const yearRect = yearRef.getBoundingClientRect();
        const distance = Math.abs(yearRect.top + yearRect.height / 2 - ballY);
        if (distance < minDistance) {
          minDistance = distance;
          closestYearIndex = index;
        }
      }
    });

    return years[closestYearIndex];
  };

  // Mouse handlers for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const minY = timelineRect.top;
    const maxY = timelineRect.bottom;
    
    // Constrain dragging within the timeline
    let newY = Math.max(minY, Math.min(maxY, e.clientY));
    
    // Find the closest year to the current drag position
    const closestYear = findClosestYear(newY);
    setCurrentYear(closestYear);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentData = data[currentYear as keyof typeof data];
  const numRows = Math.ceil(currentData.length / 4);

  useEffect(() => {
    // Add mouseup event listener to document
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove as any);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, [isDragging]);

  return (
    <div className="grid grid-cols-8 p-16 pb-0">
      <Animation animationDirection="left-to-right">
        <div 
          ref={timelineRef}
          className="col-start-1 relative bg-white w-1 h-max flex flex-col items-center rounded"
        >
          <div className="gap-8 flex flex-col justify-between items-start">
            {years.map((year, index) => (
              <div
                key={index}
                ref={el => yearRefs.current[index] = el}
                className="cursor-pointer flex justify-center items-center"
                onClick={() => handleYearClick(year)}
              >
                <div className="rounded-full w-10 h-10 text-2xl flex items-center justify-end">
                  <span className="mr-16">{year}</span>
                </div>
                
                {/* Only render ball for current year */}
                {currentYear === year && (
                  <div 
                    ref={ballRef}
                    className="absolute left-0 rounded-full w-10 h-10 bg-white cursor-grab transform -translate-x-4"
                    onMouseDown={handleMouseDown}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Animation>

      <div className="col-start-2 col-span-7 max-w-full grid-rows-2 bg-primary-black border-2 rounded-[2.5rem] p-6">
        <Animation animationDirection="left-to-right">
          <div className="w-full h-full rounded">
            <div className={`row-start-1 gap-8 grid grid-rows-${numRows} lg:grid-cols-4 md:grid-cols-3`}>
              {currentData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl text-primary-blue">{item.name}</div>
                  <div className="text-white">{item.role}</div>
                </div>
              ))}
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default VerticalTabMenu;
