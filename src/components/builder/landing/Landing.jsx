// "use client";

// import React, { useEffect, useState } from "react";
// import BuilderLayout from "../BuilderLayout";
// import { FaCircle } from "react-icons/fa";
// import { FileUpload } from "@/components/global/FileUpload";

// const options = [
//   { id: 1, name: "Title" },
//   { id: 2, name: "CTA Button" },
//   { id: 3, name: "Banner Image" },
//   { id: 4, name: "Landing Text" },
//   { id: 5, name: "Module Image" },
//   { id: 6, name: "Footer Image" },
//   { id: 7, name: "Footer Link" },
//   { id: 8, name: "Favicon" },
// ];

// const TitleComponent = ({ title, handleTitleChange }) => {
//   return (
//     <div className="w-full font-dm flex flex-col space-y-2">
//       <h1>Title</h1>
//       <input
//         type="text"
//         value={title}
//         placeholder="Enter Title"
//         onChange={handleTitleChange}
//         className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
//         maxLength="100"
//       ></input>
//     </div>
//   );
// };

// const ImageUploadComponent = ({ image, handleImageChange, text }) => {
//   return (
//     <div className="w-full font-dm flex flex-col space-y-2">
//       <FileUpload onChange={handleImageChange} target={text} />
//     </div>
//   );
// };

// const CTAComponent = ({ CTA, handleCTAChange }) => {
//   return (
//     <div className="flex flex-col space-y-4">
//       <div className="w-full font-dm flex flex-col space-y-2">
//         <h1>Text</h1>
//         <input
//           type="text"
//           value={CTA.text}
//           placeholder="Enter title"
//           onChange={(e) =>
//             handleCTAChange({
//               ...CTA,
//               text: e.target.value.slice(0, 100),
//             })
//           }
//           className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
//           maxLength="100"
//         />
//       </div>
//       <div className="w-full font-dm flex flex-col space-y-2">
//         <h1>Color (Hex Code with #)</h1>
//         <input
//           type="text"
//           value={CTA.color}
//           placeholder="Enter link"
//           onChange={(e) =>
//             handleCTAChange({
//               ...CTA,
//               color: e.target.value,
//             })
//           }
//           className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
//           maxLength="100"
//         />
//       </div>
//       <div className="w-full font-dm flex flex-col space-y-2">
//         <h1>Link</h1>
//         <input
//           type="text"
//           value={CTA.link}
//           placeholder="Enter link"
//           onChange={(e) =>
//             handleCTAChange({
//               ...CTA,
//               link: e.target.value,
//             })
//           }
//           className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
//           maxLength="100"
//         />
//       </div>
//     </div>
//   );
// };

// const LandingTextComponent = ({ text, handleTextChange }) => {
//   return (
//     <div className="w-full font-dm flex flex-col space-y-2">
//       <h1>Text</h1>
//       <textarea
//         type="text"
//         value={text}
//         placeholder="Enter text"
//         onChange={handleTextChange}
//         className="border w-full border-gray-300 h-60 rounded-lg p-3 text-gray-700"
//         maxLength="500"
//       ></textarea>
//     </div>
//   );
// };

// const FooterComponent = ({ footer, handleFooterChange }) => {
//   return (
//     <div className="flex flex-col space-y-4">
//       <div className="w-full font-dm flex flex-col space-y-2">
//         <h1>Text</h1>
//         <input
//           type="text"
//           value={footer.text}
//           placeholder="Enter title"
//           onChange={(e) =>
//             handleFooterChange({
//               ...footer,
//               text: e.target.value.slice(0, 100),
//             })
//           }
//           className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
//           maxLength="100"
//         />
//       </div>
//       <div className="w-full font-dm flex flex-col space-y-2">
//         <h1>Link</h1>
//         <input
//           type="text"
//           value={footer.link}
//           placeholder="Enter link"
//           onChange={(e) =>
//             handleFooterChange({
//               ...footer,
//               link: e.target.value,
//             })
//           }
//           className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
//           maxLength="100"
//         />
//       </div>
//     </div>
//   );
// };

// const LandingComponent = () => {
//   const [activeOption, setActiveOption] = useState(options[0].id);
//   const [bullet, setBullet] = useState("");

//   // Fix this NextJS server client error with local storage
//   useEffect(() => {
//     setBullet(JSON.parse(localStorage.getItem("bullet")));
//   }, []);

//   console.log(bullet);
//   const [currTitle, setCurrTitle] = useState(bullet?.landing?.title);
//   console.log(currTitle);

//   const handleTitleChange = (event) => {
//     const updatedTitle = event.target.value.slice(0, 100);

//     if (bullet && bullet.landing) {
//       bullet.landing.title = updatedTitle;
//       setCurrTitle(updatedTitle);
//       localStorage.setItem("bullet", JSON.stringify(bullet));
//     }
//   };

//   const [currLandingText, setCurrLandingText] = useState(
//     bullet?.landing?.landing_text
//   );

//   const handleLandingTextChange = (event) => {
//     const updatedText = event.target.value.slice(0, 100);

//     if (bullet && bullet.landing) {
//       bullet.landing.landing_text = updatedText;
//       setCurrLandingText(updatedText);
//       localStorage.setItem("bullet", JSON.stringify(bullet));
//     }
//   };

//   const [currCTA, setCurrCTA] = useState({
//     text: bullet?.landing?.CTA_text,
//     color: bullet?.landing?.CTA_color,
//     link: bullet?.landing?.CTA_link,
//   });

//   const handleCTAChange = (newCTA) => {
//     setCurrCTA(newCTA);

//     if (bullet && bullet.landing) {
//       bullet.landing.CTA_text = newCTA.text;
//       bullet.landing.CTA_color = newCTA.color;
//       bullet.landing.CTA_link = newCTA.link;
//       localStorage.setItem("bullet", JSON.stringify(bullet)); // Persist the updated bullet to localStorage
//     }
//   };

//   const [currBanner, setCurrBanner] = useState(bullet?.landing?.banner_img);
//   const handleBannerChange = (file) => {
//     if (bullet && bullet.landing) {
//       bullet.landing.banner_img = file;
//       setCurrBanner(file);
//       localStorage.setItem("bullet", JSON.stringify(bullet));
//     }
//   };

//   const [currModuleImg, setCurrModuleImg] = useState(
//     bullet?.landing?.module_img
//   );
//   const handleModuleImgChange = (file) => {
//     if (bullet && bullet.landing) {
//       bullet.landing.module_img = file;
//       setCurrModuleImg(file);
//       localStorage.setItem("bullet", JSON.stringify(bullet));
//     }
//   };

//   const [currFooterImg, setCurrFooterImg] = useState(
//     bullet?.landing?.footer_img
//   );
//   const handleFooterImgChange = (file) => {
//     if (bullet && bullet.landing) {
//       bullet.landing.footer_img = file;
//       setCurrFooterImg(file);
//       localStorage.setItem("bullet", JSON.stringify(bullet));
//     }
//   };

//   const [favicon, setFavicon] = useState(bullet?.landing?.favicon);
//   const handleFaviconChange = (file) => {
//     if (bullet && bullet.landing) {
//       bullet.landing.favicon = file;
//       setFavicon(file);
//       localStorage.setItem("bullet", JSON.stringify(bullet));
//     }
//   };

//   const [currFooter, setCurrFooter] = useState({
//     text: bullet?.landing?.footer_text,
//     link: bullet?.landing?.footer_link,
//   });

//   const handleFooterChange = (newFooter) => {
//     setCurrFooter(newFooter);

//     if (bullet && bullet.landing) {
//       bullet.landing.footer_text = newFooter.text;
//       bullet.landing.footer_link = newFooter.link;
//       localStorage.setItem("bullet", JSON.stringify(bullet)); // Persist the updated bullet to localStorage
//     }
//   };

//   return (
//     <div className="flex w-full h-screen font-dm">
//       {/* Left Panel */}
//       <div className="w-1/6 p-4 mr-6 bg-white">
//         <h2 className="mb-6 text-2xl font-medium">Landing Page</h2>
//         <ul>
//           {options.map((option) => (
//             <li
//               key={option.id}
//               className={`flex items-center mb-2 cursor-pointer ${
//                 activeOption === option.id
//                   ? "text-blue-500 font-semibold"
//                   : "text-gray-700"
//               }`}
//               onClick={() => setActiveOption(option.id)}
//             >
//               <FaCircle
//                 className={`mr-2 ${
//                   activeOption === option.id ? "text-blue-500" : "text-gray-300"
//                 }`}
//               />
//               {option.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Middle Panel */}
//       <div className="w-3/5 bg-gray-200"></div>

//       {/* Right Panel */}
//       <div className="w-1/4 p-4 bg-white flex flex-col items-center">
//         <h2 className="mb-4 font-medium text-3xl">
//           {options.find((o) => o.id === activeOption).name}
//         </h2>
//         <div className="h-0.5 mx-auto bg-gray-300 w-4/5 mb-4"></div>
//         <div>
//           {/* Render a component based on the active option */}
//           {activeOption === 1 && (
//             <div>
//               <TitleComponent
//                 handleTitleChange={handleTitleChange}
//                 title={currTitle}
//               />
//             </div>
//           )}
//           {activeOption === 2 && (
//             <div>
//               <CTAComponent handleCTAChange={handleCTAChange} CTA={currCTA} />
//             </div>
//           )}
//           {activeOption === 3 && (
//             <div>
//               <ImageUploadComponent
//                 image={currBanner}
//                 handleImageChange={handleBannerChange}
//                 text={"Banner Image"}
//               />
//             </div>
//           )}
//           {activeOption === 4 && (
//             <div>
//               <LandingTextComponent
//                 handleTextChange={handleLandingTextChange}
//                 text={currLandingText}
//               />
//             </div>
//           )}
//           {activeOption === 5 && (
//             <div>
//               <ImageUploadComponent
//                 image={currModuleImg}
//                 handleImageChange={handleModuleImgChange}
//                 text={"Module Image"}
//               />
//             </div>
//           )}
//           {activeOption === 6 && (
//             <div>
//               <ImageUploadComponent
//                 image={currFooterImg}
//                 handleImageChange={handleFooterImgChange}
//                 text={"Footer Image"}
//               />
//             </div>
//           )}
//           {activeOption === 7 && (
//             <div>
//               <FooterComponent
//                 footer={currFooter}
//                 handleFooterChange={handleFooterChange}
//               />
//             </div>
//           )}
//           {activeOption === 8 && (
//             <div>
//               <ImageUploadComponent
//                 image={favicon}
//                 handleImageChange={handleFaviconChange}
//                 text={"Favicon"}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Landing = ({ id }) => (
//   <BuilderLayout
//     title={"Web Development Made Simple"}
//     subtitle={"Bullet Builder"}
//     page={"landing"}
//     id={id}
//   >
//     <LandingComponent />
//   </BuilderLayout>
// );

// export default Landing;

import React, { useRef, useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";

const LiveEditor = () => {
  const [dividerPosition, setDividerPosition] = useState(50); // Percentage width of the preview section
  const [isDragging, setIsDragging] = useState(false);

  const [bullet, setBullet] = useState(null);

  // Fix this NextJS server-client error with local storage
  useEffect(() => {
    const savedBullet = JSON.parse(localStorage.getItem("bullet"));
    setBullet(savedBullet || { landing: { code: "" } });
    console.log(savedBullet.checkout);
  }, []);

  const [htmlCode, setHtmlCode] = useState("");

  // Synchronize bullet.landing.code with htmlCode
  useEffect(() => {
    if (bullet) {
      setHtmlCode(bullet.landing?.code || "");
    }
  }, [bullet]);

  // Update bullet and save to localStorage whenever htmlCode changes
  useEffect(() => {
    if (bullet) {
      const updatedBullet = {
        ...bullet,
        landing: { ...bullet.landing, code: htmlCode },
      };
      setBullet(updatedBullet);
      localStorage.setItem("bullet", JSON.stringify(updatedBullet));
    }
  }, [htmlCode]);

  const previewRef = useRef();
  const shadowRootRef = useRef(null); // Store reference to the shadow root

  useEffect(() => {
    if (!previewRef.current) return;

    // Attach shadow DOM if not already attached
    if (!shadowRootRef.current) {
      shadowRootRef.current = previewRef.current.attachShadow({ mode: "open" });
    }

    // Update shadow root content
    shadowRootRef.current.innerHTML = `
      <div>
        ${htmlCode}
      </div>
    `;
  }, [htmlCode]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newDividerPosition = (e.clientX / window.innerWidth) * 100; // Calculate percentage
      if (newDividerPosition > 10 && newDividerPosition < 90) {
        setDividerPosition(newDividerPosition);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "95vh",
        width: "100vw",
        fontFamily: "Arial",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Preview Section */}
      <div
        ref={previewRef}
        style={{
          width: `${dividerPosition}%`,
          borderRight: "1px solid #ddd",
          border: "0.5px solid #ddd",
          backgroundColor: "#ffffff",
          overflow: "auto",
        }}
      ></div>

      {/* Divider */}
      <div
        style={{
          width: "5px",
          cursor: "col-resize",
          backgroundColor: "#ddd",
        }}
        onMouseDown={handleMouseDown}
      ></div>

      {/* Editor Section */}
      <div style={{ flex: 1, padding: "10px" }}>
        <textarea
          style={{
            width: "100%",
            height: "100%",
            fontSize: "16px",
            padding: "8px",
            fontFamily: "monospace",
            border: "0.5px solid #d8d8d8",
            outline: "none",
            resize: "none",
          }}
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
      </div>
    </div>
  );
};

const Landing = ({ id }) => {
  const [bullet, setBullet] = useState(null);

  useEffect(() => {
    setBullet(JSON.parse(localStorage.getItem("bullet")));
  }, []);

  return (
    <BuilderLayout
      title={bullet ? bullet.bullet?.title : ""}
      subtitle={"Bullet Builder"}
      page={"landing"}
      id={id}
    >
      <LiveEditor />
    </BuilderLayout>
  );
};

export default Landing;
