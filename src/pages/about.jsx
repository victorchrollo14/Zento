import React from "react";
import { Intro } from "../components/AboutComp/Intro";
import { Mission } from "../components/AboutComp/Mission";

const About = () => {
  return (
    <div className="app min-h-screen">
      <Intro />
      <Mission />
    </div>
  );
};

export default About;
