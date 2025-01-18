import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close menu after clicking (for mobile)
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-customBlack text-white px-8 backdrop-blur z-50 font-mono">
      <div className="flex justify-between items-center h-[100px]">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Portfolio
        </div>

        {/* Hamburger Menu for Smaller Devices */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-[#07eafa] transition-colors duration-300"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links for Larger Devices */}
        <div className="hidden sm:flex space-x-8 text-sm">
          {["About", "Work", "Experience", "Contact"].map((section, index) => (
            <h2
              key={index}
              onClick={() => handleScroll(section.toLowerCase())}
              className="cursor-pointer hover:text-[#07eafa] transition-colors duration-300"
            >
              <span className="text-[#07eafa]">{index + 1}.</span> {section}
            </h2>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for Smaller Devices */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-start bg-customBlack text-white text-sm space-y-4 py-4 pl-6">
          {["About", "Work", "Experience", "Contact"].map((section, index) => (
            <h2
              key={index}
              onClick={() => handleScroll(section.toLowerCase())}
              className="cursor-pointer hover:text-[#07eafa] transition-colors duration-300"
            >
              <span className="text-[#07eafa]">{index + 1}.</span> {section}
            </h2>
          ))}

          {/* Left-Aligned Social and Contact Links */}
          <div className="flex flex-col space-y-4 mt-6 text-left">
            <a
              href="mailto:arsinha1406@gmail.com"
              className="hover:text-[#07eafa] transition-colors duration-300"
            >
              <span className="text-[#07eafa]">5.</span>  Mail
            </a>
            <a
              href="https://leetcode.com/u/Ankit_32/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#07eafa] transition-colors duration-300"
            >
              <span className="text-[#07eafa]">6.</span>  LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/arsinhmbed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#07eafa] transition-colors duration-300"
            >
              <span className="text-[#07eafa]">7.</span>  GFG
            </a>
            <a
              href="https://www.linkedin.com/in/ankitraj03/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#07eafa] transition-colors duration-300"
            >
              <span className="text-[#07eafa]">8.</span>  LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
