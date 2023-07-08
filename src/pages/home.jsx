import React from "react";
import MobHeroImage from "../assets/svgs/Mobile";
import { Header } from "../components/Header";
import { HeroContent } from "../components/Hero";
import { Features } from "../components/Features";
import { MoreOffers } from "../components/MoreOffers";
import { JoinCommunity } from "../components/comm";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="app min-h-screen">
        <section className="hero-section bg-lBlue ">
          <Header />
          <div className="wrapper p-4 flex justify-center items-center flex-col">
            <HeroContent />
            <form action="" className=" mt-5 py-px w-full max-w-[458px]">
              <input
                type="email"
                placeholder="enter your email"
                className="placeholder:text-center text-center text-black font-mont w-full  rounded-full outline-lYellow"
              />{" "}
              <br />
              <button
                type="submit"
                className="text-center font-mont bg-lYellow w-full  h-10 rounded-full mt-2 hover:bg-drkYellow"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="hero-image w-full flex justify-center mt-10">
            <MobHeroImage />
          </div>
        </section>
        <Features />
        <MoreOffers />
        <JoinCommunity />
        <Footer />
      </div>
    </>
  );
};

export default Home;
