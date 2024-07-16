"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = exports.Benefit = void 0;
const mongoose_1 = require("mongoose");
// Define the Benefit Schema
const BenefitSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    benefit: { type: String, required: true },
    img: { type: String, required: true },
});
const ImagesSchema = new mongoose_1.Schema({
    img: { type: String, required: true },
});
exports.Benefit = (0, mongoose_1.model)("Benefit", BenefitSchema);
exports.Images = (0, mongoose_1.model)("Image", ImagesSchema);
