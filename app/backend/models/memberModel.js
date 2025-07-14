"use server";
import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    memberName: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export { Member };
