import React from "react";
import { featuresData } from "./data";
import { Form } from "./form";
import { Section, AnimateHeader, AnimateSub } from "./animation";
import { delay, motion } from "framer-motion";

export const Features = () => {
  return (
    <section className="features-section my-16 mx-4  md:my-12 lg:mx-12">
      <header className="mt-32">
        <AnimateHeader key="Features Header">
          <h1 className="uppercase font-mont font-bold text-[28px] text-center cap-header ">
            our features
          </h1>
        </AnimateHeader>
        <AnimateSub>
          <h3 className="font-mont text-center text-base ">
            Unlock a World of Possibilities with <br />
            our Powerful Features
          </h3>
        </AnimateSub>
      </header>
      <ul className="features ">
        <ListItems />

        <li
          key={crypto.randomUUID()}
          className="cta flex justify-center  bg-drkPurple text-white rounded-xl py-12  lg:rounded-full md:py-16 lg:py-24"
        >
          <div className="w-3/4 flex gap-3 items-center justify-center flex-col">
            <AnimateHeader>
              <h1 className="capitalize font-mont font-bold normal-header-clamp  text-center md:max-w-lg lg:max-w-4xl leading-tight">
                Join The WaitList to get updates On The Product{" "}
              </h1>
            </AnimateHeader>
            <AnimateSub>
              <Form />
            </AnimateSub>
          </div>
        </li>
      </ul>
    </section>
  );
};

const ListItems = () => {
  let id = 0;

  let items = featuresData.map(
    ({ idName, title, subtitle, content, bgColor, textColor, image }) => {
      id++;
      let translateText = "-30px";
      let translateImg = "60px";

      let classList = `list-inside-wrapper py-[10%] md:py-10 sm:w-4/5 flex flex-col gap-7 items-center md:flex-row  justify-between  lg:mx-16 xl:max-w-[1000px]`;
      if (id % 2 == 0) {
        classList = `list-inside-wrapper py-[10%] md:py-10 sm:w-4/5 flex flex-col gap-7 items-center md:flex-row-reverse  justify-between  lg:mx-16 xl:max-w-[1000px]`;
        translateText = "30px";
        translateImg = "-60px";
      }

      return (
        <li
          id={idName}
          key={crypto.randomUUID()}
          className={` my-5 ${bgColor} ${textColor} py-5 sm:py-0  rounded-xl w-full flex justify-center items-center md:h-[500px] xl:h-[650px]`}
        >
          <div className={classList}>
            <div
              className={`feat-content  w-[90%] max-w-md md:w-1/2 ${
                idName !== "Scan-Feat" ||
                "lg:-translate-y-10 xl:-translate-y-16"
              }`}
            >
              <motion.h1
                initial={{ translateX: translateText, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.5 }}
                className="uppercase font-mont font-bold text-[28px] cap-header mb-3"
              >
                {title}
              </motion.h1>
              <motion.div
                initial={{ translateX: translateText, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeIn", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-mont font-semibold text-xl mb-2">
                  {subtitle}
                </h3>
                <p className="font-mont text-base">{content}</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ translateX: translateImg, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeIn", delay: 0.2 }}
              viewport={{ once: true }}
              className="image w-[90%]  max-w-lg md:w-1/2 xl:w-[700px]"
            >
              {image}
            </motion.div>
          </div>
        </li>
      );
    }
  );
  return items;
};
