import React from "react";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/DropFastLoading.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  if (!animationData) {
    return <div>Loading...</div>; // Show a loading state until the JSON is loaded
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div style={{ width: 100, height: 100 }}>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
      <p className="font-dm text-gray-700 text-sm">
        It will take 60 seconds to load your stores
      </p>
    </div>
  );
};

export default Loading;
