import React from "react";
import MainLayout from "../global/MainLayout";

const GridItem = ({ title }) => (
  <div className="flex flex-col space-y-2">
    <div className="bg-gray-200 rounded-lg flex justify-center items-center h-40"></div>
    <div className="text-lg">{title}</div>
  </div>
);

const DashboardComponent = () => (
  <div className="grid grid-cols-2 gap-x-16 w-full">
    <GridItem title="Web Development Made Simple" />
    <GridItem title="Coding Course for Beginners" />
    <GridItem title="Advanced HTML Course" />
    <GridItem title="How to make $$$ with NFTs" />
  </div>
);

const Dashboard = () => (
  <MainLayout title={"Dashboard"} subtitle={"Dashboard"}>
    <DashboardComponent />
  </MainLayout>
);

export default Dashboard;
