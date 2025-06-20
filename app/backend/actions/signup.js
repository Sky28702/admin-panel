"use server";
import bcrypt from "bcryptjs";
import User from "@/app/backend/models/userModel";
import dbConnect from "@/app/backend/db/dbConnect";

async function signUp(data) {
  await dbConnect();
  const hashedPassword = await bcrypt.hash(data.password, 10);
  // const isEmailAlreadyExist = await signUp.findOne({ email });
  // if (isEmailAlreadyExist) {
  // throw new Error("User already exists");
  // }
  const user = new User({
    userName: data.userName,
    email: data.email,
    password: hashedPassword,
  });

  await user.save();

  return user;
}
export default signUp;
