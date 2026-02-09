// db/db.js
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ems";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI); // ✅ no extra options needed in Mongoose v7+
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit if DB connection fails
  }
};

export default connectToDatabase;
