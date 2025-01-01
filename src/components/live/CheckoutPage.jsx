import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js navigation

const CheckoutForm = ({
  image,
  quantities,
  variants,
  price,
  product,
  next,
  handleInputChange,
}) => {
  return (
    <div className="flex flex-row space-x-8 md:space-x-20 bg-white rounded-lg p-6 w-full md:w-11/12 mx-auto">
      <div className="flex flex-col w-1/2 md:w-1/3 px-4">
        <img
          src={image || "https://via.placeholder.com/200x200"}
          alt="Company Logo"
          className="w-64 mx-auto h-fit"
        />
        <h2 className="text-xl md:text-2xl font-mon font-semibold text-gray-800 text-center my-4">
          {product}
        </h2>
        <div className="w-full md:w-4/5 mx-auto h-0.5 my-2 bg-gray-300"></div>
        <div className="w-full md:w-2/3 font-dm mx-auto text-sm md:text-base flex flex-col space-y-2 py-4">
          <div className="flex flex-row justify-between">
            <h2 className="">Product:</h2>
            <h2 className="">${price}</h2>
          </div>
          <div className="flex flex-row justify-between">
            <h2 className="">Shipping:</h2>
            <h2 className="">$0.00</h2>
          </div>
          <div className="flex flex-row justify-between">
            <h2 className="">Total:</h2>
            <h2 className="">${price} * Quantity</h2>
          </div>
          <div>
            <h2 className="text-sm">We handle tax for you :)</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2 md:w-2/3 px-4 text-sm md:text-base">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="quantityDropdown"
              className="block text-sm font-medium text-gray-700"
            >
              Select Quantity
            </label>
            <select
              id="quantity"
              className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleInputChange}
            >
              <option>Choose an option</option>
              {quantities &&
                quantities.map((quantity, index) => (
                  <option key={index} value={quantity}>
                    {quantity}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="variantDropdown"
              className="block text-sm font-medium text-gray-700"
            >
              Select Variant
            </label>
            <select
              id="variant"
              className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleInputChange}
            >
              <option>Choose an option</option>
              {variants &&
                variants.map((variant, index) => (
                  <option key={index} value={variant}>
                    {variant}
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
              className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                Exp Date
              </label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="mt-1 block w-full px-2 md:px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleInputChange}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-4 md:py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
    </div>
  );
};

const CheckoutPage = ({ id }) => {
  const router = useRouter();

  const [checkoutImg, setCheckoutImg] = useState(null);
  const [quantities, setQuantities] = useState("");
  const [variants, setVariants] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");

  const [checkoutResponse, setCheckoutResponse] = useState({
    quantity: "",
    variant: "",
    fullName: "",
    email: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCheckoutResponse((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    const fetchDropDetails = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/drop_details/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ drop_id: id }),
          }
        );

        const update = await fetch("http://127.0.0.1:8000/api/update_data/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ drop_id: id, page: "checkout" }),
        });

        if (response.ok) {
          const data = await response.json();
          setCheckoutImg(data.checkout.checkout_img);
          setQuantities(data.checkout.quantities);
          setVariants(data.checkout.variants);
          setPrice(data.checkout.price);
          setProduct(data.checkout.product);
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

  const handleNext = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const add_checkout_data = await fetch(
        "http://127.0.0.1:8000/api/add_checkout_data/",
        {
          method: "POST",
          body: JSON.stringify({
            drop_id: id,
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
      <div className="w-full md:px-12 flex flex-col my-20">
        <CheckoutForm
          image={checkoutImg}
          quantities={quantities}
          variants={variants}
          next={handleNext}
          price={price}
          product={product}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
