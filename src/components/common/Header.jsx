import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import logo from "../../assets/Images/logo.png";
import MobileNav from "../MobileNav";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header-container fixed top-0 z-10 w-full">
      <Navbar
        fluid
        rounded
        className="p-0 bg-black  rounded-[25px] py-4 sm:py-5  "
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src={logo}
            alt="Zento Logo"
            className="w-32 h-auto md:w-40  sm:ml-8"
          />
        </Navbar.Brand>
        {showNav ? <MobileNav setShowNav={setShowNav} /> : null}
        <Menu setShowNav={setShowNav} />
        <NavLinks setShowNav={setShowNav} />
      </Navbar>
    </div>
  );
};

const Menu = ({ setShowNav }) => {
  return (
    <div className="menu mx-3 sm:hidden" onClick={() => setShowNav(true)}>
      <svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 6.25a1.25 1.25 0 000 2.5h20a1.25 1.25 0 100-2.5H5zM6.25 15c0-.69.56-1.25 1.25-1.25h15a1.25 1.25 0 110 2.5h-15c-.69 0-1.25-.56-1.25-1.25zm2.5 7.5c0-.69.56-1.25 1.25-1.25h10a1.25 1.25 0 110 2.5H10c-.69 0-1.25-.56-1.25-1.25z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

const NavLinks = ({ setShowNav }) => {
  return (
    <nav className="navlinks gap-3 text-white mx-4 hidden sm:flex sm:mr-8 sm:gap-7">
      <Link to="/" className="font-mont text-base cursor-pointer">
        Home
      </Link>

      <Link to="/About" className="font-mont text-base cursor-pointer">
        About
      </Link>

      <Link to="/community" className="font-mont text-base cursor-pointer">
        Community
      </Link>
      <Link2
        to="Contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="font-mont text-base cursor-pointer"
      >
        Contact
      </Link2>
    </nav>
  );
};
