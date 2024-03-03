"use client"

import NgoCard from "@/components/ui/card_n";
import { Separator } from "@/components/ui/separator";
import bgImage from "@/public/images/ngo_card_bg1.png"
import { useEffect, useState } from "react";

const NGOPage = () => {
 const ngos = [
    { name: "NGO 1", imageUrl: "/images/ngo_card_bg1.png" },
    { name: "NGO 2", imageUrl: "/images/ngo_card_bg2.png" },
    { name: "NGO 3", imageUrl: "/images/ngo_card_bg3.png" },
    { name: "NGO 4", imageUrl: "/images/ngo_card_bg4.png" },
    { name: "NGO 5", imageUrl: "/images/ngo_card_bg5.png" },
    { name: "NGO 6", imageUrl: "/images/ngo_card_bg6.png" },
    { name: "NGO 7", imageUrl: "/images/ngo_card_bg7.png" },
    { name: "NGO 8", imageUrl: "/images/ngo_card_bg8.png" },
    { name: "NGO 9", imageUrl: "/images/ngo_card_bg9.png" },
 ];

 const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

 return (
    <div className="items-center">
      <h1 className="text-5xl font-sans text-center text-gray-900 dark:text-white my-8">Top NGOs</h1>
      <Separator className="w-1/3 mx-auto"/>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {ngos.map((ngo, index) => (
            <NgoCard key={index} name={ngo.name} imageUrl={ngo.imageUrl} />
        ))}
      </div>
    </div>
 );
};

export default NGOPage;
