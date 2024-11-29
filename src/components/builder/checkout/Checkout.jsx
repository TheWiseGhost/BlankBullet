import React, { useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";

const CheckoutComponent = () => {
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
        <div className="bg-white rounded-lg pl-6 w-full flex max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg text-gray-700 font-medium">
                Price
              </label>
              <div className="font-dm flex flex-row items-center">
                <p className="text-xl mr-2">$</p>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-lg text-gray-700 font-medium">
                Product URL from Stripe
              </label>
              <input
                type="url"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                placeholder="Product URL"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="permissionsGranted"
                checked={permissionsGranted}
                onChange={(e) => setPermissionsGranted(e.target.checked)}
                className="w-8 h-8 border-gray-300 rounded focus:ring-0"
              />
              <label htmlFor="permissionsGranted" className="text-gray-700">
                By checking the box, you are responsible for ensuring the proper
                permissions were granted to avoid error.
              </label>
            </div>
            <div className="flex justify-center">
              <button className="w-1/3 mt-4 bg-black border-black border-2 text-white hover:bg-white hover:text-black py-3 rounded-2xl transition duration-300 font-semibold">
                Confirm
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/5 justify-center items-center">
          <div className="w-0.5 h-80 my-auto mx-auto bg-gray-200"></div>
        </div>
        <div className="w-full flex flex-col space-y-4">
          <div className="text-3xl -mt-4 flex flex-row font-medium items-center text-gray-800">
            <h2 className="pr-3">Easy Payments Powered by</h2>{" "}
            <img src="/StripeLogo.webp" className="w-20 items-center h-20" />
          </div>
          <ul className="space-y-6 pl-4">
            <li className="flex items-center space-x-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </span>
              <span>Sign Up for a Stripe Account</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </span>
              <span>Create a Product and Link</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </span>
              <span>Add the link to the left</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </span>
              <span>Grant us required permission</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                5
              </span>
              <span>Choose the correct plan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Checkout = ({ id }) => {
  const [bullet, setBullet] = useState(null);

  useEffect(() => {
    setBullet(JSON.parse(localStorage.getItem("bullet")));
  }, []);

  return (
    <BuilderLayout
      title={bullet ? bullet.bullet?.title : ""}
      subtitle={"Bullet Builder"}
      page={"checkout"}
      id={id}
    >
      <CheckoutComponent />
    </BuilderLayout>
  );
};

export default Checkout;
