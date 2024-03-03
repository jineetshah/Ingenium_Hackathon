"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NgoCardProps {
  name: string;
  imageUrl: string;
}

const NgoCard: React.FC<NgoCardProps> = ({ name, imageUrl }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleclick = () => {
    router.push("/ngos/111");
  };

  return (
    <div className="NgoCard rounded-lg overflow-hidden p-4">
      <div
        className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black bg-opacity-20 min-h-96 px-10 flex flex-wrap flex-col pt-64 hover:bg-opacity-75 transform duration-300 rounded-lg">
          <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300 font-bold">
            {name}
          </h1>
          <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
          <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            beatae!
            <button
              className="m-5 bg-gradient-to-r from-purple-600 to-black text-white font-bold py-3 px-8 min-w-[200px] rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:from-black hover:to-purple-600"
              onClick={handleclick}
            >
              Know More
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NgoCard;
