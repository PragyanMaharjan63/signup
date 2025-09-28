import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

app.post("/auth/signup", (req, res) => {
  console.log("Hello world");
  res.send({ status: "okay" });
});

app.listen(PORT, () => {
  console.log("listening to port", PORT);
});
