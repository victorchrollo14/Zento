import React from "react";
import { Intro } from "../components/AboutComp/Intro";
import { Mission } from "../components/AboutComp/Mission";
import TeamSection from "../components/AboutComp/Team";
import { Footer } from "../components/common/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.main
      initial={{ y: "100%"}}
      animate={{ y: "0%"}}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="app min-h-screen bg-lYellow overflow-hidden"
    >
      <Intro />
      <Mission />
      <TeamSection />
      <Footer />
    </motion.main>
  );
};

export default About;
