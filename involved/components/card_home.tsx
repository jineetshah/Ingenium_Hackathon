// components/Card.tsx
"use client";
import React from "react";
import Image from "next/legacy/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "300px",
        margin: "10px",
      }}
    >
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={500}
        height={300}
        objectFit="cover"
        className="rounded-lg"
      />
      <h3 className="font-bold">{title}</h3>
      <p
        style={{
          overflow: expanded ? "visible" : "hidden",
          maxHeight: expanded ? "none" : "60px",
        }}
        className="font-thin text-wrap"
      >
        {description}
      </p>
      <button onClick={handleReadMore} className="text-sm font-semibold mt-2">
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Card;
