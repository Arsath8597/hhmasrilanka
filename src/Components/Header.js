import React, { useState } from "react";
import Logo from "../images/hhmalogo (1).jpg";
import { a } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa"; // Importing required icons
const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg">
      <div className="grid items-center justify-between w-full px-6 py-4">
        <div className="flex items-start justify-between w-[90vw] ">
          {/* Logo */}
          <div></div>
          <div className="flex items-center space-x-3">
            <a href="/">
              <img src={Logo} alt="Logo" className="w-10 md:w-12" />
            </a>
            <a href="/">
              <h2 className="text-lg font-semibold text-gray-800">
                HHMA Sri Lanka
              </h2>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <a href="/" className="hover:text-red-500">
              Home
            </a>
            <a href="/about" className="hover:text-red-500">
              About
            </a>
            <a href="#service" className="hover:text-red-500">
              Service
            </a>
            <a href="#project" className="hover:text-red-500">
              Projects
            </a>
            <a href="#support" className="hover:text-red-500">
              Donate
            </a>
          </nav>

          {/* Contact Us Button - Desktop */}
          <a href="/about" className="hidden md:inline-block">
            <button className="bg-gray-800 text-white hover:bg-gray-900 px-4 py-2 rounded-lg transition">
              Contact Us
            </button>
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden" onClick={toggleNav}>
            <FaBars size={24} />
          </div>
        </div>
        <div className="flex space-x-3 justify-center items-center">
          <a
            href="https://www.facebook.com/profile.php?id=100083648684170&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://wa.me/+94767313385"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://instagram.com/hhmasrilanka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/hhma_sl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-400"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:hhmasrilanka@gmail.com"
            className="text-gray-700 hover:text-red-500"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: nav ? "0%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed inset-y-0 right-0 w-3/4 bg-gray-800 text-white flex flex-col justify-center items-center space-y-8 text-lg font-semibold ${
          nav ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className=" space-y-6 p-6">
          <div className="absolute top-4 right-4">
            <FaTimes onClick={toggleNav} size={24} />
          </div>
          <li onClick={toggleNav}>
            <a href="/">Home</a>
          </li>
          <li onClick={toggleNav}>
            <a href="/about">About</a>
          </li>
          <li onClick={toggleNav}>
            <a href="#service">Service</a>
          </li>
          <li onClick={toggleNav}>
            <a href="#project">Projects</a>
          </li>
          <li onClick={toggleNav}>
            <a href="#support">Donate</a>
          </li>
        </ul>

        <a href="/about" onClick={toggleNav}>
          <button className="bg-white text-gray-800 hover:bg-gray-200 px-5 py-2 rounded-lg transition">
            Contact Us
          </button>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
