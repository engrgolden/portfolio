"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderProps = {
  items: any[]; // Accepts an array of JSX elements
};

export default function Slider({ items }: SliderProps) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full max-w-[400px] mx-auto overflow-hidden">
      {/* Slide Container */}
      <motion.div
        className="flex"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {items.map((item, i) => (
          <div key={i} className="w-full flex-shrink-0">
            {item} {/* Render JSX Element */}
          </div>
        ))}
      </motion.div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
