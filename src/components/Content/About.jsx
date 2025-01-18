import React from "react";

function About() {
  const techList1 = ["JavaScript (ES6+)", "React", "Node.js"];
  const techList2 = ["C", "C++", "Python"];

  return (
    <div className="mt-10 px-4 sm:px-8 md:px-16">
      {/* Section Heading */}
      <div className="flex items-center">
        <h1 className="text-[#07eafa] text-xl sm:text-2xl font-bold">
          1. <span className="ml-2 text-white">About Me</span>
        </h1>
        <div className="border-t-[1px] border-gray-400 mt-4 ml-2 w-32 sm:w-80"></div>
      </div>

      {/* Description */}
      <div className="text-gray-400 text-lg sm:text-xl font-mono mt-5 leading-7">
        Hello! My name is Ankit, and I am a passionate developer with a keen interest in creating seamless and intuitive user experiences on the web. My expertise lies in frontend development, where I leverage modern technologies to craft responsive and visually appealing websites.
        <br />
        <br />
        In addition to building projects, I enjoy solving challenging problems on platforms like LeetCode and GeeksforGeeks, where I have solved over <span className="text-[#07eafa]">200+ problems</span> on both platforms, sharpening my skills in data structures and algorithms.
        <br />
        <br />
        Whether it's designing user interfaces or tackling algorithmic challenges, I am committed to continuous learning and contributing to impactful projects that make a difference.
      </div>

      {/* Technologies */}
      <div className="bg-[#0a192f] text-[#ccd6f6] p-8 rounded-lg mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Here are a few technologies I’ve been working with recently:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ul>
            {techList1.map((tech, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-[#64ffda]">▹</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
          <ul>
            {techList2.map((tech, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-[#64ffda]">▹</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
