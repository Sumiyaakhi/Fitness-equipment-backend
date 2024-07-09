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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
// create product
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payLoad);
    return result;
});
// get all products and search products by name
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
// get single product
const getSingleProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id });
    return result;
});
// update single product
const updateSingleProduct = (_id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield product_model_1.Product.findOneAndUpdate({ _id }, updateData, {
        new: true,
    });
    return updatedProduct;
});
// delete a single product
const deleteSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield product_model_1.Product.findByIdAndDelete(productId).exec();
        return deletedProduct;
    }
    catch (err) {
        throw new Error(`Could not delete product: ${err.message}`);
    }
});
// search products by name
const searchProductsByName = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchResults = yield product_model_1.Product.find({
            name: { $regex: query, $options: "i" },
        }).exec();
        return searchResults;
    }
    catch (err) {
        throw new Error(`An error occurred while searching products: ${err.message}`);
    }
});
exports.ProductServices = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchProductsByName,
};
