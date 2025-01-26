import React, { useState, useEffect } from "react";
import MainLayout from "../global/MainLayout";
import { useUser } from "@clerk/nextjs";
import Loading from "../global/Loading";

const GridItem = ({ title, thumbnail }) => (
  <div className="flex flex-col space-y-2 px-4">
    <div className="bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center h-52 w-full">
      {thumbnail ? (
        <img
          src={thumbnail}
          className="w-full self-center rounded-2xl"
          alt="thumbnail"
        />
      ) : null}
    </div>
    <div className="text-xl text-center pr-2">{title}</div>
  </div>
);

const DashboardComponent = () => {
  const [drops, setDrops] = useState(null); // Initialize as null to check loading state
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchDrops = async () => {
        try {
          const response = await fetch(
            "https://dropfastbackend.onrender.com/api/drop_options/",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" }, // Added header for JSON content
              body: JSON.stringify({ clerk_id: user.id }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            setDrops(data.drops);
          } else {
            console.error("Failed to fetch drops");
          }
        } catch (error) {
          console.error("Error fetching drops:", error);
        }
      };

      fetchDrops();
    }
  }, [user]);

  if (drops === null) {
    return (
      <div className="w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {drops.length > 0 ? (
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 w-full pt-6">
          {drops.map((drop) => (
            <GridItem
              key={drop.id}
              title={drop.title}
              thumbnail={drop.thumbnail}
            />
          ))}
        </div>
      ) : (
        <div className="w-full justify-center items-center text-center">
          <p className="font-dm pt-40">
            Create Your First Drop Instance to get started with DropFast
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
