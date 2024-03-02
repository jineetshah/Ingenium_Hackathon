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
        <div className="flex items-center pt-10">
          <div className="mr-4">
            {/* Wrapping the Image in a div for responsive padding and margin */}
            <div className="p-4 ml-16">
              <Image
                src="https://www.shutterstock.com/shutterstock/photos/2079594607/display_1500/stock-photo-concept-of-ngo-non-governmental-organization-and-charity-donation-foundation-humanitarian-help-2079594607.jpg" // Replace with your actual image URL
                alt="Descriptive alt text"
                width={180} // Base size for large screens
                height={180}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold">Hamara Apna NGO</h2>
            <p className="text-2xl">hamaraapnango@gmail.com</p>
            <div className="space-x-5 mt-6 text-3xl">
              <Link
                href={"/"}
                className="hover:underline text-muted-foreground"
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
          Hamara Apna NGO, a beacon of change and compassion, stands at the
          forefront of social transformation with its visionary initiative,
          "Project EduCare." Committed to eliminating educational disparities in
          underprivileged communities, the organization tirelessly works towards
          ensuring that every child has unfettered access to quality education.
          In collaboration with local schools, Hamara Apna NGO goes beyond
          traditional aid, providing essential resources, conducting teacher
          training programs, and introducing innovative learning materials.
        </div>
        <div className="px-28 pt-5">
          The NGO's dedication extends to the heart of the community, where it
          actively involves parents through workshops emphasizing the pivotal
          role of education in holistic community development. Hamara Apna NGO
          envisions a future where educational barriers are dismantled,
          empowering the next generation with knowledge and skills that not only
          elevate individual lives but uplift entire communities. Through the
          impactful strides of Project EduCare, Hamara Apna NGO reaffirms its
          unwavering commitment to catalyzing sustainable social change and
          crafting a luminous and equitable future for all.
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
        <div className="px-28 pt-5">
          In pursuit of its future goals, Hamara Apna NGO envisions expanding
          the scope of its educational initiatives, aiming to establish learning
          centers in remote areas where educational resources are scarce. The
          organization is committed to leveraging technology to create
          accessible e-learning platforms, ensuring that children in even the
          most isolated regions can benefit from quality education. Hamara Apna
          NGO also aspires to foster digital literacy, recognizing the pivotal
          role technology plays in the contemporary educational landscape. By
          integrating innovative teaching methodologies and emerging
          technologies, the NGO aims to equip students with skills relevant to
          the evolving global landscape.
        </div>
        <div className="px-28 pt-5 pb-10">
          Furthermore, Hamara Apna NGO is dedicated to broadening its impact
          beyond education, venturing into healthcare, skill development, and
          environmental sustainability. The organization envisions holistic
          community development by implementing health awareness programs,
          vocational training initiatives, and eco-friendly projects. Through
          these multifaceted efforts, Hamara Apna NGO aims to create
          self-sufficient communities that not only thrive academically but also
          enjoy improved health, economic stability, and a sustainable
          environment. The organization remains steadfast in its commitment to
          being a catalyst for positive change, shaping a future where every
          individual has the opportunity to lead a fulfilled and empowered life.
        </div>
      </div>
    </div>
  );
};

export default NgoDetails;
