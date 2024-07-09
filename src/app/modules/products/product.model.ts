import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

// Define the Product Schema
const ProductSchema: Schema = new Schema<TProduct>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

export const Product = model<TProduct>("Product", ProductSchema);
