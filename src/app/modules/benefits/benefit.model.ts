import { Schema, model } from "mongoose";
import { TBenefit, TImage } from "./benefit.interface";

// Define the Benefit Schema
const BenefitSchema: Schema = new Schema<TBenefit>({
  name: { type: String, required: true },
  benefit: { type: String, required: true },
  img: { type: String, required: true },
});
const ImagesSchema: Schema = new Schema<TImage>({
  img: { type: String, required: true },
});

export const Benefit = model<TBenefit>("Benefit", BenefitSchema);
export const Images = model<TImage>("Image", ImagesSchema);
