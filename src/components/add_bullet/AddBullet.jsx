import React from "react";
import BulletInfoForm from "./BulletInfoForm";
import MainLayout from "../global/MainLayout";

const AddBulletComponent = () => {
  return (
    <div className="w-full h-full pl-4 py-4">
      <BulletInfoForm />
    </div>
  );
};

const AddBullet = () => (
  <MainLayout title={"Add Bullet"} subtitle={"Add Bullet"}>
    <AddBulletComponent />
  </MainLayout>
);

export default AddBullet;
