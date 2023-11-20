"use client";
import React, { useState } from "react";
import data from "./data.json";

const VerticalTabMenu: React.FC = () => {
  const years = [
    "2023",
    "2022",
    "2021 S2",
    "2021 S1",
    "2020",
    "2019",
    "2018",
    "2017",
  ];
  const [currentYear, setCurrentYear] = useState<string>(years[0]);

  const handleYearClick = (year: string) => {
    setCurrentYear(year);
  };

  // Access data for the current year from the JSON file
  const currentData = data[currentYear as keyof typeof data];

  const numRows = Math.ceil(currentData.length / 4);

  return (
    <div className="grid grid-cols-8 p-16">
      <div className="col-start-1 bg-white w-1 h-full flex flex-col items-center ">
        <div className="flex flex-col justify-between h-full items-start">
          {years.map((year, index) => (
            <div
              key={index}
              className={`cursor-pointer flex justify-center items-center ${
                currentYear === year
                  ? "rounded-full w-12 h-12 bg-white text-6xl font-bold "
                  : ""
              }`}
              onClick={() => handleYearClick(year)}
            >
              <div className="rounded-full w-12 h-12 text-2xl  flex items-center justify-end">
                <span className="mr-16">{year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-start-2 col-span-7 max-w-full flex justify-center  ">
        <div className="bg-white w-full h-full rounded p-4  ">
          <div className="grid grid-rows-${numRows} grid-cols-4 gap-8  ">
            {currentData.map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center justify-stretch"
              >
                <img src={item.image} alt={item.name} className="rounded " />
                <div className="text-black font-bold">{item.name}</div>
                <div className="text-black">{item.role}</div>
              </div>
            ))}
          </div>
          <p className="text-black text-center">
            If you are interested in getting involved, please talk to any of our
            friendly executives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabMenu;
