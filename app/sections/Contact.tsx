export default function Contact() {
  return (
    <div className="relative overflow-hidden mx-auto">
      <div className="relative px-8 z-10">
        <div className="mb-8 py-8 lg:py-8 px-4 rounded-3xl mx-auto max-w-screen-md bg-primary-black border-2 ">
          <h2 className="text-white mb-4 text-4xl italic font-bold text-center">
            Contact <span className="text-primary-blue">Us</span>
          </h2>
          {/* <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need
            details about our Business plan? Let us know.
          </p> */}
          <form action="#" className="space-y-8 px-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-primary-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-sm text-primary-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="name@MACS.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white "
              >
                Your message
              </label>
              <textarea
                id="message"
                className="block p-3 w-full text-sm text-primary-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a message"
                rows={8}
              ></textarea>
            </div>
            <div className="mx-auto text-center">
              <button className="w-fit center bg-transparent hover:bg-black hover:text-white py-2 px-7 border border-white rounded-full italic">
                Submit
              </button>
            </div>
          </form>
        </div>
        <p className="text-center mb-8 w-fit mx-auto rounded-full p-4">
          © 2023 Macquarie Association of Computing Students
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="285"
        height="653"
        viewBox="0 0 285 653"
        className="absolute top-1/3 sm:visible invisible"
        fill="none"
      >
        <path
          d="M284.5 652.501L-0.499894 652.501L-0.5 0L284.5 652.501Z"
          fill="#95C5F1"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="324"
        height="149"
        viewBox="0 0 324 149"
        className="absolute right-0 bottom-0 sm:visible invisible"
        fill="none"
      >
        <path
          d="M324 148.5L0.499858 148.501L324 0.500223L324 148.5Z"
          fill="#95C5F1"
        />
      </svg>
    </div>
  );
}
