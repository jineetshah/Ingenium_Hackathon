"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "@/public/backgroud_img.png";
import UserCards from "@/components/ui/usercard";
import ReactStars from "react-stars";
import { UserCertificates } from "@/components/certificates";
import { BackgroundGradient } from "@/components/bg-gradient";
import amzImg from "@/public/images/amazon.webp";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("placesWorked");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gray-50">
      <div
        className="relative h-64 w-full bg-cover bg-center"
        style={{ 
          backgroundImage:
            "url('https://as2.ftcdn.net/v2/jpg/03/85/88/41/1000_F_385884179_8mA6rX2pc4dmhoNF7zgPqI4ctcVk2um0.jpg')",
        }}
      >
        <div className="flex items-center ">
          <div className="mr-4">
            <div className="p-4 ml-16">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Descriptive alt text"
                width={140}
                height={180}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-5xl border-b-2 border-blue-300 font-bold">
              Jash Parikh
            </h2>
            <p className="text-2xl">jash@gmail.com</p>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              edit={false}
              value={2}
            />
          </div>
        </div>
      </div>
      {/* Tab view starts here */}
      <div className="p-4">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("placesWorked")}
            className={`w-1/3 py-2 border-b-2 text-center p-5  ${
              activeTab === "placesWorked" ? "font-bold" : "border-gray-300"
            }`}
          >
            Places Worked
          </button>
          <button
            onClick={() => setActiveTab("myCertificates")}
            className={`w-1/3 py-2 border-b-2 text-center p-5 ${
              activeTab === "myCertificates" ? "font-bold" : "border-gray-300"
            }`}
          >
            My Certificates
          </button>
          <button
            onClick={() => setActiveTab("couponsCollected")}
            className={`w-1/3 py-2 border-b-2 text-center p-5 ${
              activeTab === "couponsCollected" ? "font-bold" : "border-gray-300"
            }`}
          >
            Coupons Collected
          </button>
        </div>
        <div className="mt-4">
          {activeTab === "placesWorked" && (
            <div>
              <UserCards
                imageSrc="https://picsum.photos/id/237/200/300"
                userName="NGO1"
                hoursWorked={100}
              />
              <UserCards
                imageSrc="https://picsum.photos/id/237/200/300"
                userName="NGO2"
                hoursWorked={50}
              />
              {/* Add more UserCards as needed */}
            </div>
          )}
          {activeTab === "myCertificates" && (
            <div>
              {/* Content for "My Certificates" tab */}
              {/* <p>Certificate 1</p>
              <p>Certificate 2</p> */}
              <UserCertificates></UserCertificates>
            </div>
          )}
          {activeTab === "couponsCollected" && (
            <div className="flex mx-28 items-stretch justify-around my-20 ">
              {/* Content for "Coupons Collected" tab */}
              {/* <p>Coupon 1</p>
              <p>Coupon 2</p> */}
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 col-span-2">
                <Image
                  src={amzImg}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  The Air Jordan 4 Retro Reimagined Bred will release on
                  Saturday, February 17, 2024. Your best opportunity to get
                  these right now is by entering raffles and waiting for the
                  official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                  </span>
                </button>
              </BackgroundGradient>{" "}
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={amzImg}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  The Air Jordan 4 Retro Reimagined Bred will release on
                  Saturday, February 17, 2024. Your best opportunity to get
                  these right now is by entering raffles and waiting for the
                  official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                  </span>
                </button>
              </BackgroundGradient>{" "}
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={amzImg}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  The Air Jordan 4 Retro Reimagined Bred will release on
                  Saturday, February 17, 2024. Your best opportunity to get
                  these right now is by entering raffles and waiting for the
                  official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                  </span>
                </button>
              </BackgroundGradient>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
