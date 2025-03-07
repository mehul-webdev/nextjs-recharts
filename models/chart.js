import mongoose, { Schema } from "mongoose";

const chartSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true }, // Ensure unique dates
  uv: { type: Number, required: true },
  pv: { type: Number, required: true },
  amt: { type: Number, required: true },
});

const Chart = mongoose.models.Chart || mongoose.model("Chart", chartSchema);

export default Chart;
