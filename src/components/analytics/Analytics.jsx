import React, { useEffect, useState } from "react";
import MainLayout from "../global/MainLayout";
import GraphRow from "./GraphRow";
import Pipeline from "./Pipeline";

const AnalyticsComponent = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    setAnalytics(JSON.parse(localStorage.getItem("analytics")));
    console.log(localStorage.getItem("analytics"));
  }, []);
  return (
    <div className="flex flex-col space-y-12 w-full justify-start pt-2">
      <GraphRow analytics={analytics} />
      <Pipeline analytics={analytics} />
    </div>
  );
};

const Analytics = () => (
  <MainLayout title={"Bullet Analytics"} subtitle={"Analytics"}>
    <AnalyticsComponent />
  </MainLayout>
);

export default Analytics;
