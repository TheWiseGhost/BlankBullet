"use client";

import React, { useEffect, useState } from "react";
import BuilderLayout from "../BuilderLayout";
import { FaCircle } from "react-icons/fa";

const options = [
  { id: 1, name: "Title" },
  { id: 2, name: "CTA Button" },
  { id: 3, name: "Banner Image" },
  { id: 4, name: "Landing Text" },
  { id: 5, name: "Module Image" },
  { id: 6, name: "Footer Image" },
  { id: 7, name: "Footer Link" },
  { id: 8, name: "Favicon" },
];

const TitleComponent = ({ title, handleTitleChange }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <h1>Title</h1>
      <input
        type="text"
        value={title}
        placeholder="Enter title"
        onChange={handleTitleChange}
        className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
        maxLength="100"
      ></input>
    </div>
  );
};

const CTAComponent = ({ CTA, handleCTAChange }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full font-dm flex flex-col space-y-2">
        <h1>Text</h1>
        <input
          type="text"
          value={CTA.text}
          placeholder="Enter title"
          onChange={(e) =>
            handleCTAChange({
              ...CTA,
              text: e.target.value.slice(0, 100),
            })
          }
          className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
          maxLength="100"
        />
      </div>
      <div className="w-full font-dm flex flex-col space-y-2">
        <h1>Color (Hex Code with #)</h1>
        <input
          type="text"
          value={CTA.color}
          placeholder="Enter link"
          onChange={(e) =>
            handleCTAChange({
              ...CTA,
              color: e.target.value,
            })
          }
          className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
          maxLength="100"
        />
      </div>
      <div className="w-full font-dm flex flex-col space-y-2">
        <h1>Link</h1>
        <input
          type="text"
          value={CTA.link}
          placeholder="Enter link"
          onChange={(e) =>
            handleCTAChange({
              ...CTA,
              link: e.target.value,
            })
          }
          className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
          maxLength="100"
        />
      </div>
    </div>
  );
};

const LandingTextComponent = ({ text, handleTextChange }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <h1>Text</h1>
      <textarea
        type="text"
        value={text}
        placeholder="Enter text"
        onChange={handleTextChange}
        className="border w-full border-gray-300 h-60 rounded-lg p-3 text-gray-700"
        maxLength="500"
      ></textarea>
    </div>
  );
};

const FooterComponent = ({ footer, handleFooterChange }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full font-dm flex flex-col space-y-2">
        <h1>Text</h1>
        <input
          type="text"
          value={footer.text}
          placeholder="Enter title"
          onChange={(e) =>
            handleFooterChange({
              ...footer,
              text: e.target.value.slice(0, 100),
            })
          }
          className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
          maxLength="100"
        />
      </div>
      <div className="w-full font-dm flex flex-col space-y-2">
        <h1>Link</h1>
        <input
          type="text"
          value={footer.link}
          placeholder="Enter link"
          onChange={(e) =>
            handleFooterChange({
              ...footer,
              link: e.target.value,
            })
          }
          className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
          maxLength="100"
        />
      </div>
    </div>
  );
};

const LandingComponent = () => {
  const [activeOption, setActiveOption] = useState(options[0].id);
  const [course, setCourse] = useState("");

  // Fix this NextJS server client error with local storage
  useEffect(() => {
    setCourse(JSON.parse(localStorage.getItem("course")));
  }, []);

  console.log(course);
  const [currTitle, setCurrTitle] = useState(course?.landing?.title);

  const handleTitleChange = (event) => {
    const updatedTitle = event.target.value.slice(0, 100);

    if (course && course.landing) {
      course.landing.title = updatedTitle;
      setCurrTitle(updatedTitle);
      localStorage.setItem("course", JSON.stringify(course));
    }
  };

  const [currLandingText, setCurrLandingText] = useState(
    course?.landing?.landing_text
  );

  const handleLandingTextChange = (event) => {
    const updatedText = event.target.value.slice(0, 100);

    if (course && course.landing) {
      course.landing.landing_text = updatedText;
      setCurrLandingText(updatedText);
      localStorage.setItem("course", JSON.stringify(course));
    }
  };

  const [currCTA, setCurrCTA] = useState({
    text: course?.landing?.CTA_text,
    color: course?.landing?.CTA_color,
    link: course?.landing?.CTA_link,
  });

  const handleCTAChange = (newCTA) => {
    setCurrCTA(newCTA);

    if (course && course.landing) {
      course.landing.CTA_text = newCTA.text;
      course.landing.CTA_color = newCTA.color;
      course.landing.CTA_link = newCTA.link;
      localStorage.setItem("course", JSON.stringify(course)); // Persist the updated course to localStorage
    }
  };

  const [currFooter, setCurrFooter] = useState({
    text: course?.landing?.footer_text,
    link: course?.landing?.footer_link,
  });

  const handleFooterChange = (newFooter) => {
    setCurrFooter(newFooter);

    if (course && course.landing) {
      course.landing.footer_text = newFooter.text;
      course.landing.footer_link = newFooter.link;
      localStorage.setItem("course", JSON.stringify(course)); // Persist the updated course to localStorage
    }
  };

  return (
    <div className="flex w-full h-screen font-dm">
      {/* Left Panel */}
      <div className="w-1/6 p-4 mr-6 bg-white">
        <h2 className="mb-6 text-2xl font-medium">Landing Page</h2>
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              className={`flex items-center mb-2 cursor-pointer ${
                activeOption === option.id
                  ? "text-blue-500 font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveOption(option.id)}
            >
              <FaCircle
                className={`mr-2 ${
                  activeOption === option.id ? "text-blue-500" : "text-gray-300"
                }`}
              />
              {option.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Panel */}
      <div className="w-3/5 bg-gray-200"></div>

      {/* Right Panel */}
      <div className="w-1/4 p-4 bg-white flex flex-col items-center">
        <h2 className="mb-4 font-medium text-3xl">
          {options.find((o) => o.id === activeOption).name}
        </h2>
        <div className="h-0.5 mx-auto bg-gray-300 w-4/5 mb-4"></div>
        <div>
          {/* Render a component based on the active option */}
          {activeOption === 1 && (
            <div>
              <TitleComponent
                handleTitleChange={handleTitleChange}
                title={currTitle}
              />
            </div>
          )}
          {activeOption === 2 && (
            <div>
              <CTAComponent handleCTAChange={handleCTAChange} CTA={currCTA} />
            </div>
          )}
          {activeOption === 3 && <div>Banner Image Component</div>}
          {activeOption === 4 && (
            <div>
              <LandingTextComponent
                handleTextChange={handleLandingTextChange}
                text={currLandingText}
              />
            </div>
          )}
          {activeOption === 5 && <div>Module Image Component</div>}
          {activeOption === 6 && <div>Footer Image Component</div>}
          {activeOption === 7 && (
            <div>
              <FooterComponent
                footer={currFooter}
                handleFooterChange={handleFooterChange}
              />
            </div>
          )}
          {activeOption === 8 && <div>Favicon Component</div>}
        </div>
      </div>
    </div>
  );
};

const Landing = ({ id }) => (
  <BuilderLayout
    title={"Web Development Made Simple"}
    subtitle={"Course Builder"}
    page={"landing"}
    id={id}
  >
    <LandingComponent />
  </BuilderLayout>
);

export default Landing;
