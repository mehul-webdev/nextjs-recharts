import mongoose from "mongoose";

export async function connectMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB.");
  } catch (e) {
    console.log("Error while connecting with DB", e);
  }
}
