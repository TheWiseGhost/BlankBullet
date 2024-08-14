import React from "react";

const RowComponent = ({ image, title, place, isActive, onClick }) => (
  <div className="flex flex-col space-y-2">
    <div
      className={`flex items-center py-4 cursor-pointer ${isActive ? "" : ""}`}
      onClick={onClick}
    >
      <div
        className={`items-center flex font-dm text-lg w-8 mr-1 h-12 justify-center cursor-pointer text-white ${
          isActive ? "bg-blue-400" : "bg-white"
        }`}
      >
        {place}
      </div>
      <img src={image} alt={title} className="w-1/6 h-12 mr-2" />
      <span
        className={`text-xl ${
          isActive ? "font-medium text-black" : "text-neutral-950"
        }`}
      >
        {title}
      </span>
    </div>
  </div>
);

export default RowComponent;
