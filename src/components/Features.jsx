import React from "react";
import { featuresData } from "./data";
import { Form } from "./form";

export const Features = () => {
  return (
    <section className="features-section my-16 mx-4">
      <header>
        <h1 className="uppercase font-mont font-bold text-[28px] text-center ">
          our features
        </h1>
        <h3 className="font-mont text-center text-base ">
          Unlock a World of Possibilities with <br />
          our Powerful Features
        </h3>
      </header>
      <ul className="features">
        <ListItems />
        <li className="cta flex gap-3 items-center justify-center flex-col bg-drkPurple text-white rounded-xl py-12 px-6">
          <h1 className="uppercase font-mont font-bold text-[24px]  text-center max-w-[370px]">
            Join The WaitList to get updates On The Product{" "}
          </h1>
          <Form />
        </li>
      </ul>
    </section>
  );
};

const ListItems = () => {
  let items = featuresData.map(
    ({ title, subtitle, content, bgColor, textColor }) => {
      return (
        <li
          key={crypto.randomUUID()}
          className={` my-5 ${bgColor} ${textColor} py-8 pl-5 pr-2 rounded-xl`}
        >
          <h1 className="uppercase font-mont font-bold text-[28px] ">
            {title}
          </h1>
          <h3 className="font-mont font-semibold text-xl mb-2">{subtitle}</h3>
          <p className="font-mont text-base">{content}</p>
        </li>
      );
    }
  );
  return items;
};
