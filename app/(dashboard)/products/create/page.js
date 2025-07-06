"use client";
import { v4 as uuidv4 } from "uuid";
import { createFunction } from "@/app/backend/actions/productCreate";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const createProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setValue("image", file); // Update form value with the file
  };

  async function submit(data) {
    console.log(data);
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
    formData.append("image", data.image);

    let result = await createFunction(formData);
    console.log(data);
    console.log(result);
    toast.success("Product created successfully!");
    reset();
  }

  return (
    <>
      <Toaster />
      <h1 className=" text-2xl mb-2 mt-10 font-medium">Add Products</h1>
      <form
        className="  shadow shadow-neutral-300 w-340 p-8 bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col ">
          <div className="mb-8">
            <label className="mb-4 ">Product Name:</label>
            <input
              type="text"
              placeholder="Product"
              className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4 "
              {...register("productName", {
                required: "Product Name is required",
                minLength: {
                  value: 3,
                  message: " Product Name must be at least 3 characters",
                },
              })}
            >
              {/* // toast.error("This didn't work.") */}
            </input>

            {errors.productName && (
              <p className="text-red-500 mt-2">{errors.productName.message}</p>
            )}
          </div>

          <div>
            <label className="mb-4 ">Quantity:</label>
            <input
              type="number"
              placeholder="Quantity"
              className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4 mb-8"
              {...register("quantity")}
            ></input>
          </div>

          <div>
            <label className="mb-4 ">Price:</label>
            <input
              type="number"
              placeholder="$ Price"
              className="w-320 h-10 shadow shadow-slate-300 border border-slate-200 p-4 mb-8"
              {...register("price")}
            ></input>
          </div>

          <div className="shadow shadow-slate-300 border border-slate-200 p-2 w-100 cursor-pointer mb-8 h-auto">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=612x612&w=0&k=20&c=e-OBJ2jbB-W_vfEwNCip4PW4DqhHGXYMtC3K_mzOac0="
              }
              alt="Preview"
              className="w-full h-auto object-contain max-h-60"
            />
          </div>

          <label className="mb-4 ">Image:</label>
          <input
            type="file"
            className="shadow shadow-slate-300 border border-slate-200 p-2 w-320 cursor-pointer mb-8 "
            onChange={handleImageChange}
          ></input>
        </div>

        <button className="bg-blue-600 text-white py-2 px-4 rounded-[4px] hover:cursor-pointer">
          Create
        </button>
      </form>
    </>
  );
};

export default createProduct;
