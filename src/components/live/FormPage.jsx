import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js navigation
import { useToast } from "../global/Use-Toast";
import { ToastAction } from "../global/Toast";

const FormPage = ({ id }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [formResponses, setFormResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const fetchDropDetails = async () => {
      try {
        const response = await fetch(
          "https://dropfastbackend.onrender.com/api/drop_details/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ drop_id: id }),
          }
        );

        const update = await fetch(
          "https://dropfastbackend.onrender.com/api/update_data/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ drop_id: id, page: "form" }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setFormData(data.form.form_data);
        } else {
          console.error("Failed to fetch drops");
        }
      } catch (error) {
        console.error("Error fetching drops:", error);
      }
    };

    if (id) {
      fetchDropDetails();
    }
  }, [id]);

  const questions = Object.keys(formData);
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const answers = formData[currentQuestion] || [];

  const handleAnswerSelect = (answer) => {
    setFormResponses((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleNext = async () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      try {
        const form_response = await fetch(
          "https://dropfastbackend.onrender.com/api/add_form_response/",
          {
            method: "POST",
            body: JSON.stringify({
              drop_id: id,
              form_response: formResponses,
            }),
          }
        );

        if (!form_response.ok) {
          console.error("Failed to fetch add form response");
        } else {
          toast({
            title: `Thank You!`,
            description: "We appreciate your time",
            action: (
              <ToastAction onClick={() => {}} altText="Close Toast">
                Close
              </ToastAction>
            ),
          });
        }
      } catch (error) {
        console.error("Error adding form response:", error);
      }

      router.push(`/live/${id}/checkout`);
    }
  };

  return (
    <div className="flex bg-gray-100 flex-col items-center min-h-screen">
      {/* Progress Bar */}
      <div className="pt-20">
        <div className="flex flex-row place-items-center justify-center w-full space-x-4">
          <div className="rounded-3xl bg-green-200 place-items-center justify-center">
            <p className="font-dm text-lg text-center px-4">
              {currentQuestionIndex + 1}
            </p>
          </div>
          <div className="w-[300px] relative h-4 bg-gray-200 rounded-full place-items-center">
            <div
              className="absolute top-0 left-0 h-4 bg-green-200 rounded-full"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / totalQuestions) * 100
                }%`,
              }}
            />
          </div>
          <div className="rounded-3xl bg-gray-300 place-items-center justify-center">
            <p className="font-dm text-lg text-center px-4">{totalQuestions}</p>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white flex flex-col space-y-8 p-10 mt-20 rounded-lg shadow-2xl w-3/5">
        <h2 className="text-2xl text-center font-dm font-bold">
          {currentQuestion}
        </h2>
        <select
          className="w-full px-4 py-4 mb-4 font-dm txt-xl border rounded-md"
          onChange={(e) => handleAnswerSelect(e.target.value)}
          value={formResponses[currentQuestion] || ""}
        >
          <option>Choose an option</option>
          {answers.map((answer, index) => (
            <option key={index} value={answer} className="">
              {answer}
            </option>
          ))}
        </select>
        <button
          className="w-4/5 mx-auto font-dm px-4 py-3 bg-gray-500 text-white rounded-md hover:bg-black transition duration-200"
          onClick={handleNext}
          disabled={!formResponses[currentQuestion]}
        >
          {currentQuestionIndex < totalQuestions - 1 ? "Next" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default FormPage;
