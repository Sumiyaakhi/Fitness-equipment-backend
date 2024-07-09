import express from "express";
import validateRequest from "../middlewares/validateRequest";
import productValidationSchema from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(productValidationSchema),
  ProductControllers.createProduct
);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:productId", ProductControllers.updateSingleProduct);
router.delete("/:productId", ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;
