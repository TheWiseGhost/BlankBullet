import React, { useEffect, useState } from "react";

const PostCheckoutComponent = ({ image, text }) => {
  return (
    <div className="text-center px-6 py-2 font-dm">
      <img
        src={image || "https://via.placeholder.com/400x200"}
        alt="Checkout Banner"
        className="w-4/5 mx-auto rounded-md mb-4"
      />
      {text ? (
        <p className="mt-8 text-lg text-black">{text}</p>
      ) : (
        <p className="mt-8 text-lg text-black">
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

const FinishedPage = ({ id }) => {
  const [finishedImg, setFinishedImg] = useState(null);
  const [finishedText, setFinishedText] = useState("");

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
          body: JSON.stringify({ bullet_id: id, page: "finished" }),
        });

        if (response.ok) {
          const data = await response.json();
          setFinishedImg(data.checkout.finished_img);
          setFinishedText(data.checkout.finished_text);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-1/2 mx-auto flex flex-col">
        <PostCheckoutComponent image={finishedImg} text={finishedText} />
      </div>
    </div>
  );
};

export default FinishedPage;
