import React from "react";
import ProgressSegments from "./ProgressSegments";

function Pipeline() {
  const segments = [
    {
      value: "2,126",
      label: "Enrolled",
      bgColor: "bg-gray-900",
      color: "white",
    },
    {
      value: "1,500",
      label: "Complete a Video",
      bgColor: "bg-gray-700",
      color: "white",
    },
    {
      value: "612",
      label: "Complete a Module",
      bgColor: "bg-gray-500",
      color: "white",
    },
    {
      value: "276",
      label: "Complete Course",
      bgColor: "bg-gray-300 text-gray-800",
      color: "black",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <ProgressSegments segments={segments} />
    </div>
  );
}

export default Pipeline;
