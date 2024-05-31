import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();


app.use(cookieParser());


const PORT = process.env.PORT || 5000;


app.use(express.json()); // to parse req.body for my own ease like protocol between client and server

app.use(express.urlencoded({ extended: true }));  //to parse data(urlencoded)

app.use("/api/auth", authRoutes);





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})