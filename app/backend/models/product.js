"use server";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, minlength: 3 },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
