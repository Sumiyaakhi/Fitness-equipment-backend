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
exports.BenefitControllers = void 0;
const benefit_service_1 = require("./benefit.service");
// create Benefit
const createBenefit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const benefitData = req.body;
    console.log(benefitData);
    // Proceed to create the Benefit if validation passes
    try {
        const result = yield benefit_service_1.BenefitServices.createBenefit(benefitData);
        console.log(result);
        res.json({
            success: true,
            message: "Benefit data created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create benefit",
            error: err.message,
        });
    }
});
const createImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    // Proceed to create the Benefit if validation passes
    try {
        const result = yield benefit_service_1.BenefitServices.createImages(data);
        console.log(result);
        res.json({
            success: true,
            message: "data created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create data",
            error: err.message,
        });
    }
});
// get all Benefits and search Benefits by name
const getAllBenefits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        let result;
        if (searchTerm && typeof searchTerm === "string") {
            result = yield benefit_service_1.BenefitServices.searchBenefitsByName(searchTerm);
            res.status(200).json({
                success: true,
                message: `Benefits matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        }
        else {
            result = yield benefit_service_1.BenefitServices.getAllBenefit();
            res.status(200).json({
                success: true,
                message: "Benefits are fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching Benefits.",
            error: err.message,
        });
    }
});
const getAllImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        let result;
        if (searchTerm && typeof searchTerm === "string") {
            result = yield benefit_service_1.BenefitServices.searchBenefitsByName(searchTerm);
            res.status(200).json({
                success: true,
                message: `Benefits matching search term '${searchTerm}' fetched successfully!`,
                data: result,
            });
        }
        else {
            result = yield benefit_service_1.BenefitServices.getAllImages();
            res.status(200).json({
                success: true,
                message: "Benefits are fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching Benefits.",
            error: err.message,
        });
    }
});
// get single Benefit
const getSingleBenefit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { benefitId } = req.params;
        const result = yield benefit_service_1.BenefitServices.getSingleBenefit(benefitId);
        res.status(200).json({
            success: true,
            message: "Benefit is retrieved successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not match Benefit!",
            error: err,
        });
    }
});
//update single Benefit
const updateSingleBenefit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { benefitId } = req.params;
        const updateData = req.body;
        // const { error } = BenefitValidationSchema.validate(updateData);
        // // Check for validation errors
        // if (error) {
        //   return res.status(400).json({
        //     success: false,
        //     message: "Validation failed",
        //     error: error.details,
        //   });
        // }
        const updatedBenefit = yield benefit_service_1.BenefitServices.updateSingleBenefit(benefitId, updateData);
        if (updatedBenefit) {
            res.status(200).json({
                success: true,
                message: "Benefit updated successfully!",
                data: updatedBenefit,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Benefit not found!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not update Benefit!",
            error: err.message,
        });
    }
});
// delete a single Benefit
const deleteSingleBenefit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { BenefitId } = req.params;
        const deletedBenefit = yield benefit_service_1.BenefitServices.deleteSingleBenefit(BenefitId);
        if (deletedBenefit) {
            res.status(200).json({
                success: true,
                message: "Benefit deleted successfully!",
                data: null,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Benefit not found!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not delete Benefit!",
            error: err.message,
        });
    }
});
exports.BenefitControllers = {
    createBenefit,
    createImages,
    getAllBenefits,
    getAllImages,
    getSingleBenefit,
    updateSingleBenefit,
    deleteSingleBenefit,
};
