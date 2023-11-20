export default function Home() {
  return (
    <div className=" relative overflow-hidden ">
      <div className="grid grid-cols-2 grid-rows-3  ">
        <div className="md:col-span-1 row-start-2  flex flex-row items-center justify-center   ">
          <div className="max-w-full max-h-full hidden md:block  ">
            <img
              src="/MACSLOGOTRANS 2.png"
              className="w-full h-full   "
              alt="MACS logo"
            />
            <p className="text-4xl py-8  ">
              Macquarie Association
              <br /> of Computing Students
            </p>

            <div className="grid grid-cols-2">
              <button className=" col-start-1 w-fit center  hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
                About&nbsp; <span className="text-primary-blue">MA</span>CS
              </button>
              <button className=" col-start-2 w-fit center bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
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
          </div>
          <svg
            width="546"
            height="292"
            viewBox="0 0 546 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 bottom-0 md:visible invisible "
          >
            <path d="M-193 0L-153.358 292H546L-193 0Z" fill="#95C5F1" />
          </svg>
        </div>
        <div className=" col-start-2 row-span-3 bg-[url('/HomePage_Image.png')]  md:[clip-path:polygon(0%_0%,150%_0%,100%_280%)] bg-no-repeat  bg-cover max-w-screen  relative   "></div>
        <button className="relative col-start-2  bottom-16 items-center justify-end hidden md:block">
          <svg
            width="27"
            height="18"
            viewBox="0 0 27 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M3 3L13.5 14L24 3"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="md:hidden grid-rows-4">
        <div className="  bg-[url('/HomePage_Image.png')]  bg-no-repeat  bg-cover   relative   ">
          <div className="absolute inset-0 bg-black bg-opacity-75 md:hidden"></div>

          <div className="grid grid-rows-6 relative flex items-center justify-center  ">
            <img
              src="/MACSLOGOTRANS 2.png"
              className="w-full max-h-full  row-start-2 "
              alt="MACS logo"
            />
            <p className="text-4xl row-start-3 ">
              Macquarie Association
              <br /> of Computing Students
            </p>

            <div className=" row-start-4 grid grid-rows-4 flex flex-row items-center justify-center ">
              <button className="row-start-1 w-fit center bg-[#12151E] hover:bg-blue-200  hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
                About&nbsp; <span className="text-primary-blue">MA</span>CS
              </button>
              <button className="w-fit center row-start-3 bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
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

            <button
              className=" row-start-6
         flex  items-center justify-center "
            >
              <svg
                width="27"
                height="18"
                viewBox="0 0 27 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M3 3L13.5 14L24 3"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className=" lg:relative overflow-hidden  ">
    //   <div className="md:grid grid-cols-2  ">
    //     <div className=" col-span-1 relative flex flex-row items-center justify-center   ">
    //       <div className="   max-w-full max-h-full  hidden md:block">
    //         <img
    //           src="/MACSLOGOTRANS 2.png"
    //           className="w-full h-full    "
    //           alt="MACS logo"
    //         />
    //         <p className="text-4xl  py-4  ">
    //           Macquarie Association
    //           <br /> of Computing Students
    //         </p>

    //         <div className=" grid grid-cols-2  ">
    //           <button className=" col-start-1 w-fit center  hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
    //             About&nbsp; <span className="text-primary-blue">MA</span>CS
    //           </button>
    //           <button className=" col-start-2 w-fit center bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
    //             <span className="mr-2 text-primary-black">Join Now</span>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 127.14 96.36"
    //               width="16"
    //               height="12"
    //               className=""
    //             >
    //               <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    //             </svg>
    //           </button>
    //           <svg
    //             width="546"
    //             height="292"
    //             viewBox="0 0 546 292"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="absolute left-0 bottom-0 md:visible invisible max-w-full mx-auto"
    //           >
    //             <path d="M-193 0L-153.358 292H546L-193 0Z" fill="#95C5F1" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     <div className=" col-start-2  bg-[url('/HomePage_Image.png')]  md:[clip-path:polygon(0%_0%,150%_0%,100%_280%)] bg-no-repeat  bg-cover max-w-screen  h-screen relative   ">
    //       <div className="absolute inset-0 bg-black bg-opacity-75 md:hidden"></div>

    //       <div className="grid grid-rows-5 relative flex items-center justify-center  md:hidden">
    //         <img
    //           src="/MACSLOGOTRANS 2.png"
    //           className="w-full max-h-full  row-start-2 "
    //           alt="MACS logo"
    //         />
    //         <p className="text-4xl row-start-3 ">
    //           Macquarie Association
    //           <br /> of Computing Students
    //         </p>

    //         <div className=" row-start-4 grid grid-rows-4 flex flex-row items-center justify-center ">
    //           <button className="row-start-1 w-fit center bg-[#12151E] hover:bg-blue-200  hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
    //             About&nbsp; <span className="text-primary-blue">MA</span>CS
    //           </button>
    //           <button className="w-fit center row-start-3 bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
    //             <span className="mr-2 text-primary-black">Join Now</span>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 127.14 96.36"
    //               width="16"
    //               height="12"
    //               className=""
    //             >
    //               <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    //             </svg>
    //           </button>
    //         </div>

    //         <button
    //           className=" row-start-5
    //          flex  items-center justify-center "
    //         >
    //           <svg
    //             width="27"
    //             height="18"
    //             viewBox="0 0 27 18"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className=""
    //           >
    //             <path
    //               d="M3 3L13.5 14L24 3"
    //               stroke="white"
    //               stroke-width="5"
    //               stroke-linecap="round"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <button className="relative col-start-2  bottom-16 items-center justify-end hidden md:block">
    //       <svg
    //         width="27"
    //         height="18"
    //         viewBox="0 0 27 18"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //         className=""
    //       >
    //         <path
    //           d="M3 3L13.5 14L24 3"
    //           stroke="white"
    //           stroke-width="5"
    //           stroke-linecap="round"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
  );
}
