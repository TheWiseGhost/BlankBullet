import React, { useState, useEffect } from "react";
import Image from "next/image";
import MainLayout from "../global/MainLayout";
import { useUser } from "@clerk/nextjs";

const GridItem = ({ title, thumbnail }) => (
  <div className="flex flex-col space-y-2">
    <div className="bg-gray-200 rounded-lg overflow-hidden flex justify-center items-center h-52">
      {thumbnail ? (
        <>
          <img
            src={thumbnail}
            className="w-full self-center rounded-2xl"
            alt="thumbnail"
          />
        </>
      ) : (
        <></>
      )}
    </div>
    <div className="text-lg">{title}</div>
  </div>
);

const DashboardComponent = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchCourses = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/course_options/",
            {
              method: "POST",
              body: JSON.stringify({ clerk_id: user.id }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log(data.courses);
            setCourses(data.courses);
          } else {
            console.error("Failed to fetch courses");
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      };

      fetchCourses();
    }
  }, [user]);

  return (
    <>
      {courses ? (
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 w-full pt-2">
          {courses.map((course) => (
            <>
              <GridItem
                key={course.id}
                title={course.title}
                thumbnail={course.thumbnail}
              />
            </>
          ))}
        </div>
      ) : (
        <div className="w-full justify-center items-center text-center">
          <p className="font-dm">
            Create Your First Course to get started with Coursard
          </p>
        </div>
      )}
    </>
  );
};

const Dashboard = () => (
  <MainLayout title={"Dashboard"} subtitle={"Dashboard"}>
    <DashboardComponent />
  </MainLayout>
);

export default Dashboard;
