import React from "react";
import { Intro } from "../components/AboutComp/Intro";
import { Mission } from "../components/AboutComp/Mission";
import TeamSection from "../components/AboutComp/Team";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { motion } from "framer-motion";
import { Section } from "../components/animation";

const About = () => {
  return (
    <>
      <Header />
      <motion.main
        layoutId="page1"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1, y: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="app min-h-screen bg-lYellow overflow-hidden "
      >
        <Intro />

        <Section>
          <Mission />
        </Section>
        <Section>
          <TeamSection />
        </Section>
        <Footer />
      </motion.main>
    </>
  );
};

export default About;
