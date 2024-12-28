import React from "react";
import ProgressSegments from "./ProgressSegments";

const Pipeline = ({ analytics }) => {
  const data = analytics?.drop_data;
  const segments = [
    {
      value: data?.visitors,
      label: "Visitors",
      bgColor: "bg-gray-900",
      color: "white",
    },
    {
      value: data?.reach_form,
      label: "Reach Form",
      bgColor: "bg-gray-700",
      color: "white",
    },
    {
      value: data?.reach_checkout,
      label: "Reach Checkout",
      bgColor: "bg-gray-500",
      color: "white",
    },
    {
      value: data?.complete_checkout,
      label: "Complete Checkout",
      bgColor: "bg-gray-300 text-gray-800",
      color: "black",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <ProgressSegments segments={segments} />
    </div>
  );
};

export default Pipeline;
