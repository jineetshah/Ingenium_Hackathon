"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/card_home";
import i1 from "@/public/images/images_1.jpeg";
import i2 from "@/public/mountain.jpg";
import { SparklesCore } from "@/components/ui/sparkles";
<<<<<<< HEAD
import home1 from "@/public/images/home_1.png";
import home2 from "@/public/images/home_2.png";
import home3 from "@/public/images/home_3.png";
import home4 from "@/public/images/home_4.png";
=======
import home1 from "@/public/images/home_1.png"
import home2 from "@/public/images/home_2.png"
import home3 from "@/public/images/home_3.png"
import home4 from "@/public/images/home_4.png"
>>>>>>> af65f907a5bbc070df477288739fd2a48e5a477a

import SilderImg03 from "@/public/mountain.jpg";
import { StaticImageData } from "next/legacy/image";
import ProgressSlider from "@/components/progress_slider";
<<<<<<< HEAD
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
=======
import { HoverEffect } from "@/components/ui/card-hover-effect"; 
>>>>>>> af65f907a5bbc070df477288739fd2a48e5a477a
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
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
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
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
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
