"use client";
import React, { useState } from "react";
import data from "./data.json";

const VerticalTabMenu: React.FC = () => {
  const years = ["2023", "2022", "2021", "2020", "2019", "2018", "2017"];
  const [currentYear, setCurrentYear] = useState<string>(years[0]);

  const handleYearClick = (year: string) => {
    setCurrentYear(year);
  };

  // Access data for the current year from the JSON file
  const currentData = data[currentYear as keyof typeof data];

  return (
    <div className="grid grid-cols-8">
      <div className="bg-white w-1 h-full flex flex-col items-center">
        {years.map((year, index) => (
          <div
            key={index}
            className={`cursor-pointer flex justify-center  items-center  ${
              currentYear === year ? "rounded-full w-12 h-12 bg-white" : ""
            }`}
            onClick={() => handleYearClick(year)}
          >
            <div className="rounded-full w-12 h-12 text-2xl font-bold flex items-center justify-end  ">
              <span>{year}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-7 flex justify-center">
        <div className="bg-white w-full h-full rounded">
          <div className="grid grid-cols-4 grid-rows-2  p-4 ">
            {currentData.map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded w-1/2 h-1/2"
                />
                <div className="text-black">{item.name}</div>
                <div className="text-primary-blue">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabMenu;
