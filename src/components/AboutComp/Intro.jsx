import React from "react";
import { Header } from "../common/Header";
import AboutImage from "../../assets/Images/Aboutimage.svg";

export const Intro = () => {
  return (
    <>
      <section className="intro  bg-lYellow pb-10 h-auto lg:h-screen md:pb-20 2xl:h-auto 2xl:pb-28">
        <div className="content-wrapper  flex flex-col items-center justify-center  my-16 md:my-8 gap-10 ">
          <div className="image  lg:w-[600px] mt-10 md:mt-20 2xl:w-[600px]">
            <img src={AboutImage} alt="About us image" />
          </div>
          <div className="text-content flex flex-col items-center text-left mx-4 md:text-center max-w-xl lg:max-w-4xl ">
            <h1 className="capitalize cap-header  font-mont text-black  font-bold mb-5 ">
              A New Age NeoBank for GenZ built by GenZ in INDIA❤️
            </h1>
            <p className="text-base font-bold font-mont max-w-2xl">
              We help you seamlessly manage your finances, make payments, track
              and provide personalized features.{" "} <br />
              <span className="text-drkPurple">
                We Don’t make you wait in lines or during lunch breaks, we are
                there for you all the time <span className="text-3xl">🤝.</span>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
