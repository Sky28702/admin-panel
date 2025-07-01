"use client";
import product from "@/app/backend/actions/productCreate";
import { useState } from "react";
import { useForm } from "react-hook-form";

const createProduct = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setValue("image", file); // Update form value with the file
  };

  async function submit(data) {
    // await console.log(data);
    let result = await product(data);
    console.log(data);
    console.log(result);
  }

  return (
    <>
      <h1 className=" text-2xl mb-2 mt-10 font-medium">Add Products</h1>
      <form
        className=" [&_input]:mb-8 shadow shadow-neutral-300 w-340 p-8 bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col ">
          <span className="mb-4 ">Product Name:</span>
          <input
            type="text"
            placeholder="Product"
            className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4"
            {...register("productName")}
          ></input>
          <span className="mb-4 ">Quantity:</span>
          <input
            type="number"
            placeholder="Quantity"
            className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4"
            {...register("quantity")}
          ></input>
          <span className="mb-4 ">Price:</span>
          <input
            type="number"
            placeholder="$ Price"
            className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4"
            {...register("price")}
          ></input>
          <span className="mb-4 ">Image:</span>
          <input
            type="file"
            className="shadow shadow-slate-300 border border-slate-200 p-2 w-320 cursor-pointer "
            onChange={handleImageChange}
          ></input>
        </div>

        <button className="bg-blue-600 text-white py-2 px-4 rounded-[4px]">
          Create
        </button>
      </form>
    </>
  );
};

export default createProduct;
