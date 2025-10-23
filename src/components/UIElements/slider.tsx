"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ReactNode } from "react";

export default function Slider({ slides }: { slides: ReactNode[] }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          1280: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex items-center justify-end gap-4">
        <button
          ref={prevRef}
          className={` ${
            activeIndex !== 0 && "text-gold hover:scale-110 transition"
          } p-2`}
        >
          <FaChevronLeft />
        </button>

        <button
          ref={nextRef}
          className={` ${
            activeIndex !== slides.length - 1 &&
            "text-gold hover:scale-110 transition"
          } p-2`}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex gap-2 mt-2 w-full">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-1 rounded-full animate-config ${
              index === activeIndex ? "bg-gold w-5" : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
