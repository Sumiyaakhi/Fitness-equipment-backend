"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidationSchema = zod_1.z.object({
    productName: zod_1.z
        .string()
        .min(1, { message: "Product name is required." })
        .optional(),
    price: zod_1.z
        .number()
        .positive({ message: "Price must be a positive number" })
        .optional(),
    stockQuantity: zod_1.z
        .number()
        .int()
        .min(0, { message: "Stock quantity must be a non-negative integer" })
        .optional(),
    description: zod_1.z
        .string()
        .min(1, { message: "Description is required" })
        .optional(),
    image: zod_1.z.string().min(1, { message: "Image is required" }).optional(),
    category: zod_1.z.string().min(1, { message: "Category is required" }).optional(),
});
exports.default = productValidationSchema;
