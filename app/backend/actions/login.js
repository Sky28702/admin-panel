"use server";
import User from "@/app/backend/models/userModel";
import dbConnect from "@/app/backend/db/dbConnect";

async function logIn(data) {
  await dbConnect();
  const isUserexist = await User.findOne({
    userName: data.userName,
  });
  if (!isUserexist) {
    return {
      success: false,
      message: "Incorrect credintals",
    };
  }
}

export default logIn;
