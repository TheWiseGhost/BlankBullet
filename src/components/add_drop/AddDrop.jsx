import React from "react";
import DropInfoForm from "./DropInfoForm";
import MainLayout from "../global/MainLayout";

const AddDropComponent = () => {
  return (
    <div className="w-full h-full pl-4 py-4">
      <DropInfoForm />
    </div>
  );
};

const AddDrop = () => (
  <MainLayout title={"Add Drop"} subtitle={"Add Drop"}>
    <AddDropComponent />
  </MainLayout>
);

export default AddDrop;
