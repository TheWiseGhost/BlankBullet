import React, { useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";
import { FileUpload } from "@/components/global/FileUpload";
import { useUser } from "@clerk/nextjs";
import { ToastAction } from "../../global/Toast";
import { useToast } from "../../global/Use-Toast";

const CheckoutImageUploadComponent = ({ handleImageChange, text }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <FileUpload onChange={handleImageChange} target={text} />
    </div>
  );
};

const FinishedImageUploadComponent = ({ handleImageChange, text }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <FileUpload onChange={handleImageChange} target={text} />
    </div>
  );
};

const CheckoutForm = ({ image }) => {
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
    <div className="pt-12 pb-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTpufPNqJOUGunsNJn5Af6XsywGDw1dtTcA&s"
        alt="Down arrow"
        className="w-10 rounded-md mb-4 justify-center mx-auto"
      />
    </div>
  );
};

const PostCheckoutComponent = ({ image, text }) => {
  return (
    <div className="text-center px-6 py-2">
      <img
        src={image || "https://via.placeholder.com/400x200"}
        alt="Checkout Banner"
        className="w-full rounded-md mb-4"
      />
      {text ? (
        <p>{text}</p>
      ) : (
        <p className="mt-4 text-gray-600">
          Thank you for choosing our service! Currently this product is under
          development. Here's a 20% discount code for when it fully releases.
          <br />
          -WYNXHA34S-
          <br /> Nothing has been charged to your card, we hope to see you
          again!
        </p>
      )}
    </div>
  );
};

const FinishedTextComponent = ({ text, handleTextChange }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <h1>Final Text</h1>
      <textarea
        type="text"
        value={text}
        placeholder="Enter text"
        onChange={handleTextChange}
        className="border w-full border-gray-300 h-60 rounded-lg p-3 text-gray-700"
        maxLength="500"
      ></textarea>
    </div>
  );
};

const CheckoutComponent = () => {
  const [checkoutImg, setCheckoutImg] = useState(null);
  const [checkoutImgFile, setCheckoutImgFile] = useState(null);
  const [finishedImg, setFinishedImg] = useState(null);
  const [finishedImgFile, setFinishedImgFile] = useState(null);
  const [finishedText, setFinishedText] = useState("");
  const [checkout, setCheckout] = useState("");

  const { user } = useUser();
  const { toast } = useToast();

  // Fix this NextJS server client error with local storage
  useEffect(() => {
    setCheckout(JSON.parse(localStorage.getItem("checkout")));
    console.log(JSON.stringify(checkout));
    setCheckoutImg(checkout.checkout_img);
    setFinishedImg(checkout.finished_img);
    setFinishedText(checkout.finished_text);
  }, []);

  useEffect(() => {
    localStorage.setItem("checkoutImg", checkoutImg);
  }, [checkoutImg]);

  useEffect(() => {
    localStorage.setItem("finishedImg", finishedImg);
  }, [finishedImg]);

  useEffect(() => {
    localStorage.setItem("finishedText", finishedText);
  }, [finishedText]);

  const handleCheckoutImgChange = (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCheckoutImg(imageUrl);
      setCheckoutImgFile(file);
    }
  };

  const handleFinishedImgChange = (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFinishedImg(imageUrl);
      setFinishedImgFile(file);
    }
  };

  const handleFinishedTextChange = (e) => {
    setFinishedText(e.target.value);
  };

  const onSave = async () => {
    try {
      const formData = new FormData();
      const bullet = JSON.parse(localStorage.getItem("bullet"));

      // Add the text fields
      formData.append("clerk_id", user.id);
      formData.append("bullet_id", bullet.bullet._id);
      formData.append(
        "finished_text",
        localStorage.getItem("finishedText") || ""
      );

      // Add the files, if available
      if (checkoutImgFile) {
        formData.append("checkout_img", checkoutImgFile);
      }
      if (finishedImgFile) {
        formData.append("finished_img", finishedImgFile);
      }

      const checkout_response = await fetch(
        "http://127.0.0.1:8000/api/update_checkout/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!checkout_response.ok) {
        console.error("Failed to fetch update checkout");
      } else {
        toast({
          title: `Checkout Saved`,
          description: "Good Progress =)",
          action: (
            <ToastAction onClick={() => {}} altText="Close Toast">
              Close
            </ToastAction>
          ),
        });
      }
    } catch (error) {
      console.error("Error saving checkout:", error);
    }
  };

  return (
    <div className="w-full flex flex-row">
      <div className="w-1/2 flex flex-col">
        <CheckoutForm image={checkoutImg} />
        <ArrowDown />
        <PostCheckoutComponent image={finishedImg} text={finishedText} />
      </div>
      <div className="w-1/2 flex flex-col px-20 space-y-20 pt-12">
        <div>
          <CheckoutImageUploadComponent
            handleImageChange={handleCheckoutImgChange}
            text={"Checkout Image"}
          />
        </div>
        <div>
          <FinishedImageUploadComponent
            handleImageChange={handleFinishedImgChange}
            text={"Finished Image"}
          />
        </div>
        <div>
          <FinishedTextComponent
            handleTextChange={handleFinishedTextChange}
            text={finishedText}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={onSave}
            className="relative justify-center inline-flex h-16 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-1/2"
          >
            <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#908894_0%,#edeceb_50%,#908894_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              Save Checkout
            </span>
          </button>
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
