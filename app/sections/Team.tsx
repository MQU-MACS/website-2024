import Timeline from "@/components/Timeline";
import DropdownComponent from "@/components/Dropdown";
export default function Team() {
  return (
    <div className="">
      <h2 className="text-4xl italic font-bold  text-center">
        Executive <span className="text-primary-blue">Team</span>
      </h2>
      <div className="hidden md:block">
        <Timeline></Timeline>
      </div>
      <div className="md:hidden">
        <DropdownComponent></DropdownComponent>
      </div>
    </div>
  );
}
