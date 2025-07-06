import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Progress = ({ solved, total, label, color = "#FACC15", attempting = 32 }) => {
  const radius = 80;
  const stroke = 10;
  const circumference = Math.PI * radius;

  const solvedPercent = solved / total;
  const attemptingPercent = attempting / total;

  const solvedOffset = circumference * (1 - solvedPercent);
  const attemptingOffset = circumference * (1 - attemptingPercent);

  const solvedControls = useAnimation();
  const attemptingControls = useAnimation();

  useEffect(() => {
    attemptingControls.start({ strokeDashoffset: attemptingOffset });
    solvedControls.start({ strokeDashoffset: solvedOffset });
  }, [solvedOffset, attemptingOffset]);

  return (
    <div className="flex flex-col items-center text-white bg-[#111827] rounded-xl shadow-md p-4 w-[220px]">
      <div className="relative w-[200px] h-[100px]">
        <svg width="200" height="100" viewBox="0 0 200 100">
          {/* Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#2d2d2d"
            strokeWidth={stroke}
          />

          {/* Attempting Arc */}
          <motion.path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#00B7D8"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={attemptingControls}
            transition={{ duration: 1.3 }}
          />

          {/* Solved Arc */}
          <motion.path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={solvedControls}
            transition={{ duration: 1.6 }}
          />
        </svg>

        <div className="absolute top-[30px] left-0 w-full text-center">
          <div className="text-xl font-bold text-white">{solved} / {total}</div>
          <div className="text-sm mt-1 text-white uppercase tracking-widest">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
