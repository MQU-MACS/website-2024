import Image from "next/image";

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 text-center mb-12">
        <h2 className="text-4xl italic font-bold">
          Our <span className="text-primary-blue">Sponsors</span>
        </h2>

        <p className="italic font-light">
          Thank you to our sponsors! Their support is what makes MACS's work
          possible.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-40 text-center padding-x">
        <div className="flex flex-col items-center bg-white p-8 rounded-xl pb-16">
          <img
            src="/Atlassian Logo.png"
            className="
            h-40
            w-full
            object-contain
            "
            alt="Atlassian Logo"
          />
          <p className="text-primary-black">
            Software is changing the world, and Atlassian is at the center of it
            all. Motivated by honest values, an amazing culture, and consistent
            revenue growth, we’re out to unleash the potential of every team.
            From Amsterdam and Austin to Sydney and San Francisco, we’re looking
            for people who are powered by passion and eager to do the best work
            of their lives in a highly autonomous yet collaborative, no B.S.
            environment.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-8 rounded-xl pb-16">
          <img
            src="/Macquarie Bank Logo.png"
            className="
            h-40
            w-full
            object-contain
            "
            alt="Macquarie Bank Logo"
          />
          <p className="text-primary-black">
            We bring specialist, global expertise in areas such as
            infrastructure, energy, technology and commodities. We focus on
            innovation, careful risk management and delivering sustained
            long-term value for our clients, partners, investors, staff and the
            broader communities in which we operate.
          </p>
        </div>
      </div>
      <button className="mt-8 w-fit center bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 border border-white rounded-full italic">
        Become a <span className="text-primary-blue">Sponsor</span>
      </button>
      <p className="mt-4 text-sm italic font-light">
        Or contact us at macs.exec@gmail.com
      </p>
      {/* <button className="bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 border border-white inline-flex items-center rounded-full italic ">
        <span>
          Become a <span className="text-primary-blue">Sponsor</span>
        </span>
        <svg
          className="fill-current w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </button> */}
    </div>
  );
}
