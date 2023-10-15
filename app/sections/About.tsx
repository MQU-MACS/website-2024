import React from "react";
import Slider from "@/components/ImageSlider";

const slides = ["new delhi.jpg", "new york.jpg"];

export default function About() {
  return (
    <div className="relative overflow-hidden grid grid-cols-2 gap-8 items-center">
      <div className="col-span-1">
        <Slider slides={slides}></Slider>
      </div>

      <div className="col-span-1">
        <h2 className="text-4xl italic font-bold mb-4">
          Welcome to <span className="text-primary-blue">MACS</span>
        </h2>
        <p className="text-2xl text-white mb-8">
          MACS is a student-run association founded in 2017 by computing
          students, for computing students.
        </p>
        <p className="text-2xl text-white">
          We strive to help Macquarie University computing and IT students
          up-skill and improve their career prospects via networking, computing
          workshops, hackathons, and other various computing events.
        </p>
      </div>
    </div>
  );
}
