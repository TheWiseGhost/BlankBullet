// import React, { useRef, useState, useEffect } from "react";
// import BuilderLayout from "../BuilderLayout";

// const LiveEditor = () => {
//   const [dividerPosition, setDividerPosition] = useState(50); // Percentage width of the preview section
//   const [isDragging, setIsDragging] = useState(false);

//   const [bullet, setBullet] = useState(null);
//   const [htmlCode, setHtmlCode] = useState("");
//   const [typingTimeout, setTypingTimeout] = useState(null); // To handle debounce logic

//   // Fix this NextJS server-client error with local storage
//   useEffect(() => {
//     const savedBullet = JSON.parse(localStorage.getItem("bullet"));
//     setBullet(savedBullet || { landing: { code: "" } });
//   }, []);

//   // Synchronize bullet.landing.code with htmlCode
//   useEffect(() => {
//     if (bullet) {
//       setHtmlCode(bullet.landing?.code || "");
//     }
//   }, [bullet]);

//   // Debounced update of local storage when htmlCode changes
//   useEffect(() => {
//     if (typingTimeout) {
//       clearTimeout(typingTimeout);
//     }

//     const timeout = setTimeout(() => {
//       if (bullet) {
//         const updatedBullet = {
//           ...bullet,
//           landing: { ...bullet.landing, code: htmlCode },
//         };
//         setBullet(updatedBullet);
//         localStorage.setItem("bullet", JSON.stringify(updatedBullet));
//       }
//     }, 1000); // 1 second debounce time

//     setTypingTimeout(timeout);

//     return () => clearTimeout(timeout);
//   }, [htmlCode]);

//   const previewRef = useRef();
//   const shadowRootRef = useRef(null); // Store reference to the shadow root

//   useEffect(() => {
//     if (!previewRef.current) return;

//     // Attach shadow DOM if not already attached
//     if (!shadowRootRef.current) {
//       shadowRootRef.current = previewRef.current.attachShadow({ mode: "open" });
//     }

//     // Update shadow root content
//     shadowRootRef.current.innerHTML = `
//       <div>
//         ${htmlCode}
//       </div>
//     `;
//   }, [htmlCode]);

//   const handleMouseDown = () => {
//     setIsDragging(true);
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const newDividerPosition = (e.clientX / window.innerWidth) * 100; // Calculate percentage
//       if (newDividerPosition > 10 && newDividerPosition < 90) {
//         setDividerPosition(newDividerPosition);
//       }
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div
//       className="flex w-full min-h-[95vh] font-sans"
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       {/* Preview Section */}
//       <div
//         ref={previewRef}
//         className="bg-white border border-gray-300 overflow-auto"
//         style={{ width: `${dividerPosition}%` }}
//       ></div>

//       {/* Divider */}
//       <div
//         className="w-[5px] bg-gray-300 cursor-col-resize"
//         onMouseDown={handleMouseDown}
//       ></div>

//       {/* Editor Section */}
//       <div className="flex-1 flex-col space-y-2">
//         <h1 className="font-dm text-md text-center px-4">
//           Code your website and just drop it in here when your ready! <br />{" "}
//           <br />
//           <b>IMPORTANT:</b> Set the button that should track the checkout
//           initiated to have an id of checkout. If you have multiple buttons just
//           make sure the id has checkout at the start (Ex. checkout_one,
//           checkout_two, checkout)
//         </h1>
//         <div className="flex h-full p-2">
//           <textarea
//             className="w-full h-full text-base p-2 font-mono border border-gray-200 outline-none resize-none"
//             value={htmlCode}
//             onChange={(e) => setHtmlCode(e.target.value)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Landing = ({ id }) => {
//   const [bullet, setBullet] = useState(null);

//   useEffect(() => {
//     setBullet(JSON.parse(localStorage.getItem("bullet")));
//   }, []);

//   return (
//     <BuilderLayout
//       title={bullet ? bullet.bullet?.title : ""}
//       subtitle={"Bullet Builder"}
//       page={"landing"}
//       id={id}
//     >
//       <LiveEditor />
//     </BuilderLayout>
//   );
// };

// export default Landing;

"use client";

import React, { act, useEffect, useState } from "react";
import BuilderLayout from "../BuilderLayout";
import { FaCircle } from "react-icons/fa";
import { FileUpload } from "@/components/global/FileUpload";

const options = [
  { id: 1, name: "Brand Name" },
  { id: 2, name: "Logo" },
  { id: 3, name: "Primary Image" },
  { id: 4, name: "Other Images" },
  { id: 5, name: "Product Title" },
  { id: 6, name: "Price" },
  { id: 7, name: "Variants" },
  { id: 8, name: "Cart Button" },
];

const FontDropdown = ({ base, handleChange }) => {
  const fonts = [
    { name: "Arial", style: "Arial, sans-serif" },
    { name: "Helvetica", style: "Helvetica, sans-serif" },
    { name: "Georgia", style: "Georgia, serif" },
    { name: "Times New Roman", style: "'Times New Roman', serif" },
    { name: "Courier New", style: "'Courier New', monospace" },
    { name: "Roboto", style: "'Roboto', sans-serif" },
    { name: "Open Sans", style: "'Open Sans', sans-serif" },
    { name: "Lato", style: "'Lato', sans-serif" },
    { name: "Montserrat", style: "'Montserrat', sans-serif" },
    { name: "Poppins", style: "'Poppins', sans-serif" },
  ];

  const handleFontChange = (event) => {
    handleChange({
      ...base,
      font: event.target.value,
    });
  };

  return (
    <div style={{ fontFamily: base.font || fonts[0].style }}>
      <h2 className="font-dm mb-2 text-black">Font</h2>
      <select
        value={base.font || fonts[0].style}
        onChange={handleFontChange}
        className="w-full px-2 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {fonts.map((font, index) => (
          <option key={index} value={font.style}>
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const TitleComponent = ({ title, handleTitleChange }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <h1>Text</h1>
        <input
          type="text"
          value={title.text || ""}
          placeholder="Enter Text"
          onChange={(e) =>
            handleTitleChange({
              ...title,
              text: e.target.value.slice(0, 100),
            })
          }
          className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
          maxLength="100"
        />
      </div>
      <div>
        <FontDropdown base={title} handleChange={handleTitleChange} />
      </div>
    </div>
  );
};

const ImageUploadComponent = ({ image, handleImageChange, text }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <FileUpload onChange={(file) => handleImageChange(file)} target={text} />
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
      <div>
        <FontDropdown base={CTA} handleChange={handleCTAChange} />
      </div>
    </div>
  );
};

const VariantComponent = ({ variants, setVariants }) => {
  const handleDelete = (index) => {
    // Filter out the variant at the specified index
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    // Prompt the user for a new variant name
    const newVariant = prompt("Enter the name of the new variant:");
    if (newVariant) {
      setVariants((prev) => [...prev, newVariant]);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-lg font-medium mb-4">Manage Variants</h2>
      <ul className="space-y-2">
        {variants &&
          variants.map((variant, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border border-gray-200 rounded-md"
            >
              <span>{variant}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                <IconTrash size={18} />
              </button>
            </li>
          ))}
      </ul>
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-blue-400 transition duration-200"
      >
        Add Variant
      </button>
    </div>
  );
};

const LandingComponent = () => {
  const [activeOption, setActiveOption] = useState(options[0].id);
  const [bullet, setBullet] = useState("");

  // Fix this NextJS server client error with local storage
  useEffect(() => {
    setBullet(JSON.parse(localStorage.getItem("bullet")));
  }, []);

  console.log(bullet);

  const [brandName, setBrandName] = useState({
    text: bullet?.landing?.brand_name?.text,
    font: bullet?.landing?.brand_name?.font,
  });

  const [productTitle, setProductTitle] = useState({
    text: bullet?.landing?.product_title?.text,
    font: bullet?.landing?.product_title?.font,
  });

  const [price, setPrice] = useState({
    text: bullet?.landing?.price?.text,
    font: bullet?.landing?.price?.font,
  });

  const updateTextComponent = (newName) => {
    if (activeOption == 1) {
      setBrandName(newName);
    } else if (activeOption == 5) {
      setProductTitle(newName);
    } else if (activeOption == 6) {
      setPrice(newName);
    }
  };

  const [logo, setLogo] = useState(bullet?.landing?.logo);
  const [primaryImg, setPrimaryImg] = useState(bullet?.landing?.primary_img);
  const [otherImg1, setOtherImg1] = useState(bullet?.landing?.other_img1);
  const [otherImg2, setOtherImg2] = useState(bullet?.landing?.other_img2);
  const [otherImg3, setOtherImg3] = useState(bullet?.landing?.other_img3);

  const updateImgComponent = (file) => {
    if (activeOption == 2) {
      setLogo(file);
    } else if (activeOption == 3) {
      setPrimaryImg(file);
    }
  };

  const [currCTA, setCurrCTA] = useState({
    text: bullet?.landing?.cta?.text,
    color: bullet?.landing?.cta?.color,
    font: bullet?.landing?.cta?.font,
  });
  const handleCTAChange = (newCTA) => {
    setCurrCTA(newCTA);
  };

  const [variants, setVariants] = useState(bullet?.landing?.variants);

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
                handleTitleChange={updateTextComponent}
                title={brandName}
              />
            </div>
          )}
          {activeOption === 2 && (
            <div>
              <ImageUploadComponent
                image={logo}
                handleImageChange={updateImgComponent}
                text={"Logo"}
              />
            </div>
          )}
          {activeOption === 3 && (
            <div>
              <ImageUploadComponent
                image={logo}
                handleImageChange={updateImgComponent}
                text={"Primary Image"}
              />
            </div>
          )}
          {activeOption === 4 && (
            <div className="flex flex-col space-y-6">
              <ImageUploadComponent
                image={logo}
                handleImageChange={setOtherImg1}
                text={"Other Image 1"}
              />
              <ImageUploadComponent
                image={logo}
                handleImageChange={setOtherImg2}
                text={"Other Image 2"}
              />
              <ImageUploadComponent
                image={logo}
                handleImageChange={setOtherImg3}
                text={"Other Image 3"}
              />
            </div>
          )}
          {activeOption === 5 && (
            <div>
              <TitleComponent
                handleTitleChange={updateTextComponent}
                title={productTitle}
              />
            </div>
          )}
          {activeOption === 6 && (
            <div>
              <TitleComponent
                handleTitleChange={updateTextComponent}
                title={price}
              />
            </div>
          )}
          {activeOption === 7 && (
            <div>
              <VariantComponent variants={variants} setVariants={setVariants} />
            </div>
          )}
          {activeOption === 8 && (
            <div>
              <CTAComponent handleCTAChange={handleCTAChange} CTA={currCTA} />
            </div>
          )}
        </div>
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
      <LandingComponent />
    </BuilderLayout>
  );
};

export default Landing;
