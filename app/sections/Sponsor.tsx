import Link from "next/link";
import Animation from "@/components/ScrollAnimation";
import SponsorGrid from "@/components/SponsorCard";

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
          <p className="font-light max-w-prose">
            We sincerely appreciate the generous support of our sponsors, whose
            contributions make MACS's work possible.
          </p>
        </Animation>
      </div>
      <SponsorGrid />
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
