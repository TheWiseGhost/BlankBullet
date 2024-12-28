import React, { useEffect, useState } from "react";
import MainLayout from "../global/MainLayout";
import GraphRow from "./GraphRow";
import Pipeline from "./Pipeline";
import Responses from "./Responses";
import ExportCheckoutData from "./ExportCheckoutData";

const AnalyticsComponent = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    setAnalytics(JSON.parse(localStorage.getItem("analytics")));
  }, []);
  return (
    <div className="flex flex-col space-y-12 w-full justify-start pt-2">
      <GraphRow analytics={analytics} />
      <Pipeline analytics={analytics} />
      <Responses analytics={analytics?.form_analytics} />
      <ExportCheckoutData checkoutData={analytics?.checkout_data} />
    </div>
  );
};

const Analytics = () => {
  const [drop, setDrop] = useState(null);

  useEffect(() => {
    setDrop(JSON.parse(localStorage.getItem("drop")));
  }, []);
  return (
    <MainLayout title={drop ? drop.drop.title : ""} subtitle={"Analytics"}>
      <AnalyticsComponent />
    </MainLayout>
  );
};

export default Analytics;
