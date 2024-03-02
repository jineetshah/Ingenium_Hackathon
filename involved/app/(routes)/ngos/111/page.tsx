"use client";

import Image from "next/image";

import image1 from "@/public/images/images_1.jpeg";

import { Button, buttonVariants } from "@/components/ui/button";

import BarCharts from "@/components/barchart";
import LineCharts from "@/components/linechart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { IndianRupee } from "lucide-react";
import Link from "next/link";

const NgoDetails = () => {
  return (
    <div className="">
      <div
        className="relative h-64 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://as2.ftcdn.net/v2/jpg/03/85/88/41/1000_F_385884179_8mA6rX2pc4dmhoNF7zgPqI4ctcVk2um0.jpg')",
        }}
      >
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
            <h2 className="text-5xl font-bold">Guru Ngo</h2>
            <p className="text-2xl">gurungo@gmail.com</p>
            <div className="space-x-5 mt-6 text-xl">
              <Link
                href={"/"}
                className="hover:underline text-muted-foreground "
              >
                Donate
              </Link>
              <Link
                href={"/"}
                className="hover:underline text-muted-foreground"
              >
                Volunteer
              </Link>
              <Link
                href={"/"}
                className="hover:underline text-muted-foreground"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="px-28 pt-5">
          Guru NGO, a beacon of change and compassion, is diligently dedicated
          to its latest hypothetical project, "Project EduCare." This visionary
          initiative focuses on bridging educational gaps in underprivileged
          communities, ensuring every child has access to quality education.
          Guru NGO collaborates with local schools, providing resources, teacher
          training, and innovative learning materials. Moreover, they actively
          engage parents through workshops on the importance of education,
          fostering a holistic approach to community development. By breaking
          barriers to learning, Guru NGO envisions empowering the next
          generation with knowledge and skills that will uplift entire
          communities. Through Project EduCare, Guru NGO exemplifies its
          commitment to fostering sustainable social change and building a
          brighter future for all.
        </div>
        <div className="space-y-4 p-8 pt-6">
          <div className="lg:flex justify-center lg:space-x-44">
            <Card className="p-6 md:mt-2">
              <CardHeader>
                <CardTitle>Funds Recieved</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div>
                  <BarCharts />
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 md:mt-2">
              <CardHeader>
                <CardTitle>No of volunteers</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div>
                  <LineCharts />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoDetails;
