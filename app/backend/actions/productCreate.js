"use server";

import Product from "@/app/backend/models/product";
import dbConnect from "@/app/backend/db/dbConnect";

async function product(data) {
  await dbConnect();

  const product = new Product({
    productName: data.productName,
    quantity: data.quantity,
    price: data.price,
    image: data.image,
  });

  await product.save();

  return {
    success: true,

    message: "Product added successfully !",
  };
}
export default product;
