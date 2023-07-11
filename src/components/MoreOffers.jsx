import React from "react";
import { moreOffersData } from "./data";
import { Section, AnimateHeader, AnimateSub, SlideInAnime } from "./animation";

export const MoreOffers = () => {
  return (
    <section className="more-offers-section mt-16">
      <Section>
        <AnimateHeader>
          <h1 className="uppercase font-mont  text-center font-bold cap-header mt-20">
            We Have More
            <br /> Offers for you
          </h1>
        </AnimateHeader>
        <AnimateSub>
          <h3 className="font-mont text-center md:text-[28px] mt-2 md:mt-5 leading-tight ">
            Here are some offers that you can’t <br />
            refuse 🔥🔥🔥
          </h3>
        </AnimateSub>
      </Section>

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
    let translateImg = index % 2 === 0 ? "60px" : "-60px";
    return (
      <Section>
        <li
          key={crypto.randomUUID()}
          className={
            index % 2 === 0
              ? `flex flex-col items-center px-4 md:flex-row-reverse md:gap-20`
              : `flex flex-col items-center px-4 md:flex-row md:gap-20`
          }
        >
          {/* <SlideInAnime translate={translateImg}> */}
          <div className="image-section w-full h-auto mb-10 max-w-[400px]">
            {" "}
            {typeof image !== "string" ? (
              image
            ) : (
              <img src={image} alt={`image of ${title}`} />
            )}
          </div>
          {/* </SlideInAnime> */}

          <div className="moreoffers-content flex flex-col items-center">
            {/* <AnimateHeader> */}
            <h1 className="capitalize text-neon-green font-mont font-bold text-[28px] max-w-[320px] md:max-w-xl  text-center  mb-2 cap-header">
              {title}
            </h1>
            {/* </AnimateHeader> */}

            <h3 className="font-mont font-semibold text-center text-white max-w-sm">
              {subtitle}
            </h3>
          </div>
        </li>
      </Section>
    );
  });
  return items;
};
