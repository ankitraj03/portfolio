import React from "react";

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-start h-screen px-4 lg:px-12">
      <h1 className="font-mono text-[#07eafa] text-[16px] mb-2">
        Hey, my name is
      </h1>

      <h1 className="text-white font-bold text-[clamp(50px,8vw,90px)] leading-tight">
        Ankit
      </h1>

      <p className="text-lg sm:text-2xl font-bold text-gray-400 mb-4">
        Turning coffee into code, and problems into solutions.
      </p>

      <p className="text-gray-400 max-w-2xl text-base leading-relaxed">
        I’m a software engineer specializing in creating seamless and intuitive
        frontend experiences. Alongside crafting user interfaces, I’m passionate
        about solving complex coding challenges through competitive programming.
        Currently, I’m focused on building efficient, scalable web applications
        and improving my problem-solving skills in algorithmic competitions.
      </p>
      <button className="mt-10 bg-[#64ffda] text-[#112240] px-6 py-3 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#0a192f] hover:text-[#64ffda] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]" onClick={() => window.location.href = "https://drive.google.com/file/d/1Hh73cjuyeVLMV-ziXQjT3anTS5HSoGuT/view?usp=drive_link"}>
  My Resume
</button>

    </div>
  );
}

export default Homepage;
