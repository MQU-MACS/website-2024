"use client";
import React, { useEffect, useState } from "react";
interface CarouselProps {
  slides: { src: string; alt: string }[];
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
        className={`flex ease-in  transition  duration-200 `}
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ width: `${100 / slides.length}%` }}>
            <img
              loading="lazy"
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>

      <div className="relative bottom-0 pt-6 flex justify-center gap-8 w-full">
        {slides.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-3 h-3 cursor-pointer  ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
