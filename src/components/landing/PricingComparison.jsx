import React from "react";

const PricingComparison = () => {
  const data = [
    { item: "Fulfillment", dropFast: "$0", traditional: "$5 - AutoDS" },
    { item: "Store Cost", dropFast: "$5", traditional: "$39.99 - Shopify" },
    { item: "Shipping", dropFast: "$0", traditional: "$3" },
    { item: "Returns", dropFast: "$0", traditional: "$50" },
    { item: "Time", dropFast: "15 min", traditional: "6 hrs" },
    { item: "Total", dropFast: "$5", traditional: "$100" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-11/12 md:w-4/5 mx-auto border border-gray-500 shadow-2xl">
        <thead>
          <tr className="bg-white font-afc text-3xl">
            <th className="border-b border-gray-400 px-4 w-1/4"></th>
            <th className="border-b border-gray-400 border-l text-start px-4 py-4 text-purple-700 w-3/8">
              DropFast
            </th>
            <th className="border-b border-gray-400 border-l text-start px-4 py-4 w-3/8">
              Traditional
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-white"}
            >
              <td className="border-t border-r border-r-gray-300 px-4 text-xl font-dm py-4">
                {row.item}
              </td>
              <td className="border-t border-r border-r-gray-300 px-4 text-xl font-dm">
                {row.dropFast}
              </td>
              <td className="border-t px-4 text-xl font-dm">
                {row.traditional}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingComparison;
