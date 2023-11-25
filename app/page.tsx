import Sponsor from "@/app/sections/Sponsor";
import CTA from "@/app/sections/CTA";
import Contact from "./sections/Contact";
import Nav from "@/components/Nav";
import Home1 from "@/app/sections/Home";
import React from "react";
import About from "@/app/sections/About";
import Team from "@/app/sections/Team";
import Animation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="bg-primary-black">
      <Nav />
      <Animation animationDirection="top-to-bottom">
        <section className="">
          <Home1 />
        </section>
      </Animation>

      <Animation animationDirection="right-to-left">
        <section id="about" className="padding">
          <About />
        </section>
      </Animation>

      <section id="team" className="max-container padding">
        <Team />
      </section>

      <Animation animationDirection="top-to-bottom">
        <section id="sponsor" className="max-container padding">
          <Sponsor />
        </section>
      </Animation>

      <Animation animationDirection="left-to-right">
        <section id="cta" className="">
          <CTA />
        </section>
      </Animation>
      <Animation animationDirection="bottom-to-top">
        <section id="contact" className="">
          <Contact />
        </section>
      </Animation>
    </main>
  );
}
