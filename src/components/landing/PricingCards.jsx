"use client";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/landing/3d-card";
import { CheckIcon } from "lucide-react";
import { LampComponent } from "@/components/landing/LampComponent";
import { useUser } from "@clerk/nextjs";

const PricingCards = () => {
  const { user } = useUser();
  const createCheckout = (prod_id) => {
    try {
      if (!user) {
        window.open(
          "/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fcheckout"
        );
      }
      const create = async () => {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/create_checkout_session/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                product_id: prod_id,
                user_id: user?.id, // Pass the user ID from localStorage or state
              }),
            }
          );

          const data = await response.json();
          if (data.url) {
            window.location.href = data.url; // Redirect to Stripe checkout
          }
        } catch (error) {
          console.error("Error creating checkout session:", error);
        }
      };

      create();
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <>
      <LampComponent />
      <div
        className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-64"
        id="pricing"
      >
        <CardContainer className="inter-var ">
          <CardBody className="relative group/card border-black/[0.3] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-600 font-afc"
            >
              New Year's Offer
              <h2 className="text-6xl font-dm py-2 ">$0</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Trust us, you won't ever go back to the old way of testing
              products.
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon />3 Free Drops
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  $15 of value for free
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  All features of a regular drop
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Limited Time
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold font-dm"
              >
                <a href="/dashboard">Get Started Now</a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var ">
          <CardBody className="relative group/card  border-black/[0.3] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-600 font-afc"
            >
              One Drop
              <h2 className="text-6xl font-dm py-2 ">$5</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Standard quick way to test a product in minutes. Save yourself a
              lot of time and money
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Custom Domain
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Set Up in Minutes Store
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Full Analytics dashboard
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                The Base
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold font-dm"
                onClick={() => createCheckout("prod_RbKH6n0xMLncqe")}
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="relative group/card  dark:hover:shadow-2xl border-black/[1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-600 font-afc"
            >
              Drop Bundle
              <h2 className="text-6xl font-dm py-2 ">$15</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Get the most value out of testing by doing high volume to take out
              the luck factor
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon />6 Drops
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Get 2x the Value
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  All features of a regular drop
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Most Popular
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold font-dm"
                onClick={() => createCheckout("prod_RbKIjVji5glZrB")}
              >
                Get Started Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default PricingCards;
