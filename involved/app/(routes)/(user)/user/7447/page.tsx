'use client'
import { useState } from 'react';
import Image from 'next/image';
import image1 from '@/public/backgroud_img.png';
import UserCards from '@/components/ui/usercard';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('placesWorked');

    return (
        <div className='bg-gray-50'>
            <div className="relative h-64 w-full bg-cover bg-center" style={{backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/03/85/88/41/1000_F_385884179_8mA6rX2pc4dmhoNF7zgPqI4ctcVk2um0.jpg')"}}>
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
            <div className="p-4">
                <div className="flex border-b">
                    <button 
                        onClick={() => setActiveTab('placesWorked')} 
                        className={`w-1/3 py-2 border-b-2 text-center p-5 ${activeTab === 'placesWorked' ? 'border-blue-500' : 'border-gray-300'}`}
                    >
                        Places Worked
                    </button>
                    <button 
                        onClick={() => setActiveTab('myCertificates')} 
                        className={`w-1/3 py-2 border-b-2 text-center p-5 ${activeTab === 'myCertificates' ? 'border-blue-500' : 'border-gray-300'}`}
                    >
                        My Certificates
                    </button>
                    <button 
                        onClick={() => setActiveTab('couponsCollected')} 
                        className={`w-1/3 py-2 border-b-2 text-center p-5 ${activeTab === 'couponsCollected' ? 'border-blue-500' : 'border-gray-300'}`}
                    >
                        Coupons Collected
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === 'placesWorked' && (
                        <div>
                            <UserCards imageSrc="https://picsum.photos/id/237/200/300" userName="NGO1" hoursWorked={100} />
                            <UserCards imageSrc="https://picsum.photos/id/237/200/300" userName="NGO2" hoursWorked={50} />
                            {/* Add more UserCards as needed */}
                        </div>
                    )}
                    {activeTab === 'myCertificates' && (
                        <div>
                            {/* Content for "My Certificates" tab */}
                            <p>Certificate 1</p>
                            <p>Certificate 2</p>
                        </div>
                    )}
                    {activeTab === 'couponsCollected' && (
                        <div>
                            {/* Content for "Coupons Collected" tab */}
                            <p>Coupon 1</p>
                            <p>Coupon 2</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
