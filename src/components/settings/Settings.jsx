import React from "react";
import MainLayout from "../global/MainLayout";
import UserInfoForm from "./UserInfoForm";
import { useUser } from "@clerk/nextjs";

const SettingsComponent = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="w-full justify-start pt-4 pl-6">
      <UserInfoForm
        email={user?.emailAddresses[0].emailAddress}
        name={user?.fullName}
      />
    </div>
  );
};

const Settings = () => (
  <MainLayout title={"My Settings"} subtitle={"Settings"}>
    <SettingsComponent />
  </MainLayout>
);

export default Settings;
