"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Logo from "@/public/images/logo.svg";
import MenuOpen from "@/public/images/menuOpen.svg";
import MenuClose from "@/public/images/menuClose.svg";
import RightArrow from "@/public/images/rightArrowGreen.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import SocialIcons from "./SocialIcons";
import { getCategories } from "@/app/services/api";

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
        console.log(response.data);
        if (response.data.length > 0) {
          setSelectedImage(response.data[0].categoryicon.url);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleAboutHover = () => {
    setAboutDropdown(true);
  };

  const handleAboutLeave = () => {
    setAboutDropdown(false);
  };

  const handleMegaMenuHover = () => {
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    setMegaMenuOpen(false);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className={`pt-[20px] xl:px-[90px] lg:px-[40px] px-5 `}>
        <motion.div
          className="hidden 2xl:max-w-[1440px] 2xl:mx-auto lg:flex flex-wrap justify-between text-neutral-dark-gray text-[13px] font-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
        <motion.div
          className="w-full 2xl:max-w-[1440px] 2xl:mx-auto h-[0px] opacity-40 border border-neutral-gray mt-2 mb-5 hidden lg:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <nav className="flex items-center justify-between 2xl:max-w-[1440px] 2xl:mx-auto">
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
                  onMouseEnter={handleMegaMenuHover}
                  onMouseLeave={handleMegaMenuLeave}
                  className="relative"
                >
                  <Link href="/category" className="flex items-center">
                    Products
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
                  {megaMenuOpen && (
                    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[1000px] mx-auto absolute left-[-480%] xl:left-[-400%] top-6 z-50">
                      <div className="w-1/4 bg-[#179f8e]/5 p-6 flex items-center justify-center">
                        <h2 className="text-3xl font-bold">
                          <span className="text-gray-700">Our </span>
                          <span className="text-[#179f8e]">Products</span>
                        </h2>
                      </div>
                      <div className="w-1/2 grid grid-cols-2 gap-4 p-6">
                        {categories.map((category, index) => (
                          <p
                            key={index}
                            className="cursor-pointer hover:text-[#179f8e] transition"
                            onMouseEnter={() =>
                              setSelectedImage(category.categoryicon.url)
                            }
                          >
                            <Link href={`/category/${category.slug}`}>
                              {category.name}
                            </Link>
                          </p>
                        ))}
                      </div>
                      <div className="w-1/4 flex items-center justify-center p-6">
                        <motion.img
                          key={selectedImage}
                          src={`${process.env.NEXT_PUBLIC_API_URL}${selectedImage}`}
                          alt="Category"
                          className="w-24 h-36 object-contain"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
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
            <motion.div
              className="px-[20px] py-3 text-primary justify-center items-center gap-3 inline-flex border border-primary rounded-lg text-base font-medium font-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now <Image src={RightArrow} alt="Right Arrow" />
            </motion.div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} aria-label="Toggle mobile menu">
              {isOpen ? (
                <Image src={MenuClose} alt="Menu Close Icon" />
              ) : (
                <Image src={MenuOpen} alt="Menu Open Icon" />
              )}
            </button>
          </div>
        </nav>
        <motion.div
          className="w-full h-[0px] opacity-40 border border-[#0000004D] lg:hidden mt-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 p-6 lg:hidden overflow-y-auto"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={handleLinkClick}
                >
                  <Image
                    src={Logo}
                    alt="Pure Pharmaceuticals Logo"
                    className="h-10 w-40 object-contain"
                  />
                </Link>
                <button onClick={toggleMenu} aria-label="Close mobile menu">
                  <Image src={MenuClose} alt="Menu Close Icon" />
                </button>
              </div>

              <motion.nav
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <ul className="flex flex-col gap-2 text-lg font-medium text-neutral-gray">
                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <Link
                      href="/"
                      className={`hover:text-primary cursor-pointer block ${
                        pathname === "/" ? "text-primary font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`cursor-pointer ${
                          pathname === "/about" ||
                          pathname === "/about/company" ||
                          pathname === "/about/corporate"
                            ? "text-primary font-bold"
                            : ""
                        }`}
                      >
                        About Us
                      </span>
                      <svg
                        onClick={() => toggleAccordion(0)}
                        className={`h-5 w-5 transition-transform cursor-pointer ${
                          activeIndex === 0 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <AnimatePresence>
                      {activeIndex === 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 ml-4 space-y-2">
                            <li>
                              <Link
                                href="/about/company"
                                className="block py-2 hover:text-primary"
                                onClick={handleLinkClick}
                              >
                                Company Profile
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/about/corporate"
                                className="block py-2 hover:text-primary"
                                onClick={handleLinkClick}
                              >
                                Corporate
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <Link
                        href="/category"
                        className={`cursor-pointer ${
                          pathname === "/category" ? "text-primary font-bold" : ""
                        }`}
                        onClick={handleLinkClick}
                      >
                        Products
                      </Link>
                      <svg
                        onClick={() => toggleAccordion(1)}
                        className={`h-5 w-5 transition-transform cursor-pointer ${
                          activeIndex === 1 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <AnimatePresence>
                      {activeIndex === 1 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 ml-4 space-y-2 max-h-48 overflow-y-auto">
                            {categories.map((category, index) => (
                              <li key={index}>
                                <Link
                                  href={`/category/${category.slug}`}
                                  className="block py-2 hover:text-primary text-sm"
                                  onClick={handleLinkClick}
                                >
                                  {category.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <Link
                      href="/news"
                      className={`hover:text-primary cursor-pointer block ${
                        pathname === "/news" ? "text-primary font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      News & Events
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <Link
                      href="/careers"
                      className={`hover:text-primary cursor-pointer block ${
                        pathname === "/careers" ? "text-primary font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Careers
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <Link
                      href="/contact"
                      className={`hover:text-primary cursor-pointer block ${
                        pathname === "/contact" ? "text-primary font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                </ul>

                {/* Shop Now Button */}
                <motion.div
                  variants={mobileLinkVariants}
                  className="mt-8"
                >
                  <motion.button
                    className="w-full px-6 py-3 bg-primary text-white flex justify-center items-center gap-3 rounded-lg text-base font-medium font-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Shop Now <Image src={RightArrow} alt="Right Arrow" />
                  </motion.button>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  variants={mobileLinkVariants}
                  className="flex gap-3 mt-8 justify-center"
                >
                  <SocialIcons icon={<FaFacebookF />} />
                  <SocialIcons icon={<FaTwitter />} />
                  <SocialIcons icon={<AiFillInstagram />} />
                  <SocialIcons icon={<FaYoutube />} />
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={mobileLinkVariants}
                  className="mt-8 text-center text-sm text-neutral-dark-gray"
                >
                  <p>info@thepurepharma.com</p>
                  <p>+97125067345</p>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
