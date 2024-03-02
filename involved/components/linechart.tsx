import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    amt: 34,
  },
  {
    name: "Feb",
    amt: 22,
  },
  {
    name: "Mar",
    amt: 31,
  },
  {
    name: "Apr",
    amt: 44,
  },
  {
    name: "May",
    amt: 28,
  },
  {
    name: "Jun",
    amt: 34,
  },
  {
    name: "Jul",
    amt: 11,
  },
  {
    name: "Aug",
    amt: 42,
  },
  {
    name: "Sep",
    amt: 38,
  },
  {
    name: "Oct",
    amt: 27,
  },
  {
    name: "Nov",
    amt: 51,
  },
  {
    name: "Dec",
    amt: 44,
  },
];

export default function LineCharts() {
  return (
      <LineChart width={500} height={300} data={data} className="">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amt" stroke="#2F4241" strokeWidth={3} />
      </LineChart>
  );
}
