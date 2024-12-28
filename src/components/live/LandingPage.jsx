import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const LandingPage = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);

  const [product, setProduct] = useState("");

  const router = useRouter();

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
          body: JSON.stringify({ drop_id: id, page: "landing" }),
        });

        if (response.ok) {
          const data = await response.json();
          setProduct(data.landing);
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

  const allImages = [
    product.primary_img,
    product.other_img1,
    product.other_img2,
    product.other_img3,
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b-2 border-gray-300">
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
      <div className="max-w-6xl mx-auto mt-6 bg-white rounded-lg pb-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
          {/* Top Section on Mobile - Product Images */}
          <div className="flex flex-col items-center p-4">
            <h2
              style={{ fontFamily: product?.product_title?.font }}
              className="flex md:hidden text-2xl font-bold pb-6"
            >
              {product?.product_title?.text}
            </h2>
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
                className="hidden md:flex text-2xl font-bold pb-6"
              >
                {product?.product_title?.text}
              </h2>

              {/* Rating and Reviews */}
              <div className="flex flex-row space-x-4 pb-6">
                <div
                  style={{ fontFamily: product?.price?.font }}
                  className="text-2xl font-semibold text-gray-800"
                >
                  {product?.price?.text}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex font-mon text-yellow-400">
                    {"★".repeat(Math.floor(5))}
                    {5 % 1 !== 0 && "☆"}
                  </div>
                  <span className="text-gray-500 font-dm">26</span>
                </div>
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
            <button
              style={{
                fontFamily: product?.cta?.font,
                backgroundColor: product?.cta?.color,
              }}
              className="w-full px-8 py-4 mt-4 text-lg text-white rounded-md"
              onClick={() => router.push(`/live/${id}/form`)}
            >
              {product?.cta?.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
