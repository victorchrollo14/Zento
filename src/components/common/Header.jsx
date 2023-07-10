import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import logo from "../../assets/Images/logo.png";
import MobileNav from "../MobileNav";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import cross from "../../assets/Images/cross.svg";

export const Header = () => {
  const [showNav, setShowNav] = useState(null);
  const [showHamMenu, setShowHamMenu] = useState(true);
  const [isFixed, setIsFixed] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  const changeHeader = () => {
    let currentPos = window.scrollY;
    let show = prevScroll > currentPos;
    setPrevScroll(currentPos);
    setIsFixed(show);
  };

  useEffect(() => {
    if (showNav) {
      document.body.style.height = "100%";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style = "";
    }

    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  });

  return (
    <div
      className={`header-container header  z-10 w-full flex justify-center ${
        isFixed ? "slide-bottom fixed top-5" : "hidden"
      }`}
    >
      <Navbar
        fluid
        rounded
        className={`p-0 bg-black w-[95vw] rounded-[25px] md:rounded-[40px] py-4 sm:py-6 z-30  `}
      >
        <Navbar.Brand href="/" className="pl-5">
          <img
            src={logo}
            alt="Zento Logo"
            className="w-32 h-auto md:w-40  sm:ml-8"
          />
        </Navbar.Brand>

        {showHamMenu ? (
          <Menu setShowNav={setShowNav} setShowHamMenu={setShowHamMenu} />
        ) : (
          <Cancel setShowHamMenu={setShowHamMenu} setShowNav={setShowNav} />
        )}
        <NavLinks setShowNav={setShowNav} />
      </Navbar>
      <MobileNav
        showNav={showNav}
        setShowNav={setShowNav}
        setShowHamNav={setShowHamMenu}
      />
    </div>
  );
};

const Menu = ({ setShowNav, setShowHamMenu }) => {
  return (
    <div
      className="menu mx-3 sm:hidden pr-3"
      onClick={() => {
        setShowNav(true);
        setShowHamMenu(false);
      }}
    >
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

const Cancel = ({ setShowHamMenu, setShowNav }) => {
  return (
    <>
      <img
        className="h-auto w-[44px] mx-3 pr-3 "
        src={cross}
        alt=""
        onClick={() => {
          setShowHamMenu(true);
          setShowNav(false);
        }}
      />
    </>
  );
};

const NavLinks = () => {
  return (
    <nav className="navlinks gap-3 text-white mx-4 md:mx-16 hidden sm:flex sm:mr-8 sm:gap-7">
      <Link
        to="/"
        className="font-mont text-base cursor-pointer hover:text-light-green hover:scale-110 md:text-lg transition-all duration-150 ease-in"
      >
        Home
      </Link>

      <Link
        to="/About"
        className="font-mont text-base cursor-pointer hover:text-light-green hover:scale-110 md:text-lg  transition-all duration-150 ease-linear"
      >
        About
      </Link>

      <Link
        to="/community"
        className="font-mont text-base cursor-pointer hover:text-light-green hover:scale-110 md:text-lg transition-all duration-150 ease-in"
      >
        Community
      </Link>
      <Link2
        to="Contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="font-mont text-base cursor-pointer hover:text-light-green hover:scale-110 md:text-lg transition-all duration-150 ease-in"
      >
        Contact
      </Link2>
    </nav>
  );
};
