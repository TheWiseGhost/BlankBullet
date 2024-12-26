import React, { useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";
import { useUser } from "@clerk/nextjs";
import { ToastAction } from "../../global/Toast";
import { useToast } from "../../global/Use-Toast";

const FormBuilder = ({ formData, setFormData }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const { user } = useUser();
  const { toast } = useToast();

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

  const onSave = async () => {
    const bullet = JSON.parse(localStorage.getItem("bullet"));
    try {
      const form_response = await fetch(
        "http://127.0.0.1:8000/api/update_form/",
        {
          method: "POST",
          body: JSON.stringify({
            clerk_id: user.id,
            bullet_id: bullet.bullet._id,
            form_data: JSON.parse(localStorage.getItem("formData")),
          }),
        }
      );

      if (!form_response.ok) {
        console.error("Failed to fetch update bullet");
      } else {
        toast({
          title: `Form Saved`,
          description: "Good Progress =)",
          action: (
            <ToastAction onClick={() => {}} altText="Close Toast">
              Close
            </ToastAction>
          ),
        });
      }
    } catch (error) {
      console.error("Error fetching bullets:", error);
    }
  };

  return (
    <div className="p-4 space-y-4 w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-4">
          <button
            onClick={addQuestion}
            className="bg-slate-900 text-white px-4 py-4 rounded hover:bg-black transition duration-200"
          >
            Add Question
          </button>
          <button
            onClick={addAnswer}
            className={`${
              activeQuestion ? "bg-slate-500" : "bg-gray-200"
            } text-white px-4 py-4 rounded transition duration-200 ${
              activeQuestion ? "hover:bg-slate-600" : "cursor-not-allowed"
            }`}
            disabled={!activeQuestion}
          >
            Add Answer
          </button>
        </div>

        <button
          onClick={onSave}
          className="px-6 bg-black border-black border-2 text-white hover:bg-white hover:text-black py-3 rounded-xl transition duration-300 font-dm font-medium"
        >
          Save
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

const ArrowDown = () => {
  return (
    <div className="pt-8 pb-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTpufPNqJOUGunsNJn5Af6XsywGDw1dtTcA&s"
        alt="Down arrow"
        className="w-6 rounded-md mb-4 justify-center mx-auto"
      />
    </div>
  );
};

const FormDisplay = ({ formData }) => {
  if (!formData || Object.keys(formData).length === 0) {
    return <div>No data available to display.</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-3 py-12">
      {Object.keys(formData).map((question, index) => (
        <React.Fragment key={index}>
          <div className="border rounded-md shadow-lg px-8 py-12 w-11/12 max-w-lg bg-white text-center">
            <h3 className="font-bold text-2xl mb-8">{question}</h3>
            <select className="w-full px-2 py-4 border rounded">
              {formData[question].map((answer, aIndex) => (
                <option key={aIndex} value={answer}>
                  {answer}
                </option>
              ))}
            </select>
          </div>
          {index < Object.keys(formData).length - 1 && <ArrowDown />}
        </React.Fragment>
      ))}
    </div>
  );
};

const FormComponent = () => {
  const [formData, setFormData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load initial data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
    setIsLoaded(true);
  }, []);

  // Update localStorage whenever formData changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  return (
    <div className="w-full flex flex-row space-x-12">
      <div className="w-1/2 flex flex-col">
        <FormBuilder formData={formData} setFormData={setFormData} />
      </div>
      <div className="w-1/2 flex flex-col">
        <FormDisplay formData={formData} />
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
      <FormComponent />
    </BuilderLayout>
  );
};

export default Form;
