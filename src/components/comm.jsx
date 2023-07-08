import React from "react";
import { WhatsAppButton } from "../assets/svgs/WhatsApp";
import { LinkedIn } from "../assets/svgs/linkedIn";

export const JoinCommunity = () => {
  return (
    <section className="join-comm-section flex justify-center items-center mt-8 mb-2 md:m-12">
      <div className="inner-content m-4">
        <h1 className="font-mont font-bold text-[28px] uppercase text-center leading-[30px]">
          Join our <br />
          community
        </h1>
        <div className="buttons w-[90vw] flex flex-col justify-center gap-4 my-8 max-w-md ">
          <a href="">
            <WhatsAppButton />
          </a>
          <a href="">
            <LinkedIn />
          </a>
        </div>
      </div>
    </section>
  );
};
