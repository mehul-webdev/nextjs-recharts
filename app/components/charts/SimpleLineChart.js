import React from "react";
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
import Spinner from "../ui/spinner";

const SimpleLineChart = ({ data, loading }) => {
  return (
    <div className="w-full h-72 md:h-100">
      <ResponsiveContainer width="100%" height="100%">
        {loading ? (
          <Spinner />
        ) : (
          <LineChart width={500} height={300} data={data}>
            {/* CartesianGrid is used to show the grid lines in graph */}
            <CartesianGrid strokeDasharray="3 3" />

            {/* Below XAxis and YAxis is used to show the x-axis and y-axis labels */}
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

            {/* Below lines are show to data in graph */}
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 1 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
