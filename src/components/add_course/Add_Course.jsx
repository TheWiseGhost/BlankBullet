"use client";
import React, { useState } from "react";
import CourseInfoForm from "./CourseInfoForm";
import MainLayout from "../global/MainLayout";

const AddCourseComponent = () => {
  return (
    <div className="w-full h-full pl-4 pt-4">
      <CourseInfoForm />
    </div>
  );
};

const Add_Course = () => (
  <MainLayout title={"Add Course"} subtitle={"Courses"}>
    <AddCourseComponent />
  </MainLayout>
);

export default Add_Course;
