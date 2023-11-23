import React from "react";
import Slider from "@/components/ImageSlider";
import imagesData from "@/components/images.json";

const ContentSection = () => (
  <div>
    <h2 className="text-4xl italic font-bold mb-4">
      Welcome to <span className="text-primary-blue">MACS</span>
    </h2>
    <p className="text-2xl text-white mb-8">
      MACS is a student-run association founded in 2017 by computing students,
      for computing students.
    </p>
    <p className="text-2xl text-white">
      We strive to help Macquarie University computing and IT students up-skill
      and improve their career prospects via networking, computing workshops,
      hackathons, and other various computing events.
    </p>
  </div>
);

export default function About() {
  return (
    <div className="  max-w-full max-h-full">
      <div className="grid grid-rows-8 gap-16 md:hidden">
        <div className="row-start-2">
          <Slider slides={imagesData}></Slider>
        </div>
        <div className="row-start-1">
          <ContentSection />
        </div>
      </div>

      <div className=" grid-cols-2  gap-16  hidden md:grid ">
        <div className="col-start-1">
          <Slider slides={imagesData}></Slider>
        </div>
        <div className="col-start-2">
          <ContentSection />
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

// import React from "react";
// import Slider from "@/components/ImageSlider";

// const slides = ["new delhi.jpg", "new york.jpg", "KAY.png"];

// const ContentSection = () => (
//   <div>
//     <h2 className="text-4xl italic font-bold mb-4">
//       Welcome to <span className="text-primary-blue">MACS</span>
//     </h2>
//     <p className="text-2xl text-white mb-8">
//       MACS is a student-run association founded in 2017 by computing students,
//       for computing students.
//     </p>
//     <p className="text-2xl text-white">
//       We strive to help Macquarie University computing and IT students up-skill
//       and improve their career prospects via networking, computing workshops,
//       hackathons, and other various computing events.
//     </p>
//   </div>
// );

// export default function About() {
//   return (
//     <div className=" overflow-hidden ">
//       <div className=" max-w-full max-h-full ">
//         <div className="grid grid-rows-8 gap-16 md:hidden">
//           <div className="row-start-2">
//             <Slider slides={slides}></Slider>

//             {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {slides.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Image ${index + 1}`}
//                   className="w-full h-48 object-cover"
//                 />
//               ))}
//             </div> */}
//           </div>
//           <div className="row-start-1">
//             <ContentSection />
//           </div>
//         </div>

//         <div className=" grid grid-cols-2 gap-16    hidden md:grid ">
//           <div className="col-start-1">
//             <Slider slides={slides}></Slider>
//           </div>

//           <div className="col-start-2   ">
//             <ContentSection />
//             <svg
//               width="358"
//               height="787"
//               viewBox="0 0 358 787"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute right-0    md:visible invisible shrink"
//             >
//               <path
//                 d="M471.194 0.874109L703.678 786.32L0.517667 290.377L471.194 0.874109Z"
//                 fill="#95C5F1"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="">
//         {/* <svg
//           width="358"
//           height="787"
//           viewBox="0 0 358 787"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute right-0    md:visible invisible shrink"
//         >
//           <path
//             d="M471.194 0.874109L703.678 786.32L0.517667 290.377L471.194 0.874109Z"
//             fill="#95C5F1"
//           />
//         </svg> */}
//       </div>
//     </div>
//   );
// }
