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
import { chartData } from "./components/charts/data";
import SimpleBarChart from "./components/charts/SimpleBarChart";
import StackedBarChart from "./components/charts/StackedBarChart";
import PieChartComponent from "./components/charts/PieChart";
import Spinner from "./components/ui/spinner";

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

      console.log("the result is", result);
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
//       body: JSON.stringify({ data: chartData }),
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
