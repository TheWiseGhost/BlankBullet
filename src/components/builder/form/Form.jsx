// import React, { useState } from "react";
// import BuilderLayout from "../BuilderLayout";
// import { IconCopyPlus } from "@tabler/icons-react";
// import { IconBackspace } from "@tabler/icons-react";
// import RowComponent from "../../global/RowComponent";

// const FormComponent = () => {
//   const [activeRow, setActiveRow] = useState(1);
//   const modules = [
//     {
//       id: 1,
//       place: 1,
//       image: "https://via.placeholder.com/50",
//       banner_image: "https://via.placeholder.com/50",
//       title: "Introduction and Setup",
//     },
//     {
//       id: 2,
//       place: 2,
//       image: "https://via.placeholder.com/50",
//       banner_image: "https://via.placeholder.com/50",
//       title: "Frontend Development",
//     },
//     {
//       id: 3,
//       place: 3,
//       image: "https://via.placeholder.com/50",
//       banner_image: "https://via.placeholder.com/50",
//       title: "Backend Development",
//     },
//     {
//       id: 4,
//       place: 4,
//       image: "https://via.placeholder.com/50",
//       banner_image: "https://via.placeholder.com/50",
//       title: "Tying them together",
//     },
//   ];

//   const handleRowClick = (place) => {
//     setActiveRow(place);
//   };

//   const activeModule = modules.find((m) => m.id === activeRow);

//   const [isEdit, setIsEdit] = useState(false);

//   return (
//     <div className="flex w-full h-screen">
//       {/* Left Panel */}
//       <div className="w-2/3 p-4 pt-0 flex flex-col items-center">
//         {activeModule && (
//           <div className="flex flex-col w-full">
//             <div className="flex flex-row w-ful">
//               {/* Left: Banner Image */}
//               <div className="flex flex-col items-center">
//                 <img
//                   src={activeModule.banner_image}
//                   alt="Banner Image"
//                   className="w-60 rounded-lg h-60"
//                 />
//                 <p className="text-center text-2xl pt-3">Module Banner</p>

//                 {/* Add and Delete Module */}
//                 <div className="flex flex-row items-center mt-8 space-x-12">
//                   <button className="flex items-center text-red-500">
//                     <IconBackspace className="mr-2" />{" "}
//                     <span className="text-red-500 hover:translate-x-1 transition duration-150">
//                       Delete Module
//                     </span>
//                   </button>
//                   <button className="flex items-center">
//                     <IconCopyPlus className="mr-2" />{" "}
//                     <span className="text-neutral-800 hover:translate-x-1 transition duration-150">
//                       New Module
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               {/* Middle: Thumbnail and Title */}
//               <div className="flex flex-col items-center text-center mx-auto space-y-6">
//                 <img
//                   src={activeModule.image}
//                   alt={activeModule.title}
//                   className="w-48 h-28"
//                 />
//                 <h2 className="text-2xl font-medium mt-4">
//                   {activeModule.title}
//                 </h2>

//                 {/* Place and Color Side by Side */}
//                 <div className="flex flex-row items-center mt-6 space-x-8 py-6">
//                   <div className="flex items-center text-xl">
//                     <span className="mr-2">Place</span>
//                     <span className="text-black bg-white text-xl rounded-full w-10 h-10 border-blue-500 border-2 flex items-center justify-center">
//                       {activeRow}
//                     </span>
//                   </div>
//                   <div className="flex items-center text-xl">
//                     <span className="mr-2">Color</span>
//                     <span className="bg-blue-500 w-10 h-10 rounded-full"></span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center space-x-6 py-2">
//                   <label className="text-xl font-medium">View</label>
//                   <label class="relative inline-block h-6 w-10 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900">
//                     <input
//                       class="peer sr-only"
//                       id="AcceptConditions"
//                       type="checkbox"
//                       onClick={() => {
//                         setIsEdit(!isEdit);
//                       }}
//                     />
//                     <span class="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-gray-300 ring-[4px] ring-inset ring-white transition-all peer-checked:start-5 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
//                   </label>

//                   <label className="text-xl font-medium">Edit</label>
//                 </div>
//               </div>
//             </div>

//             {/* Edit and View Mode Toggle */}
//           </div>
//         )}
//       </div>

//       {/* Right Panel */}
//       <div className="w-1/3 font-dm border-t-4 border-l-4 rounded-tl-[40px] border-blue-400 p-4 pl-0">
//         <h2 className="text-2xl font-mon text-black font-semibold text-center mb-4">
//           Current Modules
//         </h2>
//         <div className="h-0.5 w-4/5 mx-auto bg-gray-200 my-2"></div>
//         {modules.map((module) => (
//           <RowComponent
//             key={module.id}
//             place={module.place}
//             image={module.image}
//             title={module.title}
//             isActive={activeRow === module.id}
//             onClick={() => handleRowClick(module.place)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Form = ({ id }) => (
//   <BuilderLayout
//     title={"Web Development Made Simple"}
//     subtitle={"Bullet Builder"}
//     page={"form"}
//     id={id}
//   >
//     <FormComponent />
//   </BuilderLayout>
// );

// export default Form;

import React, { useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";

const GoogleFormClone = () => {
  const [formData, setFormData] = useState({});
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // Track if data is loaded

  // Load initial data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
    setIsLoaded(true); // Mark as loaded after reading from localStorage
  }, []);

  // Update localStorage whenever formData changes, but skip the first render
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  // Add a new question
  const addQuestion = () => {
    const newQuestion = `Question${Object.keys(formData).length + 1}`;
    setFormData({ ...formData, [newQuestion]: [] });
    setActiveQuestion(newQuestion);
  };

  // Add an answer to the active question
  const addAnswer = () => {
    if (activeQuestion) {
      const updatedAnswers = [
        ...formData[activeQuestion],
        `Answer${formData[activeQuestion].length + 1}`,
      ];
      setFormData({ ...formData, [activeQuestion]: updatedAnswers });
    }
  };

  // Handle editing question or answer
  const handleEdit = (key, index = null, newValue) => {
    if (index === null) {
      // Editing question
      const newFormData = {};
      Object.keys(formData).forEach((question) => {
        newFormData[question === key ? newValue : question] =
          formData[question];
      });
      setFormData(newFormData);
      setActiveQuestion(newValue);
    } else {
      // Editing answer
      const updatedAnswers = [...formData[key]];
      updatedAnswers[index] = newValue;
      setFormData({ ...formData, [key]: updatedAnswers });
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={addQuestion}
          className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-black"
        >
          Add Question
        </button>
        <button
          onClick={addAnswer}
          className={`${
            activeQuestion ? "bg-slate-500" : "bg-gray-200"
          } text-white px-4 py-2 rounded ${
            activeQuestion ? "hover:bg-slate-600" : "cursor-not-allowed"
          }`}
          disabled={!activeQuestion}
        >
          Add Answer
        </button>
      </div>
      <div className="space-y-6">
        {Object.keys(formData).length > 0 ? (
          Object.keys(formData).map((question, qIndex) => (
            <div
              key={qIndex}
              className={`border min-w-1/2 p-4 cursor-pointer rounded shadow-sm bg-white ${
                activeQuestion === question ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setActiveQuestion(question)}
            >
              <input
                type="text"
                value={question}
                className="font-bold text-lg w-full mb-4 border-b focus:outline-none"
                onChange={(e) => handleEdit(question, null, e.target.value)}
              />
              <div className="space-y-2">
                {formData[question].map((answer, aIndex) => (
                  <input
                    key={aIndex}
                    type="text"
                    value={answer}
                    className="w-full border-b focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) =>
                      handleEdit(question, aIndex, e.target.value)
                    }
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>No data available. Add a question to get started.</div>
        )}
      </div>
    </div>
  );
};

const Form = ({ id }) => {
  const [bullet, setBullet] = useState(null);

  useEffect(() => {
    setBullet(JSON.parse(localStorage.getItem("bullet")));
  }, []);

  return (
    <BuilderLayout
      title={bullet ? bullet.bullet?.title : ""}
      subtitle={"Bullet Builder"}
      page={"form"}
      id={id}
    >
      <GoogleFormClone />
    </BuilderLayout>
  );
};

export default Form;
