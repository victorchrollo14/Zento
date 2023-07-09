import React from "react";
import { Intro } from "../components/AboutComp/Intro";
import { Mission } from "../components/AboutComp/Mission";
import TeamSection from "../components/AboutComp/Team";
import { Footer } from "../components/common/Footer";

const About = () => {
  return (
    <div className="app min-h-screen bg-lYellow overflow-hidden">
      <Intro />
      <Mission />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
