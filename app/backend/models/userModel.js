"use server";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
