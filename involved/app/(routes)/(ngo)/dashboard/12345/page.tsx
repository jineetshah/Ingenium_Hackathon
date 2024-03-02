"use client";

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

const NgoDashboard = () => {
  return (
    <div className="">
      <div className="space-y-4 p-8 pt-6">
        <Heading title="NGO X" description="Overview of your NGO" />
        <Separator />
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

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="m-2">
            <Card className="hover:cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-medium text-sm">
                  New volunteers requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
          </div>
          <div className="m-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-medium text-sm">
                  New collaboration request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
              </CardContent>
            </Card>
          </div>
          <div className="m-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-medium text-sm">
                  Total no of voulunteers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
              </CardContent>
            </Card>
          </div>
          <div className="m-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-medium text-sm">
                  Total donation recieved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex">
                  <IndianRupee className=" mt-1 h-6 text-muted-foreground" />
                  20000
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoDashboard;