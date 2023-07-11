import React from "react";
import MobHeroImage from "../assets/svgs/Mobile";
import { Header } from "../components/common/Header";
import { HeroContent } from "../components/Hero";
import { Features } from "../components/Features";
import { MoreOffers } from "../components/MoreOffers";
import { JoinCommunity } from "../components/comm";
import { Footer } from "../components/common/Footer";
import tabHeroImage from "../assets/Images/HeroImage.svg";
import desktopHero from "../assets/Images/desktopHero.svg";
import { Section } from "../components/animation";
import { useScroll, motion } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className=" bg-red-500 w-full h-3 fixed top-0 left-0 z-50 "
      /> */}

      <Header />
      <motion.main
        className="app min-screen absolute   overflow-hidden"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1, y: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <section className="hero-section mix-bg  lg:min-h-screen ">
          <div className="wrapper p-4 flex justify-center items-center flex-col md:w-screen ">
            <div className="lg:w-[92%]  md:flex md:flex-col lg:flex-row md:justify-between  mt-16">
              <div className="hero-content md:mt-16  md:w-full lg:w-1/2 2xl:w-[60vw] md:flex flex-col md:items-center lg:items-start">
                <HeroContent />
                <form
                  action=""
                  className="mt-5 py-px w-full max-w-[458px] flex flex-col "
                >
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="placeholder:text-center text-center text-black md:h-12 font-mont w-full rounded-full outline-lYellow 2xl:h-16 2xl:w-[500px] 2xl:text-2xl"
                  />{" "}
                  <button
                    type="submit"
                    className="text-center font-semibold font-mont bg-lYellow w-full h-10 md:h-12 2xl:h-16 2xl:w-[500px] 2xl:text-2xl rounded-full mt-2 hover:bg-drkYellow"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className=" md:w-screen lg:w-1/2 flex md:justify-center md:items-center 2xl:w-[580px]">
                <div className="hero-image w-full flex justify-center mt-10 md:hidden ">
                  <MobHeroImage />
                </div>
                <div className="hero-tab-desktop hidden md:block lg:hidden md:w-[80vw] mt-14">
                  <img
                    src={tabHeroImage}
                    alt=""
                    className="w-[90%] md:w-full lg:w-[80%] h-auto "
                  />
                </div>
                <div className="desktop-Image w-full hidden lg:block mt-16 ">
                  <img
                    src={desktopHero}
                    alt="Hero Image"
                    className="w-full h-auto"
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
      </motion.main>
    </>
  );
};

export default Home;
