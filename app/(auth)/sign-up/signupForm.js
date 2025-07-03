"use client";
import { signUp } from "@/app/backend/actions/signup";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm();
  async function submit(data) {
    // await console.log(data);
    let result = await signUp(data);
    setError(result.success);

    // console.log(result);
    console.log(result.message);
    setError(!result.success);
    setErrorMessage(result.message);
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center  "
    >
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
        className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-4"
        {...register("password")}
      ></input>
      <p
        className={`text-center mb-4 ${
          error ? "text-red-500" : "text-green-500"
        }`}
      >
        {errorMessage}
      </p>
      <button className="bg-blue-700 text-white text-xl px-6 py-2 rounded-[4px] cursor-pointer hover:bg-blue-600 mb-2">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
