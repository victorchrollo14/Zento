import React from "react";
import { moreOffersData } from "./data";

export const MoreOffers = () => {
  return (
    <section className="more-offers-section mt-16">
      <h1 className="uppercase font-mont  text-center font-bold cap-header ">
        We Have More
        <br /> Offers for you
      </h1>
      <h3 className="font-mont text-center md:text-[28px] mt-2 md:mt-5 leading-tight ">
        Here are some offers that you can’t <br />
        refuse 🔥🔥🔥
      </h3>
      <ul className="more-offers py-16 bg-drkstPurple my-6 flex flex-col gap-20 items-center justify-center ">
        <ListItems />
      </ul>
    </section>
  );
};

const ListItems = () => {
  let index = 0;
  const items = moreOffersData.map(({ title, subtitle, image }) => {
    index += 1;
    return (
      <li
        key={crypto.randomUUID()}
        className={
          index % 2 === 0
            ? `flex flex-col items-center px-4 md:flex-row-reverse md:gap-20`
            : `flex flex-col items-center px-4 md:flex-row md:gap-20`
        }
      >
        <div className="image-section w-full h-auto mb-10 max-w-[400px]">
          {typeof image !== "string" ? (
            image
          ) : (
            <img src={image} alt={`image of ${title}`} />
          )}
        </div>
        <div className="moreoffers-content flex flex-col items-center">
          <h1 className="capitalize text-neon-green font-mont font-bold text-[28px] max-w-[320px] md:max-w-xl  text-center  mb-2 cap-header">
            {title}
          </h1>
          <h3 className="font-mont font-semibold text-center text-white max-w-sm">
            {subtitle}
          </h3>
        </div>
      </li>
    );
  });
  return items;
};
