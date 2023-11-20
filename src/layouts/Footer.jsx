import React from "react";
import { Link } from "react-router-dom";
import facebook from "../facebook.png";
import linkedin from "../linkedin.png";
import insta from "../insta.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8  bottom-0 w-full">
      <div className="mx-24 px-4 grid grid-cols-2">
        <div className="mb-4 space-y-4">
          <Link
            to="contact-us"
            className="items-center text-white bg-orange-600 rounded-2xl px-4 py-2 hover:bg-orange-700 "
          >
            Contact Us
          </Link>
          <p>Email: support@hashndots.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="flex flex-col space-y-4 ml-auto">
          <a href="#" className="hover:text-orange-500">
            <img src={facebook} alt="insta" className="h-[1.6rem] w-[1.6rem]" />
          </a>
          <a href="#" className="hover:text-orange-500">
            <img src={insta} alt="insta" className="h-[1.6rem] w-[1.6rem]" />
          </a>
          <a href="#" className="hover:text-orange-500">
            <img src={linkedin} alt="insta" className="h-[1.6rem] w-[1.6rem]" />
          </a>
        </div>
      </div>
      <p className="mt-4 text-center">
        &copy; 2023 HashnDots. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
