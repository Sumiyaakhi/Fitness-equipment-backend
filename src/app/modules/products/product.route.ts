import express from "express";
import validateRequest from "../middlewares/validateRequest";
import productValidationSchema from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post(
  "/product",
  validateRequest(productValidationSchema),
  ProductControllers.createProduct
);
router.get("/products", ProductControllers.getAllProducts);
router.get("/product/:productId", ProductControllers.getSingleProduct);
router.put("/product/:productId", ProductControllers.updateSingleProduct);
router.delete("/product/:productId", ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;
