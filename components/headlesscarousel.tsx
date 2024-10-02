// components/HeadlessUICarousel.jsx
"use client";
import { useState } from "react";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import Image from "next/image";
// components/HeadlessUICarousel.jsx
import { Transition } from "@headlessui/react";
// import { Button } from "./ui/button"; // Assuming you're using Shadcn for the button

const HeadlessUICarousel = () => {
  const images = [
    "/images/image.png",
    "/images/image1.png",
    "/images/imagecopy.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slides */}
      <div className="overflow-hidden relative h-64 sm:h-80 md:h-96 lg:h-[28rem]">
        {images.map((image, index) => (
          <Transition
            key={index}
            show={index === currentIndex}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={0} // Use layout="responsive" instead of fixed width
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Adjust based on screen size
              layout="responsive" // Makes the image responsive
              className="w-full md:w-1/2 lg:w-1/3"
            />
          </Transition>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[0px] transform -translate-y-1/2"
      >
        <IoChevronBackCircle size={30} fill="#686868" className="bg-transparent" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}

        className="absolute  top-1/2 right-[0px] transform -translate-y-1/2"
      >
        <IoChevronForwardCircle size={30} fill="#686868" className="bg-transparent" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadlessUICarousel;
