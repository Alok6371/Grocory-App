import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js";

dotenv.config();
import userRoutes from "./routes/user.route.js"
const app = express()

const allowedOrigins = ["http://localhost:5173/"]

//middleware
app.use(express.json())
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))

connectDB()
app.use(cookieParser());


//Api EndPoint
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);

})