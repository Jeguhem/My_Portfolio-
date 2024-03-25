import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CustomText = ({ heading, body, bgcolor, /*rolls*/ style, color }) => {
  const rolls = [
    "Youtuber",
    "web developer",
    "software engineer",
    "python developer",
    "product manager",
    "data scientist",

    "AI engineer",

    "full-stack developer",
    "project manager",
    "UX designer",
    "UI designer",
    "game developer",
    "mobile app developer",
    "IT manager",
    "systems analyst",
  ];

  const [currentRollIndex, setCurrentRollIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRollIndex((prevIndex) => (prevIndex + 1) % rolls.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className={` wx shadow-2xl rounded-2xl ${style} ${bgcolor}`}
      style={{ backgroundColor: bgcolor }}
    >
      <h1
        className={` rounded-md  py-4 change-text  `}
        style={{ color: color }}
      >
        {heading}
        <p>
          <span className={`word ${color} dx`} style={{ color: color }}>
            {rolls[currentRollIndex]}
          </span>
        </p>
      </h1>
      <h2>{body}</h2>
      <Link to="/contact">
        <button className="bg-cyan-500 rounded-xl px-5 py-2 shadow-lg hover:shadow-cyan-500/50 active:opacity-30">
          Ask a question
        </button>
      </Link>
    </div>
  );
};

export default CustomText;
