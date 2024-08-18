import React, { useState } from "react";
import BuilderLayout from "../BuilderLayout";
import { IconCopyPlus } from "@tabler/icons-react";
import { IconBackspace } from "@tabler/icons-react";
import RowComponent from "../../global/RowComponent";

const ModulesComponent = () => {
  const [activeRow, setActiveRow] = useState(1);
  const modules = [
    {
      id: 1,
      place: 1,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Introduction and Setup",
    },
    {
      id: 2,
      place: 2,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Frontend Development",
    },
    {
      id: 3,
      place: 3,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Backend Development",
    },
    {
      id: 4,
      place: 4,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Tying them together",
    },
  ];

  const handleRowClick = (place) => {
    setActiveRow(place);
  };

  const activeModule = modules.find((m) => m.id === activeRow);

  return (
    <div className="flex w-full h-screen">
      {/* Left Panel */}
      <div className="w-2/3 p-4 pt-0 flex flex-col items-center">
        {activeModule && (
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center pb-6">
              <img
                src={activeModule.image}
                alt={activeModule.title}
                className="w-[120px] h-[80px]"
              />
              <h2 className="ml-4 text-2xl font-medium">
                {activeModule.title}
              </h2>
            </div>

            <div className="w-full flex flex-row">
              <div className="w-1/2 flex flex-col text-center ">
                <img
                  src={activeModule.banner_image}
                  alt="Banner Image"
                  className="w-[300px] rounded-3xl h-[315px]"
                />
                <p className="text-center w-[300px] text-2xl pt-3">
                  Module Banner
                </p>
              </div>
              <div className="w-1/2 pl-6">
                <div className="flex flex-col space-y-12 pt-4">
                  <div className="flex items-center text-2xl">
                    <span className="mr-6">Module Place</span>
                    <span className="text-black bg-white text-xl rounded-full w-10 h-10 border-blue-500 border-2 flex items-center justify-center">
                      {activeRow}
                    </span>
                  </div>
                  <div className="flex items-center text-2xl">
                    <span className="mr-6">Module Color</span>
                    <span className="bg-blue-500 w-10 h-10 rounded-full"></span>
                  </div>
                </div>
                <div className="flex text-xl pt-20 flex-col space-y-8">
                  <button className="flex items-center">
                    <IconCopyPlus className="mr-2" />{" "}
                    <span className="text-neutral-800 hover:translate-x-1 transition duration-150">
                      New Module
                    </span>
                  </button>
                  <button className="flex items-center text-red-500">
                    <IconBackspace className="mr-2" />{" "}
                    <span className="text-red-500 hover:translate-x-1 transition duration-150">
                      Delete Module
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className="w-1/3 font-dm border-t-4 border-l-4 rounded-tl-[40px] border-blue-400 p-4 pl-0">
        <h2 className="text-2xl font-mon text-black font-semibold text-center mb-4">
          Current Modules
        </h2>
        <div className="h-0.5 w-4/5 mx-auto bg-gray-200 my-2"></div>
        {modules.map((module) => (
          <RowComponent
            key={module.id}
            place={module.place}
            image={module.image}
            title={module.title}
            isActive={activeRow === module.id}
            onClick={() => handleRowClick(module.place)}
          />
        ))}
      </div>
    </div>
  );
};

const Modules = ({ id }) => (
  <BuilderLayout
    title={"Web Development Made Simple"}
    subtitle={"Course Builder"}
    page={"modules"}
    id={id}
  >
    <ModulesComponent />
  </BuilderLayout>
);

export default Modules;
