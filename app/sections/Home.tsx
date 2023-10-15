export default function Home() {
  return (
    <div className=" relative overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-rows-8 gap-2">
          <div className="relative col-span-1 row-span-2 flex items-center justify-center p-0">
            <div className="max-w-full max-h-full">
              <img
                src="/MACSLOGOTRANS 2.png"
                className="w-full h-full  "
                alt="MACS logo"
              />
              <p className="text-4xl mb-2">
                Macquarie Association
                <br /> of Computing Students
              </p>
              <div className="grid grid-cols-3 gap-4 sm:text-center">
                <button className="w-fit center  hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
                  About MACS
                </button>
                <button className="w-fit center bg-primary-blue hover:bg-blue-200 hover:text-white py-2 px-4 border border-white rounded-full italic inline-flex items-center">
                  <span className="mr-2 text-primary-black">Join Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 127.14 96.36"
                    width="16"
                    height="12"
                    className=""
                  ></svg>
                </button>
                <svg
                  width="546"
                  height="292"
                  viewBox="0 0 546 292"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 bottom-0 sm:visible invisible max-w-full "
                >
                  <path d="M-193 0L-153.358 292H546L-193 0Z" fill="#95C5F1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-right bg-[url('/HomePage_Image.png')] bg-auto bg-cover max-w-screen h-screen relative overflow-hidden sm-bg-center">
          <div className="relative"></div>
        </div>
      </div>
    </div>
  );
}
