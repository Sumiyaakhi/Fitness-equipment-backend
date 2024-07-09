"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty(),
    description: zod_1.z.string().nonempty(),
    price: zod_1.z.number().positive(),
    category: zod_1.z.string().nonempty(),
    tags: zod_1.z.array(zod_1.z.string()).nonempty(),
    variants: zod_1.z
        .array(zod_1.z.object({
        type: zod_1.z.string().nonempty(),
        value: zod_1.z.string().nonempty(),
    }))
        .nonempty(),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number().int().min(0),
        inStock: zod_1.z.boolean(),
    }),
});
exports.default = productValidationSchema;
