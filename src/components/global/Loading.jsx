"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Lottie component to ensure it only loads on the client
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch("/DropFastLoading.json");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };

    fetchAnimation();
  }, []);

  if (!animationData) {
    return <div>Loading...</div>; // Fallback loading state
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
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
