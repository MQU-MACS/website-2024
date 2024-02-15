"use client";

import { useState } from "react";
import { navLinks } from "../constants";
import Link from "next/link";
import Animation from "@/components/ScrollAnimation";
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="padding-x fixed z-20 w-full bg-gradient-to-b from-primary-black ">
      <nav className="flex justify-between items-center max-container h-20">
        <a href="/">
          <img
            src="/MACSLOGOTRANS 2.webp"
            alt="logo"
            width={130}
            height={35}
            className="m-0"
          />
        </a>
        <div className="flex max-lg:hidden">
          <ul className="flex-1 flex justify-end items-center gap-16 ">
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
          <Link
            href="https://discord.gg/macs"
            className="ml-16 text-lg col-start-2 w-fit center bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-7 border border-white rounded-full italic inline-flex items-center"
          >
            <span className="mr-2 text-primary-black ">Join Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 127.14 96.36"
              width="16"
              height="12"
              className=""
            >
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
          </Link>
        </div>
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
          } lg:hidden absolute top-20 left-0 w-full bg-[#12151E] py-4`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={toggleNav}
                className="block text-lg text-white uppercase italic hover:underline padding-x py-2"
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
