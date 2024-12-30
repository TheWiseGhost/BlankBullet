"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = () => {
  const content = [
    {
      title: "Create Multiple Drops",
      description:
        "Testing products one by one is old fashioned. Take charge and test every product on list faster than your competition by creating numerous simple stores.",
      content: (
        <img
          src="Dashboard.png"
          className="w-full object-fit rounded-lg border-2 border-[#D5BEF1]"
        />
      ),
    },
    {
      title: "Build Quickly",
      description:
        "Don't worry about payment processing or every little optimization. Just build a simple stores and test your product to see what works and what doesn't",
      content: (
        <img
          src="Landing.png"
          className="w-full object-cover rounded-lg border-2 border-[#D5BEF1]"
        />
      ),
    },
    {
      title: "Figure out the Winners",
      description:
        "Understand data about your users and the product. Then you can confidently decide when to go in on a product without worrying if you are just wasting time because you've already validated it",
      content: (
        <img
          src="Analytics.png"
          className="w-full object-cover rounded-lg border-2 border-[#D5BEF1]"
        />
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

  return (
    <motion.div
      className="flex justify-center max-h-[1000px] relative space-x-10 rounded-md pt-20 my_grid"
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
                className="text-4xl font-bold font-afc text-black"
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
          <div className="h-40" />
        </div>
      </div>
      <div className="">
        {" "}
        {/* Adjust the max height */}
        <div
          className={cn(
            "hidden lg:block h-60 w-96 rounded-md bg-none sticky top-40 overflow-hidden"
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
