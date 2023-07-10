import React from "react";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import meme from "../assets/Images/meme.jpeg";

const Meme = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-lBlue">
      <Header />
      <section className="meme-section min-h-screen  bg-lBlue text-drkstPurple">
        <div className="content flex flex-col justify-center items-center mt-24 py-10">
          <img
            src={meme}
            alt="meme Image "
            className="w-[90vw] max-w-3xl rounded-lg"
          />
          <h1 className="font-mont p-4 max-w-2xl text-center text-lg font-bold">
            "We're thrilled to share that we're in the final stages of testing
            our platform in a closed beta stage to bring you the best banking
            experience you came across. We're taking a little extra time to
            ensure everything is perfect before unveiling it to you. Stay tuned
            for an exceptional banking experience coming your way soon! 🤞🏻🤞🏻"
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Meme;
