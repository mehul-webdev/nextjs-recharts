import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Spinner from "../ui/spinner";

const SimpleAreaChart = ({ data = [], loading }) => {
  return (
    <div className="w-full h-72 md:h-100">
      <ResponsiveContainer width="100%" height="100%">
        {loading ? (
          <Spinner />
        ) : (
          <AreaChart width={500} height={300} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a8e063" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#a8e063" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              fill="url(#colorPv)"
            />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;
