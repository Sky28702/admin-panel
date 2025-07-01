"use server";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  image: { type: String },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
