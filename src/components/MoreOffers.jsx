import React from "react";
import { moreOffersData } from "./data";

export const MoreOffers = () => {
  return (
    <section className="more-offers-section ">
      <h1 className="uppercase font-mont font-bold text-[28px] text-center cap-header">
        We Have More
        <br /> Offers for you
      </h1>
      <h3 className="font-mont text-center text-base ">
        Here are some offers that you can’t <br />
        refuse!!
      </h3>
      <ul className="more-offers py-16 bg-drkstPurple my-6 flex flex-col gap-12 items-center justify-center">
        <ListItems />
      </ul>
    </section>
  );
};

const ListItems = () => {
  const items = moreOffersData.map(({ title, subtitle }) => {
    return (
      <li key={crypto.randomUUID()} className="flex flex-col items-center px-4">
        <h1 className="capitalize text-neon-green font-mont font-bold text-[28px] max-w-[320px]  text-center  mb-2">
          {title}
        </h1>
        <h3 className="font-mont font-medium text-center text-white max-w-sm">
          {subtitle}
        </h3>
      </li>
    );
  });
  return items;
};
