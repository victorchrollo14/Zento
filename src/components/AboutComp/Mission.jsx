import React from "react";
import { MissionImage } from "../../assets/svgs/Mission";

export const Mission = () => {
  return (
    <section>
      <div
        className={` bg-drkPurple text-drkYellow w-full flex justify-center items-center md:h-[500px] xl:h-[650px]`}
      >
        <div className="list-inside-wrapper py-[10%] md:w-[80%] md:py-10 flex flex-col gap-7 items-center md:flex-row  justify-between max-w-[1200px]">
          <div className="feat-content  w-[90%] max-w-md md:w-1/2">
            <h1 className="uppercase font-mont font-bold text-[28px] cap-header">
              On a Mission
            </h1>
            <p className="font-mont text-base">
              We at ZENTO are on a mission to make a financially smart
              generation and empower them on their financial journey. By
              co-creating a revolutionary banking experience combined of
              innovation, simplicity, and smart financial solutions, unlocking a
              brighter future together.
            </p>
          </div>
          <div className="image w-[90%]  max-w-lg md:w-1/2 xl:w-[700px]">
            <MissionImage />
          </div>
        </div>
      </div>
    </section>
  );
};
