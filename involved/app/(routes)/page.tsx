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
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
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
      desc: "Omnichannel",
      buttonIcon: home1,
    },
    {
      img: home2,
      desc: "Multilingual",
      buttonIcon: home2,
    },
    {
      img: home3,
      desc: "Interpolate",
      buttonIcon: home3,
    },
    {
      img: home4,
      desc: "Enriched",
      buttonIcon: home4,
    },
  ];
  const projects = [
    {
      title: "6000+ Volunteers",
      description:
        "In the past year, around 6530 people have connected with the NGOs and helped in building a better society.",
      
    },
    {
      title: "170+ NGOs",
      description:
        "We have become a community of 176 NGOs who have been working day and night providing services to the ones needed the most, Improving the lifestyle of everyone in the society.",
    
    },
    {
      title: "2 lakhs + fund raised",
      description:
        "Through contributions whether small or big have helped us in receiving a total fund of 245368 Rupees.",
    
    },
    {
      title: "More than 100 corporates",
      description:
        "Corporates have been engaged with the society for the better cause. Extending a helping hand to the NGOs to help them in various aspects.",
     
    },
    {
      title: "1400+ Animals and birds helped",
      description:
        "Wildlife conservation has become a concern in the modern world with the growth of industrialisation and urbanisation. Saving them should be topmost priority.",
  
    },
    {
      title: "20000+ People received help",
      description:
        "Diversifying the received materials to a vast number in a society is not an easy task. This year 20650 people have been helped in various areas of needs.",
 
    },
  ];
  const content = [
    {
      title: "NGO of the Year",
      description:
        "Apna NGO have been proved most successful in helping people of the society as well as towards the green revolution by planting more than 10000 plants.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Topmost Collaborator",
      description:
        "Every NGO requires spport for caryiong out activities and execute their designed plan. CreativeX has collaborated with more than 24 NGOs during the year to help them in every aspect.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Most Helpful Volunteer",
      description:
        "The time devoted towards betterment of others always helps in improvement of the self. Yash Chopra has helped 13 NGOs by volunteering for an average of 20 hours a week.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
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
          <p className="text-center text-black rounded-tr-xl font-bold font-mono text-6xl pb-10">
            Featured
          </p>
          <ProgressSlider items={items} />
          <div className="p-10">
            <StickyScroll content={content} />
          </div>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
      {/* <div className="container-wrapper">
        <CardContainer cardsData={cardData} />
      </div> */}
    </div>
  );
};

export default HomePage;
