import React from "react";

const GraphComponent = ({ title, gray, blue, footer }) => {
  return (
    <div className="flex flex-col items-center p-4 w-full">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="px-2 border-l-4 border-b-4 w-full ">
        <div className="relative w-full flex items-end space-x-12 pt-10 justify-center">
          <div className="flex flex-col items-center">
            <div
              className="relative bg-gray-400 w-10"
              style={{ height: `120px` }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-center text-sm">
                {gray}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="relative bg-blue-500 w-10"
              style={{ height: `80px` }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-center text-sm">
                {blue}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4 text-lg">
        <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
        <span>{footer}</span>
      </div>
    </div>
  );
};

export default GraphComponent;
