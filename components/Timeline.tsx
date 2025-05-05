"use client";
import React, { useState } from "react";
import data from "./data.json";
import Animation from "@/components/ScrollAnimation";
const VerticalTabMenu: React.FC = () => {
  const years = Object.keys(data).sort().reverse();
  const [currentYear, setCurrentYear] = useState<string>(years[0]);

  const handleYearClick = (year: string) => {
    setCurrentYear(year);
  };

  const currentData = data[currentYear as keyof typeof data];

  const numRows = Math.ceil(currentData.length / 4);

  return (
    <div className="grid grid-cols-8 p-16 pb-0">
      <Animation animationDirection="left-to-right">
        <div className="col-start-1 bg-white w-1 h-max  flex flex-col items-center rounded">
          <div className="gap-8 flex flex-col justify-between  items-start">
            {years.map((year, index) => (
              <div
                key={index}
                className={`cursor-pointer flex justify-center items-center ${
                  currentYear === year
                    ? "rounded-full w-10 h-10 bg-white text-6xl font-bold "
                    : ""
                }`}
                onClick={() => handleYearClick(year)}
              >
                <div className="rounded-full w-10 h-10 text-2xl flex items-center justify-end">
                  <span className="mr-16">{year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Animation>

      <div className="col-start-2 col-span-7 max-w-full grid-rows-2  bg-primary-black border-2 rounded-[2.5rem] p-6">
        <Animation animationDirection="left-to-right">
          <div className=" w-full h-full rounded ">
            <div className="row-start-1 gap-8 grid grid-rows-${numRows} lg:grid-cols-4 md:grid-cols-3 ">
              {currentData.map((item, index) => (
                <div key={index} className="text-center ">
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
