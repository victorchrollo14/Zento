import React from "react";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import meme from "../assets/Images/meme.jpeg";

const Meme = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-light-green">
      <Header />
      <section className="meme-section   bg-light-green text-drkPurple">
        <div className="content flex flex-col gap-4 justify-center items-center mt-24 py-10">
          <h1 className="uppercase font-mont  font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-5 drop-shadow-2xl ">Coming Soon</h1>
          <img
            src={meme}
            alt="meme Image "
            className="w-[90vw]  max-w-3xl rounded-lg"
          />
          <h1 className="font-mont p-4 md:max-w-[80%] lg:max-w-[50%] text-center text-base  sm:text-lg sm:font-semibold">
          We're thrilled to share that we're in the final stages of testing our platform in a closed beta stage. We're taking a little extra time to ensure everything is perfect before unveiling it to you. Stay tuned for an exceptional banking experience coming your way soon! 🤞🏻🤞🏻🤞🏻
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Meme;
