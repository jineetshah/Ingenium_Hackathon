import Image from "next/legacy/image";
import image1 from '@/public/backgroud_img.png';
const UserProfile = () => {
    return (
        <div>
            <div className="relative h-64 w-full bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/200/300')"}}>
                <div className="flex items-center">
                    <div className="mr-4">
                        {/* Wrapping the Image in a div for responsive padding and margin */}
                        <div className="p-4 ml-16">
                            <Image
                                src="https://picsum.photos/id/237/200/300" // Replace with your actual image URL
                                alt="Descriptive alt text"
                                width={140} // Base size for large screens
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
        
            <div>
                {/* Placeholder for additional content */}
            </div>
        </div>
    );
};

export default UserProfile;
