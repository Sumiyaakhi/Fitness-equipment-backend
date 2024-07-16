"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const benefit_validation_1 = __importDefault(require("./benefit.validation"));
const benefit_controller_1 = require("./benefit.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(benefit_validation_1.default), benefit_controller_1.BenefitControllers.createBenefit);
router.post("/images", benefit_controller_1.BenefitControllers.createImages);
router.get("/images", benefit_controller_1.BenefitControllers.getAllImages);
router.get("/", benefit_controller_1.BenefitControllers.getAllBenefits);
router.get("/:benefitId", benefit_controller_1.BenefitControllers.getSingleBenefit);
router.put("/:benefitId", benefit_controller_1.BenefitControllers.updateSingleBenefit);
router.delete("/:benefitId", benefit_controller_1.BenefitControllers.deleteSingleBenefit);
exports.BenefitRoutes = router;
