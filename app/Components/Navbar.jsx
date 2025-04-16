"use client";

import React, { useState, useEffect } from "react";
import navLinks from "./data/navLinks";
import { font } from "./font/font";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleMouseEnter = (index) => setDropdownOpen(index);
  const handleMouseLeave = () => setDropdownOpen(null);
  const toggleMobileDropdown = (index) =>
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto md:w-[70%] bg-opacity-100 bg-black">
        <header
          className={`${font.className} flex items-center justify-between px-4 py-3 bg-darkGrey`}
        >
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/newlogocfi.png"
                alt="Logo"
                className="w-auto h-10 sm:h-10 md:h-20 lg:h-24"
              />
            </div>
          </Link>
          <div className="hidden md:flex ml-8 space-x-8">
            <div className="text-sm">
              <p className="font-medium text-md text-white">Call Us On:</p>
              <p className="text-white text-xl">(213) 536-0802</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-md text-white">Email Us At:</p>
              <p className="text-white text-xl">info@vehiclescanners.co.uk</p>
            </div>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white  focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-evenly bg-red-700 p-3">
          {navLinks.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`${
                    activeLink === item.href ? "text-cyan-400" : "text-white"
                  } mx-4 cursor-pointer flex items-center`}
                >
                  {item.label}
                  {item.subLinks && <FaChevronDown className="ml-2" />}
                </motion.span>
              </Link>
              {item.subLinks && dropdownOpen === index && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg" style={{zIndex: 1000}}>
                  {item.subLinks.map((subItem) => (
                    <Link key={subItem.label} href={subItem.href}>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        {subItem.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;