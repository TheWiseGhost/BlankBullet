import React from "react";
import GraphComponent from "./GraphComponent";

function GraphRow() {
  return (
    <div className="flex space-x-8">
      <GraphComponent
        title="Views vs Enrolled"
        gray={5182}
        blue={2126}
        footer="43.01% Conversion Rate"
      />
      <GraphComponent
        title="Link Click Rate"
        gray={17682}
        blue={805}
        footer="0.0455 Link CTR"
      />
      <GraphComponent
        title="CTA Click Rate"
        gray={17682}
        blue={105}
        footer="0.0065 CTA CTR"
      />
    </div>
  );
}

export default GraphRow;
