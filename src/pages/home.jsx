import React from "react";
import MobHeroImage from "../assets/svgs/Mobile";
import { Header } from "../components/Header";
import { HeroContent } from "../components/Hero";
import { Features } from "../components/Features";
import { MoreOffers } from "../components/MoreOffers";
import { JoinCommunity } from "../components/comm";
import { Footer } from "../components/Footer";
import HeroImage from "../assets/Images/HeroImage.svg";

const Home = () => {
  return (
    <>
      <div className="app min-h-screen">
        <section className="hero-section mix-bg  lg:h-auto">
          <Header />
          <div className="wrapper p-4 flex justify-center items-center flex-col md:w-screen">
            <div className="md:flex md:flex-col lg:flex-row md:justify-between lg:mx-12">
              <div className="hero-content md:mt-16  md:w-full lg:w-1/2 md:flex flex-col md:items-center lg:items-start">
                <HeroContent />
                <form
                  action=""
                  className="mt-5 py-px w-full max-w-[458px] flex flex-col "
                >
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="placeholder:text-center text-center text-black md:h-12 font-mont w-full rounded-full outline-lYellow"
                  />{" "}
                  <button
                    type="submit"
                    className="text-center font-mont bg-lYellow w-full h-10 md:h-12 rounded-full mt-2 hover:bg-drkYellow"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className=" md:w-full lg:w-1/2 flex md:justify-center">
                <div className="hero-image w-full flex justify-center mt-10 md:hidden">
                  <MobHeroImage />
                </div>
                <div className="hero-image-desktop hidden md:block mt-14">
                  <img
                    src={HeroImage}
                    alt=""
                    className="w-[80%] h-auto ml-10"
                  />
                </div>
              </div>
            </div>
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
