import { connectMongoDB } from "@/libs/mongodb";
import Chart from "@/models/chart";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { data } = await request.json(); // Extract data from request body

    if (!data || !Array.isArray(data) || data.length === 0) {
      return new Response(JSON.stringify({ message: "Invalid data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await connectMongoDB(); // Connect to MongoDB
    const insertedData = await Chart.insertMany(data); // Bulk insert

    return new Response(
      JSON.stringify({ message: "Data inserted", insertedData }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  await connectMongoDB();

  const chartData = await Chart.find();
  console.log("the chart data is", chartData);

  return NextResponse.json({ chartData });
}
