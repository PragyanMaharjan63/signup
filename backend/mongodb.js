import mongoose from "mongoose";
const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(`${mongoURI}/authentication-mern`);
};
export default connectDB;
