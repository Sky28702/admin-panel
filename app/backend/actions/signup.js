"use server";
import Sign from "@/app/backend/models/signup";
import dbConnect from "@/app/backend/db/dbConnect";

async function formSign(data) {
  await dbConnect();
  const sign = new Sign({
    userName: data.userName,
    email: data.email,
    password: data.password,
  });
  await sign.save();

  console.log(sign);
}
export default formSign;
