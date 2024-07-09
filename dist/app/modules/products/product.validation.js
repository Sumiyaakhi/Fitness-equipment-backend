"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidationSchema = zod_1.z.object({
    productName: zod_1.z.string().nonempty({ message: "Product name is required" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    stockQuantity: zod_1.z
        .number()
        .int()
        .min(0, { message: "Stock quantity must be a non-negative integer" }),
    description: zod_1.z.string().nonempty({ message: "Description is required" }),
    images: zod_1.z
        .array(zod_1.z.string().url({ message: "Each image must be a valid URL" }))
        .nonempty({ message: "At least one image is required" }),
    category: zod_1.z.string().nonempty({ message: "Category is required" }),
});
exports.default = productValidationSchema;
