import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./mongodb.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log("listening to port", port);
});
