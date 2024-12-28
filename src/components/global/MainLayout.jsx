import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const CircleText = ({ text }) => (
  <div className="flex flex-row items-center">
    <div className="bg-gray-400 p-2 rounded-full mr-2"></div>
    <div className="text-gray-500 text-sm">{text}</div>
  </div>
);

const Header = ({ title, subtitle }) => (
  <div className="flex flex-col space-y-6">
    <div className="flex items-center gap-2">
      <CircleText text="BlankDrop" />
      <span>/</span>
      <span className="text-black">{subtitle}</span>
    </div>
    <div>
      <h1 className="text-4xl font-medium">{title}</h1>
    </div>
  </div>
);

const SideInfoBox = ({ content, value, width = 170 }) => (
  <div className="relative h-20 -mt-6" style={{ width: `${width}px` }}>
    <div className="absolute bg-gray-300 w-full h-full rounded-2xl top-2"></div>
    <motion.div
      initial={{ top: "0px" }}
      whileHover={{ top: "-1px" }}
      transition={{ duration: 0.05, ease: "easeInOut" }}
      className="relative bg-white w-full h-full rounded-2xl p-4 flex flex-col items-center"
    >
      <div className="text-xl font-medium pt-1">{content}</div>
      <div className="text-gray-700">{value}</div>
    </motion.div>
  </div>
);

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="font-dm justify-center space-y-2 text-center pr-6">
      <div className="text-4xl">{formattedTime}</div>
      <div className="text-md text-gray-700">{formattedDate}</div>
    </div>
  );
};
const FooterLogo = () => (
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-full">
      <Image src="/BlankDropLogo.png" width={20} height={20} />
    </div>
    <span className="ml-2 font-dm font-medium">BlankDrop</span>
  </div>
);

const MainLayout = ({ children, title, subtitle }) => {
  const [userDetails, setUserDetails] = useState("");
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchDrops = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/user_details/",
            {
              method: "POST",
              body: JSON.stringify({ clerk_id: user.id }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            setUserDetails(data.user);
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

  return (
    <div className="font-dm pt-8 pb-6 rounded-tl-[60px] mt-1 mr-1 px-10 flex flex-col h-screen overflow-y-auto w-full bg-white">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <Header title={title} subtitle={subtitle} />
        <div className="flex items-center gap-16 pl-8">
          <SideInfoBox
            content={userDetails?.num_active_drops}
            value="Active Drops"
            width="200"
          />
          <SideInfoBox
            content={userDetails?.num_drops - userDetails?.num_active_drops}
            value="Remaining Drops"
            width="200"
          />
        </div>
        <TimeDisplay />
      </div>

      {/* Main Content with Right Sidebar */}
      <div className="flex-grow flex pt-6">
        {children}

        {/* Right Sidebar */}
        <div className="w-1/4 items-end flex flex-col pt-6 pb-2 justify-between">
          <SideInfoBox content="50% Sale" value="Claim now" width="170" />
          <FooterLogo />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
