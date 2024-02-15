import Timeline from "@/components/Timeline";
import DropdownComponent from "@/components/Dropdown";
import Animation from "@/components/ScrollAnimation";

export default function Team() {
  return (
    <div className="">
      <h2 className="text-4xl italic font-bold  text-center">
        <Animation animationDirection="right-to-left">
          Executive <span className="text-primary-blue">Team</span>
        </Animation>
      </h2>

      <div className="hidden md:block">
        <Timeline></Timeline>
        <p className="text-white text-base text-center pt-8">
          If you are interested in getting involved, please talk to any of our
          friendly executives.
        </p>
      </div>

      <div className="md:hidden">
        <DropdownComponent></DropdownComponent>
      </div>
    </div>
  );
}
