import React, { useState } from "react";
import BuilderLayout from "../BuilderLayout";
import { IconCopyPlus } from "@tabler/icons-react";
import { IconBackspace } from "@tabler/icons-react";
import RowComponent from "@/components/global/RowComponent";
import AffilateLink from "./AffilateLink";

const VideosComponent = () => {
  const [activeRow, setActiveRow] = useState(1);
  const videos = [
    {
      id: 1,
      place: 1,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Introduction and Setup",
    },
    {
      id: 2,
      place: 2,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Frontend Development",
    },
    {
      id: 3,
      place: 3,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Backend Development",
    },
    {
      id: 4,
      place: 4,
      image: "https://via.placeholder.com/50",
      banner_image: "https://via.placeholder.com/50",
      title: "Tying them together",
    },
  ];

  const affilate_links = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      link: "https://tabler.io/icons",
      title: "www.shopify.com/affilate",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      link: "https://tabler.io/icons",
      title: "www.pycharm.com/install",
    },
  ];

  const handleRowClick = (place) => {
    setActiveRow(place);
  };

  const activeVideo = videos.find((m) => m.id === activeRow);

  return (
    <div className="flex w-full h-screen">
      {/* Left Panel */}
      <div className="w-2/3 p-4 pt-0 flex flex-col items-center">
        {activeVideo && (
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center pb-6">
              <h2 className="ml-4 text-4xl">{activeVideo.title}</h2>
            </div>

            <div className="w-full flex flex-row">
              <div className="w-full flex flex-col text-center ">
                <img
                  src={activeVideo.banner_image}
                  alt="Banner Image"
                  className="w-full h-[315px] pr-16"
                />
              </div>
            </div>

            <div className="w-full flex flex-col pt-4 pl-4">
              {affilate_links.map((link) => (
                <AffilateLink
                  key={link.id}
                  image={link.image}
                  title={link.title}
                  link={link.link}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className="w-1/3 font-dm border-t-4 border-l-4 rounded-tl-[40px] border-blue-400 p-4 pl-0">
        <h2 className="text-2xl font-mon text-black font-semibold text-center mb-4">
          Current Videos
        </h2>
        <div className="h-0.5 w-4/5 mx-auto bg-gray-200 my-2"></div>
        {videos.map((video) => (
          <RowComponent
            key={video.id}
            place={video.place}
            image={video.image}
            title={video.title}
            isActive={activeRow === video.id}
            onClick={() => handleRowClick(video.place)}
          />
        ))}
      </div>
    </div>
  );
};

const Videos = () => (
  <BuilderLayout
    title={"Web Development Made Simple"}
    subtitle={"Course Builder"}
    page={"videos"}
  >
    <VideosComponent />
  </BuilderLayout>
);

export default Videos;
