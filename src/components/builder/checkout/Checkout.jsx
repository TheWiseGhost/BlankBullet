import React, { useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";

const CheckoutForm = () => {
  return (
    <div className="max-w-lg bg-white shadow-md rounded-lg p-6">
      <img
        src="https://via.placeholder.com/400x100"
        alt="Company Logo"
        className="w-32 mx-auto mb-6"
      />
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Just one more step!
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Complete your payment details below to finish the checkout.
      </p>
      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Card Details */}
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            placeholder="4242 4242 4242 4242"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex gap-4">
          {/* Expiration Date */}
          <div className="flex-1">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiration Date
            </label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* CVV */}
          <div className="flex-1">
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        {/* ZIP Code */}
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="United States"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Complete Payment
        </button>
      </form>
      <p className="text-gray-500 text-sm text-center mt-4">
        Payments are processed securely. By completing this payment, you agree
        to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

const ArrowDown = () => {
  return (
    <div className="pt-12 pb-4 max-w-lg">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTpufPNqJOUGunsNJn5Af6XsywGDw1dtTcA&s"
        alt="Down arrow"
        className="w-10 rounded-md mb-4 justify-center mx-auto"
      />
    </div>
  );
};

const PostCheckoutComponent = () => {
  return (
    <div className="text-center px-6 py-2 max-w-lg">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Checkout Banner"
        className="w-full rounded-md mb-4"
      />
      <p className="mt-4 text-gray-600">
        Thank you for choosing our service! Currently this product is under
        development. Here's a 20% discount for when it fully releases.
        <br /> Nothing has been charged to your card, we hope to see you again!
      </p>
    </div>
  );
};

const CheckoutComponent = () => {
  return (
    <div className="w-full flex flex-col">
      <CheckoutForm />
      <ArrowDown />
      <PostCheckoutComponent />
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
