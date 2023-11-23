import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col text-center mb-8 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="sm:h-auto sm:w-screen  h-24"
          viewBox="0 0 1440 151"
          fill="none"
        >
          <path
            d="M-90.6948 150.5L-90.6942 -0.000438041L1498.5 52.4986L1498.5 84.4995L-90.6948 150.5Z"
            fill="#95C5F1"
          />
        </svg>
        <div className="relative flex overflow-x-hidden -rotate-3 w-screen max-w-[1920px]">
          <div className="animate-marquee whitespace-nowrap">
            <img
              src="/marquee 2.png"
              className="h-[31px] w-[1598px] max-w-none"
              alt="MACS Logos"
            />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <img
              src="/marquee 2.png"
              className="h-[31px] w-[1598px] max-w-none"
              alt="MACS Logos"
            />
          </div>
        </div>

        <div className="padding-x py-48">
          <h2 className="text-4xl italic font-bold mb-4">
            Become one of our <span className="text-primary-blue">6.000+</span>{" "}
            members!
          </h2>
          <p className="mb-8">
            Everyone is invited. You don’t need to be an IT student. No
            experience required. <br />
            Don’t miss our next event!
          </p>
          <Link
            href="https://discord.gg/macs"
            className="text-lg col-start-2 w-fit center bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-7 border border-white rounded-full italic inline-flex items-center"
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
        <div className="relative flex overflow-x-hidden -rotate-3 w-screen max-w-[1920px]">
          <div className="animate-marquee whitespace-nowrap">
            <img
              src="/marquee 2.png"
              className="h-[31px] w-[1598px] max-w-none"
              alt="MACS Logos"
            />{" "}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <img
              src="/marquee 2.png"
              className="h-[31px] w-[1598px] max-w-none"
              alt="MACS Logos"
            />{" "}
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="sm:h-auto sm:w-screen  h-24 rotate-180"
          viewBox="0 0 1440 151"
          fill="none"
        >
          <path
            d="M-90.6948 150.5L-90.6942 -0.000438041L1498.5 52.4986L1498.5 84.4995L-90.6948 150.5Z"
            fill="#95C5F1"
          />
        </svg>
      </div>
    </div>
  );
}
