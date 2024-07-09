import { z } from "zod";

const productValidationSchema = z.object({
  productName: z
    .string()
    .min(1, { message: "Product name is required." })
    .optional(),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .optional(),
  stockQuantity: z
    .number()
    .int()
    .min(0, { message: "Stock quantity must be a non-negative integer" })
    .optional(),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .optional(),
  image: z.string().min(1, { message: "Image is required" }).optional(),
  category: z.string().min(1, { message: "Category is required" }).optional(),
});

export default productValidationSchema;
