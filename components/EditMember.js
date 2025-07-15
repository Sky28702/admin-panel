"use client";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { redirect, RedirectType } from "next/navigation";
import { updateMember } from "@/app/backend/actions/member";

function EditMember(props) {
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();

  async function submit(data) {
    const formData = new FormData();
    formData.append("memberName", data.memberName);
    formData.append("gender", data.gender);

    const result = await updateMember(props.id, formData);

    console.log(result);
    toast.success("Member updated successfully!");
    redirect("/members", RedirectType.push);
  }
  return (
    <>
      <Toaster />
      <h1 className="text-3xl mb-2 font-medium">Edit Product</h1>
      <form
        className="shadow shadow-neutral-300 w-340 p-8 bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col ">
          <div className="mb-8">
            <label className="mb-4 ">Member Name:</label>
            <input
              type="text"
              placeholder="Members"
              defaultValue={props.previewData.memberName}
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
              defaultValue={props.previewData.gender}
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
          Edit
        </button>
      </form>
    </>
  );
}

export default EditMember;
