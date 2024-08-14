import React from "react";
import MainLayout from "../global/MainLayout";
import GraphRow from "./GraphRow";
import Pipeline from "./Pipeline";

const AnalyticsComponent = () => (
  <div className="flex flex-col space-y-12 w-full justify-start pt-2">
    <GraphRow />
    <Pipeline />
  </div>
);

const Analytics = () => (
  <MainLayout title={"Course Analytics"} subtitle={"Analytics"}>
    <AnalyticsComponent />
  </MainLayout>
);

export default Analytics;
