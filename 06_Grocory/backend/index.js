import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/connectDb.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
connectDB();

const app = express();

/* 🔥 REQUIRED MIDDLEWARE */
app.use(express.json()); // <-- THIS FIXES req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

/* ROUTES */
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
