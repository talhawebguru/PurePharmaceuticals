"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import MenuOpen from "@/public/images/menuOpen.svg";
import MenuClose from "@/public/images/menuClose.svg";
import RightArrow from "@/public/images/rightArrowGreen.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const [areaDropdown, setAreaDropdown] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimatingOut(true); // Start the closing animation
      setTimeout(() => {
        setIsAnimatingOut(false);
        setIsOpen(false); // Close the menu after the animation completes
      }, 400); // Duration of the moveOut animation (in milliseconds)
    } else {
      setIsOpen(true); // Open the menu
    }
  };

  const handleLinkClick = () => {
    toggleMenu();
  };

  const handleAboutHover = () => {
    setAboutDropdown(true);
  };

  const handleAboutLeave = () => {
    setAboutDropdown(false);
  };

  const handleContactHover = () => {
    setContactDropdown(true);
  };

  const handleContactLeave = () => {
    setContactDropdown(false);
  };

  const handleAreaHover = () => {
    setAreaDropdown(true);
  };

  const handleAreaLeave = () => {
    setAreaDropdown(false);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className={`pt-[20px] xl:px-[90px] lg:px-[40px] px-5 `}>
        <div className="hidden 2xl:max-w-[1440px] 2xl:mx-auto lg:flex flex-wrap justify-between text-neutral-dark-gray text-[13px] font-primary ">
          <div className="leading-5 font-normal ">
            <span>info@thepurepharma.com</span>
            <span> / </span>
            <span>+97125067345</span>
          </div>
          <div className="flex gap-2 ">
            <SocialIcons icon={<FaFacebookF />} />
            <SocialIcons icon={<FaTwitter />} />
            <SocialIcons icon={<AiFillInstagram />} />
            <SocialIcons icon={<FaYoutube />} />
          </div>
        </div>
        <div className="w-full 2xl:max-w-[1440px] 2xl:mx-auto h-[0px] opacity-40 border border-neutral-gray mt-2 mb-5 hidden lg:block"></div>

        <nav className="flex items-center justify-between 2xl:max-w-[1440px] 2xl:mx-auto  ">
          <div>
            <Link href="/" className="xl::w-[222px]">
              <Image
                src={Logo}
                alt="StomaFlex Logo"
                className="xl:w-[222px] lg:w-[200px]"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="xl:mr-[62px] 2xl:mr-[138px] lg:mr-[40px] sm:mr-10 mr-4 text-neutral-gray text-base font-normal font-arial leading-normal">
              <ul className="flex 2xl:gap-9 xl:gap-6 lg:gap-4">
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "text-primary font-bold" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li
                  onMouseEnter={handleAboutHover}
                  onMouseLeave={handleAboutLeave}
                  className="relative"
                >
                  <Link
                    href="#"
                    className={`flex items-center ${
                      pathname === "/about" ||
                      pathname === "/about/company" ||
                      pathname === "/about/corporate"
                        ? "text-primary font-bold"
                        : ""
                    }`}
                  >
                    About Us{" "}
                    <svg
                      className="h-5 w-5 ml-[7px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {aboutDropdown && (
                    <ul
                      className={`absolute w-[160px] left-0 pt-6 z-20  rounded shadow-lg bg-white `}
                    >
                      <li className=" hover:bg-primary hover:text-white ">
                        <Link href="/about/company" className="block px-3 py-2">
                          Company Profile
                        </Link>
                      </li>
                      <li className=" hover:bg-primary hover:text-white ">
                        <Link
                          href="/about/corporate"
                          className="block px-3 py-2"
                        >
                          Corporate
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={handleContactHover}
                  onMouseLeave={handleContactLeave}
                  className="relative"
                >
                  <Link href="/product" className="flex items-center">
                    Product
                    <svg
                      className="h-5 w-5 ml-[7px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {contactDropdown && (
                    <ul className="absolute w-[200px] left-0 pt-6 z-20  rounded shadow-lg">
                      <li
                        className={`flex items-center relative px-3 py-2 bg-white  hover:bg-primary hover:text-white`}
                        onMouseEnter={handleAreaHover}
                        onMouseLeave={handleAreaLeave}
                      >
                        Oral Solid Dosage
                        <svg
                          className="h-5 w-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        {areaDropdown && (
                          <ul
                            className={`absolute left-full -top-2 mt-2 rounded lg:w-[200px] shadow-lg text-black bg-white`}
                          >
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Antihypertensives
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Antihistamines
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Erectile Dysfunction
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Lipid Lowering Agents
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Antibiotics
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Analgesics
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Anti-Emetics
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/news"
                    className={
                      pathname === "/news" ? "text-primary font-bold" : ""
                    }
                  >
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className={
                      pathname === "/careers" ? "text-primary font-bold" : ""
                    }
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={
                      pathname === "/contact" ? "text-primary font-bold" : ""
                    }
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-[20px] py-3 text-primary justify-center items-center gap-3 inline-flex border border-primary rounded-lg text-base font-medium font-primary">
              Shop Now <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="">
              {isOpen ? (
                <Image src={MenuClose} alt="Menu Close Icon" />
              ) : (
                <Image src={MenuOpen} alt="Menu Open Icon" />
              )}
            </button>
          </div>
        </nav>
        <div className="w-full h-[0px] opacity-40 border border-[#0000004D] lg:hidden mt-5"></div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`lg:hidden absolute left-0 w-full z-20 bg-white flex items-center flex-col   transition-all duration-700 ease-in-out  ${
              isAnimatingOut ? "animationMoveOut " : "animationMove h-[86vh]"
            }`}
          >
            <ul className="flex items-center w-full flex-col gap-4 pt-4 text-black text-base font-normal font-secondary leading-tight">
              <li>
                <Link href="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <div className=" w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className="relative flex flex-col items-center w-full">
                <div className="flex justify-center items-center">
                  <Link
                    href="#"
                    className="flex items-center"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                  <svg
                    onClick={() => toggleAccordion(0)}
                    className="h-5 w-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeIndex === 0 && (
                  <div className="w-full">
                    <ul
                      className={`w-full flex flex-col items-center justify-center `}
                    >
                      <div className="w-full h-[0px] opacity-40  border-2 mt-2 border-[#0000004D] "></div>

                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/company" onClick={handleLinkClick}>
                          Company Profile
                        </Link>
                      </li>
                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/corporate" onClick={handleLinkClick}>
                          Corporate
                        </Link>
                      </li>

                      <div className="w-full h-[0px] opacity-40  border-2 mt-2 border-[#0000004D] "></div>
                    </ul>
                  </div>
                )}
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className="relative flex flex-col items-center w-full">
                <div className="flex items-center justify-center w-full">
                  <Link
                    href="/product"
                    className="flex items-center"
                    onClick={handleLinkClick}
                  >
                    Products
                  </Link>
                  <svg
                    onClick={() => toggleAccordion(1)}
                    className="h-5 w-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeIndex === 1 && (
                  <div className="w-full">
                    <ul className="  ">
                      <div className="w-full h-[0px] opacity-40  border-2 mt-2 border-[#0000004D] "></div>

                      <li
                        className={`flex flex-col items-center justify-center  px-3 py-2 $`}
                        onMouseEnter={handleAreaHover}
                        onMouseLeave={handleAreaLeave}
                      >
                        <div className="flex justify-center items-center">
                          Oral Solid Dosage
                          <svg
                            className="h-5 w-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        {areaDropdown && (
                          <ul
                            className={` mt-2 flex flex-col items-center justify-center  text-black `}
                          >
                            <li className="px-3 py-2" onClick={handleLinkClick}>
                              Antihypertensives
                            </li>
                            <li className="px-3 py-2" onClick={handleLinkClick}>
                              Antihistamines
                            </li>
                            <li className="px-3 py-2" onClick={handleLinkClick}>
                              Erectile Dysfunction
                            </li>
                            <li className="px-3 py-2" onClick={handleLinkClick}>
                              Lipid Lowering Agents
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className="relative">
                <Link href="/news" onClick={handleLinkClick}>
                  News & Events
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>
              <li className="relative">
                <Link href="/careers" onClick={handleLinkClick}>
                  Careers
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className="relative">
                <Link href="/contact" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>
            </ul>
            <div className="px-[25px] mt-12 py-3 bg-primary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </div>
            <div className="flex gap-2 mt-10 mb-24">
              <SocialIcons icon={<FaFacebookF />} />
              <SocialIcons icon={<FaTwitter />} />
              <SocialIcons icon={<AiFillInstagram />} />
              <SocialIcons icon={<FaYoutube />} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
