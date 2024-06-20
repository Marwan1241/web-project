import React from "react";
import Hero from "./Hero";
import LatestSection from "./Latest";
import Clients from "./Clients";
import Testimonial from "./Testimonials";
import GffTeaser from "./GffTeaser";

function Home() {
  return (
    <>
      {/* <Hero text="A full-service marketing and production house working with ambitious people to create the not yet." /> */}
      <GffTeaser />
      <LatestSection />
      <Clients />
      <Testimonial />
    </>
  );
}

export default Home;
