import React from "react";
import logo from "../assets/Images/logo.png";
import { Twitter, LinkedIn, Facebook, Instagram } from "../assets/svgs/socials";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white p-8 pt-10 sm:p-16 ">
        <div className="container mx-auto flex flex-wrap justify-between gap-10 ">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 md:w-1/3   md:mb-0 md:min-w-[320px]">
            <img src={logo} alt="zento logo image" className="w-32 h-auto sm:w-36 md:w-48" />
            <p className="mt-2 w-full font-mont text-left max-w-sm">
              The ultimate neobanking app for Gen Z. Experience seamless banking
              in one app with a wide range of money-related features. Simplify
              your financial journey with ZENTO today!
            </p>
          </div>

          {/* Pages Header */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6  md:mb-0">
            <h3 className="text-2xl font-bold mb-2 font-mont">Pages</h3>
            <ul className="font-mont text-base font-medium">
              <li className="mb-2  cursor-pointer">
                <a href="#">Home</a>
              </li>
              <li className="mb-2  cursor-pointer">
                <a href="#">About</a>
              </li>
              <li className="mb-2  cursor-pointer">
                <a href="#">Community</a>
              </li>
              <li className="mb-2  cursor-pointer">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Features Header */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6  md:mb-0">
            <h3 className="text-2xl font-bold mb-2 font-mont">Features</h3>
            <ul className="font-mont text-base font-medium">
              <li className="mb-2  cursor-pointer">
                {" "}
                <a href="/#">Scan and Pay</a>
              </li>
              <li className="mb-2  cursor-pointer">
                {" "}
                <a href="/#">Split Bills</a>
              </li>
              <li className="mb-2  cursor-pointer">
                {" "}
                <a href="/#">Money Insights</a>
              </li>
              <li className="mb-2  cursor-pointer">
                {" "}
                <a href="/#">Goal Based Savings</a>
              </li>
            </ul>
          </div>

          {/* Contact Header */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-20">
            <h3 className="text-2xl font-bold mb-2 font-mont">Contact</h3>
            <div className="font-mont text-base font-medium">
              <a href="mailto:" className="flex gap-2 ">
                {" "}
                <svg
                  className="min-w-[24px] w-[24px] h-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.644 4.8h15.9c1.5 0 2.256.708 2.256 2.148v10.104c0 1.428-.756 2.148-2.256 2.148h-15.9c-1.5 0-2.256-.72-2.256-2.148V6.948c0-1.44.756-2.148 2.256-2.148zm7.944 10.32l8.088-6.636c.288-.24.516-.792.156-1.284-.348-.492-.984-.504-1.404-.204l-6.84 4.632L5.76 6.996c-.42-.3-1.056-.288-1.404.204-.36.492-.132 1.044.156 1.284l8.076 6.636z"
                    fill="#fff"
                  />
                </svg>{" "}
                <span className="">help@zento.money</span>
              </a>
              <ul className="mt-2 flex fl">
                <a href="#">
                  <Twitter />{" "}
                </a>{" "}
                <a href="#">
                  <Facebook />{" "}
                </a>{" "}
                <a href="#">
                  <LinkedIn />
                </a>
                <a href="#">
                  <Instagram />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom w-screen bg-gray-900">
        <hr />
        <p className="w-full text-center text-gray-400 text-sm p-4 font-mont ">@Zento. All rights reserved</p>
      </div>
    </>
  );
};