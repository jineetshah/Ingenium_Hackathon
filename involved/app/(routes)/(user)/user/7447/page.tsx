'use client'

import React from 'react';
import Image from "next/legacy/image";
import image1 from '@/public/backgroud_img.png';
import UserCards from '@/components/ui/usercard';

const UserProfile = () => {
 const [openTab, setOpenTab] = React.useState(1);

 return (
    <div>
      <div className="relative h-64 w-full bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/200/300')"}}>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="p-4 ml-16">
              <Image
                src="https://picsum.photos/id/237/200/300"
                alt="Descriptive alt text"
                width={140}
                height={140}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold">Jash Parikh</h2>
            <p className="text-2xl">jash@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Tab view starts here */}
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                 "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                 (openTab === 1 ? "text-white bg-blue-600" : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                 e.preventDefault();
                 setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Places Worked
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                 "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                 (openTab === 2 ? "text-white bg-blue-600" : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                 e.preventDefault();
                 setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                My Certificates
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                 "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                 (openTab === 3 ? "text-white bg-blue-600" : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                 e.preventDefault();
                 setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Coupons Collected
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                 <UserCards imageSrc="https://picsum.photos/id/237/200/300" userName="NGO1" hoursWorked={100} />
                 <UserCards imageSrc="https://picsum.photos/id/237/200/300" userName="NGO2" hoursWorked={50} />
                 {/* Add more UserCards as needed */}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 {/* Content for "My Certificates" tab */}
                 <p>Certificate 1</p>
                 <p>Certificate 2</p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                 {/* Content for "Coupons Collected" tab */}
                 <p>Coupon 1</p>
                 <p>Coupon 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default UserProfile;
