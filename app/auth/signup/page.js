"use client";
import formSign from "@/app/backend/actions/signup";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Signup = () => {
  const { register, handleSubmit } = useForm();
  async function submit(data) {
    // await console.log(data);
    let sik = await formSign(data);
    console.log(sik);
  }

  return (
    <>
      <section>
        <form className="pl-76" onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col items-center border border-none rounded-[4px] shadow shadow-slate-400 mt-76 text-center max-w-100 py-6">
            <h1 className=" mb-10 font-bold text-[36px] text-blue-700 ">
              <u>Sign up</u>
            </h1>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-8"
              {...register("userName")}
            ></input>

            <input
              type="email"
              name="email"
              placeholder="example@mailcom"
              className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-8"
              {...register("email")}
            ></input>

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-8"
              {...register("password")}
            ></input>
            <button className="bg-blue-700 text-white text-xl px-6 py-2 rounded-[4px] cursor-pointer hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
