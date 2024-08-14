import React from "react";

const AffilateLink = ({ image, title, link }) => (
  <div className="flex flex-col space-y-2">
    <div className={`flex items-center py-4`}>
      <img src={image} alt={title} className="w-12 h-12 mr-2" />
      <span
        onClick={() => {
          window.open({ link }, "_blank");
        }}
        className={`text-lg underline cursor-pointer hover:font-medium`}
      >
        {title}
      </span>
    </div>
  </div>
);

export default AffilateLink;
