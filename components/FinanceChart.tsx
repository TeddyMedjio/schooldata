"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 5000,
    expense: 5477,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 8655,
  },
  {
    name: "Mar",
    income: 2098,
    expense: 2394,
  },
  {
    name: "Apr",
    income: 2690,
    expense: 9235,
  },
  {
    name: "May",
    income: 3000,
    expense: 2475,
  },
  {
    name: "Jun",
    income: 1000,
    expense: 2859,
  },
  {
    name: "Jul",
    income: 9000,
    expense: 7245,
  },
  {
    name: "Aut",
    income: 3524,
    expense: 2756,
  },
  {
    name: "Sep",
    income: 1764,
    expense: 2957,
  },
  {
    name: "Oct",
    income: 8345,
    expense: 4527,
  },
  {
    name: "Nov",
    income: 4826,
    expense: 2859,
  },
  {
    name: "Dec",
    income: 2976,
    expense: 9245,
  },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#FAE27C"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#C3EBFA"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
