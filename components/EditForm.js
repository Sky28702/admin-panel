"use client";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { updateProduct } from "@/app/backend/actions/productCreate";
import { useState } from "react";
import { redirect, RedirectType } from "next/navigation";

function EditForm(props) {
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
    const extension = file.name.split(".").pop().toLowerCase();
    const allowedExtensions = ["jpg", "jpeg", "png"];

    if (allowedExtensions.includes(extension)) {
      setSelectedImage(file);
      setValue("image", file);
    } else {
      toast.error("Only JPG, JPEG, or PNG images are allowed.");
    }
  };

  async function submit(data) {
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
    formData.append("image", data.image);
    const result = await updateProduct(props.id, formData);

    console.log(result);
    toast.success("Product updated successfully!");
    redirect("/products", RedirectType.push);
  }

  return (
    <>
      <Toaster />
      <h1 className="text-3xl mb-2 font-medium">Edit Product</h1>
      <form
        className="shadow shadow-neutral-300 w-340 p-8 bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col">
          <div className="mb-8">
            <label className="mb-4">Product Name:</label>
            <input
              type="text"
              placeholder="Product"
              className="w-200 h-10 shadow shadow-slate-300 border border-slate-200 p-4 ml-10"
              defaultValue={props.previewData.productName}
              {...register("productName")}
            />
          </div>

          <div>
            <label className="mb-4">Quantity:</label>
            <input
              type="number"
              placeholder="Quantity"
              className="w-200 h-10 shadow shadow-slate-300 border border-slate-200 p-4 mb-8 ml-20"
              defaultValue={props.previewData.quantity}
              {...register("quantity")}
            />
          </div>

          <div className="flex flex-row">
            <div className="flex">
              Image:
              <div className="shadow shadow-slate-300 border border-slate-200 p-2 w-100 cursor-pointer mb-8 h-auto ml-26 flex ">
                <img
                  src={"/uploads/" + props.previewData.image}
                  className="w-full h-auto object-contain max-h-60 "
                  alt="product image"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-4">Price:</label>
            <input
              type="number"
              placeholder="$ Price"
              className="w-200 h-10 shadow shadow-slate-300 border border-slate-200 p-4 mb-8 ml-26"
              defaultValue={props.previewData.price}
              {...register("price")}
            />
          </div>

          <div>
            <label className="mb-4">Image:</label>
            <input
              type="file"
              className="shadow shadow-slate-300 border border-slate-200 p-2 w-200 cursor-pointer mb-2 ml-24"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <button className="bg-blue-600 text-white py-2 px-4 rounded-[4px] hover:cursor-pointer">
          Edit
        </button>
      </form>
    </>
  );
}

export default EditForm;
