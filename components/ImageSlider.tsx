"use client";
import React, { useState } from "react";
interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-400 `}
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((s, index) => {
          return (
            <div key={index} style={{ width: `${100 / slides.length}%` }}>
              <img src={s} alt={`slide-${index}`} className="w-full h-full" />
            </div>
          );
        })}
      </div>

      <div className="relative bottom-0 py-0 flex justify-center gap-8 w-full">
        {slides.map((_, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
