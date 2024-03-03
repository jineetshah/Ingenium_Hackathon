"use client"

import NgoCard from "@/components/ui/card_n";
import bgImage from "@/public/images/ngo_card_bg.png"
import { useEffect, useState } from "react";

const NGOPage = () => {
 const ngos = [
    { name: "NGO 1", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 2", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 3", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 4", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 5", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 6", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 7", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 8", imageUrl: "/images/ngo_card_bg.png" },
    { name: "NGO 9", imageUrl: "/images/ngo_card_bg.png" },
 ];

 const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

 return (
    <div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {ngos.map((ngo, index) => (
            <NgoCard key={index} name={ngo.name} imageUrl={ngo.imageUrl} />
        ))}
      </div>
    </div>
 );
};

export default NGOPage;
