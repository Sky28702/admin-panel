"use server";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const registerUser =
  mongoose.models.registerUser || mongoose.model("registerUser", userSchema);
export default registerUser;
