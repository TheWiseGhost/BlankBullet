import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Responses = ({ analytics }) => {
  const renderCharts = () => {
    return Object.entries(analytics).map(([question, answers], index) => {
      const labels = Object.keys(answers);
      const dataValues = Object.values(answers);

      const barData = {
        labels,
        datasets: [
          {
            label: "Responses",
            data: dataValues,
            backgroundColor: [
              "rgba(59, 130, 246, 0.6)", // Tailwind Blue-500
              "rgba(128, 128, 128, 0.6)", // Medium Gray
              "rgba(0, 122, 255, 0.6)", // Blue
              "rgba(211, 211, 211, 0.6)", // Lighter Gray
              "rgba(70, 130, 180, 0.6)", // Steel Blue
              "rgba(169, 169, 169, 0.6)", // Light Gray
            ],
          },
        ],
      };

      const pieData = {
        labels,
        datasets: [
          {
            data: dataValues,
            backgroundColor: [
              "rgba(59, 130, 246, 0.6)", // Tailwind Blue-500
              "rgba(128, 128, 128, 0.6)", // Medium Gray
              "rgba(0, 122, 255, 0.6)", // Blue
              "rgba(211, 211, 211, 0.6)", // Lighter Gray
              "rgba(70, 130, 180, 0.6)", // Steel Blue
              "rgba(169, 169, 169, 0.6)", // Light Gray
            ],
          },
        ],
      };

      return (
        <div key={index} className="mb-16">
          <h3 className="font-dm text-xl font-semibold mb-4">{question}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 h-60 bg-white rounded-lg">
              <Bar data={barData} />
            </div>
            <div className="p-4 h-60 bg-white rounded-lg">
              <Pie data={pieData} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-6 border-2 border-gray-300 rounded-lg min-h-screen">
      <h2 className="text-3xl font-bold mb-3 text-center">Form Analytics</h2>
      <div className="w-3/5 mx-auto h-0.5 bg-gray-300 rounded-lg mb-8" />
      {analytics && Object.keys(analytics).length > 0 ? (
        renderCharts()
      ) : (
        <p className="text-center text-gray-500">
          No form response data available.
        </p>
      )}
    </div>
  );
};

export default Responses;
