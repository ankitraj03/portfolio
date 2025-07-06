import React from "react";
import Homepage from "./Content/Homepage";
import About from "./Content/About";
import Work from "./Content/Work";
import Contact from "./Content/Contact";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Experience from "./Content/Experience";

function Home() {
  return (
    <div className="bg-customBlack flex flex-col lg:flex-row min-h-screen overflow-hidden">

      <div className="hidden lg:flex flex-col w-1/6 text-gray-400 items-center justify-between py-10">
        <div className="flex flex-col items-center space-y-5">
          <a href="https://leetcode.com/u/Ankit_32/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-regular-tal-revivo.png"
              alt="LeetCode"
              className="w-6 h-6 filter grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
          <a href="https://www.geeksforgeeks.org/user/arsinhmbed/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GFG"
              className="w-6 h-6 filter grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
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

        <div className="w-px h-40 bg-gray-400"></div>
      </div>

      <div className="flex-1 overflow-y-scroll h-screen no-scrollbar px-4 lg:px-8 py-6 space-y-16">
        <div id="home">
          <Homepage />
        </div>
        <div id="about">
          <About />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <Progress solved={270} total={3601} label="LeetCode" color="#FACC15" />
          <Progress solved={122} total={3506} label="GFG" color="#00A884" />
        </div>

        <div id="work">
          <Work />
        </div>
        <div id="experience">
          <Experience/>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-1/6 text-gray-400 items-center justify-between py-20">
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:arsinha1406@gmail.com"
            className="rotate-90 hover:text-white transition duration-300"
          >
            arsinha1406@gmail.com
          </a>
          <div className="w-px h-40 bg-gray-400 "></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
