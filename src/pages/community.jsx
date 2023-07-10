import React from "react";
import { ZeroOne } from "../components/Community/ZeroOne";
import { FinanceTalk } from "../components/Community/Talk";
import { JoinCommunity } from "../components/comm";
import { Footer } from "../components/common/Footer";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <>
      <motion.div
        className="app min-h-screen w-screen overflow-hidden bg-drkBlue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
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
