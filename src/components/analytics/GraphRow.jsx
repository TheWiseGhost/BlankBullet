import React from "react";
import GraphComponent from "./GraphComponent";

function GraphRow({ analytics }) {
  const data = analytics?.drop_data;

  // Helper function to calculate conversion rate and round it to two decimal places
  const calculateConversionRate = (numerator, denominator) => {
    if (!denominator || !numerator) return "0% Conversion Rate";
    const rate = (numerator / denominator) * 100;
    return rate.toFixed(2) + "% Conversion Rate";
  };

  return (
    <div className="flex space-x-8">
      <GraphComponent
        title="Visitors vs Form"
        gray={data?.visitors}
        blue={data?.reach_form}
        footer={calculateConversionRate(data?.reach_form, data?.visitors)}
      />
      <GraphComponent
        title="Visitors vs Checkout"
        gray={data?.visitors}
        blue={data?.reach_checkout}
        footer={calculateConversionRate(data?.reach_checkout, data?.visitors)}
      />
      <GraphComponent
        title="Visitors vs Purchase"
        gray={data?.visitors}
        blue={data?.complete_checkout}
        footer={calculateConversionRate(
          data?.complete_checkout,
          data?.visitors
        )}
      />
    </div>
  );
}

export default GraphRow;
