"use server";

import Product from "@/app/backend/models/product";
import dbConnect from "@/app/backend/db/dbConnect";

async function createFunction(data) {
  await dbConnect();

  const product = new Product({
    productName: data.productName,
    quantity: data.quantity,
    price: data.price,
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

export { createFunction, allProducts, deleteItem, preViewProducts };
