import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClose, setIsDropdownClose] = useState(true);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownClose(!isDropdownClose);
  };

  return (
    <nav className=" w-full bg-gray-800 p-4">
      <div className=" mx-24 px-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">HashNDots</div>
        <div className="flex justify-end space-x-4">
          <Link
            to="/"
            className="text-white px-4 py-2 hover:bg-orange-700 rounded-3xl"
          >
            Home
          </Link>
          <div
            className=""
            onMouseEnter={handleDropdown}
            onMouseLeave={handleDropdown}
          >
            {isDropdownOpen ? (
              <button className="text-white px-4 py-2 bg-orange-600 rounded-3xl focus:outline-none">
                Services
              </button>
            ) : (
              <button className="text-white px-4 py-2  rounded-3xl focus:outline-none">
                Services
              </button>
            )}
            {isDropdownOpen && (
              <div className="absolute bg-gray-800 text-white rounded-md ">
                {/* Add your dropdown options here */}
                <Link
                  to="/digital-marketing"
                  className="block p-3 mt-[1rem] hover:bg-orange-700"
                >
                  Digital marketing
                </Link>
                <Link
                  to="/social-media-marketing"
                  className="block p-3 hover:bg-orange-700"
                >
                  Social Media Marketing
                </Link>
                <Link
                  to="/web-devlopmnent"
                  className="block p-3 hover:bg-orange-700"
                >
                  Web Development
                </Link>
              </div>
            )}
          </div>
          <Link
            to="blog"
            className="text-white px-4 py-2 hover:bg-orange-700 rounded-3xl"
          >
            Blog
          </Link>
          <Link
            to="about"
            className="text-white px-4 py-2 hover:bg-orange-700 rounded-3xl"
          >
            About Us
          </Link>
          <Link
            to="contact-us"
            className="flex items-center text-white bg-orange-600 rounded-2xl px-4 py-2 hover:bg-orange-700 animate-bounce"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
