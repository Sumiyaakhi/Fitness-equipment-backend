"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
// create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const { error } = product_validation_1.default.validate(productData);
    // Check for validation errors
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            error: error.details,
        });
    }
    // Proceed to create the product if validation passes
    try {
        const result = yield product_service_1.ProductServices.createProduct(productData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create product",
            error: err.message,
        });
    }
});
// get all products and search products by name
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        let result;
        if (searchTerm && typeof searchTerm === "string") {
            result = yield product_service_1.ProductServices.searchProductsByName(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        }
        else {
            result = yield product_service_1.ProductServices.getAllProduct();
            res.status(200).json({
                success: true,
                message: "Products are fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching products.",
            error: err.message,
        });
    }
});
// get single product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product is retrieved successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not match product!",
            error: err,
        });
    }
});
//update single product
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const { error } = product_validation_1.default.validate(updateData);
        // Check for validation errors
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                error: error.details,
            });
        }
        const updatedProduct = yield product_service_1.ProductServices.updateSingleProduct(productId, updateData);
        if (updatedProduct) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: updatedProduct,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not update product!",
            error: err.message,
        });
    }
});
// delete a single product
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const deletedProduct = yield product_service_1.ProductServices.deleteSingleProduct(productId);
        if (deletedProduct) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not delete product!",
            error: err.message,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
