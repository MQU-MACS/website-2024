export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 items-center gap-4 overflow-hidden relative">
        <div className="text-center col-span-1 row-span-2 flex flex-col justify-center items-center md:col-span-1 md:row-span-2 mt-32 gap-4 ">
          <div className="relative">
            <img
              src="/MACSLOGOTRANS 2.png"
              className="w-full h-full"
              alt="MACS logo"
            />
          </div>
          <p className="text-4xl mb-2">
            Macquarie Association
            <br /> of Computing Students
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button className="w-fit center bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
              About US
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
                <g id="图层_2" data-name="图层 2">
                  <g id="Discord_Logos" data-name="Discord Logos">
                    <g
                      id="Discord_Logo_-_Large_-_White"
                      data-name="Discord Logo - Large - White"
                    >
                      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-visible col-span-1 row-span-2">
          <img
            src="/HomePage_Image.png"
            className="w-full h-full object-cover"
            alt="Macquarie University"
          />
        </div>
        <div className="text-center col-span-1 row-span-2 flex flex-col justify-center items-center md:col-span-2 md:row-span-1 mt-24 ml-108">
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L10 10L18 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      {/*       
        <svg
          width="546"
          height="292"
          viewBox="0 0 546 292"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-48"
        >
          <path d="M-193 0L-153.358 292H546L-193 0Z" fill="#95C5F1" />
        </svg> */}
    </div>
  );
}
