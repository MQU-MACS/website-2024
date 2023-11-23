import Sponsor from "@/app/sections/Sponsor";
import CTA from "@/app/sections/CTA";
import Contact from "./sections/Contact";
import Nav from "@/components/Nav";
import Home1 from "@/app/sections/Home";
import React from "react";
import About from "@/app/sections/About";
import Team from "@/app/sections/Team";
export default function Home() {
  return (
    <main className=" bg-primary-black ">
      <Nav />
      <section className="">
        <Home1 />
      </section>
      <section id="about" className="padding">
        <About />
      </section>
      <section id="team" className=" max-container padding ">
        <Team></Team>
      </section>
      <section id="sponsor" className="max-container padding">
        <Sponsor />
      </section>

      <section id="cta" className="">
        <CTA />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
    </main>
  );
}
