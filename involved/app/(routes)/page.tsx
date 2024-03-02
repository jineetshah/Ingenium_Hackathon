"use-client";
import React from "react";
import Card from "@/components/card_home";
import i1 from "@/public/images/images_1.jpeg";
import i2 from "@/public/mountain.jpg";

import SilderImg03 from "@/public/mountain.jpg";
import { StaticImageData } from "next/legacy/image";
import ProgressSlider from "@/components/progress_slider";
interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const CardContainer: React.FC<{ cardsData: CardProps[] }> = ({ cardsData }) => {
  return (
    <div className="card-container no-scrollbar bg-blend-darken ">
      {cardsData.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </div>
  );
};

const HomePage: React.FC = () => {
  const cardData = [
    {
      image: i1,
      title: "Example Card 1",
      description: "This is an example card with some description.",
    },
    {
      image: i1,
      title: "Example Card 1",
      description: "This is an example card with some description.",
    },
    {
      image: i1,
      title: "Example Card 1",
      description: "This is an example card with some description.",
    },
    {
      image: i1,
      title: "Example Card 1",
      description: "This is an example card with some description.",
    },
    {
      image: i1,
      title: "Example Card 1",
      description: "This is an example card with some description.",
    },
    {
      image: i1,
      title: "Example Card 1",
      description: "This is an example card with some description.",
    },

    // Add more card data as needed
  ];
  const items = [
    {
      img: i2,
      desc: "Omnichannel",
      buttonIcon: SilderImg03,
    },
    {
      img: i2,
      desc: "Multilingual",
      buttonIcon: SilderImg03,
    },
    {
      img: i1,
      desc: "Interpolate",
      buttonIcon: SilderImg03,
    },
    {
      img: i2,
      desc: "Enriched",
      buttonIcon: SilderImg03,
    },
  ];
  return (
    <div>
      {/* <Carousel /> */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24 ">
        <div className="flex-col justify-center items-center">
          <p className="text-center text-black rounded-tr-xl font-bold font-mono text-6xl pb-10">
            Latest News
          </p>
          <ProgressSlider items={items} />
        </div>
      </div>
      <div className="container-wrapper">
        <CardContainer cardsData={cardData} />
      </div>
    </div>
  );
};

export default HomePage;
