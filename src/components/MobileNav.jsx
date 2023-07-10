import React from "react";
import { Link } from "react-scroll";

const MobileNav = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`mobile-nav fixed top-0 right-0 -translate-y-5 ${
        showNav ? "inset-0 overflow-hidden" : ""
      }  h-screen w-screen bg-light-green border-l border-t border-b border-b-drkPurple border-gray-300`}
    >
      <div className="flex justify-end pt-5 px-2">
        <button className="text-drkPurple" onClick={() => setShowNav(false)}>
          <svg
            className="w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul className="p-3">
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
