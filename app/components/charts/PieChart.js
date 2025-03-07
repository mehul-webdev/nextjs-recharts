import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import Spinner from "../ui/spinner";

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  // Position label in the middle of the slice
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "12px" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = ({ data, loading }) => {
  const total = data.reduce((acc, item) => acc + item.amt, 0);
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
              labelLine={false}
              label={renderCustomizedLabel}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Total Amount: {total}
            </text>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
