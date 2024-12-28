"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll2 = () => {
  const content = [
    {
      title: "Don't Deal with Fufillment",
      description:
        "It might be tempting to want to make money off the frist few customers, but setting up fufillment and refunds and payment processing and all the headaches just for a few sales on a loser product isn't worth it",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Strengthen the Brand",
      description:
        "By refusing to take a customer's money and saying your product is out of stock, you spark even more desire for your product and increase your brand reputation. Plus, you've gotten their email so ...",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/temp-banner.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Fufill Later using Email",
      description:
        "Export your email data and other checkout data. Then email your users about the product if you think that it's a winner and want to go through fully setting it up. Previous data from BlankBullet stores show that over 85% of customers buy off the email list after being stonewalled with the out of stock earlier",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
  ];

  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < (Math.abs(latest - cardsBreakpoints[acc]) * 11) / 6) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="flex justify-center relative space-x-10 rounded-md pt-20 my_grid"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 min-h-60 pt-10">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold font-mon text-black"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-neutral-900 max-w-sm mt-6"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
      <div className="">
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-80 w-96 rounded-md bg-white sticky top-40 overflow-hidden"
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
