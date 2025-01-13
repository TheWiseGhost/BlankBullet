import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useUser } from "@clerk/nextjs";
// import { ToastAction } from "../global/Toast";
// import { useToast } from "../global/Use-Toast";

const CircleText = ({ text }) => (
  <div className="flex flex-row items-center">
    <div className="bg-gray-400 p-2 rounded-full mr-2"></div>
    <div className="text-gray-500 text-sm">{text}</div>
  </div>
);

const Header = ({ title, subtitle }) => (
  <div className="flex flex-col space-y-6">
    <div className="flex items-center gap-2">
      <CircleText text="DropFast" />
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
          active ? "bg-gray-500" : "bg-gray-200"
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
  // const { user } = useUser();
  // const { toast } = useToast();
  // const onSave = () => {
  //   const drop = JSON.parse(localStorage.getItem("drop"));
  //   console.log(drop);
  //   const updateDrop = async () => {
  //     try {
  //       const landing_response = await fetch(
  //         "https://dropfastbackend.onrender.com/api/update_landing/",
  //         {
  //           method: "POST",
  //           body: JSON.stringify({
  //             clerk_id: user.id,
  //             drop_id: drop.drop._id,
  //             landing_code: String(drop.landing.code),
  //           }),
  //         }
  //       );

  //       const form_response = await fetch(
  //         "https://dropfastbackend.onrender.com/api/update_form/",
  //         {
  //           method: "POST",
  //           body: JSON.stringify({
  //             clerk_id: user.id,
  //             drop_id: drop.drop._id,
  //             form_data: JSON.parse(localStorage.getItem("formData")),
  //           }),
  //         }
  //       );

  //       if (!landing_response.ok || !form_response.ok) {
  //         console.error("Failed to fetch update drop");
  //       } else {
  //         toast({
  //           title: `Drop Saved`,
  //           description: "Good Progress =)",
  //           action: (
  //             <ToastAction onClick={() => {}} altText="Close Toast">
  //               Close
  //             </ToastAction>
  //           ),
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching drops:", error);
  //     }
  //   };
  //   updateDrop();
  // };
  return (
    <div className="justify-center items-center flex flex-row space-x-12">
      <NavBox content={"Landing"} page={page} id={id} />
      <NavBox content={"Form"} page={page} id={id} />
      <NavBox content={"Checkout"} page={page} id={id} />
      <NavBox content={"Publish"} page={page} id={id} />
      {/* <button
        onClick={onSave}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-2/5"
      >
        <span className="absolute inset-[-100%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#908894_0%,#edeceb_50%,#908894_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
          Save
        </span>
      </button> */}
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
          {/* <div className="flex items-center">
            <SideInfoBox content="215 / 500" value="Storage" width="170" />
          </div> */}
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
