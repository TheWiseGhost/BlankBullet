"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const people = [
  {
    id: 1,
    name: "Jordan Nueman",
    designation: "Lives up to the name",
    image:
      "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Changed the way I dropship forever",
    image:
      "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Kenji",
    designation: "Good value",
    image:
      "https://wallpapers.com/images/high/cool-profile-picture-j1zd9pqrtyswza7y.webp",
  },
  {
    id: 4,
    name: "Blake Ba$$",
    designation: "Definitly fast",
    image:
      "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Vik",
    designation: "Got a winner in 1 week",
    image:
      "https://wallpapers.com/images/high/cool-cat-profile-pictures-ej5ie7iisas6xr7z.webp",
  },
  {
    id: 6,
    name: "Tyler Durmont",
    designation: "Worth it if you don't have time",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Cade CC",
    designation: "For the grind",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Kercp0",
    designation: "Good product",
    image:
      "https://wallpapers.com/images/high/cool-profile-picture-kpwjvjw5434qfzo3.webp",
  },
  {
    id: 9,
    name: "Dapyfromyt",
    designation: "I finally got a winner",
    image:
      "https://wallpapers.com/images/high/deadpool-logo-cool-profile-picture-g2sv7i8j6nzd7tfa.webp",
  },
  {
    id: 10,
    name: "JB",
    designation: "It's cool concept",
    image:
      "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.webp",
  },
  {
    id: 11,
    name: "PO",
    designation: "Saves money fs",
    image:
      "https://wallpapers.com/images/high/cool-profile-picture-orfj1dxf6nqeor92.webp",
  },
  {
    id: 12,
    name: "Ramon Hamon",
    designation: "Works for people who get the concept",
    image:
      "https://wallpapers.com/images/high/cool-profile-picture-7d08ca58vaanj07r.webp",
  },
];

export const TooltipReviews = () => {
  const items = people;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div className="flex flex-row justify-center pr-3" id="reviews">
        {items.map((item, idx) => (
          <div
            className="-mr-4 relative group"
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 -left-full  flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                >
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                  <div className="text-white text-xs">{item.designation}</div>
                </motion.div>
              )}
            </AnimatePresence>
            <img
              onMouseMove={handleMouseMove}
              src={item.image}
              alt={item.name}
              className="object-cover !m-0 !p-0 object-top rounded-full size-10 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>
        ))}
      </div>
      <p className="font-dm text-xl items-center flex flex-row justify-center text-center pt-1 pr-4">
        <span className="text-sm pl-2 text-gray-700">500+ DS Faster</span>
        <span className="text-2xl pl-2 text-black">★★★★★</span>
        <span className="text-sm pl-2 text-gray-700">(Hover them!)</span>
      </p>
    </>
  );
};
