"use server";
import bcrypt from "bcryptjs";
import User from "@/app/backend/models/userModel";
import dbConnect from "@/app/backend/db/dbConnect";

async function logIn(data) {
  await dbConnect();
  const isUserExist = await User.findOne({
    userName: data.userName,
  });

  if (!isUserExist) {
    return {
      success: false,
      message: "Incorrect credintals",
    };
  }

  const isPasswordMatched = await bcrypt.compare(
    data.password,
    isUserExist.password
  );

  if (isPasswordMatched) {
    return {
      success: true,
      message: "Login successfull !",
    };
  } else {
    return {
      success: false,
      message: "Incorrect credintals",
    };
  }
}

export default logIn;
