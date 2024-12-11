import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js navigation

const CheckoutForm = ({ image, products, plans, next, handleInputChange }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <img
        src={image || "https://via.placeholder.com/200x200"}
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
        <div>
          <label
            htmlFor="productDropdown"
            className="block text-sm font-medium text-gray-700"
          >
            Select Product
          </label>
          <select
            id="product"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleInputChange}
          >
            <option>Choose an option</option>
            {products &&
              products.map((product, index) => (
                <option key={index} value={product}>
                  {product}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="planDropdown"
            className="block text-sm font-medium text-gray-700"
          >
            Select Plan
          </label>
          <select
            id="plan"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleInputChange}
          >
            <option>Choose an option</option>
            {plans &&
              plans.map((plan, index) => (
                <option key={index} value={plan}>
                  {plan}
                </option>
              ))}
          </select>
        </div>

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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
            id="country"
            placeholder="United States"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleInputChange}
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={next}
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

const CheckoutPage = ({ id }) => {
  const router = useRouter();

  const [checkoutImg, setCheckoutImg] = useState(null);
  const [products, setProducts] = useState("");
  const [plans, setPlans] = useState("");
  const [checkoutResponse, setCheckoutResponse] = useState({
    product: "",
    plan: "",
    fullName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCheckoutResponse((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    const fetchBulletDetails = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/bullet_details/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ bullet_id: id }),
          }
        );

        const update = await fetch("http://127.0.0.1:8000/api/update_data/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bullet_id: id, page: "checkout" }),
        });

        if (response.ok) {
          const data = await response.json();
          setCheckoutImg(data.checkout.checkout_img);
          setProducts(data.checkout.products);
          setPlans(data.checkout.plans);
        } else {
          console.error("Failed to fetch bullets");
        }
      } catch (error) {
        console.error("Error fetching bullets:", error);
      }
    };

    if (id) {
      fetchBulletDetails();
    }
  }, [id]);

  const handleNext = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const add_checkout_data = await fetch(
        "http://127.0.0.1:8000/api/add_checkout_data/",
        {
          method: "POST",
          body: JSON.stringify({
            bullet_id: id,
            checkout_response: checkoutResponse,
          }),
        }
      );

      if (!add_checkout_data.ok) {
        console.error("Failed to fetch add checkout data");
      }
    } catch (error) {
      console.error("Error adding form response:", error);
    }
    router.push(`/live/${id}/finished`);
  };

  return (
    <div className="flex flex-row items-center min-h-screen">
      <div className="w-1/2 mx-auto flex flex-col shadow-2xl my-20">
        <CheckoutForm
          image={checkoutImg}
          products={products}
          plans={plans}
          next={handleNext}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
