import { z } from "zod";

const benefitValidationSchema = z.object({
  name: z.string().min(1, { message: "Benefit name is required." }).optional(),
  benefit: z
    .string()
    .min(1, { message: "Benefit description is required." })
    .optional(),
  img: z.string().min(1, { message: "Image URL is required." }).optional(),
});
export default benefitValidationSchema;
