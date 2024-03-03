"use client";

import { cn } from "@/app/(utils)/cn";
import React, { useEffect, useState } from "react"
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
 
function BentoGridDemo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <BentoGrid className="max-w-4xl mx-auto mt-4 mb-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          ngo={item.ngo}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgPshm1bjRto-2OtS0PiR9wKslyvQHP2uYg&usqp=CAU')"}}></div>
);
const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgPshm1bjRto-2OtS0PiR9wKslyvQHP2uYg&usqp=CAU')"}}></div>
);
const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgPshm1bjRto-2OtS0PiR9wKslyvQHP2uYg&usqp=CAU')"}}></div>
);
const Skeleton4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgPshm1bjRto-2OtS0PiR9wKslyvQHP2uYg&usqp=CAU')"}}></div>
);
const Skeleton5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgPshm1bjRto-2OtS0PiR9wKslyvQHP2uYg&usqp=CAU')"}}></div>
);
const Skeleton6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgPshm1bjRto-2OtS0PiR9wKslyvQHP2uYg&usqp=CAU')"}}></div>
);
const Skeleton7 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgPshm1bjRto-2OtS0PiR9wKslyvQHP2uYg&usqp=CAU')"}}></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton1 />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    ngo: "NGO 1",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    ngo: "NGO 3",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton3 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    ngo: "NGO 2",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton4 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    ngo: "NGO X",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton5 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    ngo: "NGO F",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton6 />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    ngo: "NGO 8",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    ngo: "NGO C",
  },
];

export default BentoGridDemo;