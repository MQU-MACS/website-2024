"use client";

import { useState } from "react";
import { navLinks } from "../constants";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="padding-x fixed z-20 w-full bg-[#12151E]">
      <nav className="flex justify-between items-center max-container h-20">
        <a href="/">
          <img src="/MACS Logo.png" alt="logo" className="m-0" />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-lg text-white uppercase italic hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon */}
        <div className="hidden max-lg:block" onClick={toggleNav}>
          <img
            src="/hamburger.svg"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>

        <ul
          className={`${
            isNavOpen ? "block" : "hidden"
          } md:hidden absolute top-20 left-0 w-full bg-[#12151E] py-4`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={toggleNav}
                className="block text-lg text-white uppercase italic hover:underline px-6 py-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
