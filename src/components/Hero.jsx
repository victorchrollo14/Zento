import React from 'react'

export const HeroContent = () => {
    return (
      <div className="hero-content  mt-8 flex flex-col ">
        <h1 className="font-bold font-mont text-black text-4xl  text-left">
          Banking Reimagined... <br />
          For the <span className="text-light-green">Gen-Z </span>
          <br />
          By the <span className="text-light-green">Gen-Z.</span>
        </h1>
        <h3 className="font-normal text-left  font-mont mt-4  max-w-sm">
          <span className="text-drkYellow font-bold ">The Gen-Z Banking App,</span>{" "}
          Subscribe to our newsletter to get stay in loop with latest content
          related to finances.
        </h3>
      </div>
    );
  };
