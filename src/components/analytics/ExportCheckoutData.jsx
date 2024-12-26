import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const ExportCheckoutData = ({ checkoutData }) => {
  const [selectedField, setSelectedField] = useState("");
  const [stats, setStats] = useState({
    totalRows: 0,
    dateRange: { start: null, end: null },
  });

  // Calculate stats when checkoutData changes
  useEffect(() => {
    if (checkoutData && checkoutData.length > 0) {
      const dates = checkoutData
        .map((item) => new Date(item.created_at))
        .sort((a, b) => a - b);

      const totalRows = checkoutData.length;
      const dateRange = {
        start: dates[0]?.toLocaleDateString() || "N/A",
        end: new Date().toLocaleDateString() || "N/A",
      };

      setStats({ totalRows, dateRange });
    }
  }, [checkoutData]);

  const exportAllData = () => {
    const csv = Papa.unparse(checkoutData.map(({ data }) => data));
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "checkout_data.csv");
  };

  const exportSpecificField = () => {
    if (!selectedField) {
      alert("Please select a field to export!");
      return;
    }

    const fieldData = checkoutData.map(({ data }) => ({
      [selectedField]: data[selectedField] || "",
    }));

    const csv = Papa.unparse(fieldData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${selectedField}_data.csv`);
  };

  const fields =
    checkoutData && checkoutData.length > 0
      ? Object.keys(checkoutData[0].data)
      : [];

  return (
    <div className="pt-6 pb-16">
      <h2 className="text-3xl font-bold mb-3 text-center">
        Export Checkout Data
      </h2>
      <div className="w-3/5 mx-auto h-0.5 bg-gray-300 rounded-lg mb-4" />

      <div className="mb-3 p-4 rounded text-center">
        <p className="text-md">
          <strong>Total Rows:</strong> {stats.totalRows}
        </p>
        <p className="text-md">
          <strong>Date Range:</strong> {stats.dateRange.start} -{" "}
          {stats.dateRange.end}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={exportAllData}
          className="bg-neutral-800 text-white px-6 py-2 rounded hover:bg-black transition duration-200"
        >
          Export All Data
        </button>

        <div className="w-full max-w-md pt-6">
          <label
            htmlFor="fieldSelect"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Select a Field to Export
          </label>
          <select
            id="fieldSelect"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select a Field --</option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={exportSpecificField}
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition duration-200"
        >
          Export Selected Field
        </button>
      </div>
    </div>
  );
};

export default ExportCheckoutData;
