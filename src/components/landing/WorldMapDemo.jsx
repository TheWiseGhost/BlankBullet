"use client";
import { WorldMap } from "../global/WorldMap";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className=" py-40 bg-none w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-black">
          Visualize Your Users
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Understand where they are coming from and what your userbase might
          look like. Shape your product around their needs.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            end: { lat: 1.3521, lng: 103.8198 }, // Singapore
          },
          {
            start: { lat: 1.3521, lng: 103.8198 }, // Singapore
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris
            end: { lat: 40.7128, lng: -74.006 }, // New York
          },
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
          },
          {
            start: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
            end: { lat: 55.7558, lng: 37.6173 }, // Moscow
          },
          {
            start: { lat: 55.7558, lng: 37.6173 }, // Moscow
            end: { lat: 30.0444, lng: 31.2357 }, // Cairo
          },
          {
            start: { lat: 30.0444, lng: 31.2357 }, // Cairo
            end: { lat: 59.3293, lng: 18.0686 }, // Stockholm
          },
          {
            start: { lat: 59.3293, lng: 18.0686 }, // Stockholm
            end: { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
          },
          {
            start: { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
          },
          {
            start: { lat: 19.4326, lng: -99.1332 }, // Mexico City
            end: { lat: 45.4642, lng: 9.19 }, // Milan
          },
          {
            start: { lat: 45.4642, lng: 9.19 }, // Milan
            end: { lat: -26.2041, lng: 28.0473 }, // Johannesburg
          },
          {
            start: { lat: -26.2041, lng: 28.0473 }, // Johannesburg
            end: { lat: 41.9028, lng: 12.4964 }, // Rome
          },
          {
            start: { lat: 41.9028, lng: 12.4964 }, // Rome
            end: { lat: 39.9042, lng: 116.4074 }, // Beijing
          },
        ]}
      />
    </div>
  );
}
