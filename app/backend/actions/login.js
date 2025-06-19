"use server";
import Login from "@/app/backend/models/login";
import dbConnect from "@/app/backend/db/dbConnect";

async function formLogin(data) {
  await dbConnect();
  const login = new Login({
    userName: data.userName,
    password: data.password,
  });
  await login.save();

  console.log(login);
}
export default formLogin;
