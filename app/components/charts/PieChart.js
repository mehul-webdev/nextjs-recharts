import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import Spinner from "../ui/spinner";

const PieChartComponent = ({ data, loading }) => {
  return (
    <div className="w-full h-72 md:h-100">
      <ResponsiveContainer width="100%" height="100%">
        {loading ? (
          <Spinner />
        ) : (
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="amt"
              cx="50%"
              cy="50%"
              innerRadius={120}
              outerRadius={150}
              fill="#82ca9d"
              label
            />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
