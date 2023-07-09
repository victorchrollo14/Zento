import React from "react";
import { ZeroOne } from "../components/Community/ZeroOne";
import { FinanceTalk } from "../components/Community/Talk";
import { JoinCommunity } from "../components/comm";
import { Footer } from "../components/common/Footer";

const Community = () => {
  return (
    <>
      <div className="app min-h-screen w-screen overflow-hidden relative">
        <ZeroOne />
        <FinanceTalk />
        <JoinCommunity />
        <Footer />
      </div>
    </>
  );
};

export default Community;
