import React from "react";
import { WhatsAppButton } from "../assets/svgs/WhatsApp";
import { LinkedIn } from "../assets/svgs/linkedIn";
import { Section, AnimateHeader, AnimateSub } from "./animation";
import { motion } from "framer-motion";

export const JoinCommunity = () => {
  return (
    <Section>
      <section className="join-comm-section flex w-screen justify-center items-center p-12   bg-white">
        <div className="inner-content m-4">
          <AnimateHeader>
            <h1 className="font-mont font-bold text-[28px] uppercase text-center leading-[30px] cap-header">
              Join our <br />
              community
            </h1>
          </AnimateHeader>

          <AnimateSub>
            <div className="buttons w-[90vw] flex flex-col justify-center gap-4 my-8 max-w-md ">
              <a
                href="https://chat.whatsapp.com/CBCXsN0bjxYHpjTSFbvQXa"
                className="shake-button"
              >
                <WhatsAppButton />
              </a>

              <a
                href="https://www.linkedin.com/company/zento.money/"
                className="shake-button"
              >
                <LinkedIn />
              </a>
            </div>
          </AnimateSub>
        </div>
      </section>
    </Section>
  );
};
