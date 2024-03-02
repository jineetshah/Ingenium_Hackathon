import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    amt: 10050,
  },
  {
    name: "Feb",
    amt: 7500,
  },
  {
    name: "Mar",
    amt: 12006,
  },
  {
    name: "Apr",
    amt: 11000,
  },
  {
    name: "May",
    amt: 9000,
  },
  {
    name: "Jun",
    amt: 12500,
  },
  {
    name: "Jul",
    amt: 21000,
  },
  {
    name: "Aug",
    amt: 8050,
  },
  {
    name: "Sep",
    amt: 13000,
  },
  {
    name: "Oct",
    amt: 5000,
  },
  {
    name: "Nov",
    amt: 6500,
  },
  {
    name: "Dec",
    amt: 16000,
  },
];

export default function BarCharts() {
  return (
      <BarChart
        width={500} // Specify an initial width if needed
        height={300}
        data={data}
        className=""
      > 
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amt" fill="#2F4241" />
      </BarChart>
  );
}
