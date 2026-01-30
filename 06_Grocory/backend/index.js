import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/connectDb.js";

import userRoutes from "./routes/user.route.js"
dotenv.config();

connectDB();
const allowedOrigins = ['http://localhost:5173']


//Middleware
const app = express()
app.use(cors({
    origin: allowedOrigins, credentials: true
}))
app.use(cookieParser());

app.use('/api/user', userRoutes)

//Api Endpoint
app.get('/', (req, res) => {
    res.send("Hello Alok")
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server Running on port ${PORT}`);

})