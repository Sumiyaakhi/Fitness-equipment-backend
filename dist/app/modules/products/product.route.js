"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const product_validation_1 = __importDefault(require("./product.validation"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/product", (0, validateRequest_1.default)(product_validation_1.default), product_controller_1.ProductControllers.createProduct);
router.get("/products", product_controller_1.ProductControllers.getAllProducts);
router.get("/product/:productId", product_controller_1.ProductControllers.getSingleProduct);
router.put("/product/:productId", product_controller_1.ProductControllers.updateSingleProduct);
router.delete("/product/:productId", product_controller_1.ProductControllers.deleteSingleProduct);
exports.ProductRoutes = router;
