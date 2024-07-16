"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const benefitValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Benefit name is required." }).optional(),
    benefit: zod_1.z
        .string()
        .min(1, { message: "Benefit description is required." })
        .optional(),
    img: zod_1.z.string().min(1, { message: "Image URL is required." }).optional(),
});
exports.default = benefitValidationSchema;
