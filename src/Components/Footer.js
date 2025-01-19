import React from "react";
import img1 from "../images/hhmalogo (1).jpg";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-black text-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10">
                <a href="/sample" className="mb-6 inline-block max-w-[160px]">
                  <img src={img1} alt="logo" className=" rounded-2xl" />
                </a>
                <p className="text-base mb-7 text-body-color">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p>
                <p className="flex text-xl items-center mt-5  font-medium text-dark">
                  <span className="mr-3 text-primary">
                    <AiOutlinePhone />
                  </span>
                  <a href="tel:+94767313385">+94767313385</a>
                </p>
                <p className="flex items-center text-xl mt-5 font-medium text-dark">
                  <span className="mr-3 text-primary">
                    <BiLogoGmail />
                  </span>
                  <a href="mailto:hhmasrilanka@gmail.com">
                    hhmasrilanka@gmail.com
                  </a>
                </p>
                <p className="flex items-center text-xl mt-5 font-medium text-dark">
                  <span className="mr-3 text-primary">
                    <AiOutlineWhatsApp />
                  </span>
                  <a href="https://wa.me/+94767313385">+94767313385</a>
                </p>
              </div>
            </div>

            {/* <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup> */}

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-dark">
                  Follow us On
                </h4>
                <div className="flex items-center mb-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=100083648684170&mibextid=ZbWKwL"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width={8}
                      height={16}
                      viewBox="0 0 8 16"
                      className="fill-current"
                    ></svg>
                  </a>
                  <a
                    href="https://twitter.com/hhma_sl"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width={16}
                      height={12}
                      viewBox="0 0 16 12"
                      className="fill-current"
                    ></svg>
                  </a>
                  <a
                    href="https://wa.me/+94767313385"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <AiOutlineWhatsApp />
                  </a>
                  <a
                    href="https://instagram.com/hhmasrilanka"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <BiLogoInstagram />
                  </a>
                </div>
                <p className="text-base text-body-color">
                  {" "}
                  © {new Date().getFullYear()} TailGrids{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 bottom-0 z-[-1]"></span>
          <span className="absolute top-10 right-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <div>
      <li>
        <a
          href={link}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-primary`}
        >
          {label}
        </a>
      </li>
    </div>
  );
};
