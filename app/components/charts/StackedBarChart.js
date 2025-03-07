import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Spinner from "../ui/spinner";

const StackedBarChart = ({ data = [], loading }) => {
  return (
    <div className="w-full h-72 md:h-100">
      <ResponsiveContainer width="100%" height="100%">
        {loading ? (
          <Spinner />
        ) : (
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
