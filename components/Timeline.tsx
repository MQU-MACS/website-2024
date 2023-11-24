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

      <div className="animate-marquee3 col-start-2 col-span-7 max-w-full grid-rows-2  ">
        <div className=" w-full h-full rounded   ">
          <div className="row-start-1 gap-8 grid grid-rows-${numRows} grid-cols-4 ">
            {currentData.map((item, index) => (
              <div key={index} className="text-center ">
                <img src={item.image} className="rounded-full " />
                <div className="text-2xl text-primary-blue font-bold">
                  {item.name}
                </div>
                <div className=" text-2xl text-white">{item.role}</div>
              </div>
            ))}
          </div>
          <p className="text-white text-base text-center pt-8">
            If you are interested in getting involved, please talk to any of our
            friendly executives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabMenu;
