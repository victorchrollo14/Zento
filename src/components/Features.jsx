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
      <ul className="features ">
        <ListItems />
        <li className="cta flex justify-center   bg-drkPurple text-white rounded-xl py-12  lg:rounded-full md:py-16 lg:py-24">
          <div className="w-3/4 flex gap-3 items-center justify-center flex-col">
            <h1 className="capitalize font-mont font-bold normal-header-clamp  text-center md:max-w-lg lg:max-w-4xl leading-tight">
              Join The WaitList to get updates On The Product{" "}
            </h1>
            <Form />
          </div>
        </li>
      </ul>
    </section>
  );
};

const ListItems = () => {
  let items = featuresData.map(
    ({ title, subtitle, content, bgColor, textColor, image }) => {
      return (
        <li
          key={crypto.randomUUID()}
          className={` my-5 ${bgColor} ${textColor}  rounded-xl w-full flex justify-center items-center md:h-[500px] xl:h-[650px]`}
        >
          <div className="list-inside-wrappe py-[10%] md:py-10 sm:w-4/5 flex flex-col items-center md:flex-row  justify-center md:items-start lg:mx-16 ">
            <div className="feat-content  w-[90%] max-w-md md:w-1/2 md:mt-8 lg:mt-20">
              <h1 className="uppercase font-mont font-bold text-[28px] ">
                {title}
              </h1>
              <h3 className="font-mont font-semibold text-xl mb-2">
                {subtitle}
              </h3>
              <p className="font-mont text-base">{content}</p>
            </div>
            <div className="image w-[90%] max-w-md md:w-1/2">{image}</div>
          </div>
        </li>
      );
    }
  );
  return items;
};
