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
exports.BenefitServices = void 0;
const benefit_model_1 = require("./benefit.model");
// create Benefit
const createBenefit = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield benefit_model_1.Benefit.create(payLoad);
    return result;
});
const createImages = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield benefit_model_1.Images.create(payLoad);
    return result;
});
// get all Benefits and search Benefits by name
const getAllBenefit = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield benefit_model_1.Benefit.find();
    return result;
});
const getAllImages = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield benefit_model_1.Images.find();
    return result;
});
// get single Benefit
const getSingleBenefit = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield benefit_model_1.Benefit.findOne({ _id });
    return result;
});
// update single Benefit
const updateSingleBenefit = (_id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBenefit = yield benefit_model_1.Benefit.findOneAndUpdate({ _id }, updateData, {
        new: true,
    });
    return updatedBenefit;
});
// delete a single Benefit
const deleteSingleBenefit = (BenefitId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBenefit = yield benefit_model_1.Benefit.findByIdAndDelete(BenefitId).exec();
        return deletedBenefit;
    }
    catch (err) {
        throw new Error(`Could not delete Benefit: ${err.message}`);
    }
});
// search Benefits by name
const searchBenefitsByName = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchResults = yield benefit_model_1.Benefit.find({
            name: { $regex: query, $options: "i" },
        }).exec();
        return searchResults;
    }
    catch (err) {
        throw new Error(`An error occurred while searching Benefits: ${err.message}`);
    }
});
exports.BenefitServices = {
    createBenefit,
    createImages,
    getAllBenefit,
    getAllImages,
    getSingleBenefit,
    updateSingleBenefit,
    deleteSingleBenefit,
    searchBenefitsByName,
};
