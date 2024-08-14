import React from "react";
import BuilderLayout from "../BuilderLayout";

const GridItem = ({ title }) => (
  <div className="flex flex-col space-y-2">
    <div className="bg-gray-200 rounded-lg flex justify-center items-center h-40"></div>
    <div className="text-lg">{title}</div>
  </div>
);

const ModulesComponent = () => (
  <div className="grid grid-cols-2 gap-x-16 w-full">
    <GridItem title="Web Development Made Simple" />
    <GridItem title="Coding Course for Beginners" />
    <GridItem title="Advanced HTML Course" />
    <GridItem title="How to make $$$ with NFTs" />
  </div>
);

const Modules = () => (
  <BuilderLayout
    title={"Web Development Made Simple"}
    subtitle={"Course Builder"}
    page={"modules"}
  >
    <ModulesComponent />
  </BuilderLayout>
);

export default Modules;
