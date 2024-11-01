import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/hhmalogo (1).jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10 md:w-12" />
          </Link>
          <Link to="/">
            <h2 className="text-lg font-semibold text-gray-800">
              HHMA-SRI LANKA
            </h2>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-500">
            About
          </Link>
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
        <Link to="/about" className="hidden md:inline-block">
          <button className="bg-gray-800 text-white hover:bg-gray-900 px-4 py-2 rounded-lg transition">
            Contact Us
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleNav}>
          <FaBars size={24} />
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
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/about">About</Link>
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

        <Link to="/about" onClick={toggleNav}>
          <button className="bg-white text-gray-800 hover:bg-gray-200 px-5 py-2 rounded-lg transition">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
