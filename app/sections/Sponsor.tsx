import Link from "next/link";
import Image from "next/image";
import Animation from "@/components/ScrollAnimation";

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col text-center mb-16">
        <Animation animationDirection="right-to-left">
          <h2 className="text-4xl italic font-bold mb-4">
            Our <span className="text-primary-blue">Sponsors</span>
          </h2>
        </Animation>
        <Animation animationDirection="right-to-left">
          <p className="font-light">
            Thank you to our sponsors! Their support is what makes MACS&apos;s
            work possible.
          </p>
        </Animation>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 text-center px-2 md:padding-x">
        <div className="relative">
          <div className="absolute inset-0 bg-primary-blue transform translate-x-[-1rem] translate-y-[-1rem] md:translate-x-[-2rem] md:translate-y-[-2rem] rounded-xl "></div>
          <div className="relative flex flex-col items-center bg-white p-8 rounded-xl pb-16 z-10">
            <Animation animationDirection="right-to-left">
              <Image
                src="/Atlassian Logo.webp"
                alt="Atlassian Logo"
                width={400}
                height={250}
                objectFit="contain"
              />
            </Animation>
            <Animation animationDirection="right-to-left">
              <p className="text-primary-black">
                Software is changing the world, and Atlassian is at the center
                of it all. Motivated by honest values, an amazing culture, and
                consistent revenue growth, we&apos;re out to unleash the
                potential of every team. From Amsterdam and Austin to Sydney and
                San Francisco, we&apos;re looking for people who are powered by
                passion and eager to do the best work of their lives in a highly
                autonomous yet collaborative, no B.S. environment.
              </p>
            </Animation>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary-blue transform translate-x-[1rem] -translate-y-[-1rem] md:translate-x-[2rem] md:-translate-y-[-2rem] rounded-xl"></div>
          <div className="relative flex flex-col items-center h-full bg-white p-8 rounded-xl pb-16 z-10">
            <Animation animationDirection="right-to-left">
              <Image
                src="/Macquarie Bank Logo.webp"
                alt="Macquarie Bank Logo"
                width={400}
                height={250}
                objectFit="contain"
              />
            </Animation>
            <Animation animationDirection="right-to-left">
              <p className="text-primary-black">
                We bring specialist, global expertise in areas such as
                infrastructure, energy, technology and commodities. We focus on
                innovation, careful risk management and delivering sustained
                long-term value for our clients, partners, investors, staff and
                the broader communities in which we operate.
              </p>
            </Animation>
          </div>
        </div>
      </div>

      <Link
        href="/#contact"
        className=" text-lg mt-12 w-fit center bg-transparent hover:bg-black hover:text-white  py-2 px-7 border border-white rounded-full italic"
      >
        Become a <span className="text-primary-blue">Sponsor</span>
      </Link>

      <Link
        href="mailto:macs.exec@gmail.com"
        className="mt-4 text-sm italic font-light"
      >
        Or contact us at macs.exec@gmail.com
      </Link>
    </div>
  );
}
