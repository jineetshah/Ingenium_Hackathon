  // pages/index.tsx
  import React from 'react';
  import Image from 'next/image';

  import image1 from "@/public/images/images_1.jpeg"

  const HomePage: React.FC = () => {
  const images = [
      image1
  ];

  // Extract the first image URL
  const firstImage = images[0];

  return (
    <div>
    <h1>Welcome to My Website</h1>
    <Image 
      src={firstImage }
      style={{ width: '100%', height: '70vh', objectFit: 'cover'}}
      alt="image"
  />

  </div>

  );
  };

  export default HomePage;
