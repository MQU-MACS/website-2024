"use client";

import Link from "next/link";

export default function Home() {
  const scrollToAbout = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" relative overflow-hidden">
      <div className="md:h-screen grid grid-cols-5 grid-rows-3  ">
        <div className="col-span-2 row-span-full  flex flex-row items-center justify-end px-[10%]">
          <div className="max-w-full max-h-full hidden md:block">
            <img
              src="/MACSLOGOTRANS 2.webp"
              className="w-full h-full   "
              alt="MACS logo"
            />
            <p className="text-4xl pt-4 pb-8 italic tracking-wide ">
              Macquarie Association
              <br /> of Computing Students
            </p>

            <div className="flex gap-4">
              <button
                onClick={scrollToAbout}
                className="text-lg col-start-1 w-fit center  hover:bg-black hover:text-white py-2 px-7 border border-white rounded-full italic inline-flex items-center ease-in ease-in hover:-translate-y-1 hover:scale-110"
              >
                About&nbsp; <span className="text-primary-blue">MA</span>CS
              </button>
              <Link
                href="https://discord.gg/macs"
                className="text-lg col-start-2 w-fit center bg-primary-blue  ease-in hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-white py-2 px-7 border border-white rounded-full italic inline-flex items-center"
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
          </div>
          <svg
            viewBox="0 0 546 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 bottom-0 w-1/3 md:visible invisible "
          >
            <path d="M-193 0L-153.358 292H546L-193 0Z" fill="#95C5F1" />
          </svg>
        </div>
        <div className="col-span-3 row-span-3 bg-[url('/HomePage_Image.webp')]  md:[clip-path:polygon(0%_0%,150%_0%,100%_480%)] bg-cover max-w-screen"></div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-primary-black"></div>
        <a href="/#about">
          <svg
            width="27"
            height="18"
            viewBox="0 0 27 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-x-0 bottom-0 left-1/2 transform -translate-y-16"
          >
            <path
              d="M3 3L13.5 14L24 3"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="md:hidden">
        <div className="  bg-[url('/HomePage_Image.webp')]  bg-no-repeat  bg-cover relative">
          <div className="absolute inset-0 bg-black bg-opacity-75 md:hidden"></div>

          <div className="flex-column h-screen relative padding-x pt-56">
            <img
              src="/MACSLOGOTRANS 2.webp"
              className="w-64 max-h-full mx-auto"
              alt="MACS logo"
            />
            <p className="md:text-4xl text-2xl text-center mt-4">
              Macquarie Association
              <br /> of Computing Students
            </p>

            <div className="flex flex-row flex-wrap gap-4 items-center justify-center  mt-8">
              <button className="w-fit center bg-[#12151E] hover:bg-blue-200  hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
                About&nbsp; <span className="text-primary-blue">MA</span>CS
              </button>
              <button className="w-fit center bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
                <span className="mr-2 text-primary-black">Join Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  width="16"
                  height="12"
                  className=""
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-primary-black"></div>
            <a href="/#about">
              <svg
                width="27"
                height="18"
                viewBox="0 0 27 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-x-0 bottom-0 left-1/2 transform -translate-y-16"
              >
                <path
                  d="M3 3L13.5 14L24 3"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
