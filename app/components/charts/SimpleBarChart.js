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
  Rectangle,
} from "recharts";
import Spinner from "../ui/spinner";

const SimpleBarChart = ({ data = [], loading }) => {
  return (
    <div className="w-full h-72 md:h-100">
      <ResponsiveContainer width="100%" height="100%">
        {loading ? (
          <Spinner />
        ) : (
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => {
                const d = new Date(date);
                return d.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "2-digit",
                });
              }}
              tick={{ fontSize: "12px" }}
            />
            <YAxis tick={{ fontSize: "12px" }} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
