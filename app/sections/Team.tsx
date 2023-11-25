import Timeline from "@/components/Timeline";
import DropdownComponent from "@/components/Dropdown";
import Animation from "@/components/ScrollAnimation";

export default function Team() {
  return (
    <div className="">
      <h2 className="text-4xl italic font-bold  text-center">
        Executive <span className="text-primary-blue">Team</span>
      </h2>
      <Animation animationDirection="left-to-right">
        <div className="hidden md:block">
          <Timeline></Timeline>
        </div>
      </Animation>
      <Animation animationDirection="right-to-left">
        <div className="md:hidden">
          <DropdownComponent></DropdownComponent>
        </div>
      </Animation>
    </div>
  );
}
