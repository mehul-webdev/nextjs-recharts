"use client";
import React from "react";
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

export default function Home() {
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Simple Line Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <SimpleLineChart data={chartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Simple Area Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <SimpleAreaChart data={chartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Simple Bar Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <SimpleBarChart data={chartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stacked Bar Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <StackedBarChart data={chartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pie Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChartComponent data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
}
