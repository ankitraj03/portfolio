import React from "react";

function Experience() {
  const experienceDetails = [
    "Implemented Salesforce automation workflows, improving data processing efficiency.",
    "Developed and deployed Apex triggers, reducing manual CRM tasks by 40%.",
    "Worked on Visualforce pages, optimizing user experience.",
    "Collaborated with experienced mentors to enhance Salesforce security and reporting features."
  ];

  return (
    <div className="mt-10 px-4 sm:px-8 md:px-16">
      <div className="flex items-center">
        <h1 className="text-[#07eafa] text-xl sm:text-2xl font-bold">
          3. <span className="ml-2 text-white">Experience</span>
        </h1>
        <div className="border-t-[1px] border-gray-400 mt-4 ml-2 w-32 sm:w-80"></div>
      </div>

      <div className="bg-[#0a192f] text-[#ccd6f6] p-8 rounded-lg mt-8">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Intern <span className="text-[#07eafa]">@ Salesforce</span>
        </h2>
        <p className="text-sm text-gray-400 mt-1 font-mono">
          Dec 2023 – Jan 2024
        </p>


        <ul className="mt-4 space-y-3 text-base leading-6">
          {experienceDetails.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-[#64ffda] mt-1">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
