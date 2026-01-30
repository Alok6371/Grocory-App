import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/connectDb.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
connectDB();

const app = express();

/* 🔴 BODY PARSERS — MUST BE FIRST */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 🔴 OTHER MIDDLEWARE */
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

/* 🔴 ROUTES AFTER MIDDLEWARE */
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello Alok");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
