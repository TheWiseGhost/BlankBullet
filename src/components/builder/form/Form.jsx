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
