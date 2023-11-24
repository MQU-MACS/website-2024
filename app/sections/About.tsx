import React from "react";
import Slider from "@/components/ImageSlider";
import imagesData from "@/components/images.json";

const ContentSection = () => (
  <div>
    <h2 className="animate-marquee3 text-4xl italic font-bold mb-8">
      Welcome to <span className="text-primary-blue">MACS</span>
    </h2>
    <p className="animate-marquee3 text-2xl text-white mb-4">
      MACS is a student-run association founded in 2017 by computing students,
      for computing students.
    </p>
    <p className="animate-marquee3 text-2xl text-white">
      We strive to help Macquarie University computing and IT students up-skill
      and improve their career prospects via networking, computing workshops,
      hackathons, and other various computing events.
    </p>
  </div>
);

export default function About() {
  return (
    <div className="max-w-full max-h-full max-container">
      <div className="   grid grid-rows-8 gap-16 md:hidden">
        <div className="row-start-2">
          <Slider slides={imagesData}></Slider>
        </div>
        <div className="row-start-1">
          <ContentSection />
        </div>
      </div>

      <div className=" grid-cols-2  gap-16  hidden md:grid ">
        <div className=" animate-marquee4 col-start-1">
          <Slider slides={imagesData}></Slider>
        </div>
        <div className=" col-start-2">
          <div className="animate-marquee3">
            <ContentSection />
          </div>
          <svg
            viewBox="0 0 358 787"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0  w-1/4  md:visible invisible "
          >
            <path
              d="M471.194 0.874109L703.678 786.32L0.517667 290.377L471.194 0.874109Z"
              fill="#95C5F1"
            />
          </svg>
          <div className="w-full  overflow-hidden"></div>
        </div>
        <div className="flex">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
