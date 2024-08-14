import React from "react";
import MainLayout from "../global/MainLayout";
import UserInfoForm from "./UserInfoForm";

const SettingsComponent = () => (
  <div className="w-full justify-start pt-4 pl-6">
    <UserInfoForm />
  </div>
);

const Settings = () => (
  <MainLayout title={"My Settings"} subtitle={"Settings"}>
    <SettingsComponent />
  </MainLayout>
);

export default Settings;
