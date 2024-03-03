"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/card_home";
import i1 from "@/public/images/images_1.jpeg";
import i2 from "@/public/mountain.jpg";
import home1 from "@/public/images/home_1.png"
import home2 from "@/public/images/home_2.png"
import home3 from "@/public/images/home_3.png"
import home4 from "@/public/images/home_4.png"
import home5 from "@/public/images/home_5.png"
import home6 from "@/public/images/home_6.png"
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
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
      img: home1,
      // desc: "Omnichannel",
      buttonIcon: home1,
    },
    {
      img: home2,
      // desc: "Multilingual",
      buttonIcon: home2,
    },
    {
      img: home3,
      // desc: "Interpolate",
      buttonIcon: home3,
    },
    {
      img: home4,
      // desc: "Enriched",
      buttonIcon: home4,
    },
  ];
  const projects = [
    {
      title: "6000+ Volunteers",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "170+ NGOs",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "2 lakhs + fund raised",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "More than 100 corporates",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "1400+ Animals and birds helped",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "20000+ People received help",
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
            <h1 className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20 pb-10">
            Discover Purpose, Get INVOLVED:
            </h1>
            <h1 className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20 pb-10">
            Connecting NGOs with Volunteers 
            </h1>
            <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
            And much more ...
            </h1>
          </div>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
          <p className="text-center text-black rounded-tr-xl font-bold font-mono text-6xl pb-10">
            Featured
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
