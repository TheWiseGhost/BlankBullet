import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js navigation

const LandingPage = ({ id }) => {
  const router = useRouter();
  const [code, setCode] = useState("");

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
          body: JSON.stringify({ bullet_id: id, page: "landing" }),
        });

        if (response.ok) {
          const data = await response.json();
          setCode(data.landing.code);
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

  useEffect(() => {
    const addCheckoutClickHandlers = () => {
      const container = document.getElementById("landing-container");

      if (container) {
        // Find all elements with IDs starting with "checkout"
        const checkoutElements = container.querySelectorAll("[id^='checkout']");
        checkoutElements.forEach((element) => {
          element.addEventListener("click", () => {
            router.push(`/live/${id}/form`); // Navigate to the form page
          });
        });
      }
    };

    if (code) {
      addCheckoutClickHandlers();
    }
  }, [code, router, id]);

  return (
    <div
      id="landing-container"
      dangerouslySetInnerHTML={{
        __html: code,
      }}
    />
  );
};

export default LandingPage;
