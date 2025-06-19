"use server";
import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Sign = mongoose.models.Sign || mongoose.model("Sign", signupSchema);
export default Sign;
