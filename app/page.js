"use client";
import React, { useCallback, useEffect, useState } from "react";
import SimpleLineChart from "./components/charts/SimpleLineChart";
import SimpleAreaChart from "./components/charts/SimpleAreaChart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import SimpleBarChart from "./components/charts/SimpleBarChart";
import StackedBarChart from "./components/charts/StackedBarChart";
import PieChartComponent from "./components/charts/PieChart";

export default function Home() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setLoading((prev) => !prev);
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/charts`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setChartData(result.chartData);
    } catch (e) {
      console.log("Error while fetching data", e);
    } finally {
      setLoading((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Simple Line Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <SimpleLineChart data={chartData} loading={loading} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Simple Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <SimpleAreaChart data={chartData} loading={loading} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Simple Bar Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <SimpleBarChart data={chartData} loading={loading} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stacked Bar Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <StackedBarChart data={chartData} loading={loading} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pie Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChartComponent data={chartData} loading={loading} />
        </CardContent>
      </Card>
    </div>
  );
}

// const insertData = useCallback(async () => {
//   const apiUrl = `http://localhost:3000/api/charts`;
//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           { date: "2025-03-08", uv: 3245, pv: 1234, amt: 2890 },
//           { date: "2025-03-09", uv: 4123, pv: 2345, amt: 3678 },
//           { date: "2025-03-10", uv: 2987, pv: 3456, amt: 4567 },
//           { date: "2025-03-11", uv: 4120, pv: 1890, amt: 3790 },
//           { date: "2025-03-12", uv: 2567, pv: 4123, amt: 3123 },
//           { date: "2025-03-13", uv: 3987, pv: 2999, amt: 4312 },
//           { date: "2025-03-14", uv: 4356, pv: 1789, amt: 2678 },
//           { date: "2025-03-15", uv: 2890, pv: 3450, amt: 3901 },
//           { date: "2025-03-16", uv: 3678, pv: 2210, amt: 4000 },
//           { date: "2025-03-17", uv: 4123, pv: 3421, amt: 3456 },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log("Data inserted successfully:", result);
//   } catch (e) {
//     console.error("Error inserting data:", error);
//   }
// });

// useEffect(() => {
//   insertData();
// }, []);
