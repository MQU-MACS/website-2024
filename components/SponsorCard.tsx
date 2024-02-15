import Animation from "@/components/ScrollAnimation";
import { sponsors } from "@/constants/sponsors";

const SponsorCard = ({
  logoSrc,
  description,
}: {
  logoSrc: string;
  description: string;
}) => (
  <div className="relative flex flex-col h-full">
    <div className="absolute inset-0 bg-primary-blue transform translate-x-[-1rem] translate-y-[-1rem] md:translate-x-[-2rem] md:translate-y-[-2rem] rounded-xl "></div>
    <div className="relative flex flex-col items-center bg-white p-8 rounded-xl pb-16 z-10 flex-grow">
      <Animation animationDirection="right-to-left">
        <img src={logoSrc} alt="Logo" className="h-40 w-full object-contain" />
      </Animation>
      <Animation animationDirection="right-to-left">
        <p className="text-primary-black overflow-y-auto flex-grow">
          {description}
        </p>
      </Animation>
    </div>
  </div>
);

const SponsorGrid = () => (
  <div
    className={`grid ${
      sponsors.length === 1 ? "place-items-center max-w-2xl" : "lg:grid-cols-2"
    } gap-16 text-center px-2 md:padding-x`}
  >
    <Animation animationDirection="right-to-left">
      <div className="p-4">
        <h3 className="text-3xl italic font-bold border-b-2 pb-4 ">
          <span className="text-primary-blue">Legacy</span> Tier
        </h3>
      </div>
    </Animation>
    {sponsors
      .filter((sponsor) => sponsor.tier.toLowerCase() === "legacy")
      .map((sponsor, index) => (
        <SponsorCard key={index} {...sponsor} />
      ))}
  </div>
);

export default SponsorGrid;
