"use-client";
import React from "react";
import Card from "@/components/card_home";
import i1 from "@/public/images/images_1.jpeg";
import i2 from "@/public/mountain.jpg";
import { SparklesCore } from "@/components/ui/sparkles";

import SilderImg03 from "@/public/mountain.jpg";
import { StaticImageData } from "next/legacy/image";
import ProgressSlider from "@/components/progress_slider";
import { HoverEffect } from "@/components/ui/card-hover-effect";
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
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  return (
    <div>
      {/* <Carousel /> */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24 ">
        <div className="flex-col justify-center items-center">
          <div className="h-[40rem] snap-center relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mb-20">
            <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
              Be a part of the change
            </h1>
          </div>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
          <p className="text-center text-black rounded-tr-xl font-bold font-mono text-6xl pb-10">
            Latest News
          </p>
          <ProgressSlider items={items} />
        </div>
      </div>
      {/* <div className="container-wrapper">
        <CardContainer cardsData={cardData} />
      </div> */}
    </div>
  );
};

export default HomePage;
