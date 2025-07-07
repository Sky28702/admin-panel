"use server";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import Product from "@/app/backend/models/product";
import dbConnect from "@/app/backend/db/dbConnect";

async function createFunction(formData) {
  await dbConnect();
  const file = formData.get("image");
  const extension = file.name.split(".").pop();

  const fileName = uuidv4() + "." + extension;
  const uploadPath = path.join(process.cwd(), "public", "uploads", fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(uploadPath, buffer);

  const product = new Product({
    productName: formData.get("productName"),
    quantity: formData.get("quantity"),
    price: formData.get("price"),
    image: fileName,
  });

  await product.save();

  return {
    success: true,

    message: "Product added successfully !",
  };
}
async function allProducts() {
  const allDataProduct = await Product.find({}).sort({ createdAt: -1 });
  return allDataProduct;
}

async function preViewProducts(id) {
  const product = await Product.findById(id);
  return product;
}

async function deleteItem(id) {
  await Product.findByIdAndDelete(id);
  console.log(`Item ${id} deleted`);
  return deleteItem;
}

async function updateProduct(id) {
  const theProduct = await Product.findById(id);
  return JSON.parse(JSON.stringify(theProduct));

  // i am fucked
}

export {
  createFunction,
  allProducts,
  deleteItem,
  preViewProducts,
  updateProduct,
};
