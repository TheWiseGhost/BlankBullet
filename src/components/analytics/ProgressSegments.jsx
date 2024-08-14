import React from "react";

const ProgressSegments = ({ segments }) => {
  return (
    <div className="flex w-full items-center justify-center space-x-[-70px]">
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center w-full h-20 rounded-full text-white text-center ${
            segment.bgColor
          } ${index === 0 ? "ml-0" : "ml-[-20px]"}`}
          style={{ zIndex: segments.length - index }}
        >
          <span
            className={`text-lg font-bold ${index === 0 ? "ml-0" : "ml-10"}`}
            style={{ color: segment.color }}
          >
            {segment.value}
          </span>
          <span
            className={`text-md ${index === 0 ? "ml-0" : "ml-10"}`}
            style={{ color: segment.color }}
          >
            {segment.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressSegments;
