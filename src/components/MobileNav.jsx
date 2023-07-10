import React from "react";
import { Link } from "react-scroll";

const MobileNav = ({ showNav, setShowNav, setShowHamNav }) => {
  return (
    <div
      className={`mobile-nav  fixed top-0 right-0 translate-x-[100vw] -translate-y-5 ${
        showNav
          ? "inset-0 overflow-hidden  slide-left"
          : "slide-out translate-x-[100vw] z-10"
      }  h-screen w-screen bg-light-green border-l border-t border-b border-b-drkPurple border-gray-300`}
    >
      <div className="flex justify-end pt-10 px-2"></div>
      <ul className="p-3 mt-10">
        <li className="border-b border-b-drkPurple py-5 pl-4  hover:bg-white">
          <a
            href="/"
            className="block text-drkPurple font-mont text-3xl font-semibold tracking-[-1.2px] "
          >
            Home
          </a>
        </li>
        <li className="border-b border-b-drkPurple py-5 pl-4 hover:bg-white">
          <a
            href="/about"
            className="block text-drkPurple font-mont text-3xl font-semibold tracking-[-1.2px] "
          >
            About
          </a>
        </li>
        <li className="border-b border-b-drkPurple py-5 pl-4 hover:bg-white">
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              console.log("clicked");
              setShowNav(false);
              setShowHamNav(true);
            }}
            className="block text-drkPurple font-mont text-3xl font-semibold tracking-[-1.2px] "
          >
            Contact
          </Link>
        </li>
        <li className="border-b border-b-drkPurple py-5 pl-4 hover:bg-white">
          <a
            href="/community"
            className="block text-drkPurple font-mont text-3xl font-semibold tracking-[-1.2px] "
          >
            Community
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
