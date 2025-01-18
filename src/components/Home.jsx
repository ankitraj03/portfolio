import React from "react";
import Homepage from "./Content/Homepage";
import About from "./Content/About";
import Work from "./Content/Work";
import Contact from "./Content/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="bg-customBlack flex flex-col lg:flex-row h-screen">
      {/* Left Sidebar with Icons */}
      <div className="hidden lg:flex flex-col text-gray-400 w-1/6 items-center justify-center">
        <div className="flex flex-col space-y-4">
          {/* LeetCode Icon */}
          <a
            href="https://leetcode.com/u/Ankit_32/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <img
              src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-regular-tal-revivo.png"
              alt="LeetCode"
              className="w-6 h-6 filter grayscale hover:grayscale-0 transition duration-300"
            />
          </a>

          {/* GFG Icon */}
          <a
            href="https://www.geeksforgeeks.org/user/arsinhmbed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GFG"
              className="w-6 h-6 filter grayscale hover:grayscale-0 transition duration-300"
            />
          </a>

          {/* Other Icons */}
          <a href="https://github.com/ankitraj03" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" className="hover:text-white transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-white transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/ankitraj03/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-white transition duration-300" />
          </a>
        </div>
        <br />
        <div className="border-t-[1px] border-gray-400 mt-4 w-80 rotate-90"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-scroll h-screen no-scrollbar">
        <div id="home">
          <Homepage />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

      {/* Right Sidebar with Email */}
      <div className="hidden lg:flex flex-col text-gray-400 w-1/6 items-center justify-center">
        <a
          href="mailto:arsinha1406@gmail.com"
          className="rotate-90 hover:text-white transition duration-300"
        >
          arsinha1406@gmail.com
        </a>
        <div className="border-t-[1px] border-gray-400 mt-4 w-80 rotate-90 mt-40"></div>

      </div>
      
    </div>
  );
}

export default Home;
