import React, { useState } from "react";
import BuilderLayout from "../BuilderLayout";

const GridItem = ({ title }) => (
  <div className="flex flex-col space-y-2">
    <div className="bg-gray-200 rounded-lg flex justify-center items-center h-40"></div>
    <div className="text-lg">{title}</div>
  </div>
);

const PublishComponent = () => {
  const [price, setPrice] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!permissionsGranted) {
      alert("Please grant the required permissions.");
      return;
    }
    // Handle form submission here
    console.log("Price:", price);
    console.log("Product URL:", productUrl);
  };

  return (
    <div className="flex flex-col items-center w-full h-fit">
      <div className="flex flex-row w-full">
        <div className="bg-white flex flex-col rounded-lg pl-6 w-full max-w-lg">
          <div className="flex flex-row text-xl items-center font-dm">
            <h2 className="text-black">Coursard Powered Publish</h2>
            <div className="size-4 rounded-full mx-4 bg-gray-400" />
            <h2 className="text-gray-400">Custom Publish</h2>
          </div>
          <div className="h-0.5 w-full bg-gray-200 mt-4 mb-6 mx-auto" />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xl text-gray-900 font-medium">
                Domain
              </label>
              <div className="font-dm flex flex-row items-center">
                <p className="text-md mr-2 text-gray-500">coursard.com/</p>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="beautifulcourse"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-lg text-gray-900 font-medium">
                Consider Upgrading Your Plan
              </label>
              <div className="w-full font-dm flex flex-row items-center border border-gray-300 rounded-lg p-2 mt-1">
                <div className="w-4 h-4 mx-3 bg-black rounded-full" />
                <p>Pro Plan</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <input
                type="checkbox"
                id="permissionsGranted"
                checked={permissionsGranted}
                onChange={(e) => setPermissionsGranted(e.target.checked)}
                className="w-8 h-8 border-gray-300 rounded focus:ring-0"
              />
              <label htmlFor="permissionsGranted" className="text-gray-700">
                By checking the box, you are responsible for the content of your
                course and its repercussions
              </label>
            </div>
            <div className="flex justify-center">
              <button className="w-1/3 mt-4 bg-black border-black border-2 text-white hover:bg-white hover:text-black py-3 rounded-2xl transition duration-300 font-semibold">
                Publish
              </button>
            </div>
          </form>
        </div>
        <div className="w-full pl-20 flex flex-col space-y-4">
          <div className="text-3xl justify-center flex flex-row font-medium items-center text-gray-800">
            <h2>Preview</h2>
          </div>
          <div className="h-[500px] w-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

const Publish = () => (
  <BuilderLayout
    title={"Web Development Made Simple"}
    subtitle={"Course Builder"}
    page={"publish"}
  >
    <PublishComponent />
  </BuilderLayout>
);

export default Publish;
