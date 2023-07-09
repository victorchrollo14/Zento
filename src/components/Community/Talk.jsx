import React from "react";
import { FinanceImage } from "../../assets/svgs/financeEd";

export const FinanceTalk = () => {
  return (
    <section>
      <div
        className={` bg-drkYellow text-drkPurple w-full flex justify-center items-center md:h-[500px] xl:h-[650px]`}
      >
        <div className="list-inside-wrapper py-[10%] md:w-[80%] md:py-10 flex flex-col gap-7 items-center md:flex-row-reverse  justify-between max-w-[1200px]">
          <div className="feat-content  w-[90%] max-w-md md:w-1/2">
            <h1 className="uppercase font-mont font-bold text-[28px] cap-header mb-2">
              Financial Education For All.  🎓
            </h1>
            <p className="font-mont text-base">
              "The Finance Education for All lecture series provides college
              students with essential financial knowledge, equipping them with
              skills in saving, investing in markets, effective money
              management, understanding market risks, and more to thrive in
              today's dynamic financial world.{" "} <br />
              <span className="font-semibold ">
                Seminar’s At your College in collaboration with NSDL, CDSL and
                SEBI, You can Reach out to us through an Email
              </span>{" "}
              "
            </p>
            <a href="mailto:">
              <button className="bg-drkPurple h-12 w-44 rounded-full text-drkYellow font-mont font-bold mt-3">
                Send Mail
              </button>
            </a>
          </div>
          <div className="image w-[90%]  max-w-lg md:w-1/2 xl:w-[700px]">
            <FinanceImage />
          </div>
        </div>
      </div>
    </section>
  );
};
