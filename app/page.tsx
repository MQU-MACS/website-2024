import Sponsor from "@/app/sections/Sponsor";
import CTA from "@/app/sections/CTA";
import Contact from "./sections/Contact";
import Nav from "@/components/Nav";
import Home1 from "@/app/sections/Home";

export default function Home() {
  return (
    <main className=" bg-primary-black ">
      <Nav />
      <section className="max-container ">
        <Home1 />
      </section>
      <section className="max-container padding">
        <Sponsor />
      </section>

      <section className="max-container">
        <CTA />
      </section>
      <section className="">
        <Contact />
      </section>
    </main>
  );
}
