"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createMember } from "@/app/backend/actions/member";

function MembersCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    const res = await createMember(data);
    console.log(res);
  }

  return (
    <>
      <section>
        <h1 className="text-3xl mb-2 font-medium">Create Members</h1>

        <form
          className="  shadow shadow-neutral-300 w-340 p-8 bg-white"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-col ">
            <div className="mb-8">
              <label className="mb-4 ">Member Name:</label>
              <input
                type="text"
                placeholder="Members"
                className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4 "
                {...register("memberName", {
                  required: "Member Name is required",
                  minLength: {
                    value: 3,
                    message: " Member Name must be at least 3 characters",
                  },
                })}
              />
              {/* // toast.error("This didn't work.") */}

              {errors.memberName && (
                <p className="text-red-500 mt-2">{errors.memberName.message}</p>
              )}
            </div>

            <div className="mb-8">
              <span>Select Gender:</span>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-322 h-10 shadow shadow-slate-300 border border-slate-200 "
                defaultValue=""
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
                <option value="others">Momo Eater</option>
              </select>

              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
          </div>

          <button className="bg-blue-600 text-white py-2 px-4 rounded-[4px] hover:cursor-pointer">
            Create
          </button>
        </form>
      </section>
    </>
  );
}
export default MembersCreate;
