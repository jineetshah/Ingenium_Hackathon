// pages/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";

import image1 from "@/public/images/images_1.jpeg";
import image2 from "@/public/images/images_2.jpeg";
import image3 from "@/public/images/images_3.jpeg";

const Carousel: React.FC = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "100%", height: "70vh" }} // Adjust height as needed
        objectFit="cover"
      />
    </div>
  );
};

export default Carousel;
