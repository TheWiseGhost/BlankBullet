import React, { useState, useEffect } from "react";
import Image from "next/image";
import MainLayout from "../global/MainLayout";
import { useUser } from "@clerk/nextjs";

const GridItem = ({ title, thumbnail }) => (
  <div className="flex flex-col space-y-2 px-4">
    <div className="bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center h-52 w-full">
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
    <div className="text-xl text-center pr-2">{title}</div>
  </div>
);

const DashboardComponent = () => {
  const [bullets, setBullets] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchBullets = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/bullet_options/",
            {
              method: "POST",
              body: JSON.stringify({ clerk_id: user.id }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log(data.bullets);
            setBullets(data.bullets);
          } else {
            console.error("Failed to fetch bullets");
          }
        } catch (error) {
          console.error("Error fetching bullets:", error);
        }
      };

      fetchBullets();
    }
  }, [user]);

  return (
    <>
      {bullets ? (
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 w-full pt-6">
          {bullets.map((bullet) => (
            <>
              <GridItem
                key={bullet.id}
                title={bullet.title}
                thumbnail={bullet.thumbnail}
              />
            </>
          ))}
        </div>
      ) : (
        <div className="w-full justify-center items-center text-center">
          <p className="font-dm pt-40">
            Create Your First Bullet Instance to get started with BlankBullet
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
