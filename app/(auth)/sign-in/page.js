"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import logIn from "@/app/backend/actions/login";

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm();
  async function submit(data) {
    // await console.log(data);
    let result = await logIn(data);
    setError(result.success);

    // console.log(result);
    console.log(result.message);
    setError(!result.success);
    setErrorMessage(result.message);
  }
  return (
    <section>
      <form className="pl-76" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col items-center border border-none rounded-[4px] shadow shadow-slate-400 mt-76 text-center max-w-100 py-6">
          <h1 className=" mb-10 font-bold text-[36px] text-blue-700 ">
            <u>Login</u>
          </h1>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-8"
            {...register("userName")}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="pl-2 border border-slate-300 rounded-[4px] h-10 w-70 mb-8"
            {...register("password")}
          ></input>
          <button className="bg-blue-700 text-white text-xl px-6 py-2 rounded-[4px] cursor-pointer hover:bg-blue-600 mb-4">
            Log In
          </button>
          <p
            className={`text-center mb-4 ${
              error ? "text-red-500" : "text-green-500"
            }`}
          >
            {errorMessage}
          </p>
          <p className="text-center">
            Don't have an account?
            <Link href="/sign-up">
              <span className="text-blue-600">
                <u> Register</u>
              </span>
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
