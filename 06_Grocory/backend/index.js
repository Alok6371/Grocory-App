import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

dotenv.config();

const allowedOrigins = ['http://localhost:5173']


//Middle Wares
const app = express()
app.use(cors({
    origin: allowedOrigins, credentials: true
}))
app.use(cookieParser());


//Api Endpoint
app.get('/', (req, res) => {
    res.send("Hello Alok")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server Running on port ${PORT}`);

})