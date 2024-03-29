"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "@/public/images/Involved_primary.png";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const links = [
    {
      id: 1,
      link: "/", // Changed to navigate to the root
      text: "home", // Text to display
    },
    {
      id: 2,
      link: "/post", // Changed to navigate to the root
      text: "Feed", // Text to display
    },
    {
      id: 3,
      link: "/ngos",
      text: "NGOs",
    },
    {
      id: 4,
      link: "/dashboard/12345",
      text: "NGO Dashboard",
    },
    {
      id: 5,
      link: "/user/7447",
      text: "User Profile",
    },
    {
      id: 6,
      link: "/ngos/111",
      text: "NGO Details",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4  bg-[#252525] relative nav">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            <Image src={img} alt="Involved" width={200} height={100}></Image>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {/* Updated to close the navbar on click and navigate */}
              <Link href={link} onClick={() => setNav(false)}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
