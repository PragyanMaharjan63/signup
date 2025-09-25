import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  profilePic: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export const User = mongoose.model("User", userSchema);
