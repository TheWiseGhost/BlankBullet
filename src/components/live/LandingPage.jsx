// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // For Next.js navigation
// const LandingPage = ({ id }) => {
//   const router = useRouter();
//   const [code, setCode] = useState("");

//   useEffect(() => {
//     const fetchBulletDetails = async () => {
//       try {
//         const response = await fetch(
//           "http://127.0.0.1:8000/api/bullet_details/",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ bullet_id: id }),
//           }
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setCode(data.landing.code);
//         } else {
//           console.error("Failed to fetch bullets");
//         }
//       } catch (error) {
//         console.error("Error fetching bullets:", error);
//       }
//     };

//     if (id) {
//       fetchBulletDetails();
//     }
//   }, [id]);

//   useEffect(() => {
//     const addCheckoutClickHandlers = () => {
//       const container = document.getElementById("landing-container");

//       if (container) {
//         // Find all elements with IDs starting with "checkout"
//         const checkoutElements = container.querySelectorAll("[id^='checkout']");
//         checkoutElements.forEach((element) => {
//           element.addEventListener("click", () => {
//             router.push(`/live/${id}/form`); // Navigate to the form page
//           });
//         });
//       }
//     };

//     if (code) {
//       addCheckoutClickHandlers();
//     }
//   }, [code, router, id]);

//   return (
//     <div
//       id="landing-container"
//       dangerouslySetInnerHTML={{
//         __html: code,
//       }}
//     />
//   );
// };

// export default LandingPage;

import React, { useState } from "react";

const LandingPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);

  const product = {
    logo: "https://via.placeholder.com/100x50?text=Logo",
    brand_name: { text: "Stylish Backpack", font: "Arial, sans-serif" },
    product_title: { text: "Stylish Backpack", font: "Arial, sans-serif" },
    price: { text: "$99.99", font: "Arial, serif" },
    variants: ["R", "G", "B"],
    images: {
      primary_img: "https://via.placeholder.com/400x400?text=Primary+Image",
      other_img1: "https://via.placeholder.com/400x400?text=Image+1",
      other_img2: "https://via.placeholder.com/400x400?text=Image+2",
      other_img3: "https://via.placeholder.com/400x400?text=Image+3",
    },
  };

  const allImages = [
    product.images.primary_img,
    product.images.other_img1,
    product.images.other_img2,
    product.images.other_img3,
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white">
        <img src={product?.logo} className="w-10" />
        <h1
          style={{ fontFamily: product?.brand_name?.font }}
          className="text-lg font-semibold text-gray-700"
        >
          {product?.brand_name?.text}
        </h1>
        <div className="w-10"></div>
      </header>

      {/* Product Body */}
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
          {/* Top Section on Mobile - Product Images */}
          <div className="flex flex-col items-center p-4">
            <img
              src={allImages[selectedImage]}
              alt={`Product ${selectedImage + 1}`}
              className="w-3/5 h-auto rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 p-1 border-2 rounded-md ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Section on Mobile - Product Details */}
          <div className="flex flex-col p-6 mx-auto md:mx-0">
            <div>
              {/* Product Title */}
              <h2
                style={{ fontFamily: product?.product_title?.font }}
                className="text-2xl font-bold mb-4"
              >
                {product?.product_title?.text}
              </h2>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(Math.floor(5))}
                  {5 % 1 !== 0 && "☆"}
                </div>
                <span className="text-gray-500 text-sm">26</span>
              </div>

              {/* Price */}
              <div
                style={{ fontFamily: product?.price?.font }}
                className="text-2xl font-semibold text-gray-800 mb-6"
              >
                {product?.price?.text}
              </div>

              {/* Variant Options */}
              <div className="mb-6">
                <h3 className="text-gray-700 font-medium mb-2">
                  Select Variant:
                </h3>
                <div className="flex space-x-2">
                  {product?.variants?.map((variant, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 border rounded-md bg-gray-100 text-gray-700 ${
                        activeVariant == index ? "border-2 border-black" : ""
                      } `}
                      onClick={() => setActiveVariant(index)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full md:w-3/5 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
