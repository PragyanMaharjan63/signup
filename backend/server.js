import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/signup", (req, res) => {
  console.log("Hello world");
  res.send({ status: "okay" });
});

app.listen(PORT, () => {
  console.log("listening to port", PORT);
});
