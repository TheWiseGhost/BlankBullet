import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      <CircleText text="Coursard" />
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
    <div className="absolute bg-gray-500 w-full h-full rounded-2xl top-2"></div>
    <motion.div
      initial={{ top: "0px" }}
      whileHover={{ top: "-0px" }}
      transition={{ duration: 0.05, ease: "easeInOut" }}
      className="relative bg-white w-full h-full rounded-2xl p-4 flex flex-col items-center"
    >
      <div className="text-xl font-medium pt-1">{content}</div>
      <div className="text-gray-700">{value}</div>
    </motion.div>
  </div>
);

const NavBox = ({ content, page, id }) => {
  const capitalizedPage = page.charAt(0).toUpperCase() + page.slice(1);
  const active = capitalizedPage == content;
  const handleClick = () => {
    window.location.href = `/builder/${id}/` + content.toLowerCase();
  };

  return (
    <div
      onClick={handleClick}
      className="relative h-12 w-full hover:cursor-pointer"
    >
      <div
        className={`absolute ${
          active ? "bg-blue-400" : "bg-gray-200"
        } w-full h-full rounded-2xl top-2`}
      ></div>
      <motion.div
        initial={{ top: "0px" }}
        whileHover={{ top: "-1px" }}
        transition={{ duration: 0.05, ease: "easeInOut" }}
        className="relative bg-white w-full h-full rounded-2xl p-4 flex flex-col items-center"
      >
        <div className="text-lg  -mt-2">{content}</div>
      </motion.div>
    </div>
  );
};

const NavRow = ({ page, id }) => {
  const { user } = useUser();
  const onSave = () => {
    const course = JSON.parse(localStorage.getItem("course"));
    const updateCourse = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/update_landing/",
          {
            method: "POST",
            body: JSON.stringify({
              clerk_id: user.id,
              course_id: course._id,
              course: course,
              landing: course.landing,
            }),
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch update course");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    updateCourse();
  };
  return (
    <div className="justify-center items-center flex flex-row space-x-12">
      <NavBox content={"Landing"} page={page} id={id} />
      <NavBox content={"Modules"} page={page} id={id} />
      <NavBox content={"Videos"} page={page} id={id} />
      <NavBox content={"Payment"} page={page} id={id} />
      <NavBox content={"Publish"} page={page} id={id} />
      <button
        onClick={onSave}
        className="w-1/2 mx-6 bg-black border-black border-2 text-white hover:bg-white hover:text-black py-2 rounded-2xl transition duration-300 font-semibold"
      >
        Save
      </button>
    </div>
  );
};

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

const BuilderLayout = ({ children, title, subtitle, page, id }) => {
  return (
    <div className="font-dm pt-8 pb-6 rounded-tl-[60px] mt-1 mr-1 px-10 flex flex-col h-screen overflow-y-auto w-full bg-white">
      {/* Top Header */}
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <Header title={title} subtitle={subtitle} />
          <div className="flex items-center">
            <SideInfoBox content="215 / 500" value="Storage" width="170" />
          </div>
          <TimeDisplay />
        </div>
        <NavRow page={page} id={id} />
      </div>

      {/* Main Content with Right Sidebar */}
      <div className="flex-grow flex pt-10">{children}</div>
    </div>
  );
};

export default BuilderLayout;
