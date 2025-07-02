"use server";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String },
    quantity: { type: Number },
    price: { type: Number },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
