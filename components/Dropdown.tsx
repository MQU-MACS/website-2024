"use client";
import React, { useState, ChangeEvent } from "react";
import data from "./data.json";

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

export default function DropdownComponent() {
  const [selectedYear, setSelectedYear] = useState("2023");
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const yearData = data[selectedYear as keyof typeof data];

  return (
    <div className="w-full flex flex-col items-center py-16 relative">
      <select
        className=" w-1/4 text-center text-primary-black bg-white rounded-full   "
        value={selectedYear}
        onChange={handleYearChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div className="py-16">
        {yearData && (
          <div className="grid grid-cols-2 gap-16  text-primary-black p-8 rounded">
            {yearData.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={``} className="rounded-full " />
                <p className="font-bold text-primary-blue">{item.name}</p>
                <p className="text-white"> {item.role}</p>
              </div>
            ))}
          </div>
        )}
        <p className="text-white text-2x1 text-center">
          If you are interested in getting involved, please talk to any of our
          friendly executives.
        </p>
      </div>
    </div>
  );
}
