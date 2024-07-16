"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./app/modules/products/product.route");
const cors_1 = __importDefault(require("cors"));
const benefit_route_1 = require("./app/modules/benefits/benefit.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", product_route_1.ProductRoutes);
app.use("/api/benefits", benefit_route_1.BenefitRoutes);
app.use((0, cors_1.default)({ origin: "http://localhost:5173/" }));
// Catch all undefined routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
// Error-handling middleware
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "An internal server error occurred",
        error: err.message,
    });
});
exports.default = app;
