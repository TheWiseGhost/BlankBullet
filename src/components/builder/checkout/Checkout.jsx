import React, { useState, useEffect } from "react";
import BuilderLayout from "../BuilderLayout";
import { FileUpload } from "@/components/global/FileUpload";
import { useUser } from "@clerk/nextjs";
import { ToastAction } from "../../global/Toast";
import { useToast } from "../../global/Use-Toast";
import { IconTrash } from "@tabler/icons-react";

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

const CheckoutForm = ({ image, products, plans }) => {
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
            id="productDropdown"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
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
            htmlFor="productDropdown"
            className="block text-sm font-medium text-gray-700"
          >
            Select Plan
          </label>
          <select
            id="productDropdown"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
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
    <div className="text-center font-dm px-6 py-2">
      <img
        src={image || "https://via.placeholder.com/400x200"}
        alt="Checkout Banner"
        className="w-full rounded-md mb-4"
      />
      {text ? (
        <p className="mt-4 text-black">{text}</p>
      ) : (
        <p className="mt-4 text-black">
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

const ProductManager = ({ products, setProducts }) => {
  const handleDelete = (index) => {
    // Filter out the product at the specified index
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    // Prompt the user for a new product name
    const newProduct = prompt("Enter the name of the new product:");
    if (newProduct) {
      setProducts((prev) => [...prev, newProduct]);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-lg font-medium mb-4">Manage Products</h2>
      <ul className="space-y-2">
        {products &&
          products.map((product, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border border-gray-200 rounded-md"
            >
              <span>{product}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                <IconTrash size={18} />
              </button>
            </li>
          ))}
      </ul>
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-blue-400 transition duration-200"
      >
        Add Product
      </button>
    </div>
  );
};

const PlanManager = ({ plans, setPlans }) => {
  const handleDelete = (index) => {
    // Filter out the plan at the specified index
    setPlans((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    // Prompt the user for a new plan name
    const newPlan = prompt("Enter the name of the new plan:");
    if (newPlan) {
      setPlans((prev) => [...prev, newPlan]);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-lg font-medium mb-4">Manage Plans</h2>
      <ul className="space-y-2">
        {plans &&
          plans.map((plan, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border border-gray-200 rounded-md"
            >
              <span>{plan}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                <IconTrash size={18} />
              </button>
            </li>
          ))}
      </ul>
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-blue-400 transition duration-200"
      >
        Add Plan
      </button>
    </div>
  );
};

const CheckoutComponent = () => {
  const [checkoutImg, setCheckoutImg] = useState(null);
  const [checkoutImgFile, setCheckoutImgFile] = useState(null);
  const [finishedImg, setFinishedImg] = useState(null);
  const [finishedImgFile, setFinishedImgFile] = useState(null);
  const [finishedText, setFinishedText] = useState("");
  const [products, setProducts] = useState("");
  const [plans, setPlans] = useState("");

  const { user } = useUser();
  const { toast } = useToast();

  // Fix this NextJS server client error with local storage
  useEffect(() => {
    const savedCheckout = JSON.parse(localStorage.getItem("checkout"));
    console.log(savedCheckout);
    setCheckoutImg(savedCheckout.checkout_img);
    setFinishedImg(savedCheckout.finished_img);
    setFinishedText(savedCheckout.finished_text);
    setProducts(savedCheckout.products);
    setPlans(savedCheckout.plans);
  }, []);

  useEffect(() => {
    localStorage.setItem("checkoutImg", checkoutImg);
    console.log(checkoutImg);
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

      formData.append("products", JSON.stringify(products));
      formData.append("plans", JSON.stringify(plans));

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
        <CheckoutForm image={checkoutImg} products={products} plans={plans} />
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
          <ProductManager products={products} setProducts={setProducts} />
        </div>
        <div>
          <PlanManager plans={plans} setPlans={setPlans} />
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
        <div className="flex justify-center pb-12">
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
