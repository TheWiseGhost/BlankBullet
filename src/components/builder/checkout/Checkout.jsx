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

const CheckoutForm = ({ image, quantities, varients, product, price }) => {
  return (
    <div className="bg-white flex flex-row space-x-4 shadow-md rounded-lg p-6">
      <div className="flex flex-col w-1/2 px-4">
        <img
          src={image || "https://via.placeholder.com/200x200"}
          alt="Company Logo"
          className="w-32 mx-auto"
        />
        <h2 className="text-xl font-mon font-semibold text-gray-800 text-center my-4">
          {product}
        </h2>
        <div className="w-4/5 mx-auto h-0.5 my-2 bg-gray-300"></div>
        <div className="w-4/5 text-sm font-dm mx-auto flex flex-col space-y-2 py-4">
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
            <h2 className="">${price} * Quantity chosen</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="quantityDropdown"
              className="block text-sm font-medium text-gray-700"
            >
              Select Quantity
            </label>
            <select
              id="quantityDropdown"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
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
              htmlFor="quantityDropdown"
              className="block text-sm font-medium text-gray-700"
            >
              Select Varient
            </label>
            <select
              id="quantityDropdown"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {varients &&
                varients.map((varient, index) => (
                  <option key={index} value={varient}>
                    {varient}
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
    <div className="text-center font-dm px-6 py-12 shadow-2xl w-full mx-auto">
      <img
        src={image || "https://via.placeholder.com/400x200"}
        alt="Checkout Banner"
        className="w-3/5 mx-auto rounded-md mb-4"
      />
      {text ? (
        <p className="mt-4 w-2/3 mx-auto text-sm text-black">{text}</p>
      ) : (
        <p className="mt-4 w-2/3 mx-auto text-sm text-black">
          Sorry, this product unfortunately went out of stock in the middle of
          your checkout. We will be sure to email you when it comes back in
          stock.
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

const ProductComponent = ({ text, handleTextChange }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <h1>Product Name</h1>
      <textarea
        type="text"
        value={text}
        placeholder="Enter text"
        onChange={handleTextChange}
        className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
        maxLength="500"
      ></textarea>
    </div>
  );
};

const PriceComponent = ({ text, handleTextChange }) => {
  return (
    <div className="w-full font-dm flex flex-col space-y-2">
      <h1>Price</h1>
      <textarea
        type="text"
        value={text}
        placeholder="Enter text"
        onChange={handleTextChange}
        className="border w-full border-gray-300 rounded-lg p-3 text-gray-700"
        maxLength="500"
      ></textarea>
    </div>
  );
};

const QuantityManager = ({ quantities, setQuantities }) => {
  const handleDelete = (index) => {
    // Filter out the quantity at the specified index
    setQuantities((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    // Prompt the user for a new quantity name
    const newQuantity = prompt("Enter the name of the new quantity:");
    if (newQuantity) {
      setQuantities((prev) => [...prev, newQuantity]);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-lg font-medium mb-4">Manage Quantities</h2>
      <ul className="space-y-2">
        {quantities &&
          quantities.map((quantity, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border border-gray-200 rounded-md"
            >
              <span>{quantity}</span>
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
        Add Quantity
      </button>
    </div>
  );
};

const VarientManager = ({ varients, setVarients }) => {
  const handleDelete = (index) => {
    // Filter out the varient at the specified index
    setVarients((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    // Prompt the user for a new varient name
    const newVarient = prompt("Enter the name of the new varient:");
    if (newVarient) {
      setVarients((prev) => [...prev, newVarient]);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-lg font-medium mb-4">Manage Varients</h2>
      <ul className="space-y-2">
        {varients &&
          varients.map((varient, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border border-gray-200 rounded-md"
            >
              <span>{varient}</span>
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
        Add Varient
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
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantities, setQuantities] = useState("");
  const [varients, setVarients] = useState("");

  const { user } = useUser();
  const { toast } = useToast();

  // Fix this NextJS server client error with local storage
  useEffect(() => {
    const savedCheckout = JSON.parse(localStorage.getItem("checkout"));
    console.log(savedCheckout);
    setCheckoutImg(savedCheckout.checkout_img);
    setFinishedImg(savedCheckout.finished_img);
    setFinishedText(savedCheckout.finished_text);
    setProduct(savedCheckout.product);
    setPrice(savedCheckout.price);
    setQuantities(savedCheckout.quantities);
    setVarients(savedCheckout.varients);
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

  useEffect(() => {
    localStorage.setItem("product", product);
  }, [product]);

  useEffect(() => {
    localStorage.setItem("price", price);
  }, [price]);

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

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
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
      formData.append("product", localStorage.getItem("product") || "");
      formData.append("price", localStorage.getItem("price") || "");

      formData.append("quantities", JSON.stringify(quantities));
      formData.append("varients", JSON.stringify(varients));

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
      <div className="w-3/5 flex flex-row">
        <div className="flex flex-col w-full">
          <CheckoutForm
            image={checkoutImg}
            quantities={quantities}
            varients={varients}
            product={product}
            price={price}
          />
          <ArrowDown />
          <PostCheckoutComponent image={finishedImg} text={finishedText} />
        </div>
      </div>
      <div className="w-2/5 flex flex-col px-20 space-y-20 pt-12">
        <div>
          <ProductComponent
            handleTextChange={handleProductChange}
            text={product}
          />
        </div>
        <div>
          <PriceComponent handleTextChange={handlePriceChange} text={price} />
        </div>
        <div>
          <CheckoutImageUploadComponent
            handleImageChange={handleCheckoutImgChange}
            text={"Checkout Image"}
          />
        </div>
        <div>
          <QuantityManager
            quantities={quantities}
            setQuantities={setQuantities}
          />
        </div>
        <div>
          <VarientManager varients={varients} setVarients={setVarients} />
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
