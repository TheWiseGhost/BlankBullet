"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/global/FileUpload";
import { useUser } from "@clerk/nextjs";

const CourseInfoForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const handleFileUpload = (file) => {
    setFile(file);
    console.log(file);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value.slice(0, 100));
  };

  const handleUpload = async () => {
    setLoading(true);
    if (!file || !title) {
      alert("Please fill all fields and select a file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("clerk_id", user.id);

      const uploadUrl = "http://127.0.0.1:8000/api/add_course/";

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading file.");
      }

      alert("Course add successfully!");
      setSelectedFile(null); // Clear selected file after upload
      setTitle(""); // Clear title after upload
    } catch (error) {
      // console.error("Error uploading file:", error);
      // alert("Error uploading file. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="font-dm space-y-4 max-w-md bg-white">
      {/* Name Field */}
      <div className="pb-2">
        <div className="text-lg font-medium text-gray-800 mb-2">
          Course Title
        </div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
          className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
          maxLength="100"
        ></input>
      </div>

      {/* Plan Field */}
      <div className="pb-4">
        <div className="w-full max-w-4xl mx-auto min-h-80 border-2 border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
          <FileUpload onChange={handleFileUpload} target={"Course Thumbnail"} />
        </div>
      </div>

      {/* Upgrade Button */}
      <button
        onClick={handleUpload}
        className="w-1/2 bg-black border-black border-2 text-white hover:bg-white hover:text-black py-3 rounded-2xl transition duration-300 font-semibold"
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseInfoForm;
