import React from 'react'

export const HeroContent = () => {
    return (
      <div className="hero-content  mt-8 flex flex-col md:justify-center md:items-center lg:items-start">
        <h1 className="font-black font-mont text-black text-6xl  text-left hero-header md:text-center  lg:text-left">
          Banking Reimagined... <br />
          For the <span className="text-light-green">Gen-Z </span>
          <br />
          By the <span className="text-light-green">Gen-Z.</span>
        </h1>
        <h3 className="font-normal text-left  font-mont mt-4  max-w-sm md:text-center lg:text-left">
          <span className="text-drkYellow font-bold body-text">The Gen-Z Banking App,</span>{" "}
          Subscribe to our newsletter to get stay in loop with latest content
          related to finances.
        </h3>
      </div>
    );
  };
