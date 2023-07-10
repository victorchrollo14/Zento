import React from "react";
import { ZeroOne } from "../components/Community/ZeroOne";
import { FinanceTalk } from "../components/Community/Talk";
import { JoinCommunity } from "../components/comm";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <>
      <Header />
      <motion.div
        className="app min-h-screen w-screen overflow-hidden bg-drkBlue"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1, y: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <ZeroOne />
        <FinanceTalk />
        <JoinCommunity />
        <Footer />
      </motion.div>
    </>
  );
};

export default Community;
